// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

let revWords1 = s => {
  let newString = "";
  for (let i = s.length - 1; i >= 0; i--){
    newString += s[i];
  }
  str = newString.split(" ");
  result = "";
  for (let i = str.length-1; i >= 0; i--){
    result += str[i];
    result += " ";
  }
  console.log(result);
  return(result);
}

let revWords2 = s => {
  let newString = "";
  let arrString = s.split(" ");
  arrString.forEach((char) => {
    newString = char + newString;
    newString = " " + newString;
  });
  let result = ""
  for (let char of newString){
    result = char + result;
  }
  console.log(result);
  return(result);
}

let revWords3 = s => {
  let newString = "";
  for (let char of s){
    newString = char + newString;
  }
  str = newString.split(" ");
  result = "";
  for (let char of str){
    result = char + result;
    result = " " + result;
  }
  console.log(result);
  return(result);
}
