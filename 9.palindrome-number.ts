/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    let digits = [];

    while (x > 0) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }

    for (let i = 0; i < digits.length; i++) {
        if (!(digits[i] === digits[digits.length - 1 - i])) {
            return false;
        }
    }
    return true;
}
// @lc code=end

console.log(isPalindrome(-121));
