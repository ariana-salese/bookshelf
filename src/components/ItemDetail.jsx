import { Box, Card, CardBody, CardHeader, Center, Container, Heading, Highlight, HStack, Image, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( { id, name, author, price, description, stock, category, img, trending } ) => {
    return (
        <Card marginBlockStart={5} className="main_card">
            <CardBody width={'90vw'}>
                <HStack divider={<StackDivider />} spacing='4'>
                    <Container maxW='300px'>
                        <CardHeader>
                            <Heading>
                                {name}
                            </Heading>
                        </CardHeader>
                        <Center>
                            <Image src={img} height="20rem" boxShadow={'1px 1px 10px #000000'}></Image>
                        </Center>
                        <Box paddingBlockStart={3}>
                            <Text pt='2' fontSize='md'>
                                <Highlight query={['Author']} styles={{fontWeight: 'bold' }}>
                                    {"Author: " + author}
                                </Highlight>
                            </Text>
                            <Text pt='2' fontSize='md'>
                                <Highlight query={['Price']} styles={ {fontWeight: 'bold' }}>
                                    {"Price: $" + price}
                                </Highlight>
                            </Text>
                            <Text pt='2' fontSize='md'>
                                <Highlight  query={['Stock']} styles={ {fontWeight: 'bold' }}>
                                    {"Stock: " + stock}
                                </Highlight>
                            </Text>
                            <Text pt='2' fontSize='md' >
                                <Highlight query={['Genre']} styles={ {fontWeight: 'bold' }}>
                                    {"Genre: " + category}
                                </Highlight>
                            </Text>
                        </Box>
                    </Container> 
                    <Container maxW='1000px'>
                        <Box>
                            <Heading>
                                Description
                            </Heading>
                            <Center>
                                <Text>
                                    {description}
                                </Text>
                            </Center>
                        </Box>
                        <Center paddingBlockStart={8}>
                            <ItemCount/>
                        </Center>
                    </Container>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default ItemDetail