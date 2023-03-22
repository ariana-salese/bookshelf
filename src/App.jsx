import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/700.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'
import { CartProvider } from './context/cartContext'

// ACTUALIZAR READ ME TODO
// Readme.md: El archivo debe estar en el root del proyecto para dar una breve
// introducción acerca de su proyecto y qué ideas o enfoque eligió para el
// mismo. Si incluyó dependencias extra por npm (por fuera de las trabajadas en
// clase), aparte debe hacer un resumen explicando sus decisiones.
//
//-clase con estilo de boton
//-revisar imports
//-agregar libros!
//-ver linter!
//-unificar css wtf
//-unificar boxShadow tengo un lio
//-FUNCIONE DELCADAS IGUAL
//-carpetas para diferentes componentes?
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