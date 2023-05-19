// todo ----- VERY EASY -----

// ? Task #1
// ? Is the Object Empty?

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0 ? true : false;
// }

// ? Task #2
// ? Does the Object Contain a Given Key?

// function hasKey(obj, key) {
// 	let arr = [...Object.keys(obj)];
// 	return arr.includes(key)
// }

// ? Task #3
// ? Convert Number to Corresponding Month Name

// function monthName(num) {
//     let obj = {
//         1: "January",
//         2: "February",
//         3: "March",
//         4: "April",
//         5: "May",
//         6: "June",
//         7: "July",
//         8: "August",
//         9: "September",
//         10: "October",
//         11: "November",
//         12: "December",
//     }
//     return obj[num];
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = monthName(inp.value);
// }

// ? Task #4
// ? Multi-division

// function abcmath(a, b, c) {
//     let res = 0;
//     for (let i = 1; i <= b; i++) {
//         res = a + a;
//     }
//     return res % c === 0 ? true : false;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let inp3 = document.querySelector(".inp3");
//     let res = document.querySelector(".result");

//     res.innerHTML = abcmath(inp1.value, inp2.value, inp3.value);
// }

// ? Task #5
// ? Minimum Removals to Make Sum Even

// function minimumRemovals(arr) {
//     let res = arr.reduce((acc, cur) => Number(acc) + Number(cur));
//     return res % 2 === 0 ? 0 : 1;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");
//     let arr = firstInp.value.trim().split(" ");
//     res.innerHTML = minimumRemovals(arr);
// }

// ? Task #6
// ? Reverse Coding Challenge #3

// function mysteryFunc(arr, num) {
//     let resArr = arr.map(elem => elem % num === 0 ? 0 : elem % num)
//     return resArr
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let res = document.querySelector(".result");
//     let arr = firstInp.value.trim().split(" ");
//     res.innerHTML = mysteryFunc(arr, secondInp.value);
// }


// todo ----- EASY -----

// ? Task #1
// ? How Many Vowels?

// function countVowels(str) {
//     let res = str.split('').filter(elem => elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u')

//     return res.length;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = countVowels(inp.value);
// }

// ? Task #2
// ? Is Johnny Making Progress?

// function progressDays(runs) {
//     let cnt = 0;
//     for (let i = 0; i < runs.length; i++)
//         if (runs[i] < runs[i + 1])
//             cnt++;
//     return cnt;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");
//     let myArr = inp.value.trim().split(" ");

//     res.innerHTML = progressDays(myArr);
// }


// todo ----- MEDIUM-----

// ? Task #1
// ? Integer Digits Count

// function count(n) {
//     let res = Math.abs(n).toString().split('')
//     return res.length;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = count(inp.value);
// }

// ? Task #2
// ? Instant JAZZ

// function jazzify(arr) {
//     return arr.map(elem => elem.slice(-1) === '7' ? elem : elem.concat(7));
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = jazzify(inp.value.trim().split(" "));
// }

// ? Task #3
// ? Algebra Sequence — Boxes

// function boxSeq(step) {
//     if (step % 2 !== 0)
//         return +step + 2;
//     return step;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = boxSeq(inp.value);
// }

// ? Task #4
// ? Purge and Organize

// function uniqueSort(arr) {
//     let newArr = [];
//     let myArr = arr.sort((a, b) => a - b);
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] !== myArr[i + 1])
//             newArr.push(myArr[i]);
//     }
//     return newArr;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = uniqueSort(inp.value.trim().split(" "));
// }