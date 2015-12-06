var Identity = module.exports = function(value) {
    this.value = value;
}
Identity.prototype.bind = function(transform) {
    return transform(this.value);
};
Identity.prototype.toString = function() {
    return 'Identity(' + this.value + ')';
}
