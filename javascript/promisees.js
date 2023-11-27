// const STATES = {
//     PENDING: "pending",
//     FUL_FILLED: "fulfilled",
//     REJECTED: "rejected",
//     SETTLED: "settled"
// };
//
//
// class CustomPromise {
//     constructor(fn) {
//         this.resolveValue = undefined;
//         this.rejectValue = undefined;
//         this.status = STATES.PENDING;
//         this.settled = false;
//         try {
//             fn(this.resolve.bind(this), this.reject.bind(this))
//         } catch (e) {
//             this.rejectValue = e;
//         }
//     }
//
//     resolve(value) {
//         this.resolveValue = value;
//         this.settled = true;
//     }
//
//     reject(value) {
//         this.rejectValue = value;
//         this.settled = true;
//     }
//
//     then(fn) {
//         let intervalId = setInterval(() => {
//             if (this.settled) {
//                 if (this.resolveValue) {
//                     this.resolveValue = fn(this.resolveValue)
//                 }
//                 clearInterval(intervalId)
//             }
//         })
//
//         return this;
//     }
//
//     catch(fn) {
//         let intervalId = setInterval(() => {
//             if (this.settled) {
//                 if(this.rejectValue) {
//                     this.rejectValue = fn(this.rejectValue)
//                 }
//                 clearInterval(intervalId)
//             }
//         })
//
//         return this;
//     }
//
//     finally(fn) {
//         let intervalId = setInterval(() => {
//             if (this.settled) {
//                fn()
//                 clearInterval(intervalId)
//
//             }
//         })
//
//         return this;
//     }
// }
//
// new CustomPromise((resolve, reject) => {
//     setTimeout(() => resolve(10), 1000)
// }).then((result) => {
//     console.log(result)
//     return 20
// }).catch((res) => {
//     console.log(res);
// }).then((result) => {
//     console.log(result)
// }).finally(() => {
//     console.log("finally")
// })
// let callPromise = (functions, results, resolve, count) => {
//     if(!functions[count]) return
//     functions[count]().then((res) => {
//         console.log(res)
//         results.push(res)
//         if (results.length === functions.length) {
//             resolve(res)
//         } else {
//             count++;
//             callPromise(functions, results, resolve, count)
//         }
//     })
//
// }
//
// let promisePool = async function(functions, n) {
//     return new Promise((resolve, reject) => {
//         let results = [];
//
//         for (let i = 0; i < n; i++) {
//             callPromise(functions, results, resolve, i)
//         }
//     })
// }
// let sleep = () =>  new Promise((resolve) => setTimeout(() => resolve(800), 800));
//
// sleep(60).then((res) => {
//     console.log(res)
// })

// let functions = [
//     () =>  new Promise((resolve) => setTimeout(() => resolve(1000), 1000)),
//     () =>  new Promise((resolve) => setTimeout(() => resolve(400), 400)),
//     () =>  new Promise((resolve) => setTimeout(() => resolve(900), 900)),
//     () =>  new Promise((resolve) => setTimeout(() => resolve(100), 100)),
//     () =>  new Promise((resolve) => setTimeout(() => resolve(50), 50)),
// ]
//
// promisePool(functions, 2).then((res) => {
//     console.log(res, "fkeopfopqej")
// })


Array.prototype.snail = function(rowsCount, colsCount) {
    let row = 0;
    let col = 0;
    let arr = this;
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (row instanceof rowsCount)  {
            if (!Array.isArray(arr[row])){
                newArr[row] = [];
            }
            newArr[row][col] = arr[i];
            if(row === rowsCount-1) {
                col++
            } else {
                row++;

            }
        } else {
            console.log(newArr, row, col)
            newArr[row][col] = arr[i];

            if(row === 0)  {
                col++
            } else {
                row--;
            }
        }

    }

    return newArr
}

function split(recArr, n){

    for (let i = 0; i < recArr; i++) {
        if (recArr instanceof Array) {
            if(n === 0) {
                newArr.push(recArr[i])
            } else {
                split(recArr, n--)
            }
        } else {
            newArr.push(recArr[i])
        }
    }
}


const arr = [1,2,3,4];
console.log(arr.snail(1,4)); // [[1,2,3,4]]