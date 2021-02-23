//"use" se utiliza como convencion para los hooks

import React, { useState } from 'react'

export const useCounter = (inicialState = 10 ) => { //si no me envian el estado inicial lo inicializa en 0
    
    const [counter, setCounter] = useState(inicialState) //declaracion de estados

    const increment = () => {
        setCounter( counter + 1 );
    }
    const decrement = () => {
        setCounter (counter -1 );
    }
    const reset =() =>{
        setCounter (inicialState);
    }

    return{  //para extraer la logica de mi contador
        counter,
        increment,
        decrement,
        reset
    } 

}
