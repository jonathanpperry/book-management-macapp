import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {BookShelves} from '../types';
import Icon from 'react-native-vector-icons/Entypo';

const TickIcon = () => <Icon name="check" color="#4ecdc4" size={20} />;

const SelectBookshelf = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Want to Read', value: BookShelves.WantToRead},
    {label: 'Read', value: BookShelves.Read},
    {label: 'Currently Reading', value: BookShelves.CurrentlyReading},
  ]);

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
