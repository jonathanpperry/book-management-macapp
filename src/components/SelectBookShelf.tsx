import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Bookshelves} from '../types';
import Icon from 'react-native-vector-icons/Entypo';

const TickIcon = () => <Icon name="check" color="#4ecdc4" size={20} />;

export const BOOK_SHELVES = [
  {label: 'Want to Read', value: Bookshelves.WantToRead},
  {label: 'Read', value: Bookshelves.Read},
  {label: 'Currently Reading', value: Bookshelves.CurrentlyReading},
];

const SelectBookshelf = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(BOOK_SHELVES);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      placeholder="Select Bookshelf"
      containerStyle={styles.container}
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
