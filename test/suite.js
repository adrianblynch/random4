var assert = require('assert');
var should = require('should');
var r4 = require('../lib/random4');

describe('Calling random4()', function() {
	it('should return the number 4', function() {
		var result = r4.random4();
		//assert(result === 4);
		result.should.be.exactly(4).and.be.a.Number;
	});
});