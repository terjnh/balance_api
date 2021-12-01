// import chai from "chai";
var chai = require('chai'); 
request = require("request");
should = require("should");
var assert = require('chai').assert;

const { expect } = chai;


// describe("Test", () => {
//   it("Basic Test", async () => {
//     expect(1).to.equal(1);
//   });
// });


describe('Individual currency-pair API', function() {
  it('Check btc-usd GET', function(done) {
    request.get('http://localhost:3000/btcusd', function(err, response, body) {
      response.statusCode.should.equal(200);
      done();
    })
  });

  it('Check eth-usd GET', function(done) {
    request.get('http://localhost:3000/ethusd', function(err, response, body) {
      response.statusCode.should.equal(200);
      done();
    })
  });
});


describe('Combined currency-pair API', function() {
  it('Check btc-usd && eth-usd GET', function(done) {
    request.get('http://localhost:3000/ethbtc_usd', function(err, response, body) {
      response.statusCode.should.equal(200);
      done();
    })
  });
});




