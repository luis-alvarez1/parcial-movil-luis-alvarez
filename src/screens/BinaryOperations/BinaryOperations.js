import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Appbar,
  Button,
  Divider,
  Paragraph,
  TextInput,
  Title,
} from 'react-native-paper';
import { binaryOperations } from '../../core/constants/binaryOperations';
import { globalStyles } from '../../core/styles/globalStyles';
import theme from '../../core/theme/theme';
import binaryOperationsHelpers from '../../util/binaryOperationsHelpers';
import numbersHelpers from '../../util/numbersHelpers';
import { SelectOperation } from './SelectOperation';

export const BinaryOperations = () => {
  const [form, setForm] = useState({
    firstBinary: '',
    secondBinary: '',
    result: '',
  });
  const [operation, setOperation] = useState(
    binaryOperations.ADD,
  );
  const handleOperate = () => {
    if (
      form.firstBinary &&
      form.firstBinary !== '' &&
      form.secondBinary &&
      form.secondBinary !== ''
    ) {
      // TODO: IF SON DATOS VÁLIDOS SINO SNACKBAR
      const operationResult =
        binaryOperationsHelpers.operateBinary(
          operation,
          form,
        );
      setForm({
        ...form,
        result:
          numbersHelpers.formatBinary(operationResult),
      });
    }
    // TODO: ELSE ---> SNACKBAR CON ERROR DATOS NECESARIOS
  };
  return (
    <>
      <Appbar style={globalStyles.appBar}>
        <Appbar.Content
          title='Binary Operations'
          subtitle='Add and Substract'
          titleStyle={{
            alignSelf: 'center',
          }}
          subtitleStyle={{
            alignSelf: 'center',
          }}
        />
      </Appbar>
      <ScrollView style={globalStyles.container}>
        <View>
          <Title style={globalStyles.title}>
            Add and Substract Binary numbers
          </Title>
          <Paragraph style={globalStyles.description}>
            On this screen you&lsquo;re allowed to add and
            substract numbers and get the result on a binary
            based system . It&lsquo;ll automatically operate
            when you press the button.
          </Paragraph>
        </View>
        <View style={globalStyles.mainContent}>
          <TextInput
            label='First Binary'
            value={form.firstBinary}
            onChangeText={(text) => {
              setForm({ ...form, firstBinary: text });
            }}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <TextInput
            label='Second Binary'
            value={form.secondBinary}
            onChangeText={(text) => {
              setForm({ ...form, secondBinary: text });
            }}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <SelectOperation
            selected={operation}
            setSelected={setOperation}
          />
          <Divider
            style={{
              marginVertical: 17,
              backgroundColor: '#9c9c9c',
            }}
          />
          <TextInput
            label='Binary Result'
            value={form.result}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.primary}
            editable={false}
            selectTextOnFocus
          />
          {/* TODO: onLongPress --> snackbar con info */}
          <Button
            icon='calculator-variant'
            mode='contained'
            style={globalStyles.button}
            onPress={handleOperate}
          >
            {operation}
          </Button>
        </View>
      </ScrollView>
    </>
  );
};
