const expect = require('expect.js');
const chunk = require("./code/chunk.js")
describe('User', function() {
    it('Array split element excess reming after splited into given number', function() {
        return expect(chunk([1,3,5,2,8,90,91,63,44],4)).to.be([1,3,5,2],[8,90,91,63],[4])
    })
    it('Array element not splited into given number', function() {
        return expect(chunk([0,-1,67,33,-55,-40,-7,3,6],3)).to.be([0,-1,67],[33,-55,-40],[-7,3,6])
    })
    it('If the sptit number is not given', function() {
        return expect(chunk([1,2,3])).to.be([1],[2],[3])
    })
    it('If the sptit number is 1', function() {
        return expect(chunk([1,2,3]),1).to.be([1],[2],[3])
    })
})