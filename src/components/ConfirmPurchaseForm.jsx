import React, { useContext } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react';
import { Button, Center, Flex, FormControl, FormLabel, Input, Box, DrawerFooter, DrawerBody, Textarea, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext'

/**
 * Form to confirm purchase. Once confirmed updates database
 * 
 * @returns confirm purchase form
 */
const ConfirmPurchaseForm = ( {isOpen,  onClose} ) => {
    const { books, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [repeatedEmail, setRepeatedEmail] = useState("");
    const [phone, setPhone] = useState(null);
    const [note, setNote] = useState("");
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

    const db = getFirestore()
    const ordersCollection = collection(db, 'order') 

    /**
     * Handles submit to confirm purchase. Adds a doc to the 
     * datbase with the new order data
     */
    const handleSubmit = (e) => {
        const fecha = new Date();
        const cartData = getRelevantCartData();
        const order = {name, email, phone, note, fecha, cartData};

        e.preventDefault();
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
        setPurchaseConfirmed(true)
    };

    /**
     * Obtains relevant data from the cart. 
     * @example
     * {
     *  'hw12Am':
     *   {
     *    count: 3
     *    price: 3000
     *    name: 'Spice Road'
     *   },
     *  ...
     * }
     * 
     * @returns {Object<Object>} Object with books id's as key and data as value
     */
    const getRelevantCartData = () => {
        const data = {}

        for (const key of Object.keys(books)) {
            data[key] = {count: books[key].count, price: books[key].data.price, name: books[key].data.name}
        }

        return data
    }

    /**
     * Validates email and repeated email
     * 
     * @returns {boolean} true if email and repeated email are valid
     */
    const validateEmail = () => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(validRegex) && repeatedEmail == email
    }

    /**
     * Validates input (email, name and repeated email)
     * 
     * @returns {boolean} true if input is valid
     */
    const validateInput = () => {
        return email != "" && name != "" && validateEmail(email)
    }

    return (
        <Drawer isOpen={isOpen} placement='bottom'>
            <DrawerOverlay />
            <DrawerContent>
                {
                    purchaseConfirmed ?
                        // Purchase confirmed
                        <DrawerBody>
                            <DrawerHeader textAlign={'center'} borderBottomWidth='2px'>Thank you for your purchase!</DrawerHeader>
                            {/* Order information */}
                            <Flex flexDirection='column' alignItems='center'>
                                <Text fontSize='xl' p={2}>Order id: {orderId}</Text>
                                <Text fontSize='xl' p={2}>All the information regarding your purchase will be sent to the email provided</Text>
                            </Flex>
                            {/* Finish button */}
                            <DrawerFooter borderTopWidth='1px' justifyContent={'center'}>
                                <Link to="/">
                                    <Button onClick={() => {clear(); onClose}}>Finish</Button>
                                </Link>
                            </DrawerFooter> 
                        </DrawerBody>
                        
                    :   
                        // Purchase yet to be confirmed
                        <DrawerBody>
                            <DrawerHeader textAlign={'center'} borderBottomWidth='2px'>Confirm purchase</DrawerHeader>
                                <Center paddingBottom={4}>
                                    <Flex width={'40vw'} flexDirection='column' alignItems='center'>
                                        {/* Full name */}
                                        <FormControl isRequired marginTop={6}>
                                            <FormLabel>Full name</FormLabel>
                                            <Input 
                                                focusBorderColor='gray.500'
                                                variant='filled'
                                                type='text'
                                                placeholder='Full name'
                                                onChange={(e) => setName(e.target.value)}/>
                                        </FormControl>
                                        {/* Email */}
                                        <FormControl isRequired marginTop={6}>
                                            <FormLabel>Email</FormLabel>
                                            <Input 
                                                focusBorderColor='gray.500'
                                                variant='filled'
                                                type='email'
                                                placeholder='Email'
                                                onChange={(e) => setEmail(e.target.value)}/>
                                        </FormControl>
                                        {/* Repeat Email */}
                                        <FormControl isRequired marginTop={6}>
                                            <FormLabel>Repeat email</FormLabel>
                                            <Input 
                                                focusBorderColor='gray.500'
                                                variant='filled'
                                                type='email'
                                                placeholder='Email'
                                                onChange={(e) => setRepeatedEmail(e.target.value)}/>
                                        </FormControl>
                                        {/* Phone number */}
                                        <Box width={'inherit'} marginTop={6}>
                                            <FormLabel>Phone</FormLabel>
                                            <Input 
                                                focusBorderColor='gray.500'
                                                variant='filled'
                                                type='tel'
                                                placeholder='Phone'
                                                onChange={(e) => setPhone(e.target.value)}/>
                                        </Box>
                                        {/* Optional Note */}
                                        <Box width={'inherit'} marginTop={6}>
                                            <FormLabel>Note</FormLabel>
                                            <Textarea
                                                variant='filled'
                                                focusBorderColor='gray.500'
                                                placeholder='Is there something that we should know?'
                                                onChange={(e) => setNote(e.target.value)}/>
                                        </Box>
                                    </Flex>
                                </Center>
                                {/* Confirm and close buttons */}
                                <DrawerFooter borderTopWidth='1px' justifyContent={'center'}>
                                    <Button className='size_transition' mr={3} onClick={onClose}>Close</Button>
                                    {/* Confirm puchase if input is valid */}
                                    <Tooltip isDisabled={validateInput()} label={(email == "" || repeatedEmail == ""  || name == "") ? 'Name or email missing!' : 'Invalid email!'} placement='right' backgroundColor={'#962929'}>
                                        <Button isDisabled={!validateInput()} className='size_transition' onClick={handleSubmit} color='white' backgroundColor='black' _hover={{ bg: 'black' }}>Confirm</Button>
                                    </Tooltip>
                                </DrawerFooter>
                        </DrawerBody>  
                }
            </DrawerContent>
        </Drawer>
        
        
    )
}

export default ConfirmPurchaseForm