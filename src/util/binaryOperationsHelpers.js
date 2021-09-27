import { binaryOperations } from '../core/constants/binaryOperations';

const addBinary = (val1, val2) => {
  val1 = parseInt(val1, 2);
  val2 = parseInt(val2, 2);
  return (val1 + val2).toString(2);
};

const substractBinary = (val1, val2) => {
  val1 = parseInt(val1, 2);
  val2 = parseInt(val2, 2);
  return (val1 - val2).toString(2);
};

const operateBinary = (operation, form) => {
  const { firstBinary, secondBinary } = form;
  let result = '';
  switch (operation) {
    case binaryOperations.ADD:
      result = addBinary(firstBinary, secondBinary);

      return result;
    case binaryOperations.SUBSTRACT:
      result = substractBinary(firstBinary, secondBinary);
      return result;
    default:
      return 'ERROR operation not valid';
  }
};

export default {
  addBinary,
  substractBinary,
  operateBinary,
};
