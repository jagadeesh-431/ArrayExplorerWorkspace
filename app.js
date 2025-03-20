// to output result
const finalResult = document.getElementById("result");

// to get input
function getArrayFromInput(){
    let input = document.querySelector("#myInput").value;// get input
    let arr = input.split(",").map(item => Number(item.trim()));// change to number and trim used to remove space
    return arr; // return the arr to other functions
}
// to sort the element
function getSort(){
    let arr = getArrayFromInput();// get user input
    let sortedArr = [...arr].sort((a,b) => a-b);// to sort
    finalResult.innerText = " Sorted Arrays : "+sortedArr.join(", ");// to display
}
//to reverse the element
function getReverse(){
    let arr = getArrayFromInput();
    let reversedArr = [...arr].reverse();// .reverse easily reverse the array
    finalResult.innerText = "Reverse Arrays : "+reversedArr.join(", ");// print the array
}
// to find even numbers
function getEvens(){
    let arr = getArrayFromInput();
    let evenNum = [...arr].filter(num => num % 2 === 0);// %2 used to get evennums
    finalResult.innerText="EvenNumbers : "+evenNum.join(", ");// to print
}
// to find odd numbers
function getOdds(){
    let arr = getArrayFromInput();
    let oddNum = [...arr].filter(num => num % 2 !== 0);// ised %2 != 0 to find odd
    finalResult.innerText="OddNumbers : "+oddNum.join(", ");// to result
}
// to find max num
function getMax(){
    let arr = getArrayFromInput();
    let maxNum = Math.max(...arr);// use Math.max inbuilt function to find the max  num
    finalResult.innerText="Maximum Number : " +maxNum;// here it is a number not an array so no need add join function
}
// to find minimum number
function getMin(){
    let arr = getArrayFromInput();
    let maxNum = Math.min(...arr);// use Math.min inbuilt function to find the min num
    finalResult.innerText="Maximum Number : " +maxNum;// here it is a number not an array so no need od join function
}