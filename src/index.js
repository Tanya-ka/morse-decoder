const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrChar = [];
  let newArrChar = [];
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    arrChar.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < arrChar.length; i++) {
    newArrChar.push(
      arrChar[i].replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "")
    );
  }

  for (let i = 0; i < newArrChar.length; i++) {
    if (newArrChar[i] === "**********") {
      result = result + " ";
    } else {
      result = result + MORSE_TABLE[newArrChar[i]];
    }
  }
  return result;
}

module.exports = {
  decode,
};
