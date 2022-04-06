// Variables
let dataExcelDistancia,
    dataExcelGasolina,
    cities = [],
    firstCity,
    restCities,
    permutaciones;

const caminos = [];
let paths = [];

const matrizCostoDistancia = [], 
      matrizCostoGasolina = [];

// Eventos 

document.addEventListener('DOMContentLoaded', () => {
    getExcelData();
});

function getExcelData(){
    excelToJS('CIUDADES_distancia', dataExcelDistancia, true);
    excelToJS('CIUDADES_gasolina', dataExcelGasolina, false);
}

function init(){
    objectToArray(dataExcelDistancia, matrizCostoDistancia);
    objectToArray(dataExcelGasolina, matrizCostoGasolina);
    getCities();
    createObjects(cities);

    console.log('hola');
    /* Obtener ruta más corta */
    console.time('tiempo');
    getPermutaciones();
    recorrerCiudades(permutaciones);
    getShortestRoute();
    console.timeEnd('tiempo');
    
    /*
    getShortestRoute();
    console.log(costoMatriz);
    */
}

// Funciones

function getPermutaciones(){
    permutaciones = permutations(restCities);
    for (let i = 0; i < permutaciones.length; i++) {
        permutaciones[i] = [firstCity, ...permutaciones[i], firstCity];
    }
    //console.log(permutaciones);
}

function objectToArray(objects, matriz){
    objects.forEach( object => { 
        matriz.push(Object.values(object));
    });
}

function getCities(){
    for (let i = 0; i < 1; i++) { cities = Object.keys(dataExcelDistancia[0]);}
    firstCity = cities[0];
    restCities = [...cities];
    restCities.shift();
}

function permutations(array){
    if(array.length <= 2){
        return (array.length === 2) ? [array, [array[1], array[0]]] : array ;
    }
    return array.reduce( (acumulador, element, index ) =>
        acumulador.concat(
            permutations([...array.slice(0, index),...array.slice(index + 1)]).map(val => [element, ...val])
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

        for (let j = 0; j < matrizCostoDistancia.length; j++) {
            caminos[i].recorrido.push({
                ciudadHasta:  `C${j+1}`,
                costoDistancia: matrizCostoDistancia[i][j],
                costoGasolina: matrizCostoGasolina[i][j]
            })
        }
    });
    //console.log(caminos);
}

function recorrerCiudades(rutas){
    rutas.forEach( ruta => {

        let finalObject = {
            'ruta': `${ruta}`,
            'costoDistancia': 0,
            'costoGasolina': 0,
        };

        let costo = [], 
            costoDistancia = 0, 
            costoGasolina = 0,
            rutaLenght = ruta.length;

        for(let i = 0 ; i < 4 ; i++){
            let nextIndex = i + 1;
            if(nextIndex >= rutaLenght) continue;
            let actualCity = ruta[i], 
                nextCity =  ruta[nextIndex];

            //console.log(actualCity + " -> " + nextCity);
            
            costo = getCosto(actualCity, nextCity);
            costoDistancia += costo[0];
            costoGasolina += costo[1];
        }

        finalObject.costoDistancia = costoDistancia;
        finalObject.costoGasolina = costoGasolina;

        paths.push(finalObject);
    });

    //console.log(paths);

}

function getCosto(actualCity, nextCity){
    let costoDistancia = 0;
    let costoGasolina = 0;
    caminos.forEach( camino => {
        let ciudadActual = camino.ciudadDesde;
        if(ciudadActual === actualCity){
            let recorrido = camino.recorrido;
            recorrido.forEach(siguienteCamino => {
                let ciudadSiguiente = siguienteCamino.ciudadHasta;
                if(ciudadSiguiente === nextCity){
                    //console.log(siguienteCamino);
                    costoDistancia = siguienteCamino.costoDistancia;
                    costoGasolina = siguienteCamino.costoGasolina;
                    //console.log(ciudadActual + " -> " + ciudadSiguiente + " Costo: " + costoDistancia);
                    return [costoDistancia, costoGasolina];
                }
            });
        }
    });
    return [costoDistancia, costoGasolina];
};

function getShortestRoute(){
    let shortestRoute = [],
        shortestDistance;

    for (let i = 0; i < paths.length; i++) {
        shortestDistance = paths[i].costoDistancia;

        for (let j = 0; j < paths.length; j++) {
            if(i === j) continue;
            nextDistance = paths[j].costoDistancia;
            if(shortestDistance > nextDistance) shortestDistance = nextDistance;
        }
    }

    paths.forEach(path => {
        let pathCosto = path.costoDistancia;
        if(pathCosto === shortestDistance) shortestRoute.push(path)
    });

    console.log(shortestRoute);
}


function excelToJS(file, array, value){
    var url = `./code-challenges/shortestRoute/${file}.xlsx`;
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e){
    array = readData();

        function readData() {
            var arraybuffer = oReq.response;
            /* Convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (let i = 0; i != data.length; i++) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");

            /* Call XLSX */
            var workbook = XLSX.read(bstr, {type:"binary"});

            // DO SOMETHING WITH WORKBOOK HERE
            var first_sheet_name = workbook.SheetNames[0];

            /* Ger worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            array = XLSX.utils.sheet_to_json(worksheet, {raw: true});

            if(value){
                dataExcelDistancia = array;
            } else{
                dataExcelGasolina = array;
                init();
            }
            return array;
        }
    }
    oReq.send();
}


/*
const costoMatriz = [
    [0, 100, 150, 140, 130, 120, 78, 150, 90, 200, 180, 190, 160, 135, 144, 300, 60, 77, 87, 90],
    [100, 0, 200, 180, 190, 160, 135, 144, 90, 150, 140, 130, 120, 78, 300, 160, 88, 99, 87, 95],
    [150, 200, 0, 167, 156, 169, 123, 134, 156, 177, 155, 188, 176, 143, 192, 146, 170, 152, 176, 122],
    [140, 180, 167, 0, 190, 198, 213, 321, 252, 123, 234, 111, 112, 114, 167, 189, 203, 205, 234, 300],
    [130, 190, 156, 190, 0, 333, 300, 178, 167, 143, 200, 111, 156, 267, 299, 152, 100, 90, 97, 99],
    [120, 160, 169, 198, 333, 0, 480, 389, 412, 500, 253, 222, 333, 378, 287, 273, 266, 255, 199, 201],
    [78, 135, 123, 213, 300, 480, 0, 140, 150, 143, 177, 194, 166, 200, 181, 154, 177, 133, 122, 109],
    [150, 144, 134, 321, 178, 389, 140, 0, 149, 129, 129, 136, 156, 177, 141, 186, 175, 153, 133, 122],
    [90, 90, 156, 252, 167, 412, 150, 149, 0, 89, 82, 83, 60, 124, 59, 78, 89, 99, 100, 123],
    [200, 150, 177, 123, 143, 500, 143, 129, 89, 0, 99, 200, 254, 233, 211, 197, 183, 154, 167, 169],
    [180, 140, 155, 234, 200, 253, 177, 129, 82, 99, 0, 77, 88, 89, 289, 222, 311, 471, 122, 109],
    [190, 130, 188, 111, 111, 222, 194, 136, 83, 200, 77, 0, 91, 90, 93, 106, 132, 100, 98, 35],
    [160, 120, 176, 112, 156, 333, 166, 156, 60, 254, 88, 91, 0, 102, 103, 107, 111, 113, 200, 101],
    [135, 78, 143, 114, 267, 378, 200, 177, 124, 233, 89, 90, 102, 0, 77, 79, 201, 166, 173, 102],
    [144, 300, 192, 167, 299, 287, 181, 141, 59, 211, 289, 93, 103, 77, 0, 55, 103, 105, 101, 201],
    [300, 160, 146, 189, 152, 273, 154, 186, 78, 197, 222, 106, 107, 79, 55, 0, 76, 78, 84, 92],
    [60, 88, 170, 203, 100, 266, 177, 175, 89, 183, 311, 132, 111, 201, 103, 76, 0, 93, 102, 29],
    [77, 99, 152, 205, 90, 255, 133, 153, 99, 154, 471, 100, 113, 166, 105, 78, 93, 0, 88, 65],
    [87, 87, 176, 234, 97, 199, 122, 133, 100, 167, 122, 98, 200, 173, 101, 84, 102, 88, 0, 333],
    [90, 95, 122, 300, 99, 201, 109, 122, 123, 169, 109, 35, 101, 102, 201, 92, 29, 65, 333, 0],
];
*/

/*
const costoMatriz = [
    [0, 3, 4, 2],
    [3, 0, 1, 5],
    [4, 1, 0, 2],
    [2, 5, 2, 0],
];
*/

/*
const gasolinaMatriz = [
    [0, 80, 140, 110],
    [120, 0, 190, 150],
    [170, 180, 0, 137],
    [160, 160, 157, 0],
];
*/