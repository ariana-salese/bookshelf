import { Box, Center, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
      <Center p={2} bg="black" height={'10vh'} marginBlockStart={2}> 
          <Text color="white">
              demo E-commerce made by{' '}
              <Link color='white' href='https://github.com/ariana-salese'>
                  Ariana Salese
              </Link>
          </Text>
      </Center>
  )
}

export default Footer