const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// console.log(nums);`
const newNums = nums.filter((num)=> {
    return num % 2 === 0;
});
console.log(newNums);