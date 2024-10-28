import React from 'react';
import {IBookshelf} from '../types';
import useBook from '../hooks/useBook';
import {ActivityIndicator, Text} from 'react-native';
import BookItem from './BookItem';

const BookshelfItem = (props: IBookshelf) => {
  const {bookId} = props;

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;

  if (error) return <Text>Error</Text>;

  if (data) return <BookItem {...data} />;
};

export default BookshelfItem;
