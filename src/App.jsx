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

const App = () => {
	return (
		<div id="app">
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<NavBar/>
					<Routes>
						{/* <Route exact path="/" element={<Welcome greeting = "Welcome to Bookshelf store"/>}/> */}
						<Route exact path="/" element={<ItemListContainer trending={true} />}/>
						<Route exact path="/catalogue" element={<ItemListContainer trending={false} />}/>
						<Route exact path="/category/:category" element={<ItemListContainer/>}/>
						<Route exact path="/item/:id/:color/:isDark" element={<ItemDetailContainer/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</ChakraProvider>
		</div>
		
	)
}

export default App