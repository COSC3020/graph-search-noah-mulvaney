const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test = true;
jsc.assert(test, { tests: 1000 });
