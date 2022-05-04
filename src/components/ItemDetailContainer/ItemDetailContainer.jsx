import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const myProducts = 
            {
                id: 1, name: "Pipa Mercure",
                price: "$3500",
                stock: 7,
                imgUrl: "https://tiendasalta.com.ar/media/catalog/product/cache/baf65dd7884a65f78edeaa7cc9c4d12e/_/p/_pipa_-molina-small-smooth-curva-300x300_3.jpg"
            };
            
        setTimeout(() => {
            resolve(myProducts);
        }, 2000);
    })
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
            .then((res) => {
                setItem(res);
            })
    }, []);

    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    );
}

export default ItemDetailContainer;