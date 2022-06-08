import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import db from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';
import Spinner from '../../components/Spinner/Spinner';

function ItemDetailContainer() {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState({});
    const [load, setLoad] = useState(true);

    const getSelected = async (idItem) => {
        try {
            setLoad(true)
            const document = doc(db, "items", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }

            setSelectedItem(result)
            setLoad(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id]);

    return (
        <div>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </div>
    );
}

export default ItemDetailContainer;