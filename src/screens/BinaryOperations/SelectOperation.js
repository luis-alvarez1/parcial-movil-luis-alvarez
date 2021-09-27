import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { binaryOperationsOptions } from '../../core/constants/binaryOperations';
import stringsHelpers from '../../util/stringsHelpers';
import { binaryOperationsStyles } from './BinaryOperationsStyles';

export const SelectOperation = ({
  setSelected,
  selected,
}) => {
  return (
    <>
      <View
        style={binaryOperationsStyles.selectionContainer}
      >
        {binaryOperationsOptions.map((opt) => {
          return (
            <View
              key={opt}
              style={binaryOperationsStyles.radioItem}
            >
              <RadioButton
                status={
                  selected === opt ? 'checked' : 'unchecked'
                }
                onPress={() => setSelected(opt)}
                value={opt}
              />
              <Text>{stringsHelpers.capitalize(opt)}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};
