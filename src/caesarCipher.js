const ceasarCipher = (string, key) => {
  const strArray = string.split("");
  /*   console.log(strArray);
  console.log(typeof strArray[5]); */
  key = Math.abs(key);
  let shiftedArray = [];
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let encryptedString = null;
  for (let i = 0; i < strArray.length; i++) {
    /* console.log(strArray[i]); */
    for (let j = 0; j < alpha.length; j++) {
      if (strArray[i] === alpha[j]) {
        if (j + key > 25) {
          let newIndex = j + key;
          shiftedArray.push(alpha[newIndex - 26]);
        } else {
          shiftedArray.push(alpha[j + key]);
          /* console.log(shiftedArray); */
        }
      } else if (strArray[i] === alpha[j].toUpperCase()) {
        shiftedArray.push(alpha[j + key].toUpperCase());
      } else if (strArray[i] == " ") {
        /* console.log("y"); */
        shiftedArray.push(" ");
        break;
      } else if (strArray[i] === ".") {
        shiftedArray.push(".");
        break;
      } else if (strArray[i] === "!") {
        shiftedArray.push("!");
        break;
      } else if (strArray[i] === ",") {
        shiftedArray.push(",");
        break;
      }
    }
  }
  encryptedString = shiftedArray.join("");
  return encryptedString;
};

export { ceasarCipher };

let testString = "h";
let testString2 = "K";

if ("h".toUpperCase() === "H") {
  console.log("yes");
} else {
  console.log("no");
}
