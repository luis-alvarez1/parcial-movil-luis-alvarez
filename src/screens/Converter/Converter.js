import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Appbar,
  Button,
  Paragraph,
  TextInput,
  Title,
} from 'react-native-paper';
import { styles } from './ConverterStyles';
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

  const handleConvert = () => {
    const convertedValues =
      convertHelpers.convertByLastChanged(
        lastChanged,
        form,
      );
    setForm({ ...convertedValues });
  };

  useEffect(() => {});

  return (
    <>
      <Appbar style={styles.appBar}>
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
      <ScrollView style={styles.container}>
        <View>
          <Title style={styles.title}>
            Convert Bin, Oct, Hex to Decimal
          </Title>
          <Paragraph style={styles.description}>
            On this screen you&lsquo;re allowed to covert
            decimal numbers to the different programming
            based systems (binary, octal, decimal).
            It&lsquo;ll automatically convert when you press
            the button.
          </Paragraph>
        </View>
        <View style={styles.mainContent}>
          <TextInput
            label='Decimal'
            value={form.decimalNumber}
            onChangeText={(text) => {
              setLastChanged('decimal');
              setForm({ ...form, decimalNumber: text });
            }}
            onFocus={() => {
              if (
                form.decimalNumber &&
                form.decimalNumber.length > 1
              ) {
                setLastChanged('decimal');
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
              setLastChanged('binary');
              setForm({ ...form, binaryNumber: text });
            }}
            onFocus={() => {
              setLastChanged('binary');
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
              setLastChanged('octal');
              setForm({ ...form, octalNumber: text });
            }}
            onFocus={() => setLastChanged('octal')}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          <TextInput
            label='Hex'
            value={form.hexNumber}
            onChangeText={(text) => {
              setLastChanged('hex');
              setForm({ ...form, hexNumber: text });
            }}
            onFocus={() => setLastChanged('hex')}
            mode='outlined'
            keyboardType='numeric'
            outlineColor={theme.color.purpleLight}
            selectTextOnFocus
          />
          {/* TODO: onLongPress --> tooltip con info */}
          <Button
            icon='sync'
            mode='contained'
            style={styles.button}
            onPress={handleConvert}
          >
            Convert
          </Button>
        </View>
      </ScrollView>
    </>
  );
};
