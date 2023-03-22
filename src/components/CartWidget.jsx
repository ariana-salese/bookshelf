import { Button, Text, Tooltip} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

/**
 * Renders a button to access cart
 * 
 * @returns cart widget button
 */
const CartWidget = () => {
    const { bookCount } = useContext(CartContext);

    return (
        <Tooltip isDisabled={bookCount() != 0} label="Your cart is empty!" aria-label='A tooltip'>
            <Link to="/checkout">
                <Button isDisabled={bookCount() == 0}>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <Text>{bookCount()}</Text>
                </Button>
            </Link>
        </Tooltip> 
    )
}

export default CartWidget