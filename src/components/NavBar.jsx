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

	const categories = [{name: 'bussines', id: '3'},  {name: 'fantasy', id: '1'}, 
						{name: 'fiction', id: '2'}, {name: 'mystery', id: '4'}, 
						{name: 'nonfiction', id: '6'}, {name: 'thriller', id: '5'}]

	const getCategoryLink = (category, i) => {
		return <Link key={i} to={`/category/${category.id}`}>
					<MenuItem>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</MenuItem>
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