import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Center } from '@chakra-ui/react';
import Loader from './Loader';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Notice from './Notice';

/**
 * Accesses the database to find the book with the id specified in
 * the url. If it finds it, it shows all its information with an ItemDetail.
 * Otherwise, it notifies that the book does not exist with Notice
 * 
 * @returns specified book details
 */
const ItemDetailContainer = () => {
    const { itemId, color, isDark } = useParams();
	const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * Accesses the database to find the book with the id specified in
     * the url
     */
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const item = doc(db, "books", itemId);
        getDoc(item).then((snapshot) => {
            if (snapshot.exists()) {
                const book = snapshot.data();
				book.id = itemId
                setBook(book)
            } 
            setLoading(false)
        })
  	}, []); 

	if (loading) {  
		return <Loader note={'Loading book data'}/>
    }
    if (!book) {
        return <Notice note="The book you are looking for doesn't exists!"></Notice>
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