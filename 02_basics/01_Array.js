// Array

const myArr = [1,2,3,4,5];
// console.log(myArr)
// myArr.pop()
// myArr.push(6)

// myArr.shift()
// myArr.unshift(0)


// console.log(myArr.length);
// const after = myArr.toString()
// console.log(typeof after)

const newArr = ["apple","mango","banana","grapes"];

// console.log(newArr.at(2))
// console.log(newArr[2])

// const join = newArr.join(' | ');
// console.log(join)

// newArr[0] = "kiwi";

// newArr[newArr.length] = "kiwi"; // add last element without using push
// console.log(newArr)


// mertge and concat array in JS

// Note
// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

// const boys = ["saurabh","shubham","shivam"];
// const girl = ["neha","dipa","etc"];

// const mergeAll = boys.concat(girl);
// console.log(mergeAll[3])

const arr =['apple','mango','gawawa','grapes'];
arr.splice(0,2)
console.log(arr)