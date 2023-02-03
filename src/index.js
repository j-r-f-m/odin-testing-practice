//import { ceasarCipher } from "./caesarCipher";
/**
 * capitallize first letter of passed string
 * @param {string} string
 * @returns capitalized passed string
 */
const capitalize = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};

/**
 * reverse String
 * @param {string} string
 * @returns reversed string
 */
const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export { capitalize, reverseString };
