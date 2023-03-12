import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

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

export const CartProvider = ({ children }) => {
	const [bookCount, setBookCount] = useState(0)
	const [books, setBooks] = useState({});

	/**
	 * Adds the specified quantity of the given book and updates book count.
	 * 
	 * @param {Object} data
	 * For example: {"id": 2,
					"name": "Spice road",
					"author": "Maiya Ibrahim",
					"price": 3000,
					"description":
						"The first book in an epic fantasy [...]",
					"stock": 10,
					"category": "Fantasy",
					"categoryId": "1",
					"trending": false,
					"img": img}
		@param {number} count
		@param {number} averageBookCoverColorCode
		@param {boolean} averageBookCoverColorIsDark
	 */
	const addBooks = (data, count, averageBookCoverColorCode, averageBookCoverColorIsDark) => { 

		const bookData = books[data.id] || {data: data, count: 0, averageBookCoverColorCode: averageBookCoverColorCode, averageBookCoverColorIsDark: averageBookCoverColorIsDark}
		bookData.count = bookData.count + count;
		books[data.id] = bookData;
		
		setBooks(books);
		setBookCount(bookCount + count);
	}

	/**
	 * Increases by one the current quantity of the book with the given id and
	 * updates book count
	 * 
	 * @param {number} id
	 */
	const addBook = (id) => {
		if (!(id in books)) { return }

		books[id].count = books[id].count + 1;
		setBooks(books);
		setBookCount(bookCount + 1);
	}

	/**
	 * Decreases by one the current quantity of the book with the given id and
	 * updates book count
	 * 
	 * @param {number} id
	 */
	const removeBook = (id) => {
		if (!(id in books)) { return }

		books[id].count = books[id].count - 1;
		if (books[id].count == 0) { books.delete(id) }
		setBooks(books);
		setBookCount(bookCount - 1);
	}

	/**
	 * Deletes the book with the given id and updates book count.
	 * 
	 * @param {number} id
	 */
	const deleteBook = (id) => {
		if (!(id in books)) { return }
		const countToDelete = books[id].count;
		delete books[id];
		setBooks(books);
		setBookCount(bookCount - countToDelete);
	}

	/**
	 * Clears cart (removes all books) and sets count to 0
	 */
	const clear = () => {
		setBooks({});
		setBookCount(0)
	}

	return (
		<CartContext.Provider value={{books, bookCount, addBooks, addBook, removeBook, deleteBook, clear}}>
			{children}
		</CartContext.Provider>
	)
}