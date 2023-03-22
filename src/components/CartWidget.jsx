import { Button, Text, Tooltip} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

/**
 * Renders a button to access cart
 * 
 * @returns cart widget button
 */
const CartWidget = () => {
    const { bookCount } = useContext(CartContext);
    const count = bookCount();

    return (
        <Tooltip isDisabled={count != 0} label="Your cart is empty!" aria-label='A tooltip'>
            <Link to="/checkout">
                <Button isDisabled={count == 0}>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <Text>{count}</Text>
                </Button>
            </Link>
        </Tooltip> 
    )
}

export default CartWidget