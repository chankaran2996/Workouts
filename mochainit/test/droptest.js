const expect = require('expect.js');
const drop = require("./code/drop.js")
describe('User', function() {
    it('If the number is greater than array length', function() {
        return expect(drop([1,3,5],4)).to.be()
    })
    it('If the number is greater than 1', function() {
        return expect(drop([0,-1,67,33,-55,-40,-7,3,6],3)).to.be(33,-55,-40,-7,3,6)
    })
    it('If the number is not given', function() {
        return expect(drop([1,2,3])).to.be(2,3)
    })
    it('If the number is 1', function() {
        return expect(drop([1,2,3]),1).to.be(2,3)
    })
})