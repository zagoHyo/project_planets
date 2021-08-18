<<<<<<< HEAD
let FiltrarDistanciaplanetas = (e) => {
    let buscarDistancia = alert("Distancia a Filtrar");
    
}
=======
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



// prueba
>>>>>>> Dtony-404
