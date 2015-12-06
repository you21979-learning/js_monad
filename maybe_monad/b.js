var Just = require('../lib/just');
var result = new Just(5).bind(value =>
                 new Just(6).bind(value2 =>
                      new Just(value + value2)));
console.log(result);
