import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const myProducts = [
            {
                id: 1, name: "Pipa Mercure",
                price: "$3500",
                imgUrl: "https://image.shutterstock.com/image-photo/tobacco-pipe-on-white-background-260nw-370970318.jpg"
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

        const item = myProducts.filter(item => item.id === parseInt(id));

        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
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