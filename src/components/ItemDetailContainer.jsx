import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item';
import { data } from "../data";
import { Center } from '@chakra-ui/react';

const ItemDetailContainer = () => {
    const { id } = useParams();
	const [book, setBook] = useState([]);

	const getData = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
                console.log("id es: " + id)
				const book = data.filter((book) => book.id == id);
				resolve(book)
			}, 2000)
		});
	};
	
	useEffect(() => {
		getData().then((book) => setBook(book));
  	}, []); 

    return (
        <Center>
            {book.map((book) => (
                <Item
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    author={book.author}
                    description={book.description}
                    price={book.price}
                    stock={book.stock}
                    category={book.category}
                    img={book.img}
                    trending={book.trending}
                />
            ))}
        </Center>
        
    )
}

export default ItemDetailContainer