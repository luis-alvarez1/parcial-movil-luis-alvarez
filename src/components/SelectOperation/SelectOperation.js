import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import stringsHelpers from '../../util/stringsHelpers';
import { selectOperationstyles } from './SelectOperationstyles';

export const SelectOperation = ({
  setSelected,
  selected,
  options,
}) => {
  return (
    <>
      <View
        style={selectOperationstyles.selectionContainer}
      >
        {options.map((opt) => {
          return (
            <View
              key={opt}
              style={selectOperationstyles.radioItem}
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
