
function rover(command){
    return command
}

function roverDisplacement(command){
    const displacement = command[1]
    return displacement
}

function roverDirection(){
    const direction = command[0]
    return direction
}
module.exports = {
    rover,
    roverDisplacement
}