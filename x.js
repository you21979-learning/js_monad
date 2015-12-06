// proxyがない
var Just = require('./lib/just');
var Nothing = require('./lib/nothing');
function wrap(target, unit) {
    target = unit(target);
    function fix(object, property) {
        var value = object[property];
        if (typeof value === 'function') {
            return value.bind(object);
        }
        return value;
    }
    function continueWith(transform) {
        return wrap(target.bind(transform), unit);
    }
    return new Proxy(function() {}, {
        get: function(_, property) {
            if (property in target) {
                return fix(target, property);
            }
            return continueWith(value => fix(value, property));
        },
        apply: function(_, thisArg, args) {
            return continueWith(value => value.apply(thisArg, args));
        }
    });
}
function getUser() {
    return new Just({
        getAvatar: function() {
            return Nothing; // no avatar
        }
    });
}
 
var unit = value => {
    // if value is a Maybe monad return it
    if (value === Nothing || value instanceof Just) {
        return value;
    }
    // otherwise wrap it in Just
    return new Just(value);
}
 
var user = wrap(getUser(), unit);
 
console.log(user.getAvatar().url);
