import { Button, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = ({bookCount}) => {
    return (
            <Link to="/checkout">
                <Button>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <Text>{bookCount}</Text>
                </Button> 
            </Link>
            
    )
}

export default CartWidget