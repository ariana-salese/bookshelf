import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
	return (
		<Box p={2} bg="black">
			<Flex alignItems='center'>
				<Image id="logo" mx={2} boxSize="9rem" src={logo} alt="Bookshelf's logo" />
				<Spacer/>
				<Flex>
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
							Genres
						</MenuButton>
						<MenuList>
							<MenuItem>Business</MenuItem>
							<MenuItem>Children's</MenuItem>
							<MenuItem>Cookbooks</MenuItem>
							<MenuItem>Fantasy</MenuItem>
							<MenuItem>Fiction</MenuItem>
							<MenuItem>History</MenuItem>
							<MenuItem>Horror</MenuItem>
							<MenuItem>Mystery</MenuItem>
							<MenuItem>Nonfiction</MenuItem>
							<MenuItem>Poetry</MenuItem>
							<MenuItem>Romance</MenuItem>
							<MenuItem>Science</MenuItem>
							<MenuItem>Science Fiction</MenuItem>
							<MenuItem>Self Help</MenuItem>
							<MenuItem>Sports</MenuItem>
							<MenuItem>Thriller</MenuItem>
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