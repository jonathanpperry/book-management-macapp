import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Bookshelves} from '../types';
import Icon from 'react-native-vector-icons/Entypo';
import useBookshelves from '../store';

const TickIcon = () => <Icon name="check" color="#4ecdc4" size={20} />;

export const BOOK_SHELVES = [
  {label: 'Want to Read', value: Bookshelves.WantToRead},
  {label: 'Read', value: Bookshelves.Read},
  {label: 'Currently Reading', value: Bookshelves.CurrentlyReading},
];

interface ISelectBookshelf {
  bookId: string;
}

const SelectBookshelf = (props: ISelectBookshelf) => {
  const {bookId} = props;
  const {addBook, books} = useBookshelves();
  const book = books.find(item => item.bookId === bookId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(book?.bookshelfId);
  const [items, setItems] = useState(BOOK_SHELVES);

  return (
    <DropDownPicker
      containerStyle={styles.container}
      dropDownDirection="BOTTOM"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={bookshelfId => addBook(bookId, bookshelfId as Bookshelves)}
      setItems={setItems}
      listMode="SCROLLVIEW"
      placeholder="Select Bookshelf"
      TickIconComponent={TickIcon}
    />
  );
};

export default SelectBookshelf;

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
});
