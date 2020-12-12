export const passportFieldValidation: [string, RegExp][] = [
    ['byr', /(byr):(19[2-9][0-9]|200[0-2])\b/],
    ['iyr', /(iyr):(201[0-9]|2020)\b/],
    ['eyr', /(eyr):(202[0-9]|2030)\b/],
    ['hgt', /((hgt):(1[5-8][0-9]|19[0-3])(cm))\b|((hgt):(59|6[0-9]|7[0-6])(in))\b/],
    ['hcl', /(hcl):(#[0-9a-f]{6})\b/],
    ['ecl', /(ecl):(amb|blu|brn|gry|grn|hzl|oth)\b/],
    ['pid', /(pid):([0-9]{9})\b/],
    ['cid', /(cid):/]
]


export {passportFieldValidation as PFV};