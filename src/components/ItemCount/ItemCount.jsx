import React, { useState } from 'react';
import './styleCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count +1);
        }
    } 

    const decrement = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        const msj = `Agregaste ${count} productos al carrito`;
        count == 1 ? alert(`Agregaste ${count} producto al carrito`) : alert(msj); 
    }

    return (
        <div className='containerCount'>
            <div className='count'>
                <div>
                    <h2>Tabaco Flandria</h2>
                </div>

                <div className='controlContainer'>
                    <div className='control'>
                        <button onClick={decrement}>-</button>
                        <p>{count}</p>
                        <button onClick={increment}>+</button>
                    </div>
                </div>

                <div className='btnCarrito'>
                    <button className='btn' onClick={addToCart}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

//export default ItemCount;