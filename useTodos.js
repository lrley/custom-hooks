import { useEffect, useReducer } from "react";
import { listaReducerEmpleado } from "./listaReducerEmpleado";

const estadoInicial=[];

const init=()=>{
return JSON.parse(localStorage.getItem('todos'))|| [];
}



export const useTodos = () => {

    const [todos, dispatch] = useReducer(listaReducerEmpleado, estadoInicial, init);

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify(todos) || [] );
    }, [todos])
  
  
    const handleNewListado=(list)=>{
       console.log(list)
        const accion={
            type:'Agregar Empleado',
            payload:list,
        }
        dispatch(accion);
    }
  
    const borrarUsuarioLista=(id)=>{
      console.log({id})
        dispatch({
          type:'Eliminar Empleado',
          payload: id
        })
  
    }
      
    const toggleTodoF=(id)=>{
      console.log({id})
      
       dispatch({
          type:'Seleccionar Usuario',
          payload: id
        })
  
    }  

    
    return{
        todos,
        handleNewListado,
        borrarUsuarioLista,
        toggleTodoF,
        pendientes:todos.filter(todo=> !todo.done).length,
        contadorEmpleado:todos.length,

    }


}
