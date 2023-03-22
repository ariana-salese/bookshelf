import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, Center, StackDivider, Text, useDisclosure, VStack, Highlight, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { ClearCartButton } from './ClearCartButton';
import ConfirmPurchaseForm from './ConfirmPurchaseForm';
import Notice from './Notice';

/**
 * Renders all books in the cart and their data and purchase confirmation.
 * 
 * @returns cart
 */
const Cart = () => {
    const { books, setBooks, bookCount } = useContext(CartContext);
    const bookIds = Object.keys(books);
    const [count, setBookCount] = useState(bookCount());
    const { isOpen, onOpen, onClose } = useDisclosure()

    /**
     * Updates when cart is modified
     */
    useEffect(() => {
  	}, [count]); 

    /**
	 * TODO
	 */
	const totalPrice = () => {
		let price = 0;

		Object.values(books).forEach(book => {
			price = price + book.data.price * book.count
		});

		return price
	}

    /**
	 * Decreases by one the current quantity of the book with the given id and
	 * updates book count
	 * 
	 * @param {number} id
	 */
	const removeBook = (id) => {
		if (!(id in books)) return

		books[id].count = books[id].count - 1;
		if (books[id].count == 0) delete books[id]
		setBooks(books);
        setBookCount(bookCount());
	}

	/**
	 * Deletes the book with the given id and updates book count.
	 * 
	 * @param {number} id
	 */
	const deleteBook = (id) => {
		if (!(id in books)) return
		delete books[id];
		setBooks(books);
        setBookCount(bookCount());
	}

    /**
	 * Increases by one the current quantity of the book with the given id and
	 * updates book count
	 * 
	 * @param {number} id
	 */
	const addBook = (id) => {
		if (!(id in books)) return 

		books[id].count = books[id].count + 1;
		setBooks(books);
        setBookCount(bookCount());
	}

    // Empty cart
    if (count == 0) {
        return (
            <Box>
                <Notice note={'Your cart is empty!'}></Notice>
            </Box>
        )
    }
    // Cart not empty
    return (
        <Box minH='70vh'>
            {/* List of books in cart */}
            <VStack p={3}>
                {bookIds.map((id, i) => ( 
                    <Card key={i} width={'40vw'} boxShadow={'3px 3px 10px #7e7e7e'}>
                        <CardBody>
                            <Flex justifyContent={'space-around'} alignItems={'center'}>
                                <Image src={books[id].data.img} height="12rem" boxShadow={'1px 1px 10px #000000'}></Image>
                                {/* Data of book in cart*/}
                                <Box>
                                    <Box width={'20vw'}>
                                        <Heading textAlign={'center'} fontSize='3xl' paddingBottom={5}>{books[id].data.name}</Heading>
                                        <Text textAlign={'center'}>{"Price per unit: $" + books[id].data.price}</Text>
                                        <Text textAlign={'center'}>{"Amount selected: " + books[id].count}</Text>
                                    </Box>
                                    <Text textAlign={'center'} fontWeight={'bold'} paddingBlockStart={5}>{"Total price: $" + (books[id].count * books[id].data.price)}</Text>
                                    <Center m={2}>
                                        <Link to={`/item/${id}/${books[id].averageBookCoverColorCode}/${books[id].averageBookCoverColorIsDark}`}>
                                            <Button className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}>Detail</Button>
                                        </Link>
                                    </Center>
                                </Box>
                                {/* Buttons to edit quantity of book in cart */}
                                <VStack>
                                    {
                                        [[addBook, <AddIcon/>], 
                                        [removeBook, <MinusIcon/>],
                                        [deleteBook, <DeleteIcon/>]].map((data, i) =>
                                            <Button key={i} onClick={ () => data[0](id)} className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}>{data[1]}</Button>
                                        )  
                                    }
                                </VStack>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
                {/* Total price and quantity */}
                <Card width={'40vw'}>
                    <CardBody p={2}>
                        <VStack divider={<StackDivider />}> 
                            <Text textAlign={'center'} fontSize={'xl'}>
                                <Highlight query={['Total quantity: ']} styles={{fontWeight: 'bold' }}>
                                    {'Total quantity: ' + count}
                                </Highlight>
                            </Text>
                            <Text textAlign={'center'} fontSize={'xl'}>
                                <Highlight query={['Total price: ']} styles={{fontWeight: 'bold' }}>
                                    {'Total price: $' + totalPrice()}
                                </Highlight>
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
                <HStack spacing='50px' paddingTop={4}>
                    {/* Clear cart button */}
                    <ClearCartButton/>
                    {/* Confirm cart button */}
                    <Button className='size_transition' boxShadow={'1px 1px 8px #e6e6e6'} onClick={onOpen}>Confirm Cart</Button>
                </HStack>
            </VStack>
            {/* Form to complete purchase if cart content was confirmed */}
            <ConfirmPurchaseForm isOpen={isOpen} onOpen={onOpen} onClose={onClose}></ConfirmPurchaseForm>
        </Box>
    )
}

export default Cart