import { Button, Box } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
    return (
        <Box>
            <Button>
                <span>8</span>
                <span class="material-symbols-outlined">shopping_cart</span>
            </Button> 
        </Box>
    )
}

export default CartWidget