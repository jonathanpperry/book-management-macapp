import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back-circle" size={45} color={'#4ecdc4'} />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});
