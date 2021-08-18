import Planet from "./planets/planets.js";

let arraysValers;
let arraysDistance;
let arraysNamePlanets = [];
let arraysPlanets = []
let arraysSize = []

let sendEvaluation = (e) => {
    let inputs = [...document.querySelectorAll(".number_planets")]
    let inputsN = [...document.querySelectorAll(".names_planets")]
    let inputD = [...document.querySelectorAll(".distance_planets")]
    let inputS = [...document.querySelectorAll(".size_planets")]

    arrayValues = inputs.map((input) => {
        return parseInt(input.value)
    })
    arrayDistance = inputN.map((name) => {
        return name.value
    })
    arrayDistance = inputD.map((distance) => {
        return distance.value
    })
    arraySize = inputS.map((size) => {
        return size.value
    })

    for (let x = 1; x <= arrayValues.length; x++){
        let planet = new Planet();
        planet.distance = document.getElementById(`d_planet_${x}`).value
        planet.name = document.getElementById(`np_planet_${x}`).value
        planet.number_clasi = document.getElementById(`n_planet_${x}`).value
        planet.size = document.getElementById(`t_planet_${x}`).value

        arraysPlanets.push(planet)
        console.log(x)
    }

    console.log(arraysPlanets);
    alert("Array created successfully")
}

/* Ordenar YL*/

let ordernarValores = (e) => {
    let copiArregloValores = arraysValers.map(numero => numero);
    let copiaArregloPlanetas = arraysPlanets.map(planeta => planeta);

    /**
     * Procedemos a ordenar el arreglo,  en el segundo caso,  emplearemos una propiedad de la 
     * clase planeta,  como elemento de comparacion en la funcion de ordenamiento
     */
    copiArregloValores.sort((a, b) => {
        return a - b;
    });

    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });

    let copia2ArregloPlanetas = copiaArregloPlanetas.map(planeta => planeta);

    console.log("********Arreglos ascendente***********")
    console.log(copiArregloValores);
    console.log(copiaArregloPlanetas);

    console.log("********Arreglos descendente***********")
    copiArregloValores.reverse();
    copia2ArregloPlanetas.reverse();
    console.log(copiArregloValores);
    console.log(copia2ArregloPlanetas);

}
document.querySelector("#btn_order").addEventListener("click", ordernarValores);
