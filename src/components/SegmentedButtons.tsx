import React, {SetStateAction} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Bookshelves} from '../types';
import {StyleSheet} from 'react-native';

interface ISegmentedButton {
  label: string;
  value: Bookshelves;
}

interface ISegmentedButtons {
  buttons: ISegmentedButton[];
  value: Bookshelves;
  setValue: React.Dispatch<SetStateAction<Bookshelves>>;
}

const SegmentedButtons = (props: ISegmentedButtons) => {
  const {buttons, value, setValue} = props;
  return (
    <View style={styles.container}>
      {buttons.map((btn, index) => (
        <Pressable
          key={index}
          style={[
            styles.btn,
            {
              backgroundColor: value === btn.value ? '#4ecdc4' : 'transparent',
            },
          ]}
          onPress={() => setValue(btn.value)}>
          <Text
            style={[
              styles.btnText,
              {
                color: value === btn.value ? '#000' : '#fff',
              },
            ]}>
            {btn.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    width: 170,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#4ecdc4',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
