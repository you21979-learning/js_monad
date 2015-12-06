var Identity = require('../lib/identity')
var result = new Identity(5).bind(value =>
                 new Identity(6).bind(value2 =>
                      new Identity(value + value2)));
console.log(result.toString());
