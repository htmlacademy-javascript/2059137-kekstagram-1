const isLessOrEqual = (string, length) => string.length <= length;

// eslint-disable-next-line no-console
console.log(isLessOrEqual('от топота копыт пыль по полю летит', 20));

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};

// eslint-disable-next-line no-console
console.log(isPalindrom('топот'));

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at;
    }
  }
  return parseInt(result, 10);
};

// eslint-disable-next-line no-console
console.log(extractNumber('тяжелый 2022 год'));

const myPadString = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

// eslint-disable-next-line no-console
console.log(myPadString('пузырь', 9, 'буп'));
