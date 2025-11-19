const pad = value => String(value).padStart(2, '0');

const dateToStr = date => {
  if (!date) return '';

  const value = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(value.getTime())) return '';

  const month = pad(value.getMonth() + 1);
  const day = pad(value.getDate());
  const year = value.getFullYear();

  return `${month}/${day}/${year}`;
};

export default dateToStr;
