import {TestApp } from 'zos';

const Votest = artifacts.require('Votest');

contract('Votest', function ([_, owner, recipient, anotherAccount]) {

  console.log('ACCOUNTS');
  console.log(_);
  console.log(owner);
  console.log(recipient);
  console.log(anotherAccount);

  // ### via proxy ###
  beforeEach(async function () {
    this.app = await TestApp({ from: owner })
  });

  describe('via proxy, total supply', function () {
    it('returns the total amount of tokens', async function () {
      const proxy = await this.app.createProxy(Votest);
      const result = await proxy.totalSupply();

      assert.equal(result.toNumber(), 200000000);
    })
  })
   
  // describe('via proxy, name', function () {
  //   it('name', async function () {
  //     const proxy = await this.app.createProxy(Votest);
  //     const testVar = await proxy.name();
  //     assert.equal(testVar, 'VOTE Test');
  //     // console.log(this.token);
  //   });
  // });

});