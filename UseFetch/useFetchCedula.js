import { useEffect, useState } from "react";



export const useFetchCedula = (url) => {

  const [state, setState] = useState({
    
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  
  useEffect(() => {

    let isMounted = true;

    const getFetch = async () => {
     
      try {

      

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        if (isMounted) {
          setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: error.message || 'Error desconocido',
          });
        }
      }


    };

    getFetch();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };

};
