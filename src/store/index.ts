import {create} from 'zustand';
import {Bookshelves, IBookshelf} from '../types';

type Store = {
  books: IBookshelf[];
  addBook: (bookId: string, bookshelfId: Bookshelves) => void;
  updateBook: (bookId: string, bookshelfId: Bookshelves) => void;
  removeBook: (bookId: string) => void;
};

const useBookshelves = create<Store>()(set => ({
  books: [],
  addBook: (bookId, bookshelfId) =>
    set(state => ({
      books: [
        ...state.books,
        {
          bookId,
          bookshelfId,
        },
      ],
    })),

  updateBook: (bookId, bookshelfId) =>
    set(state => ({
      books: state.books.map(book => {
        if (book.bookId === bookId)
          return {
            ...book,
            bookshelfId,
          };
        return book;
      }),
    })),

  removeBook: bookId =>
    set(state => ({
      books: state.books.filter(book => book.bookId !== bookId),
    })),
}));

export default useBookshelves;
