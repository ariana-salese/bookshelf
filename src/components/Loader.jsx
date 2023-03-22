import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

/**
 * Loading spiner and note if provided
 * 
 * @param {string} note 
 * @returns 
 */
const Loader = ({ note }) => {
    return (
        <Box height={'70vh'}>
            <Flex direction={'column'} alignItems={'center'} justifyContent='center' height={'70vh'}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='gray.700'
                    size='xl'
                    m={3}
                /> 
                <Text color='white'>{note}</Text>
            </Flex>
             
        </Box>
        
  )
}

export default Loader