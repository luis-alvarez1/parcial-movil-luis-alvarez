import { numberBasedSystems } from '../core/constants/systems';
import numbersHelpers from './numbersHelpers';

const convertByLastChanged = (lastChanged, form) => {
  const convertedValues = {};
  switch (lastChanged) {
    case numberBasedSystems.DECIMAL:
      convertedValues.decimalNumber =
        numbersHelpers.deformatDecimal(form.decimalNumber);
      if (
        numbersHelpers.isDecimalNumber(
          convertedValues.decimalNumber,
        )
      ) {
        convertedValues.binaryNumber =
          numbersHelpers.convertDecimalToBinary(
            convertedValues.decimalNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.convertDecimalToOctal(
            convertedValues.decimalNumber,
          );
        convertedValues.hexNumber =
          numbersHelpers.convertDecimalToHex(
            convertedValues.decimalNumber,
          );
        convertedValues.decimalNumber =
          numbersHelpers.formatDecimal(
            convertedValues.decimalNumber,
          );
        convertedValues.binaryNumber =
          numbersHelpers.formatBinary(
            convertedValues.binaryNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.formatOctal(
            convertedValues.octalNumber,
          );
      }

      return convertedValues;

    case numberBasedSystems.BINARY:
      convertedValues.binaryNumber =
        numbersHelpers.deformatBinary(form.binaryNumber);

      if (
        numbersHelpers.isBinaryNumber(
          convertedValues.binaryNumber,
        )
      ) {
        convertedValues.decimalNumber =
          numbersHelpers.convertBinaryToDecimal(
            convertedValues.binaryNumber,
          );

        convertedValues.octalNumber =
          numbersHelpers.convertDecimalToOctal(
            convertedValues.decimalNumber,
          );
        convertedValues.hexNumber =
          numbersHelpers.convertDecimalToHex(
            convertedValues.decimalNumber,
          );
        convertedValues.decimalNumber =
          numbersHelpers.formatDecimal(
            convertedValues.decimalNumber,
          );
        convertedValues.binaryNumber =
          numbersHelpers.formatBinary(
            convertedValues.binaryNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.formatOctal(
            convertedValues.octalNumber,
          );
      }

      return convertedValues;

    case numberBasedSystems.OCTAL:
      convertedValues.octalNumber = form.octalNumber;

      if (
        numbersHelpers.isOctalNumber(
          convertedValues.octalNumber,
        )
      ) {
        convertedValues.decimalNumber =
          numbersHelpers.convertOctalToDecimal(
            convertedValues.octalNumber,
          );

        convertedValues.binaryNumber =
          numbersHelpers.convertDecimalToBinary(
            convertedValues.decimalNumber,
          );
        convertedValues.hexNumber =
          numbersHelpers.convertDecimalToHex(
            convertedValues.decimalNumber,
          );
        convertedValues.decimalNumber =
          numbersHelpers.formatDecimal(
            convertedValues.decimalNumber,
          );
        convertedValues.binaryNumber =
          numbersHelpers.formatBinary(
            convertedValues.binaryNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.formatOctal(
            convertedValues.octalNumber,
          );
      }

      return convertedValues;

    case numberBasedSystems.HEX:
      convertedValues.hexNumber = form.hexNumber;
      if (
        numbersHelpers.isHexNumber(
          convertedValues.hexNumber,
        )
      ) {
        convertedValues.decimalNumber =
          numbersHelpers.convertHexToDecimal(
            convertedValues.hexNumber,
          );
        convertedValues.binaryNumber =
          numbersHelpers.convertDecimalToBinary(
            convertedValues.decimalNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.convertDecimalToOctal(
            convertedValues.decimalNumber,
          );
        convertedValues.decimalNumber =
          numbersHelpers.formatDecimal(
            convertedValues.decimalNumber,
          );
        convertedValues.binaryNumber =
          numbersHelpers.formatBinary(
            convertedValues.binaryNumber,
          );
        convertedValues.octalNumber =
          numbersHelpers.formatOctal(
            convertedValues.octalNumber,
          );
      }

      return convertedValues;

    default:
      console.log("option doesn't exist");
      break;
  }
};

export default {
  convertByLastChanged,
};
