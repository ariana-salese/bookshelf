import { Center, Container, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Item from './Item'
import React from 'react'

const ItemList = ( { books, title } ) => {
     return (
        <div>
            <Center>
                <Heading m={3} color="white">
                    {title}
                </Heading>
            </Center>
            <Wrap spacing='2.5rem' justify='center'>
                {books.map((book) => (
                    <WrapItem>
                        <Item
                            key={book.id}
                            id={book.id}
                            name={book.name}
                            author={book.author}
                            description={book.description}
                            price={book.price}
                            stock={book.stock}
                            category={book.category}
                            img={book.img}
                            trending={book.trending}
                        />
                    </WrapItem>
                ))}  
            </Wrap> 
        </div>
        
  )
}

export default ItemList