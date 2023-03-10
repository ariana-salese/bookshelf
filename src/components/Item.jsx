import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Highlight, Image, Spacer, Stack, StackDivider, Text, Tooltip } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FastAverageColor } from 'fast-average-color'
import { StarIcon } from '@chakra-ui/icons'

const Item = ({ book }) => {
    const [color, setColor] = useState({hex: "#000000", isDark: true});

    const calculateColor = () => {
        const fastAverageColor = new FastAverageColor();
        return fastAverageColor.getColorAsync(book.img, { algorithm: 'dominant' })
	};

    useEffect(() => {
		calculateColor().then((color) => setColor(color));
  	}, [color]); 

    const getDataAsText = (data, text, i) => {
        return <Text key={i} pt='2' fontSize='sm'>
                    <Highlight query={[text]} styles={{fontWeight: 'bold' }}>
                        {text + data}
                    </Highlight>
                </Text>
    }
    
    return (
        <Card width='20rem' boxShadow={'3px 3px 10px #7e7e7e'} my={2}>
            <CardHeader height='3.5rem'>
                <Flex>
                    <Heading size='md'>{book.name}</Heading>
                    <Spacer/>
                    {book.trending && <Tooltip label="This book is trending!" aria-label='A tooltip'><StarIcon></StarIcon></Tooltip>}
                </Flex>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Center>
                        <Image src={book.img} height="15rem" boxShadow={'1px 1px 10px #000000'}></Image>
                    </Center>
                    <Box>
                        {
                            [[book.author, "Author: "], 
                            [book.price, "Price: $"], 
                            [book.stock, "Stock: "], 
                            [book.category, "Genre: "]].map((data, i) => (
                                getDataAsText(data[0], data[1], i)
                            ))
                        }
                    </Box>
                </Stack>
                <Center marginBlockStart={3}>
                    <Link to={`/item/${book.id}/${String(color.hex).slice(1)}/${color.isDark}`}>
                        <Button className="size_transition" boxShadow={'1px 1px 8px gray'} _hover={{ bg: color.hex, color: color.isDark ? "white" : "black" }} color="white" bgColor={"black"}>Detail</Button>
                    </Link>
                </Center>
            </CardBody>
        </Card>
    )
}

export default Item