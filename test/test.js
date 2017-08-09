var qunit = require('qunitjs');
require('qunitjs/qunit/qunit.css');

require('./temp_test');

qunit.load();
qunit.config.testTimeout = 5000;
qunit.start();
