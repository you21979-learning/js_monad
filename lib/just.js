var Just = module.exports = function(value) {
    this.value = value;
}
Just.prototype.bind = function(transform) {
    return transform(this.value);
};
Just.prototype.toString = function() {
    return 'Just(' +  this.value + ')';
}

