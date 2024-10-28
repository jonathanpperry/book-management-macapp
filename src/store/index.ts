import {create} from 'zustand';
import {Bookshelves, IBookshelf} from '../types';

type Store = {
  books: IBookshelf[];
  addBook: (bookId: string, bookshelfId: Bookshelves) => void;
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
}));

export default useBookshelves;
