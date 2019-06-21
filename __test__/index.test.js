const rover = require('../index.js')
const position = ["f",10]
describe("Rover orientation", () => {
    it("Giving an initial position, return position", () => {
        expect(rover(position)).toEqual(position);
    })

}
)