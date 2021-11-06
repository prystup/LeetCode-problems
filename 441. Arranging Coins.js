// 441. Arranging Coins
// Problem: https://leetcode.com/problems/arranging-coins/

/* You have n coins(@) and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build. */

/* Example 1:
 @
 @@
 @@-

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2. */

/*
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
  if (n === 0) return 0;
  let coins = n;
  let rows = 0;
  for (let i = 1; i <= n + 1; i++) {
    coins = coins - i;
    if (coins >= 0) {
      rows++;
    } else {
      return rows;
    }
  }
};

console.log(arrangeCoins(8));
