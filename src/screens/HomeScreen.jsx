import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import BookItem from '../components/BookItem';
import Divider from '../components/Divider';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  const {data, refetch} = useSearch(query);

  console.log(data);
  return (
    <View style={styles.container}>
      <SearchBar value={query} setValue={setQuery} onPress={refetch} />

      <FlatList
        data={data}
        renderItem={({item}) => <BookItem {...item} />}
        keyExtractor={item => item.id}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          padding: 10,
          gap: 5,
        }}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
