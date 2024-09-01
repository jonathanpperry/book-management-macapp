import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}

const SearchBar = (props: ISearchBar) => {
  const {value, setValue, onPress} = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Books"
        placeholderTextColor="#000"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onPress}
      />
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 15,
    color: '#000',
    flex: 1,
    borderRadius: 10,
  },
  btn: {
    paddingHorizontal: 20,
    backgroundColor: '#4ecdc4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
