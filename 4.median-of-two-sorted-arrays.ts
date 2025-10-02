/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    if (merged.length % 2 === 0) {
        const median = (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
        return median;
    } else {
        const median = merged[Math.floor(merged.length / 2)];
        return median;
    }
}
// @lc code=end

console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]));
