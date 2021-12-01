// import chai from "chai";
var chai = require('chai');  

const { expect } = chai;

describe("Test", () => {
  it("Basic Test", async () => {
    expect(1).to.equal(1);
  });
});


// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });



const Index = require('./index')
const assert = require('assert').strict;
// The strict property of the assert module will allow us to use special equality tests that are recommended by Node.js

describe("integration test", function() {
    it("Ensure Balance Is Correct", function() {
        assert.equal(Index.sampleFun, 4);
    });
});