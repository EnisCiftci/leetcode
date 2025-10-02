/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    let reversedNumber = +Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join()
        .replace(/\D|^0+/g, "");

    const max = 2 ** 31;
    if (reversedNumber >= max || reversedNumber < -max) return 0;
    else return x < 0 ? 0 - reversedNumber : reversedNumber;
}
// @lc code=end

console.log(reverse(1534236469));
