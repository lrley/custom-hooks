


const estadoInicial=[{
    id:1,
    todo: 'Biometricos Faciales AI',
    done: false,
}];



 const infoReducer = ( estado = estadoInicial, accion={}) => {

    if(accion.type === '[TODO] Agregar Informacion' ) {
        return [ ...estado, accion.payload ]
    }

    return estado;
}


let informacion= infoReducer();


const newInformacion={
    id:2,
    todo: 'Barreras Vechiculares',
    done: false,
}

const addTodaAccion={
type: '[TODO] Agregar Informacion',
payload: newInformacion,

}

informacion= infoReducer(informacion,addTodaAccion);

console.log({state: informacion})