function getUser() {
    return {
        getAvatar: function() {
            return null; // no avatar
        }
    };
}
var url;
var user = getUser();
if (user !== null) {
    var avatar = user.getAvatar();
    if (avatar !== null) {
        url = avatar.url;
    }
}
console.log(url);
