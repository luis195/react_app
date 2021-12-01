import React, { useEffect, useState } from 'react'
import {Carousel, Container} from "react-bootstrap";
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setProductos(resp)
                } else {
                    setProductos( resp.filter( prod => prod.category === catId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>

            {
                loading 
                    ? <h2>Cargando...</h2> 
                    :<Container>
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
                                <img
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
                        <ItemList items={productos}/>
                    </Container>

            }
        </>
    )
}
