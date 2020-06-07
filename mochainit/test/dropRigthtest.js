const expect = require('expect.js');
const dropRigth = require("./code/dropRigth.js")
describe('User', function() {
    it('If the number is greater than array length', function() {
        return expect(dropRigth([1,3,5],4)).to.be()
    })
    it('If the number is greater than 1', function() {
        return expect(dropRigth([0,-1,67,33,-55,-40,-7,3,6],3)).to.be(0,-1,67,33,-55,-40)
    })
    it('If the number is not given', function() {
        return expect(dropRigth([1,2,3])).to.be(1,2)
    })
    it('If the number is 1', function() {
        return expect(dropRigth([1,2,3]),1).to.be(1,2)
    })
})