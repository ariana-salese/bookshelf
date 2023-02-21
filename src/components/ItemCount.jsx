import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Center, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = () => {
	const [count, setCount] = useState(0);

	return (
		<VStack>
			<Tooltip label="Please select amout" isDisabled={count != 0} placement='top'>
				<Link to="/catalogue">
					<Button isDisabled={count == 0} width={'9.5rem'}>Buy</Button>
				</Link>
			</Tooltip>
			<HStack spacing={6}>
				<Button onClick={count == 0 ? () => setCount(0) : () => setCount(count - 1)}><MinusIcon></MinusIcon></Button>
				<Text>{count}</Text>
				<Button onClick={() => setCount(count + 1)}><AddIcon></AddIcon></Button>
			</HStack>
		</VStack>
	);
}

export default ItemCount;
