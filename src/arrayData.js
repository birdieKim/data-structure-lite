var ArrayData = function() {
};

ArrayData.prototype.elements = [];     // the array where elements are stored

/**
 *
 * Make the data object empty
 *
 */
ArrayData.prototype.clear = function() {
  this.elements.length = 0;
};

/**
 *
 * Check if the stack is empty
 *
 * @return
 *   Boolean for whether the data object is empty or not
 */
ArrayData.prototype.isEmpty = function() {
  var len = this.elements.length;
  if(len > 0){
    return false;
  } else {
    return true;
  }
};


module.exports = ArrayData;
