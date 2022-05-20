import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import db from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { id } = useParams();

    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = { id: response.id,...response.data() }

            setItem(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;