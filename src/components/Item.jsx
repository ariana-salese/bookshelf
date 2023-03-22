import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Highlight, Image, Spacer, Stack, StackDivider, Text, Tooltip } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FastAverageColor } from 'fast-average-color'
import { StarIcon } from '@chakra-ui/icons'

/**
 * Renders a small card with all the data from the given book 
 * 
 * @param {Object} book 
 * @example
 * {
 *  "name": "Spice road",
 *  "author": "Maiya Ibrahim",
 *  "price": 3000,
 *  "description":
 *  "The first book in an epic fantasy [...]",
 *  "stock": 10,
 *  "category": "Fantasy",
 *  "categoryId": "1",
 *  "trending": false,
 *  "img": img2
 * }  
 *  
 * @returns chakra-ui Card
 */
const Item = ({ book }) => {
    const [color, setColor] = useState({hex: "#000000", isDark: true});

    /**
     * Returns the average color of the book cover.
     * For more information: 
     * @link https://www.npmjs.com/package/fast-average-color
     * 
     * @returns color
     * @example
     * {
     *  error: null,
     *  rgb: 'rgb(255, 0, 0)',
     *  rgba: 'rgba(255, 0, 0, 1)',
     *  hex: '#ff0000',
     *  hexa: '#ff0000ff',
     *  value: [255, 0, 0, 255],
     *  isDark: true,
     *  isLight: false
     * }
     */
    const calculateColor = () => {
        const fastAverageColor = new FastAverageColor();
        return fastAverageColor.getColorAsync(book.img, { algorithm: 'dominant' })
	};
    
    /**
     * Update when average color is obtained
     */
    useEffect(() => {
		calculateColor().then((color) => setColor(color));
  	}, [color]); 
    
    return (
        <Card width='20rem' boxShadow={'3px 3px 10px #7e7e7e'} my={2}>
            {/* Main information of the book */}
            <CardHeader height='3.5rem'>
                <Flex>
                    <Heading size='md'>{book.name}</Heading>
                    <Spacer/>
                    {/* Notifies if book is treinding */}
                    {book.trending && <Tooltip label="This book is trending!" aria-label='A tooltip'><StarIcon></StarIcon></Tooltip>}
                </Flex>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Center>
                        <Image src={book.img} height="15rem" boxShadow={'1px 1px 10px #000000'}></Image>
                    </Center>
                    {/* General information of the book */}
                    <Box>
                        {
                            [[book.author, "Author: "], 
                            [book.price, "Price: $"], 
                            [book.stock, "Stock: "], 
                            [book.category, "Genre: "]].map((data, i) => (
                                <Text key={i} pt='2' fontSize='sm'>
                                    <Highlight query={[data[1]]} styles={{fontWeight: 'bold' }}>
                                        {data[1] + data[0]}
                                    </Highlight>
                                </Text>
                            ))
                        }
                    </Box>
                </Stack>
                {/* Detail button */}
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