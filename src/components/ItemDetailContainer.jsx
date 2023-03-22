import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Center } from '@chakra-ui/react';
import Loading from './Loader';
import {doc, getDoc, getFirestore} from "firebase/firestore"

// SI NO EXISTE EL ID INDICADO MOSTRAR MENSAJE TODO
const ItemDetailContainer = ( ) => {
    const { itemId, color, isDark } = useParams();
	const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "books", itemId);
        getDoc(item).then((snapshot) => {
            if (snapshot.exists()) {
                const book = snapshot.data();
				book.id = itemId
                setBook(book)
                console.log(book)
            }
        })
  	}, []); 

	if (loading) {  
		return <Loading loading={'Loading book data'}/>
    }
    return (
        <Center>
            <ItemDetail
                key={itemId}
                book={book}
                bookId={itemId}
                averageBookCoverColorIsDark={isDark}
                averageBookCoverColorCode={color}
            />
        </Center>
    )
}

export default ItemDetailContainer