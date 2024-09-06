import { useState } from "react"


export const useContador=(valorInicial=1)=>{

    const [Contador, setContador] = useState(valorInicial);

    const aumentar=(value=1)=>{
        setContador(Contador+value);
    }

    const disminuir=(value=1)=>{
        setContador(Contador-value);        
    }


    const reset=()=>{
       setContador( valorInicial);
    }


    return{
       Contador,
       aumentar,
       disminuir,
       reset,
    }

}