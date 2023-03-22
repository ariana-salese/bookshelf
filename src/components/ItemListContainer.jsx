import React, { useState, useEffect } from 'react'
import Notice from './Notice'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import Loading from './Loader';
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { Box } from '@chakra-ui/react';

const ItemListContainer = ( { trending } ) => {
	const { categoryId } = useParams();
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [categoryName, setCategoryName] = useState(null);

	/**
	 * Recives all the books available in the database and
	 * filters them. If a category id was given through the url
	 * then it returns only the books from that category. If the prop
	 * trending is true then it returns the books that are trending. 
	 * 
	 * @param {Array<Object>} books 
	 * @returns Array<Object>
	 */
	function filterBooks(books) {
		if (categoryId) {
			return books.filter((book) => book.categoryId == categoryId)
		} else if (trending) {
			return books.filter((book) => book.trending)
		}
		return books
	}

	/**
	 * Sets the variable books according to the available books in
	 * the database and the values (trending and categoryId).
	 */
	useEffect(()=> {
		setLoading(true)
		const db = getFirestore();
		const itemsCollection = collection(db, 'books');
		const booksAvailable = [];
		getDocs(itemsCollection).then((snapshot) => {
			snapshot.forEach( (doc) => {
					const docData = doc.data()
					const docId = doc.id
					docData.id = docId
					booksAvailable.push(docData)
				}
			)
			const filteredBooks = filterBooks(booksAvailable);
			setBooks(filteredBooks)
			console.log(filteredBooks)
			setLoading(false)
			setCategoryName("")
			if (filteredBooks.length > 0) setCategoryName(filteredBooks.at(0).category)
			}
		)
		
	}, [categoryId, trending])

	if (loading) {
		return <Loading loading={'Loading books'}/>
	}
	return (
		<Box>
			{trending && <Notice note={"Welcome to the bookshelf store"}/>}
			<ItemList books={books} listTitle={categoryId ? categoryName : trending ? "Trending" : "Catalogue"}/>
		</Box>
  	);
}

export default ItemListContainer