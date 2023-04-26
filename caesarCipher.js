function caesarCipherEncryptor(string, key) {
  // Write your code here.
const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  while (key >= 26) {
    key -= 26;
  }

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    let newCharIdx = letters.indexOf(ch) + key;

    if (newCharIdx >= 26) {
      newCharIdx -= 26;
    }

    result += letters.charAt(newCharIdx);
  }

  return result;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;