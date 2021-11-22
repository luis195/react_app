
import React, {useEffect, useState} from "react";
import './ItemListContainer.css'
import {Carousel, Container} from "react-bootstrap";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/ItemList"
import {pedirDatos} from "../../helpers/pedirDatos";


export const ItemListContainer = ({greeting, usuario}) => {
    
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        setLoading(true)
        pedirDatos(true)
            .then( (response) => {
                setProductos(response)
            })
            .catch( (error) => {
                console.log(error)
                })
            .finally(() =>{
                setLoading(false)
            })

        },[])


    return(

        <Container className="my-5">
            <h1>{greeting}</h1>
            <h2>{usuario}</h2>
            <hr/>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/140122/pexels-photo-140122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/5791782/pexels-photo-5791782.jpeg?auto=
                            compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/5791782/
                            pexels-photo-5791782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={400} height={600}
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg?
                            auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos = {productos}/>
            }


        </Container>
    )
}