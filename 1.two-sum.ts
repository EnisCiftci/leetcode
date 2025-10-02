/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let answer: number[] = [];

    const hash: Map<number, number> = new Map();

    nums.forEach((num, index) => {
        hash.set(num, index);
    });

    nums.forEach((numOne, indexOne) => {
        const complement = target - numOne;
        if (hash.has(complement) && hash.get(complement) !== indexOne) {
            answer = [hash.get(complement)!, indexOne];
        }
    });

    return answer;
}
// @lc code=end
