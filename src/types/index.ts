export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    pageCount: number;
    categories: string[];
    publisher: string;
    publishedDate: string;
    previewLink: string;
  };
}

export type StackParamList = {
  Home: undefined;
  Book: {
    bookId: string;
  };
  Bookshelves: undefined;
};

export enum Bookshelves {
  WantToRead,
  Read,
  CurrentlyReading,
}

export interface IBookshelf {
  bookId: string;
  bookshelfId: Bookshelves;
}
