import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './itemStyle.css'

function Item({ item }) {
    return (
        <div className='p-3'>
            <Card className='bg-warning' style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>{item.name}</Card.Title>
                </Card.Header>
                <Card.Img className='p-2' variant="top" src={item.imgUrl} />
                <Card.Body>
                    <Card.Title className='p-2'>${item.price}</Card.Title>
                    <Link className='goData' to={'/item/' + item.id}>
                        <button>Ver más</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;