const fs = require('fs');
const Lda = require('./lib/index');
let rawdata = fs.readFileSync('./testInput.json');
let document = JSON.parse(rawdata);
const lda = new Lda(null, document);
console.log(lda.getTopicWords());
console.log('***Test Complete***');

