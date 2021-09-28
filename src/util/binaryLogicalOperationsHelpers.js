import { logicalBinaryOperations } from '../core/constants/logicalBinaryOperations';
import numbersHelpers from './numbersHelpers';

function xor(a, b) {
  return a === b ? 0 : 1;
}
function and(a, b) {
  return a === 1 && b === 1 ? 1 : 0;
}
function or(a, b) {
  return a || b;
}

const binaryAND = (val1, val2) =>
  numbersHelpers.convertDecimalToBinary(
    parseInt(numbersHelpers.convertBinaryToDecimal(val1)) &
      parseInt(numbersHelpers.convertBinaryToDecimal(val2)),
  );
const binaryOR = (val1, val2) =>
  numbersHelpers.convertDecimalToBinary(
    parseInt(numbersHelpers.convertBinaryToDecimal(val1)) |
      parseInt(numbersHelpers.convertBinaryToDecimal(val2)),
  );
const binaryXOR = (val1, val2) =>
  numbersHelpers.convertDecimalToBinary(
    parseInt(numbersHelpers.convertBinaryToDecimal(val1)) ^
      parseInt(numbersHelpers.convertBinaryToDecimal(val2)),
  );

const operateLogicalBinary = (operation, form) => {
  const { firstBinary, secondBinary } = form;
  let result = '';
  switch (operation) {
    case logicalBinaryOperations.AND:
      result = binaryAND(firstBinary, secondBinary);
      return result;
    case logicalBinaryOperations.OR:
      result = binaryOR(firstBinary, secondBinary);
      return result;
    case logicalBinaryOperations.XOR:
      result = binaryXOR(firstBinary, secondBinary);
      return result;

    default:
      return 'ERROR operation not valid';
  }
};

export default {
  xor,
  and,
  or,
  binaryAND,
  binaryOR,
  binaryXOR,
  operateLogicalBinary,
};
