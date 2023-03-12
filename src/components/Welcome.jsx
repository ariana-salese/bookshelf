import React from 'react'
import bookshelf from '../assets/bookshelf.svg'
import { Center, Box, Text } from '@chakra-ui/react'

// TODO change name
const Notice = ({ note }) => {
  return (
    <Box h="30rem" bgImage={bookshelf}>
        <Center h="inherit">
            <Text textShadow='2px 2px black' color="white" fontSize='6xl'>{note}</Text>
        </Center>
    </Box>
  )
}

export default Notice