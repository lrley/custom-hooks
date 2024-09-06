import { useState } from "react";


export const useFormulario = (formularioInicial={}) => {

    //console.log(formularioInicial )
    const [estadoFormulario, setestadoFormulario] = useState(formularioInicial);

    const cambioDeTexto=({target})=>{
            const { name, value }= target;
            setestadoFormulario({
              ...estadoFormulario,
              [ name ]: value
            })
    }

    const reset=()=>{
     setestadoFormulario(formularioInicial);
    }

   // console.log('Estado del formulario actual: '+JSON.stringify(estadoFormulario))
    return{
            ...estadoFormulario,
            estadoFormulario,
            cambioDeTexto,
            reset,
    }

}
