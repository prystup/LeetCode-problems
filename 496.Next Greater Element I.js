// 496. Next Greater Element I
// Problem: https://leetcode.com/problems/next-greater-element-i/

/* The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        let a = nums2.slice(j, nums2.length).find((el) => {
          return el > nums2[j];
        });
        if (a) {
          result.push(a);
        } else {
          result.push(-1);
        }
      }
    }
  }
  return result;
};
