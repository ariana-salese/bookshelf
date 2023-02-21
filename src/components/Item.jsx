import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Highlight, Image, Spacer, Stack, StackDivider, Text, Tooltip } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FastAverageColor } from 'fast-average-color'
import { StarIcon } from '@chakra-ui/icons'

const Item = ({ id, name, author, description, price, stock, category, img, trending }) => {
    const [color, setColor] = useState([]);

    const calculateColor = () => {
        const fastAverageColor = new FastAverageColor();
        return fastAverageColor.getColorAsync(img, { algorithm: 'dominant' })
	};

    useEffect(() => {
		calculateColor().then((color) => setColor(color));
        console.log("color set")
  	}, []); 
    
    return (
        <Card width='20rem' boxShadow={'3px 3px 10px #7e7e7e'} my={2}>
            <CardHeader height='3.5rem'>
                <Flex>
                    <Heading size='md'>{name}</Heading>
                    <Spacer/>
                    {trending ? <Tooltip label="This book is trending!" aria-label='A tooltip'><StarIcon></StarIcon></Tooltip> : <></>}
                </Flex>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Center>
                        <Image src={img} height="15rem" boxShadow={'1px 1px 10px #000000'}></Image>
                    </Center>
                    <Box>
                        {/* TODO crear componente para no repetir */}
                        <Text pt='2' fontSize='sm'>
                            <Highlight query={['Author']} styles={{fontWeight: 'bold' }}>
                                {"Author " + author}
                            </Highlight>
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            <Highlight query={['Price']} styles={ {fontWeight: 'bold' }}>
                                {"Price: $" + price}
                            </Highlight>
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            <Highlight  query={['Stock']} styles={ {fontWeight: 'bold' }}>
                                {"Stock: " + stock}
                            </Highlight>
                        </Text>
                        <Text pt='2' fontSize='sm' >
                            <Highlight query={['Genre']} styles={ {fontWeight: 'bold' }}>
                                {"Genre: " + category}
                            </Highlight>
                        </Text>
                    </Box>
                </Stack>
                <Center marginBlockStart={3}>
                    <Link to={`/item/${id}`}>
                        <Button  _hover={{ bg: "gray.700" }} color="white" bgColor={color.hex}>Detail</Button>
                    </Link>
                </Center>
            </CardBody>
        </Card>
    )
}

export default Item