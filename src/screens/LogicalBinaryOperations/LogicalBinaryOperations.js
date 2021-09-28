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
import { globalStyles } from '../../core/styles/globalStyles';
import theme from '../../core/theme/theme';
import numbersHelpers from '../../util/numbersHelpers';
import { SelectOperation } from '../../components/SelectOperation/SelectOperation';
import { logicalBinaryOperationsStyles } from './LogicalBinaryOperationsStyles';
import {
  logicalBinaryOperations,
  logicalBinaryOperationsOptions,
} from '../../core/constants/logicalBinaryOperations';
import binaryLogicalOperationsHelpers from '../../util/binaryLogicalOperationsHelpers';

export const LogicalBinaryOperations = () => {
  const [form, setForm] = useState({
    firstBinary: '',
    secondBinary: '',
    result: '',
  });
  const [operation, setOperation] = useState(
    logicalBinaryOperations.AND,
  );
  const [snakbarMessage, setSnackbarMessage] = useState('');
  const [snackbarShown, setSnackbarShown] = useState('');
  const handleLongPress = () => {
    setSnackbarMessage(
      'Enter both values, select an operation and press here to see the result',
    );
    setSnackbarShown(true);
  };
  const handleLogicalOperate = () => {
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
          binaryLogicalOperationsHelpers.operateLogicalBinary(
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
          title='Binary Logical Operations'
          subtitle='AND, OR, XOR'
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
            Operate Binary numbers logically
          </Title>
          <Paragraph style={globalStyles.description}>
            On this screen you&lsquo;re allowed to operate
            two binary numbers with different logical
            bitwise operations (and, or, xor). It&lsquo;ll
            automatically operate when you press the button.
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
            options={logicalBinaryOperationsOptions}
          />
          <Divider
            style={logicalBinaryOperationsStyles.divider}
          />
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
            onPress={handleLogicalOperate}
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
