// function sortArray(arr) {

//     let empArr = [];
//     let temp;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//         empArr.push(arr[i]);
//     }
//     return empArr
// }

// const arr = [9, 6, 5, 7];
// console.log(sortArray(arr))


// function sumTwoNumber(num, k) {

//     let register = {};

//     for (let i = 0; i < num.length; i++) {
//         const elem = k - num[i];
//         if (register.hasOwnProperty(elem)) {
//             return [elem, num[i]]
//         }
//         register[num[i]] = true
//     }
//     return null;
// }

// const arr = [4, 1, 2, 3, 4, -2, 6, -4]
// const k = 5;
// console.log(sumTwoNumber(arr, k));


function vowels(char) {
    let register = {};

    for (let i = 0; i < char.length; i++) {
        // if (char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] === 'o' || char[i] === 'u') {
        if (["a", "e", "i", "o", "u"].includes(char[i])) {
            if (register[char[i]]) {
                register[char[i]]++;
            }
            else {
                register[char[i]] = 1
            }
        }
    }
    return register;
}
const char = "Deev mittaal";
console.log(vowels(char));
