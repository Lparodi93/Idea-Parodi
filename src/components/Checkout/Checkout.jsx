import React, { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../services/firebase';
import './check.css';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

function Checkout() {

    const { getTotalPrice, products, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [load, setLoad] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Teléfono: ''
    })

    const { Nombre, Email, Teléfono } = buyer;

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async (data) => {
        try {
            setLoad(true)
            const coll = collection(db, "Orders")
            const order = await addDoc(coll, data)
            setOrderId(order.id)
            clear()
            setLoad(false)
            console.log("order", order.id)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const day = new Date()
        const items = products.map(e => { return { id: e.id, title: e.name, price: e.price, amount: e.quantity } })
        const total = getTotalPrice()
        const data = { buyer, items, day, total }
        console.log("data", data)
        generateOrder(data)
    }

    return (
        <div className='containerData'>

            {load ? <Spinner />
                :
                (!orderId && <div>
                    <h1>Finalizando Compra</h1>

                    <div>
                        <h4>Completar Datos:</h4>
                    </div>

                    <div className='formData'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name='Nombre'
                                placeholder='Ingrese Nombre'
                                value={Nombre}
                                onChange={handleInputChange}
                            />

                            <input
                                type="email"
                                name='Email'
                                placeholder='Ingrese un email'
                                value={Email}
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                name='Teléfono'
                                placeholder='Ingrese un teléfono'
                                value={Teléfono}
                                onChange={handleInputChange}
                            />

                            <input
                                type="submit"
                                value="Finalizar Compra"
                            />
                        </form>
                    </div>
                </div>)
            }

            <div>
                {
                    orderId && (
                        <div>
                            <h4>Muchas gracias por su compra!</h4>
                            <h4>{`Su código de órden es: ${orderId}`}</h4>
                            <Link to="/"><h5>Seguir Comprando</h5></Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
}
export default Checkout