import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
//import ItemCount from '../ItemCount/ItemCount';
import './styleCart.css'

function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
        const myProducts = [
            {
                id: 1, name: "Pipa Mercure",
                price: "$3500",
                imgUrl: "https://tiendasalta.com.ar/media/catalog/product/cache/baf65dd7884a65f78edeaa7cc9c4d12e/_/p/_pipa_-molina-small-smooth-curva-300x300_3.jpg"
            },
            { 
                id: 2, 
                name: "Pipa Excellence", 
                price: "$5000",
                imgUrl: "https://d6scj24zvfbbo.cloudfront.net/bd8befb0141364115be9f0eebf577ce8/200000034-e748ce844b/3434.png?ph=2400f43918"
            },
            { 
                id: 3, 
                name: "Pipa Jura", 
                price: "$2200",
                imgUrl: "https://image.shutterstock.com/image-photo/tobacco-pipe-on-white-background-260nw-370970318.jpg"
            }
        ];
        setTimeout(() => {
            resolve(myProducts);
        }, 2000);
    })
    return myPromise;
}

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res);
            })
    }, []);


    return (
        <div className='containerProduct'>
            <ItemList items={products} />
            {/* <p className='titleProduct' style={{ color: props.color }}>{props.greeting}</p>
                <ItemCount stock={5} initial={1} onAdd /> */}
        </div>
    )
}




export default ItemListContainer;