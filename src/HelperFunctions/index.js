//Date Converter

export const dateConverter = (date) => {
  const locale = "en-us"
  const month = new Date(date).toLocaleString(locale, {month: "short"});
  const day = new Date(date).toLocaleString(locale, {day:"numeric"});
  const year = new Date(date).toLocaleString(locale, {year:"numeric"});

  return `${month} ${day}, ${year}`;
};