import {StyleSheet, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
  },
});
