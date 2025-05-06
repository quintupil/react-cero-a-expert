import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {

    console.log("getFetch - Step1")
    if (localCache[url]) {
      console.log("Usando caché!!");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    console.log("getFetch - Step2")
    console.log("Cargando desde la API...");
    setLoadingState();
    
    try {
        
        console.log("getFetch - Step2 - fecth()")
        const resp = await fetch(url);
        console.log("getFetch - Step3 - Response: ")
        console.log( resp );

        // Sleep
        console.log("getFetch - Step4 - Sleep ")
        await new Promise((resolve) => setTimeout(resolve, 1500));

        /*if (!resp.ok) {
            throw new Error(`HTTP error ${resp.status}: ${resp.statusText}`);
        }*/
        console.log("getFetch - Step5 - Verifica Respuesta ")
        if (!resp.ok) {
            console.log("getFetch - Step5.1 - NOT OK ")
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                },
            });
            console.log("Status - code: ", resp.status);
            console.log("Status - message: ", resp.statusText);
            return;
        }
        console.log("getFetch - Step5.2 - OK ")
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        // Guarda en caché
        console.log("getFetch - Step6 - Guarda CACHE ")
        localCache[url] = data;
        console.log("Caché!! ", localCache[url]);

      //AQUI Control Error
    } catch ( error ) {
        console.error("ERROR!!!", error);
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            message: error.message,
            stack: error.stack,
          },
        });
    }      
    console.log("getFetch - Step7 - Fin ");
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error, // ahora accesible en el componente
  };
};
