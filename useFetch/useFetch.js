import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true); //significa esta montado, mantiene la referencia cuando el componente esta montado
    const [state, setState] = useState({data:null , loading: true,error:null});
        
        useEffect(() => {
            
            return () => {
                isMounted.current = false; //lo cambia a false cuando se desmonta 
            }
        }, [])
    
    
        useEffect(() => {
            
            setState({data:null , loading: true,error:null}); //para que aparesca el "loading" antes de cargar la siguiente cita
            
            fetch( url )
                .then(resp => resp.json())
                .then(data => {
                
                    //funcion que espera para ejecutar
                    // setTimeout(() => {
                        if(isMounted.current){ //si es true, significa q esta mantado 
                        
                            setState({
                            loading: false,
                            error: null,
                            data
                            })
                           // console.log("setState SI se llamo");
                        }
                        //  else{
                        //     console.log("setState NO se llamo");
                        // }
                        
                    // }, 4000); //espera 4 segundo
            }).catch(()=>{
                setState({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la info'
                })
            })
        }, [url]) 

    return state;    
}
