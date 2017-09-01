// This module is for supporting Stack & Queue
var ArrayData = function() {

};


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
 * @return {Boolean}
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
