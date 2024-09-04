import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import useBook from '../hooks/useBook';

const BookScreen = () => {
  const route = useRoute();

  const {bookId} = route?.params;

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <ActivityIndicator color={'#4ecdc4'} />;

  if (error) return <Text>Error</Text>;

  console.log(data);

  return (
    <View style={styles.container}>
      <Text>Book id: {bookId}</Text>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
