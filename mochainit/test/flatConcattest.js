const expect = require('expect.js');
const flatConcat = require("./code/flatConcat.js")
describe('User', function() {
    it('If its does not have exta array', function() {
        return expect(flatConcat(3,6)).to.be(3,6)
    })
    it('If there is no array elements', function() {
        return expect(flatConcat()).to.be()
    })
    it('If few value are in array', function() {
        return expect(flatConcat(5,85,[9],6,[[7]])).to.be(5,85,9,6,7)
    })
    it('If all the values are in array', function() {
        return expect(flatConcat([1],[2],[3])).to.be(1,2,3)
    })
    it('If the values are in array inside grouped', function() {
        return expect(flatConcat([1],[[2],[3]],8,[2,8])).to.be(1,2,38,2,8)
    })
})