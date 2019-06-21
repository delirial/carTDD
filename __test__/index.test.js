const {
    rover,
    roverDisplacement,
    roverDirection,
    roverCoordinates,
    roverMovement
 } = require('../index.js')
const command = ["f",10]
const initialPosition = [0,0]
describe("Rover orientation", () => {
    it("Giving an initial command, return command", () => {
        expect(rover(command)).toEqual(command);
    })
    it ("Giving an initial command, returns displacement", () => {
        expect(roverDisplacement(command)).toEqual(10)
    });
    it("Giving an initial command, returns position", () => {
        expect(roverDirection(command)).toEqual("f")
    })
})

describe("Rover movement", () => {
    it("Giving an initial coordinate, return the rover position", () => {
        expect(roverCoordinates(initialPosition)).toEqual(initialPosition)
    })
    it("Giving a command, return the position", () => {
        expect(roverMovement(initialPosition,command)).toEqual([0,10])
    })
})