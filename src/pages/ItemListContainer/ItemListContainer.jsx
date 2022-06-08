import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import db from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './styleCart.css';
import Spinner from '../../components/Spinner/Spinner';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const { categoryId } = useParams();

    const getData = async (category) => {
        try {
            setLoad(true)
            const document = category ? query(collection(db, "items"), where('category', '==', category)) :
                collection(db, "items");
            const coll = await getDocs(document);
            const result = coll.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setProducts(result)
            setLoad(false)
        } catch (error) {
            alert("revisar la consola");
        }
    }

    useEffect(() => {
        getData(categoryId);
    }, [categoryId]);

    return (
        <div className='containerProduct'>
            {load ? <Spinner /> : <ItemList data={products} />}
        </div>
    )
}

export default ItemListContainer;