let ordernarValores = (e) => {
    let copiArregloValores = arregloValores.map(numero => numero);
    let copiaArregloPlanetas = arregloPlanetas.map(planeta => planeta);

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


