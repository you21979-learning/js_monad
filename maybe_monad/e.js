function getUser() {
    return {
        getAvatar: function() {
            return null; // no avatar
        }
    };
}
try {
    var url = getUser().getAvatar().url;
    console.log(url); // this never happens
} catch (e) {
    console.log('Error: ' + e);
}
