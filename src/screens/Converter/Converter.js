import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Appbar,
  Button,
  Paragraph,
  TextInput,
  Title,
} from 'react-native-paper';
import { ErrorSnackbar } from '../../components/ErrorSnackbar/ErrorSnackbar';
import { numberBasedSystems } from '../../core/constants/systems';
import { globalStyles } from '../../core/styles/globalStyles';
import theme from '../../core/theme/theme';
import convertHelpers from '../../util/convertHelpers';
import numbersHelpers from '../../util/numbersHelpers';

export const Converter = () => {
  const [form, setForm] = useState({
    binaryNumber: '',
    octalNumber: '',
    hexNumber: '',
    decimalNumber: '',
  });
  const [lastChanged, setLastChanged] = useState('');
  const [snakbarMessage, setSnackbarMessage] = useState('');
  const [snackbarShown, setSnackbarShown] = useState('');
  const handleConvert = () => {
    const convertedValues =
      convertHelpers.convertByLastChanged(
        lastChanged,
        form,
      );
    setForm({ ...convertedValues });
  };

  const handleLongPress = () => {
    setSnackbarMessage(
      "Enter a value on a field and press 'Convert' to convert.",
    );
    setSnackbarShown(true);
  };
  useEffect(() => {
    if (
      form.binaryNumber &&
      !numbersHelpers.isBinaryNumber(
        numbersHelpers.deformatBinary(form.binaryNumber),
      )
    ) {
      setSnackbarMessage('Binary number not valid.');
      setSnackbarShown(true);
    }
    if (
      form.decimalNumber &&
      !numbersHelpers.isDecimalNumber(
        numbersHelpers.deformatBinary(form.decimalNumber),
      )
    ) {
      setSnackbarMessage('Decimal number not valid.');
      setSnackbarShown(true);
    }
    if (
      form.octalNumber &&
      !numbersHelpers.isOctalNumber(
        numbersHelpers.deformatBinary(form.octalNumber),
      )
    ) {
      setSnackbarMessage('Octal number not valid.');
      setSnackbarShown(true);
    }
    if (
      form.hexNumber &&
      !numbersHelpers.isHexNumber(
        numbersHelpers.deformatBinary(form.hexNumber),
      )
    ) {
      setSnackbarMessage('Hexadecimal number not valid.');
      setSnackbarShown(true);
    }
  }, [form]);

  return (
    <>
      <Appbar style={globalStyles.appBar}>
        <Appbar.Content
          title='Converter'
          subtitle='Dec, Bin, Oct, Hex'
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
            Convert Bin, Oct, Hex to Decimal
          </Title>
          <Paragraph style={globalStyles.description}>
            On this screen you&lsquo;re allowed to covert
            decimal numbers to the different programming
            based systems (binary, octal, decimal).
            It&lsquo;ll automatically convert when you press
            the button.
          </Paragraph>
        </View>
        <View style={globalStyles.mainContent}>
          <TextInput
            label='Decimal'
            value={form.decimalNumber}
            onChangeText={(text) => {
              setLastChanged(numberBasedSystems.DECIMAL);
              setForm({ ...form, decimalNumber: text });
            }}
            onFocus={() => {
              if (
                form.decimalNumber &&
                form.decimalNumber.length > 1
              ) {
                setLastChanged(numberBasedSystems.DECIMAL);
                setForm({
                  ...form,
                  decimalNumber:
                    numbersHelpers.deformatDecimal(
                      form.decimalNumber,
                    ),
                });
              }
            }}
            onBlur={() => {
              if (
                form.decimalNumber &&
                form.decimalNumber.length > 1
              ) {
                setForm({
                  ...form,
                  decimalNumber:
                    numbersHelpers.formatDecimal(
                      form.decimalNumber,
                    ),
                });
              }
            }}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <TextInput
            label='Binary'
            value={form.binaryNumber}
            onChangeText={(text) => {
              setLastChanged(numberBasedSystems.BINARY);
              setForm({ ...form, binaryNumber: text });
            }}
            onFocus={() => {
              setLastChanged(numberBasedSystems.BINARY);
              if (
                form.binaryNumber &&
                form.binaryNumber.length > 1
              ) {
                setForm({
                  ...form,
                  binaryNumber:
                    numbersHelpers.deformatBinary(
                      form.binaryNumber,
                    ),
                });
              }
            }}
            onBlur={() => {
              if (
                form.binaryNumber &&
                form.binaryNumber.length > 1
              ) {
                setForm({
                  ...form,
                  binaryNumber: numbersHelpers.formatBinary(
                    form.binaryNumber,
                  ),
                });
              }
            }}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <TextInput
            label='Octal'
            value={form.octalNumber}
            onChangeText={(text) => {
              setLastChanged(numberBasedSystems.OCTAL);
              setForm({ ...form, octalNumber: text });
            }}
            onFocus={() =>
              setLastChanged(numberBasedSystems.OCTAL)
            }
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <TextInput
            label='Hex'
            value={form.hexNumber}
            onChangeText={(text) => {
              setLastChanged(numberBasedSystems.HEX);
              setForm({ ...form, hexNumber: text });
            }}
            onFocus={() =>
              setLastChanged(numberBasedSystems.HEX)
            }
            mode='outlined'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <Button
            icon='sync'
            mode='contained'
            style={globalStyles.button}
            onPress={handleConvert}
            onLongPress={handleLongPress}
          >
            Convert
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
