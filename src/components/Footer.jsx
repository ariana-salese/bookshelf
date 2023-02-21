import { Box, Center, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box p={2} bg="black">
        <Center>
            <Text color="white">
                demo E-commerce made by{' '}
                <Link color='white' href='https://github.com/ariana-salese'>
                    Ariana Salese
                </Link>
            </Text>
        </Center>
    </Box>
  )
}

export default Footer