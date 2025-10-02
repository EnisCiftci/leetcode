/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let palindrome = "";

    const split = s.split("");

    split.forEach((_, index) => {
        let left = index;
        let right = index;
        while (left >= 0 && right < split.length && split[left] === split[right]) {
            if (right - left + 1 > palindrome.length) {
                palindrome = s.substring(left, right + 1);
            }
            left -= 1;
            right += 1;
        }

        left = index;
        right = index + 1;
        while (left >= 0 && right < split.length && split[left] === split[right]) {
            if (right - left + 1 > palindrome.length) {
                palindrome = s.substring(left, right + 1);
            }
            left -= 1;
            right += 1;
        }
    });

    return palindrome;
}
// @lc code=end

console.log(
    longestPalindrome(
        "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
    )
);
