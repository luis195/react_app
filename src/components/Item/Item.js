import React from 'react';
import {Button, Card} from "react-bootstrap";
import "./Item.css"
import Candle from "../../images/ruah.png"


export const Item = () => {

    return (

        <div className={'item'}>
            <div className={"card"}>
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
            </div>
        </div>
    );
};

