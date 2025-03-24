const promise1 = () => {
    return new Promise((resolve, reject) => {
        resolve({ msg: "First promise done" })
    })
}
const promise2 = () => {
    return new Promise((resolve, reject) => {
        resolve({ msg: "second promise done" })
    })
}
const promise3 = () => {
    return new Promise((resolve, reject) => {
        reject({ msg: "reject done" })
    })
}

Promise.race([promise1(), promise2(), promise3()])
    .then((data) => console.log("data", data))
    .catch((err) => console.log("err:", err))

// Promise.allSettled([promise1(), promise2(), promise3()])
//     .then((data) => console.log("data", data))
//     .catch((err) => console.log("err:", err))

// Promise.all([promise1(), promise2(), promise3()])
//     .then((data) => console.log("data", data))
//     .catch((err) => console.log("err:", err))