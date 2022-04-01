// Variables
const firstCity = 'C0';
const restCities = ["C1", "C2", "C3"];
const cities = [firstCity, ...restCities];
const permutaciones = permutations(restCities);
const caminos = [];
let costoFinal = 0;

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
    let citiesLength = cities.length;
    for (let i = 0; i < 4; i++) {
        caminos.push(
            {
                ciudadDesde: `C${i}`,
                recorrido: []
            }
        );

        for (let j = 0; j < 4; j++) {
            caminos[i].recorrido.push({
                ciudadHasta:  `C${j}`,
                costo: costoMatriz[i][j],
            })
        }
    }

    console.log(caminos);
}

function recorrerCiudades(rutas){
    rutas.forEach( (ruta) => {
        for(let i = 0 ; i < ruta.length ; i++){
            let nextIndex = i + 1;
            if(nextIndex >= ruta.length) continue;
            let actualCity = ruta[i], 
                nextCity =  ruta[nextIndex];

            //console.log(actualCity + " -> " + nextCity);
            getCosto(actualCity, nextCity);
        }

        console.log(costoFinal);
        costoFinal = 0;
        console.log(' ---- ');

    });
}

function getCosto(actualCity, nextCity){
    caminos.forEach(camino => {
        let ciudadActual = camino.ciudadDesde;
        let recorrido = camino.recorrido;

        if(ciudadActual === actualCity){
            recorrido.forEach(siguienteCamino => {
                let ciudadSiguiente = siguienteCamino.ciudadHasta;
                if(ciudadSiguiente === nextCity){
                    let costo = siguienteCamino.costo;
                    costoFinal += costo;
                    console.log(ciudadActual + " -> " + ciudadSiguiente + " Costo: " + costo);
                }
            });
        }
    });
};