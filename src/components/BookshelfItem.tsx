import React from 'react';
import {IBookshelf} from '../types';
import useBook from '../hooks/useBook';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BookItem from './BookItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useBookshelves from '../store';

const BookshelfItem = (props: IBookshelf) => {
  const {bookId} = props;

  const {data, isFetching, error} = useBook(bookId);

  const {removeBook} = useBookshelves();

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;

  if (error) return <Text>Error</Text>;

  if (data)
    return (
      <View style={styles.container}>
        <BookItem {...data} />

        <Pressable onPress={() => removeBook(bookId)}>
          <Icon name="delete" size={30} color="red" />
        </Pressable>
      </View>
    );
};

export default BookshelfItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
