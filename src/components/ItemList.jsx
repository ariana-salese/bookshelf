import { Center, Container, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Item from './Item'
import React from 'react'
import bookshelf from '../assets/bookshelf.svg'

const ItemList = ( { books, title } ) => {
     return (
        <div>
            <Center>
                <Heading m={3} color="white">
                    {title}
                </Heading>
            </Center>
            {   
                books.length == 0 ? 
                <Center height={'65vh'} bgImage={bookshelf}>
                    <Text color={'white'} fontSize='5xl' fontWeight={'bold'}>Sorry! There are no books available</Text>
                </Center>
                : 
               <Wrap spacing='2.5rem' justify='center'>
                    {books.map((book, i) => (
                        <WrapItem key={i}>
                            <Item
                                id={book.id}
                                name={book.name}
                                author={book.author}
                                price={book.price}
                                stock={book.stock}
                                category={book.category}
                                img={book.img}
                                trending={book.trending}
                            />
                        </WrapItem>
                    ))}  
                </Wrap>  
            }
            
        </div>
        
  )
}

export default ItemList