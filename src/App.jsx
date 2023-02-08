import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/700.css'

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<NavBar/>
			<ItemListContainer greeting = "Welcome to Bookshelf store"/>
		</ChakraProvider>
	)
}

export default App