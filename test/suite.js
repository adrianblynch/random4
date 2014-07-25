var assert = require('assert');
var r4 = require('../lib/random4');

describe('number returned', function() {
	it('should equal 4', function() {
		assert(r4.random4() === 4);
	});
});