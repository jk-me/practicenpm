module.exports = {
  tiny: function (string) {
    if (typeof string !== "string") throw new TypeError("Not a string!");
    return string.replace(/\s/g, "");
  },
  removeSym: function(string) {
    if (typeof string !== "string") throw new TypeError("Not a string!");
    return string.replace(/[^\w\s]/g, "")
  }
}
