import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import BookItem from '../components/BookItem';
import Divider from '../components/Divider';
import GoToBookshelves from '../components/GoToBookshelves';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  const {data, refetch} = useSearch(query);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoToBookshelves />
        <SearchBar value={query} setValue={setQuery} onPress={refetch} />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <BookItem {...item} />}
        keyExtractor={item => item.id}
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
  header: {
    flexDirection: 'row',
    padding: 15,
    gap: 15,
  },
});
