import React from 'react';
import {Button, Card, Container, Row} from "react-bootstrap";
import "./ItemList.css"
import Candle from "../../images/ruah.png"
import {ItemCount} from "../ItemCount/ItemCount";


export const ItemList = ({productos}) => {

    return (

        <Container className="my-5">
            <h2>Productos</h2>
            <hr/>
            <Row>
                {productos.map(()=>(
                    <div className={"card m-3"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= {Candle} />
                            <Card.Body>
                                <Card.Title>Vela Aromática</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <ItemCount/>
                    </div>

                ))}
            </Row>
        </Container>
    );
};

