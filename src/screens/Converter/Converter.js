import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export const Converter = () => {
  const [binaryNumber, setBinaryNumber] = useState('');

  return (
    <View>
      <TextInput
        label='Email'
        value={binaryNumber}
        onChangeText={(text) => setBinaryNumber(text)}
        mode='outlined'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
