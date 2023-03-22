import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

{
	/* TODO
		- Al clickear comprar en itemDetail se debe guardar en el cartContext el producto
		y su cantidad en forma de objeto {name price quantity etc} dentro del array de productos
		- CartContext debe tener la logica de no aceptar duplicados y manteser consistencia
		RECOMENDADO:
		- addItem(item, quantity)
		- removeItem(item, quantity)
		- clear() sacar todos
		- isInCart(id/nombre)

		- actualizar carrito

		EXTRA:
		- actualizar stock
	*/
}

/**
 * TODO
 * @param {*} param0 
 * @returns 
 */
export const CartProvider = ({ children }) => {
	const [books, setBooks] = useState({});

	/**
	 * TODO
	 */
	const bookCount = () => {
		let count = 0;

		Object.values(books).forEach(book => {
			count += book.count
		});

		return count
	}	

	return (
		<CartContext.Provider value={{books, setBooks, bookCount}}>
			{children}
		</CartContext.Provider>
	)
}