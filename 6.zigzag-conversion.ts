/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    let strings: string[] = new Array(numRows).fill("");
    let index = 0;
    let ascending = true;

    s.split("").forEach((letter) => {
        strings[index] += letter;
        ascending ? index++ : index--;
        if (index === 0) ascending = true;
        else if (index === numRows - 1) ascending = false;
    });

    return strings.join("");
}
// @lc code=end

console.log(convert("PAYPALISHIRING", 4)); // "PAHNAPLSIIGYIR"
