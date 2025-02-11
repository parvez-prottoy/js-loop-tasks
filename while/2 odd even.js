/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Subtask-1:
let o = 61;
while (o <= 100) {
  if (o % 2 !== 0) {
    console.log(o);
  }
  o++;
}

// Subtask-2:
let e = 78;
while (e <= 98) {
  if (e % 2 === 0) {
    console.log(e);
  }
  e++;
}
