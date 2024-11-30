const processText = (text, options = {}) => {
  
  const { 
    toUpperCase = false, 
    reverse = false, 
    removeSpecialChar = false 
  } = options;

  
  if (removeSpecialChar) {
    text = text.replace(/[@#$%&]/g, "");
  }


  if (toUpperCase) {
    text = text.toUpperCase();
  }


  if (reverse) {
    let splitString = text.split("")
    text = splitString.reverse().join("");
  }

  return text;
};

const text = "ll@a&B"
const options = {reverse: true, removeSpecialChar: true, toUpperCase: true}
console.log(`${processText(text, options)}`)
