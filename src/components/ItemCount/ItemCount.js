import React, {useState} from 'react';
import './ItemCount.css'
import {Button} from "react-bootstrap";
export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)


    const agregarCantidad = () => {
        if (stock > counter){
            setCounter(counter + 1)
        } else {
            alert("No hay más stock de este producto")
        }

    }
    const restarCantidad = () => {
        if (counter>1){
            setCounter(counter - 1)
        }
        else {
            alert("El mínimo es 1")
        }
    }
    
    const respuesta = () => {
        alert( `Agregaste ${counter} productos`)
      
    }
    
    return(
    <container className={'counter'}>

            Cantidad: {counter}
        <container>
            <Button onClick = {restarCantidad} variant="outline-primary">-</Button>{' '}
            <Button onClick = {agregarCantidad} variant="outline-primary">+</Button>{' '}
            <div className="mb-2">
                <Button variant="primary" size="lg" onClick={respuesta}>
                    Agregar al Carrito
                </Button>
            </div>

        </container>
    </container>
    )
}
