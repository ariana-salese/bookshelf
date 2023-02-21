import React, { useState, useEffect } from 'react'
import Welcome from './Welcome'
import ItemList from './ItemList'
import { data } from "../data";
import { useParams } from "react-router-dom";
import { Center, Heading, Spinner, transform } from '@chakra-ui/react';

const ItemListContainer = ( { trending } ) => {
	console.log("is trending: " + trending)
	const { category } = useParams();
	const [books, setBooks] = useState([]);
	// const [loading, setLoading] = useState([]);

	const getData = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(category ?  data.filter((book) => book.category.toLowerCase() === category.toLowerCase()) : trending ? data.filter((book) => book.trending) : data)
			}, 2000)
		});
	};
	
	useEffect(() => {
		getData().then((books) => setBooks(books));
		console.log("books: " + books);
  	}, [category, trending]); 

	// console.log(loading)

	return (
		<>
			{trending ? <Welcome greeting={"Welcome to the bookshelf store"}/> : <></>}
			<ItemList books={books} title={category ? category.charAt(0).toUpperCase() + category.slice(1) : trending ? "Trending" : "Catalogue"}/>
		</>
  	);
}

export default ItemListContainer