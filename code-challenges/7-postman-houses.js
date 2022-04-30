/*
*   Reto 7: Problema del cartero
*   
*   Descrición:  Un cartero tiene que repartir correspondencia en 8 casas
    de una calle. De un lado de la calle, están las casas 1,3,5,7. en ese orden. 
    Del otro lado están las casas 2,4,6,8, de manera que la casa 2 está enfrente
    de la casa 1, la casa 4 está enfrente de la casa 3, la casa 6 está enfrente de
    la casa 5 y la casa 8 está exactamente enfrente de la casa 7. El cartero va a
    pasar por cada casa exactamente una vez, salvo que empieza y termina en la casa 1.
    El cartero decide seguir las siguientes reglas.

        a) Si va a una casa impar, la siguiente vez va a una casa par.
        b) Si va a una casa par, la siguiente vez a una casa impar.
        c) Si va a una casa, no va inmediatamente después a la casa que está exactamente enfrente

    ¿De cuantas maneras distintas puede realizar este recorrido? 

*/

const casasImpar = [1,3,5,7],
    casasPar = [2,4,6,8];

let casasVisitadas = [],
    casasEnfrente = [];

const firstHouse = [...casasImpar].shift();

let paths = [];

getOppositeHouses();
getInitialStep();
getPath();


function getOppositeHouses(){
    casasImpar.forEach( (casaImpar, i) => {
        casasPar.forEach( (casaPar, j) => {
            if(i === j) casasEnfrente.push([casaImpar, casaPar])
        });
    });
}

function getInitialStep(){

    for (let j = 0; j < 2; j++) {
        if(j === 0) continue;
        let nextHouse = casasPar[j];
        paths.push( [firstHouse, nextHouse] );
    }

    //console.log(...paths);
}

function getPath(){
    for (let i = 0; i < paths.length; i++) {
        
        console.log(paths[i]);

        let nextIndex = paths[i].length - 1;
        let actualHouse = paths[i][nextIndex - 1]
        let nextHouse = paths[i][nextIndex];

        //console.log(actualHouse + ' ' + nextHouse)

        casasVisitadas.push(actualHouse, nextHouse);

        if(nextHouse % 2 === 0){ // Casa par
            nextImparHouse(nextHouse, i);
        } // Casa impar

    }

}

function nextImparHouse(casaPar, index){

    let number = casasPar.indexOf(casaPar);

    for (let i = 0; i < casasImpar.length; i++) {
        let nextHouse = casasImpar[i];
        
        if(isCasaVisitada(nextHouse)){
            continue;
        }
        if(i === number) continue;
        
        paths.push( [...paths[0], nextHouse]);
    }
    
    paths = paths.filter( (path, i) => i !== index );
}

function isCasaVisitada(casa){
    if(casasVisitadas.indexOf(casa) >= 0){
        return true;
    } else{
        return false;
    }
}