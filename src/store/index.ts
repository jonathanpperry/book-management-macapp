import {create} from 'zustand';
import {Bookshelves, IBookshelf} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  books: IBookshelf[];
  addBook: (bookId: string, bookshelfId: Bookshelves) => void;
  updateBook: (bookId: string, bookshelfId: Bookshelves) => void;
  removeBook: (bookId: string) => void;
  loadFromStorage: () => Promise<void>;
};

const syncWithLocalStorage = async (books: IBookshelf[]) => {
  try {
    const jsonValue = JSON.stringify(books);
    await AsyncStorage.setItem('books', jsonValue);
  } catch (e) {
    // saving error
  }
};

const useBookshelves = create<Store>()(set => ({
  books: [],
  addBook: (bookId, bookshelfId) => {
    set(state => {
      const updatedBooks = [
        ...state.books,
        {
          bookId,
          bookshelfId,
        },
      ];

      syncWithLocalStorage(updatedBooks);

      return {
        books: updatedBooks,
      };
    });
  },

  updateBook: (bookId, bookshelfId) => {
    set(state => {
      const updatedBooks = state.books.map(book => {
        if (book.bookId === bookId)
          return {
            ...book,
            bookshelfId,
          };
        return book;
      });

      syncWithLocalStorage(updatedBooks);

      return {
        books: updatedBooks,
      };
    });
  },

  removeBook: bookId => {
    set(state => {
      const updatedBooks = state.books.filter(book => book.bookId !== bookId);

      syncWithLocalStorage(updatedBooks);

      return {
        books: updatedBooks,
      };
    });
  },

  loadFromStorage: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('books');

      if (jsonValue !== null) {
        const books = JSON.parse(jsonValue);

        set({books});
      }
    } catch (error) {
      // Error reading value
    }
  },
}));

export default useBookshelves;
