import React, { useState, useEffect } from 'react'
import Notice from './Welcome'
import ItemList from './ItemList'
import { data } from "../data";
import { useParams } from "react-router-dom";
import Loading from './Loader';

const ItemListContainer = ( { trending } ) => {
	const { categoryId } = useParams();
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			const books = categoryId ?  data.filter((book) => book.categoryId === categoryId) : trending ? data.filter((book) => book.trending) : data;
			setBooks(books);
			setLoading(false);
		}, 2000)
  	}, [categoryId, trending]); 

	if (loading) {
		console.log('LOADING')
		return <Loading loading={'Loading books'}/>
	}
	return (
		<>
			{trending && <Notice note={"Welcome to the bookshelf store"}/>}
			<ItemList books={books} title={trending ? "Trending" : "Catalogue"}/>
		</>
  	);
}

export default ItemListContainer