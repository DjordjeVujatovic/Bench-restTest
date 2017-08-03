//Date Converter

export const dateConverter = (date) => {
  const locale = "en-us"
  const month = new Date(date).toLocaleString(locale, {month: "short"});
  const day = new Date(date).toLocaleString(locale, {day:"numeric"});
  const year = new Date(date).toLocaleString(locale, {year:"numeric"});

  return `${month} ${day}, ${year}`;
};

//Number string to dollar figure converter

export const integerToDollar = (number) => {
    number = number.toString();
    let dollars = number.split('.')[0];
    const cents = (number.split('.')[1] || '') +'00';
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

export const randomKey = () =>{
  return Date.now() * Math.random()
};
