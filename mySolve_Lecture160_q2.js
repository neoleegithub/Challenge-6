// Question 2
const givenArray = [1,2,1,3,2,3];
let givenNumber = 4;

function answer2(srcArray, tgtNumber) {
  let diffArray = srcArray.filter((value, idx) => srcArray.indexOf(value) === idx);
  console.log(diffArray);
  let arrLength = diffArray.length;
  for(let i=0;i<arrLength; i++) {
    for(let j=i+1; j<arrLength; j++) {
      if(diffArray[i] + diffArray[j] === tgtNumber)
      {
        return new Array(diffArray[i], diffArray[j])
      }
    }
  }

  return "There is no match";
  ;
}

console.log(answer2(givenArray, givenNumber));
