// Question 3
function colorRangeChk(numChk) {
  if(numChk >= 0 && numChk <= 255) {
    return true;
  } else {
    return false;
  }
}

function getColor(strNumber, color, base) {
  let numColor;
  if(base === 16) {
    if(color === "Red") {
      numColor = parseInt(strNumber.substr(1,2), 16);
    } else if(color === "Green") {
      numColor = parseInt(strNumber.substr(3,2), 16);
    }else if(color === "Blue") {
      numColor = parseInt(strNumber.substr(5,2), 16);
    }

    if(colorRangeChk(numColor)) {
      return numColor;
    }

     return NaN;
  } else if(base === 10) {
    splitColor = (strNumber.replace(/\s/g, "")).split(",");
    // console.log(splitColor);
    if(color === "Red") {
      numColor = parseInt(splitColor[0]);
      if(colorRangeChk(numColor)) {
        return numColor.toString(16);
      }
    } else if(color === "Green") {
      numColor = parseInt(splitColor[1]);
      if(colorRangeChk(numColor)) {
        return numColor.toString(16);
      }
    } else if(color === "Blue") {
      numColor = parseInt(splitColor[2]);
      if(colorRangeChk(numColor)) {
        return numColor.toString(16);
      }
    }
  } else {
    return NaN;
  }
}

function convertHEX2RGB(strNumber) {
  // HEX
  if(strNumber[0] === '#') {
    if(strNumber.length !== 7) {
      return null;
    } else {
      let numRed = getColor(strNumber, "Red", 16);
      let numGreen = getColor(strNumber, "Green", 16);
      let numBlue = getColor(strNumber, "Blue", 16);

      return numRed + ", " + numGreen + ", " + numBlue;
    }
  // RGB
  } else {
    let numRed = getColor(strNumber, "Red", 10);
    let numGreen = getColor(strNumber, "Green", 10);
    let numBlue = getColor(strNumber, "Blue", 10);

    return "#" + numRed + numGreen + numBlue;
  }
}

let inColor = prompt("Input Color(Hex or Dec)");
console.log(convertHEX2RGB(inColor));
// console.log(convertHEX2RGB("#feef3f"));
// console.log(convertHEX2RGB("254,   239,  63"));
