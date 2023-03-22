import { Center, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Item from './Item'
import React from 'react'
import Notice from './Notice'

/**
 * Shows all given books and their data under the specified title
 * 
 * @param {Array<Object>} books 
 * @example
 * [{
 *  "id": 2,
 * 	"name": "Spice road",
 * 	"author": "Maiya Ibrahim",
 * 	"price": 3000,
 * 	"description":
 * 	"The first book in an epic fantasy [...]",
 * 	"stock": 10,
 * 	"category": "Fantasy",
 * 	"categoryId": "1",
 * 	"trending": false,
 * 	"img": img
 * }, ...]
 * 
 * @param {string} listTitle
 * 
 * @returns book list with its data
 */
const ItemList = ( { books, listTitle } ) => {
     return (
        <div>
            <Center>
                <Heading m={3} color="white">
                    {listTitle}
                </Heading>
            </Center>
            {   
                books.length == 0 ? 
                    <Notice note='Sorry! There are no books available'/>
                : 
                    <Wrap spacing='2.5rem' justify='center'>
                        {books.map((book, i) => (
                            <WrapItem key={i}>
                                <Item book={book} bookId={book.id}/>
                            </WrapItem>
                        ))}  
                    </Wrap>  
            }
        </div>
    )
}

export default ItemList