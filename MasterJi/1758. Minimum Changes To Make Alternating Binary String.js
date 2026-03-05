v1758. Minimum Changes To Make Alternating Binary Stringclass Solution {
    myConvert(s) {
        let i = 0;
        let sign = 1;
        let res = 0;
        const INT_MAX = 2147483647;
        const INT_MIN = -2147483648;

        while (i < s.length && s[i] === ' ') {
            i++;
        }

        if (i < s.length && (s[i] === '+' || s[i] === '-')) {
            sign = s[i] === '-' ? -1 : 1;
            i++;
        }

        while (i < s.length && s[i] >= '0' && s[i] <= '9') {
            let digit = s[i] - '0';

            if (res > Math.floor(INT_MAX / 10) || (res === Math.floor(INT_MAX / 10) && digit > 7)) {
                return sign === 1 ? INT_MAX : INT_MIN;
            }

            res = res * 10 + digit;
            i++;
        }

        return res * sign;
    }
}
