/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Subtask-1:
let sumOddNumbers = 0;
let o = 91;
while (o <= 129) {
  if (o % 2 !== 0) {
    sumOddNumbers += o;
  }
  o++;
}
console.log(`Total Odd Sum : ${sumOddNumbers}`);

// Subtask-2:
let sumEvenNumbers = 0;
let e = 51;
while (e <= 85) {
  if (e % 2 === 0) {
    sumEvenNumbers += e;
  }
  e++;
}
console.log(`Total Even Sum : ${sumEvenNumbers}`);
