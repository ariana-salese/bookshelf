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
	return (
		<Box p={2} bg="black">
			<Flex alignItems='center'>
				<Link to="/">
					<Image id="logo" mx={2} boxSize="9rem" src={logo} alt="Bookshelf's logo" />
				</Link>
				<Spacer/>
				<Flex>
					<Link to="/catalogue"> {/* TODO catalogue without welcome */}
						<Button mx={3}>Catalogue</Button>
					</Link>
					<Spacer/>
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
							Genres
						</MenuButton>
						<MenuList>
							{/* TODO completar categorias */}
							{/* <MenuItem>Business</MenuItem> */}
							{/* <MenuItem>Cookbooks</MenuItem> */}
							<Link to={`/category/${"fantasy"}`}>
								<MenuItem>Fantasy</MenuItem>
							</Link>
							<Link to={`/category/${"fiction"}`}>
								<MenuItem>Fiction</MenuItem>
							</Link>
							{/* <MenuItem>History</MenuItem>
							<MenuItem>Horror</MenuItem> */}
							<Link to={`/category/${"mystery"}`}>
								<MenuItem>Mystery</MenuItem>
							</Link>
							{/* <MenuItem>Nonfiction</MenuItem>
							<MenuItem>Poetry</MenuItem> */}
							<Link to={`/category/${"romance"}`}>
								<MenuItem>Romance</MenuItem>
							</Link>
							{/* <MenuItem>Science</MenuItem>
							<MenuItem>Science Fiction</MenuItem>
							<MenuItem>Self Help</MenuItem>
							<MenuItem>Sports</MenuItem>*/}
							<Link to={`/category/${"thiller"}`}>
								<MenuItem>Thriller</MenuItem> 
							</Link>
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