import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import React from 'react';
import {IBook, StackParamList} from '../types';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface IBookItem extends IBook {
  isDescription?: boolean;
  isPressable?: boolean;
}

type BookScreenNavigationProp = StackNavigationProp<StackParamList, 'Book'>;

const BookItem = (props: IBookItem) => {
  const {id, volumeInfo, isDescription = true, isPressable = true} = props;

  const {imageLinks, title, authors, averageRating, pageCount, description} =
    volumeInfo;

  const navigation = useNavigation<BookScreenNavigationProp>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Book', {
          bookId: id,
        })
      }
      disabled={!isPressable}>
      <Image
        source={{
          uri:
            imageLinks?.thumbnail ||
            'https://images.unsplash.com/photo-1521056787327-165dc2a32836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww',
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.authors}>{authors?.join(', ')}</Text>

        {averageRating && (
          <View style={styles.ratingContainer}>
            <Icon name="star" color="yellow" size={20} />
            <Text style={styles.rating}>{averageRating}</Text>
          </View>
        )}

        <Text style={styles.pages}>{pageCount} pages</Text>

        {isDescription && (
          <Text style={styles.description} numberOfLines={5}>
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: 200,
    height: 270,
    borderRadius: 5,
  },
  info: {
    gap: 12,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  authors: {
    fontSize: 16,
    color: '#4ecdc4',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    fontSize: 15,
  },
  pages: {
    fontSize: 15,
  },
  description: {
    fontSize: 16,
  },
});
