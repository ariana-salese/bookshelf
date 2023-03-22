import { StarIcon } from '@chakra-ui/icons'
import { Box, Card, CardBody, CardHeader, Center, Container, Heading, Highlight, HStack, Image, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( { book, averageBookCoverColorIsDark, averageBookCoverColorCode } ) => {
    return (
        <Center m={5}>
            <Card  className="main_card">
                <CardBody width={'90vw'}>
                    <HStack divider={<StackDivider />} spacing='4'>
                        <Container maxW='300px'>
                            <CardHeader>
                                <Heading>
                                    {book.name}
                                </Heading>
                                {book.trending && <Text color={averageBookCoverColorIsDark == "true" ? "#" + averageBookCoverColorCode : "black"}><StarIcon></StarIcon>Trending book!</Text>}
                            </CardHeader>
                            <Center>
                                <Image src={book.img} height="20rem" boxShadow={'1px 1px 10px #000000'}></Image>
                            </Center>
                            <Box paddingBlockStart={3}>
                                {
                                    [[book.author, "Author: "], 
                                    [book.price, "Price: $"], 
                                    [book.stock, "Stock: "], 
                                    [book.category, "Genre: "]].map((data, i) => (
                                        <Text key={i} pt='2' fontSize='md'>
                                            <Highlight query={[data[1]]} styles={{fontWeight: 'bold' }}>
                                                {data[1] + data[0]}
                                            </Highlight>
                                        </Text>
                                    ))
                                }
                            </Box>
                        </Container> 
                        <Container maxW='1000px'>
                            <Box>
                                <Heading>
                                    Description
                                </Heading>
                                <Center>
                                    <Text>
                                        {book.description}
                                    </Text>
                                </Center>
                            </Box>
                            <Center paddingBlockStart={8}>
                                <ItemCount book={book} averageBookCoverColorCode={averageBookCoverColorCode} averageBookCoverColorIsDark={averageBookCoverColorIsDark}/>
                            </Center>
                        </Container>
                    </HStack>
                </CardBody>
            </Card> 
        </Center>
    )
}

export default ItemDetail