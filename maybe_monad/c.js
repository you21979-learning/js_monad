var Just = require('../lib/just');
var Nothing = require('../lib/nothing');
var result = new Just(5).bind(value =>
                 Nothing.bind(value2 =>
                      new Just(value + alert(value2))));
console.log(result);
