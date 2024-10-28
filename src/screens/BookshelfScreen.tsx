import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Bookshelves} from '../types';
import SegmentedButtons from '../components/SegmentedButtons';
import {BOOK_SHELVES} from '../components/SelectBookshelf';
import GoBack from '../components/GoBack';
import useBookshelves from '../store';
import BookshelfItem from '../components/BookshelfItem';
import Divider from '../components/Divider';

const BookshelfScreen = () => {
  const [selectedBookshelf, setSelectedBookshelf] = useState(Bookshelves.Read);

  const {books} = useBookshelves();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBack />
        <SegmentedButtons
          buttons={BOOK_SHELVES}
          value={selectedBookshelf}
          setValue={setSelectedBookshelf}
        />
      </View>

      <FlatList
        data={books.filter(book => book.bookshelfId === selectedBookshelf)}
        renderItem={({item}) => <BookshelfItem {...item} />}
        keyExtractor={item => item.bookId}
        contentContainerStyle={{
          padding: 15,
          gap: 5,
        }}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default BookshelfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
  header: {
    padding: 15,
    gap: 10,
  },
});
