const expect = require('expect.js');
const comapct = require("./code/comapct.js")
describe('User', function() {
    it('Fails due to does not removes false', function() {
        return expect(comapct(1,5,9,false)).to.be(1,5,9)
    })
    it('Fails due to does not removes 0', function() {
        return expect(comapct(1,6,0,7)).to.be(1,6,7)
    })
    it('Fails due to does not removes null', function() {
        return expect(comapct(1,null)).to.be(1)
    })
    it('Fails due to does not removes empty elements', function() {
        return expect(comapct(1,"",3,"")).to.be(1,3)
    })
    it('Fails due to does not removes undefined', function() {
        return expect(comapct(undefined,7,9)).to.be(7,9)
    })
    it('Fails due to does not removes NaN,undefiend and empty elements', function() {
        return expect(comapct(NaN,undefined,"",5)).to.be(5)
    })

})