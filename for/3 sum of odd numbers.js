/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Subtask-1:
let sumOddNumbers = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    sumOddNumbers += i;
  }
}
console.log(`Total Odd Sum : ${sumOddNumbers}`);

// Subtask-2:
let sumEvenNumbers = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  }
}
console.log(`Total Even Sum : ${sumEvenNumbers}`);
