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

	// TODO 
	// const categories = ['bussines', 'cookbooks', 'romance', 'fantasy', 
	// 					'fiction', 'history', 'horror', 'mystery', 'nonfiction',
	// 					'romance', 'science', 'science fiction', 'self help', 
	// 					'sports', 'thriller']

	const categories = ['bussines',  'fantasy', 
						'fiction', 'mystery', 
						'nonfiction', 'thriller']

	const getCategoryLink = (category, i) => {
		return <Link key={i} to={`/category/${category}`}>
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
							{categories.map((category, i) => (getCategoryLink(category, i)))}
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