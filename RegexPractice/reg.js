var regExbyr = /(byr):(19[2-9][0-9]|200[0-2])\b/
var regExiyr = /(iyr):(201[0-9]|2020)\b/
var regExeyr = /(eyr):(202[0-9]|2030)\b/
var regExhgt = /((hgt):([0-9]{3})(cm))\s|((hgt):([0-9]{2})(in))\b/
var regExhcl = /(hcl):(#[0-9a-f]{6})\b/
var regExecl = /(ecl):(amb|blu|brn|gry|grn|hzl|oth)\b/
var regExpid = /(pid):([0-9]{9})\b/

var myString = `pid:325927588
byr:1910 iyr:2019
hgt:107  hcl:#866857
eyr:2036 ecl:amb`

console.log(myString.match(regExbyr));
console.log(myString.match(regExiyr));
console.log(myString.match(regExeyr));
console.log(myString.match(regExhgt));
console.log(myString.match(regExhcl));
console.log(myString.match(regExecl));
console.log(myString.match(regExpid));