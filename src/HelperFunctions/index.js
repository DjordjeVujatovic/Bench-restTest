//Day Suffix Generator

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

//Date Converter

export const dateConverter = (date) => {
  const locale = "en-us"
  const month = new Date(date).toLocaleString(locale, { month: "short" });
  const day = new Date(date).toLocaleString(locale, { day: "numeric" });
  const year = new Date(date).toLocaleString(locale, { year: "numeric" });

  return `${month} ${daySuffix(day)}, ${year}`;
};

//Number string to dollar figure converter

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

// Random Key Generator

export const randomKey = () => {
  return Date.now() * Math.random()
};
