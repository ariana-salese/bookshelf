import { AddIcon, DeleteIcon, EditIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, Center, Container, Flex, Heading, HStack, Image, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import Notice from './Welcome';

{/* TODO
    Form(solo con productos en el carro), idCompra
*/}

const Checkout = () => {
    const { books, bookCount, addBooks, addBook, removeBook, deleteBook, clear } = useContext(CartContext);
    const bookIds = Object.keys(books);

    useEffect(() => {
  	}, [bookCount, books]); 

    return (
        <div>
            {
            bookCount == 0 ? <Notice note={'Your cart is empty!'}></Notice>
            :
           <VStack p={3}>
                {bookIds.map((id, i) => ( 
                    <Card key={i} width={'40vw'} boxShadow={'3px 3px 10px #7e7e7e'}>
                        <CardBody>
                            <Flex justifyContent={'space-around'} alignItems={'center'}>
                                <Image src={books[id].data.img} height="12rem" boxShadow={'1px 1px 10px #000000'}></Image>
                                <Box>
                                    <Box width={'20vw'}>
                                        <Heading fontSize='3xl' paddingBottom={5}>{books[id].data.name}</Heading>
                                        <Text>{"Price per unit: $" + books[id].data.price}</Text>
                                        <Text>{"Amount selected: " + books[id].count}</Text>
                                    </Box>
                                    <Text fontWeight={'bold'} paddingBlockStart={5}>{"Total price: $" + (books[id].count * books[id].data.price)}</Text>
                                    <Center m={2}>
                                        <Link to={`/item/${id}/${books[id].averageBookCoverColorCode}/${books[id].averageBookCoverColorIsDark}`}>
                                        <Button className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}>Detail</Button>
                                    </Link>
                                    </Center>
                                </Box>
                                <VStack>
                                    <Button onClick={ () => addBook(id)} className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}><AddIcon></AddIcon></Button>
                                    <Button onClick={ () => removeBook(id)} className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}><MinusIcon></MinusIcon></Button>
                                    <Button onClick={ () => deleteBook(id)} className="size_transition" boxShadow={'1px 1px 8px gray'}  _hover={{ bg: "black", color: "white" }} color="white" bgColor={"black"}><DeleteIcon></DeleteIcon></Button>
                                </VStack>
                            </Flex>
                            
                        </CardBody>
                    </Card>
                ))}
                <Button onClick={ () => clear()}>Clear cart</Button>
            </VStack> 
        }
        </div>
        
    )
}

export default Checkout