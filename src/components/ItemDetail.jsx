import { StarIcon } from '@chakra-ui/icons'
import { Box, Card, CardBody, CardHeader, Center, Container, Heading, Highlight, HStack, Image, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( { id, name, author, price, description, stock, category, img, trending, isDark, color} ) => {

    const getDataAsText = (data, text) => {
        return <Text pt='2' fontSize='md'>
                    <Highlight query={[text]} styles={{fontWeight: 'bold' }}>
                        {text + ": " + data}
                    </Highlight>
                </Text>
    }

    return (
        <Card marginBlockStart={5} className="main_card">
            <CardBody width={'90vw'}>
                <HStack divider={<StackDivider />} spacing='4'>
                    <Container maxW='300px'>
                        <CardHeader>
                            <Heading>
                                {name}
                            </Heading>
                            {trending ? <Text color={isDark ? "#" + color : "black"}><StarIcon></StarIcon>Trending book!</Text> : <></>}
                        </CardHeader>
                        <Center>
                            <Image src={img} height="20rem" boxShadow={'1px 1px 10px #000000'}></Image>
                        </Center>
                        <Box paddingBlockStart={3}>
                            {
                                [[author, "Author"], 
                                [price, "Price"], 
                                [stock, "Stock"], 
                                [category, "Genre"]].map((data) => (
                                    getDataAsText(data[0], data[1])
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
                                    {description}
                                </Text>
                            </Center>
                        </Box>
                        <Center paddingBlockStart={8}>
                            <ItemCount color={color} isDark={isDark}/>
                        </Center>
                    </Container>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default ItemDetail