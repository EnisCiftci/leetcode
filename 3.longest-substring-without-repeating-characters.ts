/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let length = 0;
    let characterMap = new Map();
    let leftIndex = 0;
    for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
        const character = s[rightIndex];
        if (characterMap.has(character) && characterMap.get(character) >= leftIndex) {
            leftIndex = characterMap.get(character) + 1;
        }
        length = Math.max(length, rightIndex - leftIndex + 1);
        characterMap.set(character, rightIndex);
    }
    return length;
}
// @lc code=end

console.log(lengthOfLongestSubstring(""));
