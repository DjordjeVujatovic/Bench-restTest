/*
Day Suffix Generator Function:
  This function takes a day (integer) of the month in as an argument
  and adds a suffix at the end (st, nd, rd, th) depending on the integer;
*/

export function daySuffix(day) {
  const singleDigits = day % 10;
  const doubleDigits = day % 100;
  if (singleDigits === 1 && doubleDigits !== 11) {
    return `${day}st`;
  }
  if (singleDigits === 2 && doubleDigits !== 12) {
    return `${day}nd`;
  }
  if (singleDigits === 3 && doubleDigits !== 13) {
    return `${day}rd`;
  }
  return `${day}th`;
};

/*
Date Converter Function:
  This function takes in a date string (2013-12-19) and converts it to the format of ex: Dec 19th, 2013;
*/

export const dateConverter = (date) => {
  const locale = "en-us"
  const month = new Date(date).toLocaleString(locale, { month: "short" });
  const day = new Date(date).toLocaleString(locale, { day: "numeric" });
  const year = new Date(date).toLocaleString(locale, { year: "numeric" });

  return `${month} ${daySuffix(day)}, ${year}`;
};

/*
Integer to Dollar Figure Function:
  This function takes in an number as an argument ex: 12000.1 and returns a dollar figure to two decimal places ex: $12,000.10;
*/

export const integerToDollar = (number) => {
  number = number.toString();
  let dollars = number.split('.')[0];
  const cents = (number.split('.')[1] || '') + '00';
  dollars = dollars.split('')
    .reverse()
    .join('')
    .replace(/(\d{3}(?!$)(?!-))/g, '$1,')
    .split('')
    .reverse()
    .join('');

  return `$${dollars}.${cents.slice(0, 2)}`;
};

/*
Random Key Generator Function:
  This function generates a random key to use for keys when mapping over an array;
*/

export const randomKey = () => {
  return Date.now() * Math.random();
};
