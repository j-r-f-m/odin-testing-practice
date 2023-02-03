const capitalize = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export { capitalize, reverseString };
