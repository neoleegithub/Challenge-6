// Question 1
const orgArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function answer1(srcArray) {
  let fnlArray = [];
  let tmpArray = srcArray.sort((a,b) => a-b);
  
  // console.log(sndArray);
  
  let arraySize = 0;
  let flgSame = true;
  tmpArray.forEach((item, idx, arr) => {
    if(arr[idx] === arr[idx+1]){
      arraySize++;
    } else {
      if(arraySize === 0) {
            fnlArray.push(arr[idx]);
      } else {
      let newTmpArray = [];
      for(let i=0; i<=arraySize; i++){
        newTmpArray.push(arr[idx]);
      }
      fnlArray.push(newTmpArray);
      }
      arraySize = 0;
    }
  });

  return fnlArray
}

console.log(orgArray);
console.log(answer1(orgArray));

// Bonus
const orgArray = [1, "2", "3", 2];

function answer1Bouns(srcArray) {
  let fnlArray = [];
  let numArray = [];
  let aphArray = [];
  
  srcArray.forEach((item) => {
    if(typeof item === "string"){
      aphArray.push(item);
    } else {
      numArray.push(item);
    }
  });
  fnlArray.push(numArray.sort());
  fnlArray.push(aphArray.sort());

  return fnlArray;
}

console.log(orgArray);
console.log(answer1Bouns(orgArray));

