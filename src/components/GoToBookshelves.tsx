import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../types';

type BookshelvesScreenProp = StackNavigationProp<StackParamList, 'Bookshelves'>;

const GoToBookshelves = () => {
  const navigation = useNavigation<BookshelvesScreenProp>();

  return (
    <Pressable onPress={() => navigation.navigate('Bookshelves')}>
      <Icon name="bookshelf" color="#4ecdc4" size={45} />
    </Pressable>
  );
};

export default GoToBookshelves;

// const styles = StyleSheet.create({});
