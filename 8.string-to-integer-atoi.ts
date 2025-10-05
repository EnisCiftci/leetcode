/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    s = s.trim();

    let negative = false;
    if (s[0] === "-") {
        negative = true;
        s = s.substring(1, s.length);
    } else if (s[0] === "+") {
        s = s.substring(1, s.length);
    }

    let numberStr = "";
    s = s.replace(/^0+/, "");
    for (let val of s.split("")) {
        if (!Number.isNaN(+val)) numberStr += val;
        else break;
    }
    let result = numberStr.length > 0 ? (negative ? -Number(numberStr) : Number(numberStr)) : 0;
    const max32BitSignedInteger = 2 ** 31;
    if (result < -max32BitSignedInteger) {
        result = -max32BitSignedInteger;
    } else if (result > max32BitSignedInteger - 1) {
        result = max32BitSignedInteger - 1;
    }
    return result;
}

// @lc code=end

console.log(myAtoi("-2147483649"));
