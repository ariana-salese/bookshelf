import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { data } from "../data";
import { Center } from '@chakra-ui/react';

const ItemDetailContainer = ( ) => {
    const { itemId, color, isDark } = useParams();
	const [book, setBook] = useState([]);

	const getData = () => {
		return new Promise((resolve, reject) => {
            if (data.length == 0) {
                reject(console.log("No data was found"))
            }
			setTimeout(() => {
				const book = data.filter((book) => book.id == itemId);
				resolve(book)
			}, 0)
		});
	};
	
	useEffect(() => {
		getData().then((book) => setBook(book));
  	}, []); 

    return (
        <Center>
            {book.map((book) => (
                <ItemDetail
                    key={book.id}
                    book={book}
                    averageBookCoverColorIsDark={isDark}
                    averageBookCoverColorCode={color}
                />
            ))}
        </Center>
        
    )
}

export default ItemDetailContainer