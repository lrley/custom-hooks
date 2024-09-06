

export const listaReducerEmpleado = (estadoInicial=[], accion) => {
    
        switch (accion.type) {
            case 'Agregar Empleado':
             return [
                    ...estadoInicial, accion.payload
                ]

            case 'Eliminar Empleado':
             return estadoInicial.filter(listadoUsuarios => listadoUsuarios.id !== accion.payload)
           
             case 'Seleccionar Usuario':
             return estadoInicial.map(todo=>{
                if(todo.id=== accion.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }

                    return todo;

             })
           

            default:
                return estadoInicial;
        }

}
