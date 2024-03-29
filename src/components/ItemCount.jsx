import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React, { useContext } from 'react'
import { Button, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

/**
 * Multiple buttons to modify count and add that count of the specified book
 * to the cart.
 * 
 * @param {Object} book 
 * @example 
 * {
 * 	"id": 2,
 * 	"name": "Spice road",
 * 	"author": "Maiya Ibrahim",
 * 	"price": 3000,
 * 	"description":
 * 	"The first book in an epic fantasy [...]",
 * 	"stock": 10,
 * 	"category": "Fantasy",
 * 	"categoryId": "1",
 * 	"trending": false,
 * 	"img": img
 * }
 * 
 * @param {string} averageBookCoverColorIsDark
 * @example 'true', for a dark color
 * 
 * @param {string} averageBookCoverColorCode
 * @example 'e6e6e6', for hex code '#e6e6e6'
 * 
 * @returns counter to add to cart
 */
const ItemCount = ( { book, averageBookCoverColorCode, averageBookCoverColorIsDark } ) => {
	const { books, updateBooks } = useContext(CartContext);
	const [count, setCount] = useState(0);

	/**
	 * Adds the specified quantity of the given book and updates book count.
	 * 
	 * @param {Object} data
	 * @example 
	 * {
	 * 	"id": 2,
	 * 	"name": "Spice road",
	 * 	"author": "Maiya Ibrahim",
	 * 	"price": 3000,
	 * 	"description":
	 * 	"The first book in an epic fantasy [...]",
	 * 	"stock": 10,
	 * 	"category": "Fantasy",
	 * 	"categoryId": "1",
	 * 	"trending": false,
	 * 	"img": img
	 * }
	 * 
	 * @param {number} count
	 * @param {string} averageBookCoverColorCode
	 * @param {string} averageBookCoverColorIsDark
	 */
	const addBooks = (data, averageBookCoverColorCode, averageBookCoverColorIsDark) => { 
		const bookData = books[data.id] || {data: data, count: 0, averageBookCoverColorCode: averageBookCoverColorCode, averageBookCoverColorIsDark: averageBookCoverColorIsDark}
		bookData.count = bookData.count + count;
		books[data.id] = bookData;

		updateBooks(books);
	}

	return (
		<VStack>
			<Tooltip label="Please select amout" isDisabled={count != 0} placement='top'>
				<Link to="/catalogue">
					<Button onClick={ () => addBooks(book, averageBookCoverColorCode, averageBookCoverColorIsDark)} className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + averageBookCoverColorCode} color={averageBookCoverColorIsDark == "true" ? "white" : "black"} _hover={{ bg: "#" + averageBookCoverColorCode }} isDisabled={count == 0} width='9.5rem'>Buy</Button>
				</Link>
			</Tooltip>
			<HStack spacing={6}>
				<Button className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + averageBookCoverColorCode} color={averageBookCoverColorIsDark == "true" ? "white" : "black"} _hover={{ bg:  "#" + averageBookCoverColorCode}} onClick={count == 0 ? () => setCount(0) : () => setCount(count - 1)}><MinusIcon></MinusIcon></Button>
				<Text>{count}</Text>
				<Button className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + averageBookCoverColorCode} color={averageBookCoverColorIsDark == "true" ? "white" : "black"} _hover={{ bg: "#" + averageBookCoverColorCode }} onClick={() => setCount(count + 1)}><AddIcon></AddIcon></Button>
			</HStack>
		</VStack>
	);
}

export default ItemCount;
