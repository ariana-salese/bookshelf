import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import theme from './Theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/700.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

const App = () => {
	return (
		<div id="app">
			<CartProvider>
				<ChakraProvider theme={theme}>
					<BrowserRouter>
						<NavBar/>
						<Routes>
							<Route exact path="/" element={<ItemListContainer trending={true}/>}/>
							<Route exact path="/catalogue" element={<ItemListContainer trending={false}/>}/>
							<Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
							<Route exact path="/item/:itemId/:color/:isDark" element={<ItemDetailContainer/>}/>
							<Route exact path="/checkout" element={<Cart/>}/>
						</Routes>
						<Footer/>
					</BrowserRouter>
				</ChakraProvider>
			</CartProvider>
		</div>
	)
}

export default App