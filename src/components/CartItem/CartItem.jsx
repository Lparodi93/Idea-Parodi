import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import './cartItem.css'

function CartItem({ item }) {
    const txt = useContext(CartContext);

    return (
        <>
            <div className='listContainer'>

                <div className='productContainer'>
                    <div className='imgContainer'>
                        <img src={item.imgUrl} alt="imagen del producto" width={200} />
                    </div>

                    <div className='dataProd'>
                        <p>{item.name}</p>
                        <p>Unidad: ${item.price}</p>
                        <p>Cantidad: {item.quantity} </p>

                        <div className='container'>
                            <button className='globoButton' onClick={() => txt.removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                    </div>



                </div>


            </div>
        </>
    );
}

export default CartItem