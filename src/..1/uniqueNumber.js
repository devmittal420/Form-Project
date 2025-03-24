// function uniqueNum(num) {

//     let register = {};

//     let empArr = [];

//     for (let i = 0; i < num.length; i++) {
//         if (!register[num[i]]) {
//             empArr.push(num[i]);
//             register[num[i]] = true;
//         }
//     }
//     return empArr;
// }

// const arr = [1,0,0,0, 2, 3, 4, 3, 4, 5];
// console.log(uniqueNum(arr));



function countNum(arr) {
    let register = {}

    for (let i = 0; i < arr.length; i++) {
        if (!register[arr[i]]) {
            register[arr[i]] = 0
        }
        register[arr[i]]++
    }
    return register;

}
const num = [1, 2, 3, 4, 3, 4, 5, 5, 0];
console.log(countNum(num));
