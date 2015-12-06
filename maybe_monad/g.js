var Just = require('../lib/just');
var Nothing = require('../lib/noting');
function getUser() {
    return new Just({
        getAvatar: function() {
            return Nothing; // no avatar
        }
    });
}
var url = getUser()
    .bind(user => user.getAvatar())
    .bind(avatar => avatar.url);
if (url instanceof Just) {
    console.log('URL has value: ' + url.value);
} else {
    console.log('URL is empty.');
}
