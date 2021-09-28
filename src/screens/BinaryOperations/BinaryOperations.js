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
import { ErrorSnackbar } from '../../components/ErrorSnackbar/ErrorSnackbar';
import {
  binaryOperations,
  binaryOperationsOptions,
} from '../../core/constants/binaryOperations';
import { globalStyles } from '../../core/styles/globalStyles';
import theme from '../../core/theme/theme';
import binaryOperationsHelpers from '../../util/binaryOperationsHelpers';
import numbersHelpers from '../../util/numbersHelpers';
import { binaryOperationsStyles } from './BinaryOperationsStyles';
import { SelectOperation } from '../../components/SelectOperation/SelectOperation';

export const BinaryOperations = () => {
  const [form, setForm] = useState({
    firstBinary: '',
    secondBinary: '',
    result: '',
  });
  const [operation, setOperation] = useState(
    binaryOperations.ADD,
  );
  const [snakbarMessage, setSnackbarMessage] = useState('');
  const [snackbarShown, setSnackbarShown] = useState('');
  const handleLongPress = () => {
    setSnackbarMessage(
      'Enter both values, select an operation and press here to see the result',
    );
    setSnackbarShown(true);
  };
  const handleOperate = () => {
    if (form.firstBinary && form.secondBinary) {
      if (
        numbersHelpers.isBinaryNumber(
          numbersHelpers.deformatBinary(form.firstBinary),
        ) &&
        numbersHelpers.isBinaryNumber(
          numbersHelpers.deformatBinary(form.secondBinary),
        )
      ) {
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
      } else {
        setSnackbarMessage(
          'One or both values are not valid. Numbers must be in binary format. Please, check again.',
        );
        setSnackbarShown(true);
      }
    } else {
      setSnackbarMessage('Both values are required.');
      setSnackbarShown(true);
    }
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
            options={binaryOperationsOptions}
          />
          <Divider style={binaryOperationsStyles.divider} />
          <TextInput
            label='Binary Result'
            value={form.result}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.green}
            editable={false}
            selectTextOnFocus
          />
          <Button
            icon='calculator-variant'
            mode='contained'
            style={globalStyles.button}
            onPress={handleOperate}
            onLongPress={handleLongPress}
          >
            {operation}
          </Button>
        </View>
      </ScrollView>
      <ErrorSnackbar
        shown={snackbarShown}
        setShown={setSnackbarShown}
        message={snakbarMessage}
      />
    </>
  );
};
