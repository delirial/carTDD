const {rover, roverDisplacement,roverDirection } = require('../index.js')
const command = ["f",10]
describe("Rover orientation", () => {
    it("Giving an initial command, return command", () => {
        expect(rover(command)).toEqual(command);
    })
    it ("Giving an initial command, returns direction and movemente", () => {
        expect(roverDisplacement(command)).toEqual(10)
    });

}
)