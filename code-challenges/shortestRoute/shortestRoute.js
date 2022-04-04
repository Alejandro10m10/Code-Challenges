// Variables
const firstCity = 'C0';
const restCities = ["C1", "C2", "C3"];
const cities = [firstCity, ...restCities];
const permutaciones = permutations(restCities);
const caminos = [];

const costoMatriz = [
    [0, 3, 4, 2],
    [3, 0, 1, 5],
    [4, 1, 0, 2],
    [2, 5, 2, 0],
];

const gasolinaMatriz = [
    [0, 80, 140, 110],
    [120, 0, 190, 150],
    [170, 180, 0, 137],
    [160, 160, 157, 0],
]

init();

function init(){
    createObjects(cities);
    recorrerCiudades(permutaciones);
}

// Funciones

function permutations(array){
    if(array.length <= 2){
        return (array.length === 2) ? [array, [array[1], array[0]]] : array ;
    }
    return array.reduce( (acumulador, element, index ) =>
        acumulador.concat(
            permutations([...array.slice(0, index),...array.slice(index + 1)]).map(val => [firstCity, element, ...val, firstCity])
        ),
        []
    );
}

function createObjects(cities){
    cities.forEach( (city, i) => {
        caminos.push({
            ciudadDesde: `${city}`,
            recorrido: []
        });

        for (let j = 0; j < costoMatriz.length; j++) {
            caminos[i].recorrido.push({
                ciudadHasta:  `C${j}`,
                costo: costoMatriz[i][j]
            })
        }
    });
    //console.log(caminos);
}

function recorrerCiudades(rutas){
    
    rutas.forEach( (ruta, i) => {
        let costoDistancia = 0, 
            rutaLenght = ruta.length;

        for(let i = 0 ; i < rutaLenght ; i++){
            let nextIndex = i + 1;
            if(nextIndex >= rutaLenght) continue;
            let actualCity = ruta[i], 
                nextCity =  ruta[nextIndex];
            
            costoDistancia += getCosto(actualCity, nextCity);
        }
        console.log(costoDistancia);
    });
    
}

function getCosto(actualCity, nextCity){
    let costo = 0;
    caminos.forEach( camino => {
        let ciudadActual = camino.ciudadDesde;
        if(ciudadActual === actualCity){
            let recorrido = camino.recorrido;
            recorrido.forEach(siguienteCamino => {
                let ciudadSiguiente = siguienteCamino.ciudadHasta;
                if(ciudadSiguiente === nextCity){
                    costo = siguienteCamino.costo;
                    console.log(ciudadActual + " -> " + ciudadSiguiente + " Costo: " + costo);
                    return costo;
                }
            });
        }
    });
    return costo;
};
