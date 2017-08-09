var qunit = require('qunitjs');
require('qunitjs/qunit/qunit.css');

_requireAll(require.context('.', true, /_test$/));

qunit.load();
qunit.config.testTimeout = 5000;
qunit.start();

function _requireAll(r) {
  return r.keys().map(r);
}
