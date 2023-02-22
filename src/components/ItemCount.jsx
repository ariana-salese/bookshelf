import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Center, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ( { color, isDark } ) => {
	const [count, setCount] = useState(0);

	return (
		<VStack>
			<Tooltip label="Please select amout" isDisabled={count != 0} placement='top'>
				<Link to="/catalogue">
					<Button className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + color} color={isDark == "true" ? "white" : "black"} _hover={{ bg: "#" + color }} isDisabled={count == 0} width='9.5rem'>Buy</Button>
				</Link>
			</Tooltip>
			<HStack spacing={6}>
				<Button className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + color} color={isDark == "true" ? "white" : "black"} _hover={{ bg:  "#" + color}} onClick={count == 0 ? () => setCount(0) : () => setCount(count - 1)}><MinusIcon></MinusIcon></Button>
				<Text>{count}</Text>
				<Button className="size_transition" boxShadow={'1px 1px 8px gray'} bgColor={"#" + color} color={isDark == "true" ? "white" : "black"} _hover={{ bg: "#" + color }} onClick={() => setCount(count + 1)}><AddIcon></AddIcon></Button>
			</HStack>
		</VStack>
	);
}

export default ItemCount;
