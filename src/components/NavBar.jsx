import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import {Menu, MenuButton, MenuList, MenuItem, Button, Box, Image, Flex, Spacer} from '@chakra-ui/react'

/**
 * NavBar with catalogue, categories(genres) and cart buttons
 * 
 * @returns navbar
 */
const NavBar = () => {
	//TODO
	const categories = [{name: 'bussines !!', id: '3'},  {name: 'cookbooks', id: '8'},
						{name: 'fantasy !!', id: '1'}, {name: 'fiction !!', id: '2'},
						{name: 'history', id: '9'}, {name: 'horror', id: '10'},
						{name: 'mystery', id: '4'}, {name: 'nonfiction', id: '6'},
						{name: 'romance !!', id: '7'}, {name: 'science fiction', id: '11'},
						{name: 'self help', id: '12'}, {name: 'sports', id: '13'},
						{name: 'thriller', id: '5'}]

	return (
		<Box p={2}>
			<Flex alignItems='center'>
				{/* Logo */}
				<Link to="/">
					<Image id="logo" mx={2} boxSize="9rem" src={logo} alt="Bookshelf's logo" />
				</Link>
				<Spacer/>
				{/* buttons */}
				<Flex>
					{/* catalogue */}
					<Link to="/catalogue">
						<Button mx={3}>Catalogue</Button>
					</Link>
					<Spacer/>
					{/* Genres */}
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
							Genres
						</MenuButton>

						<MenuList>
							{categories.map((category, i) => (
								<Link key={i} to={`/category/${category.id}`}>
									<MenuItem>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</MenuItem>
								</Link>
							))}
						</MenuList>
					</Menu>
					<Spacer/>
					{/* Cart */}
					<Box mx={3}>
						<CartWidget/>
					</Box>
				</Flex>
			</Flex>
		</Box>
	)
}

export default NavBar