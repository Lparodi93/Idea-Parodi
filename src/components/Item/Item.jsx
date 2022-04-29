import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemStyle.css'

function Item({ item }) {
    return (
        <div className='p-3'>
            <Card className='bg-warning' style={{ width: '15rem' }}>
                <Card.Header>
                    <Card.Title>{item.name}</Card.Title>
                </Card.Header>
                <Card.Img className='p-2' variant="top" src={item.imgUrl} width="15" height="220" />
                <Card.Body>
                    <Card.Title>{item.price}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Comprar</Button> */}
                </Card.Body>
            </Card>
        </div>
    );





}

export default Item;