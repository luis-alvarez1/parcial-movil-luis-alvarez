const isDecimalNumber = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }

  if (number?.match(/^[0-9]+$/)) {
    return true;
  }
  return false;
};
const isBinaryNumber = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }
  if (number?.search(/^[10]+$/) !== -1) {
    return true;
  }
  return false;
};
const isOctalNumber = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }
  if (number.match(/^[0-7]*$/)) {
    return true;
  }
  return false;
};
const isHexNumber = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }
  if (number.match(/[0-9A-Fa-f]{1,6}$/g)) {
    return true;
  }
  return false;
};
const convertDecimalToBinary = (number) => {
  if (typeof number !== 'number') {
    number = parseInt(number);
  }
  return number.toString(2);
};
const convertDecimalToOctal = (number) => {
  if (typeof number !== 'number') {
    number = parseInt(number);
  }
  return number.toString(8);
};
const convertDecimalToHex = (number) => {
  if (typeof number !== 'number') {
    number = parseInt(number);
  }
  return number.toString(16).toUpperCase();
};
const convertBinaryToDecimal = (number) => {
  return parseInt(number, 2).toString();
};
const convertOctalToDecimal = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }
  return parseInt(number, 8).toString();
};
const convertHexToDecimal = (number) => {
  if (typeof number !== 'string') {
    number = number.toString();
  }
  return parseInt(number, 16).toString();
};
const deformatDecimal = (number) => {
  return number.split('.').join('');
};
const formatDecimal = (number) => {
  number = deformatDecimal(number);
  if (isDecimalNumber(number)) {
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(number)) {
      number = number.replace(pattern, '$1.$2');
    }
    return number;
  }
};
const deformatBinary = (number) => {
  while (number[0] === '0') {
    number = number.substring(1);
  }
  return number.split(' ').join('');
};
const formatBinary = (number) => {
  number = deformatBinary(number);
  while (number[0] === '0') {
    number = number.substring(1);
  }
  if (isBinaryNumber(number)) {
    while (number.length % 4 !== 0) {
      number = '0'.concat(number);
    }
    return number.match(/.{1,4}/g).join(' ');
  }
};
const formatOctal = (number) => {
  if (isOctalNumber(number)) {
    while (number.length % 3 !== 0) {
      number = '0'.concat(number);
    }
    return number.match(/.{1,3}/g).join(' ');
  }
};

export default {
  isDecimalNumber,
  isBinaryNumber,
  isOctalNumber,
  isHexNumber,
  convertDecimalToBinary,
  convertDecimalToOctal,
  convertDecimalToHex,
  convertBinaryToDecimal,
  convertHexToDecimal,
  convertOctalToDecimal,
  formatDecimal,
  formatBinary,
  formatOctal,
  deformatBinary,
  deformatDecimal,
};
