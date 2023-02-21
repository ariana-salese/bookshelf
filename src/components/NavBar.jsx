import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Box,
	Image,
	Flex,
	Spacer
  } from '@chakra-ui/react'

const NavBar = () => {

	const categories = ['bussines', 'cookbooks', 'romance', 'fantasy', 
						'fiction', 'history', 'horror', 'mystery', 'nonfiction',
						'romance', 'science', 'science fiction', 'self help', 
						'sports', 'thriller']

	const getCategoryLink = (category) => {
		return <Link to={`/category/${category}`}>
					<MenuItem>{category.charAt(0).toUpperCase() + category.slice(1)}</MenuItem>
				</Link>
	}

	return (
		<Box p={2} bg="black">
			<Flex alignItems='center'>
				<Link to="/">
					<Image id="logo" mx={2} boxSize="9rem" src={logo} alt="Bookshelf's logo" />
				</Link>
				<Spacer/>
				<Flex>
					<Link to="/catalogue">
						<Button mx={3}>Catalogue</Button>
					</Link>
					<Spacer/>
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
							Genres
						</MenuButton>
						<MenuList>
							{categories.map((category) => (getCategoryLink(category)))}
						</MenuList>
					</Menu>
					<Spacer/>
					<Box mx={3}>
						<CartWidget/>
					</Box>
				</Flex>
			</Flex>
		</Box>
	)
}

export default NavBar