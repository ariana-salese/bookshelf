import React, { useState, useEffect } from 'react'
import Notice from './Welcome'
import ItemList from './ItemList'
import { data } from "../data";
import { useParams } from "react-router-dom";

const ItemListContainer = ( { trending } ) => {
	const { categoryId } = useParams();
	const [books, setBooks] = useState([]);

	const getData = () => {
		return new Promise((resolve, reject) => {
			if (data.length == 0) {
                reject(console.log("No data was found"))
            }
			setTimeout(() => {
				resolve(categoryId ?  data.filter((book) => book.categoryId === categoryId) : trending ? data.filter((book) => book.trending) : data)
			}, 0)
		});
	};
	
	useEffect(() => {
		getData().then((books) => setBooks(books));
  	}, [categoryId, trending]); 

	return (
		<>
			{trending && <Notice note={"Welcome to the bookshelf store"}/>}
			<ItemList books={books} title={trending ? "Trending" : "Catalogue"}/>
		</>
  	);
}

export default ItemListContainer