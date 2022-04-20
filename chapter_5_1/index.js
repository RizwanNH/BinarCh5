console.log("hello world");

const os = require('os');
console.log('Free Memory:', os.freemem());

const luasSegitiga = require('./segitiga.js')
console.log(luasSegitiga(3,4));

const fs = require('fs')
var data = fs.readFileSync('./data.txt','utf-8')
console.log(data)

data = data + "\ntambahan isi"
fs.writeFileSync('./data.txt', data)
console.log(data)

var budi = require('./person.json')
console.log(budi)
