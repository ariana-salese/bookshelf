import React from 'react'
import bookshelf from '../assets/bookshelf.svg'
import { Box, Text, Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

/**
 * Used to notify the note specified. 
 * 
 * @param {string} note 
 * 
 * @returns notice 
 */
const Notice = ({ note }) => {
	return (
		<Box h="30.5rem" bgImage={bookshelf}>
        	<Flex h="inherit" flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            	<Text textShadow='2px 2px black' color="white" fontSize='6xl'>{note}</Text>
				<Link to="/catalogue">
					<Button className='size_transition' >See all books</Button>
				</Link>
        	</Flex>
    	</Box>
  )
}

export default Notice