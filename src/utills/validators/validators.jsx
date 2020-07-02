export const required = (value) => {
  if (value) return undefined;
  return "Поле обязательно для заполнения";
};

export const maxLengthCreatore = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `Максимальльная длинна поля ${maxLength} символов!`;
  return undefined;
};
