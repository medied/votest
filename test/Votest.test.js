const Votest = artifacts.require('Votest');

contract('Votest', function ([_, owner, recipient, anotherAccount]) {

  console.log('ACCOUNTS');
  console.log(_);
  console.log(owner);
  console.log(recipient);
  console.log(anotherAccount);

  // ### non-proxy ###
  beforeEach(async function () {
    this.token = await Votest.new(owner);
    
  });
  
  describe('non-proxy, total supply', function () {
    it('returns the total amount of tokens', async function () {
      const testVar = await this.token.totalSupply();

      assert.equal(testVar.toNumber(), 200000000000);
    });
  });

  describe('non-proxy, name', function () {
    it('name', async function () {
      const testVar = await this.token.name();
      assert.equal(testVar, 'VOTE Test');
    });
  });

});