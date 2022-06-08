import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './itemStyle.css'

const Item = ({ item }) => {

    return (
        <div className='p-3'>
            <Card className='p-2 colorCard' style={{ width: '14rem' }}>
                <Card.Header>
                    <Card.Title>{item.name}</Card.Title>
                </Card.Header>
                <Card.Img className='p-1' variant="top" src={item.imgUrl} />
                <Card.Body>
                    <Card.Title>${item.price}</Card.Title>
                    <Link className='goData' to={'/item/' + item.id}>
                        <button>Ver más</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;