import { DeleteIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';

/**
 * Button to clear cart with alert dialog for confirmation
 * 
 * @returns clear cart button
 */
export const ClearCartButton = () => {
    const { setBooks } = useContext(CartContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    /**
	 * Clears cart (removes all books) and sets count to 0
	 */
	const clear = () => {
		setBooks({});
	}
  
    return (
        <>
            <Button className='size_transition' boxShadow={'1px 1px 8px #e6e6e6'} onClick={onOpen}>Clear cart</Button>
    
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Clear cart
                        </AlertDialogHeader>
            
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
            
                        <AlertDialogFooter>
                            {/* Cancel button */}
                            <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                            {/* Clear cart button */}
                            <Button className='size_transition' color='white' backgroundColor='#962929' _hover={{ bg: '#962929', color: "white" }} onClick={() => {clear(); onClose}} ml={3}><DeleteIcon></DeleteIcon></Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
