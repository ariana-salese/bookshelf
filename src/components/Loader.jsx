import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

const Loading = ({ loading }) => {
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
                <Text color='white'>{loading}</Text>
            </Flex>
             
        </Box>
        
  )
}

export default Loading