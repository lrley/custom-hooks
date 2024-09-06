

export const listaReducer = (estadoInicial=[], accion) => {

    
switch (accion.type) {
    case '[TODO] Agregar Categoria':
        return [
            ...estadoInicial, accion.payload
        ]
    default:
        return estadoInicial;
}


}
