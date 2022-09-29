const newArray = [2, 4, 6, 8, 10, 12, 14];
const min = 8;

filterByMinimalNumber = (newArray, min) => newArray.filter(item => item > min);
const filteredArray = filterByMinimalNumber(newArray, min);
console.log(filteredArray);