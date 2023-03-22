import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

/**
 * Provides cartContext to other components
 */
export const CartProvider = ({ children }) => {
	const [books, setBooks] = useState({});

	/**
	 * Returns total count of books in cart
	 * 
	 * @returns total count
	 */
	const bookCount = () => {
		let count = 0;

		Object.values(books).forEach(book => {
			count += book.count
		});

		return count
	}	

	/**
	 * Updates books 
	 *
	 * !! This is necessary because otherwise the count of books in cartWidget is not updated
	 * 
	 */
	const updateBooks = (booksToSave) => {
		const newBooks = {};
		Object.keys(booksToSave).forEach((id) => newBooks[id] = booksToSave[id]);
		setBooks(newBooks);
	}	

	/**
	 * Clears cart (removes all books) and sets count to 0
	 */
	const clear = () => {
		setBooks({});
	}

	return (
		<CartContext.Provider value={{books, updateBooks, bookCount, clear}}>
			{children}
		</CartContext.Provider>
	)
}