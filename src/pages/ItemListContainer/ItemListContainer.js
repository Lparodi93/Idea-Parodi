import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './styleCart.css'

function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
        const myProducts = [
            {
                id: 1, name: "Pipa Mercure",
                price: "$3500",
                category: "Pipas",
                imgUrl: "https://tiendasalta.com.ar/media/catalog/product/cache/baf65dd7884a65f78edeaa7cc9c4d12e/_/p/_pipa_-molina-small-smooth-curva-300x300_3.jpg"
            },
            {
                id: 2,
                name: "Pipa Excellence",
                price: "$5000",
                category: "Pipas",
                imgUrl: "https://d6scj24zvfbbo.cloudfront.net/bd8befb0141364115be9f0eebf577ce8/200000034-e748ce844b/3434.png?ph=2400f43918"
            },
            {
                id: 3,
                name: "Pipa Jura",
                price: "$2200",
                category: "Pipas",
                imgUrl: "https://image.shutterstock.com/image-photo/tobacco-pipe-on-white-background-260nw-370970318.jpg"
            }
        ];

        const filterProducts = myProducts.filter(p => p.category === category)

        setTimeout(() => {
            resolve(filterProducts);
        }, 2000);
    })
    return myPromise;
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                alert("Error inesperado");
            })
    }, [categoryId]);


    return (
        <div className='containerProduct'>
            <ItemList items={products} />
        </div>
    )
}




export default ItemListContainer;