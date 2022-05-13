import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const myProducts = [
            {
                id: 1, name: "Pipa Mercure",
                price: "$3500",
                category: "Pipas",
                stock: 7,
                imgUrl: "https://tiendasalta.com.ar/media/catalog/product/cache/baf65dd7884a65f78edeaa7cc9c4d12e/_/p/_pipa_-molina-small-smooth-curva-300x300_3.jpg"
            },
            {
                id: 2,
                name: "Pipa Excellence",
                price: "$5000",
                category: "Pipas",
                stock: 7,
                imgUrl: "https://d6scj24zvfbbo.cloudfront.net/bd8befb0141364115be9f0eebf577ce8/200000034-e748ce844b/3434.png?ph=2400f43918"
            },
            {
                id: 3,
                name: "Encendedor Zippo",
                price: "$14500",
                category: "Encendedores",
                stock: 7,
                imgUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/zippo11-3e85889f764906f8bc15638312157927-1024-1024.jpg"
            },
            {
                id: 4,
                name: "Tabaco Flandria",
                price: "$800",
                category: "Tabaco",
                stock: 7,
                imgUrl: "https://www.distribuidorapop.com.ar/wp-content/uploads/2015/09/tabaco-flandria-virginia-mayorista.jpg"
            },
            {
                id: 5,
                name: "Tabaco Flandria",
                price: "$800",
                category: "Tabaco",
                stock: 7,
                imgUrl: "https://tabaqueriahorus.com/wp-content/uploads/2017/08/3-1.jpg"
            }
        ];

        const item = myProducts.filter(item => item.id === parseInt(id));
        resolve(item[0]);
    })
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then((res) => {
                setItem(res);
            })
            .catch(err => {
                alert("Error inesperado");
            })
    }, []);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;