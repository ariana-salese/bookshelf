import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React, { useContext } from 'react'
import { Button, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const ItemCount = ( { book, averageBookCoverColorCode, averageBookCoverColorIsDark } ) => {
	console.log('book in item count: ' + book.name)
	const { books, bookCount, addBooks, removeBooks } = useContext(CartContext);
	const [count, setCount] = useState(0);

	return (
		<VStack>
			<Tooltip label="Please select amout" isDisabled={count != 0} placement='top'>
				<Link to="/catalogue">
					<Button onClick={ () => addBooks(book, count, averageBookCoverColorCode, averageBookCoverColorIsDark)} className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + averageBookCoverColorCode} color={averageBookCoverColorIsDark == "true" ? "white" : "black"} _hover={{ bg: "#" + averageBookCoverColorCode }} isDisabled={count == 0} width='9.5rem'>Buy</Button>
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
