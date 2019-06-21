
function rover(command){
    return command
}

function roverDisplacement(command){
    const displacement = command[1]
    return displacement
}

function roverDirection(command){
    const direction = command[0]
    return direction
}

function roverCoordinates(position){
    const position_x = position[0]
    const position_y = position[1]
    return [position_x,position_y]
}

function roverX(position){
    const position_x = position[0]
    return position_x
}

function roverY(position){
    const position_y = position[1]
    return position_y
}

function roverMovement(position,command){
    //En que direccion es el movimento?
    let x = roverX(position)
    let y = roverY(position)
    const dir = roverDirection(command)
    const dis = roverDisplacement(command)
    switch(dir) {
        case "f": 
        y+=dis
        console.log('se mueve hacia adelante')
        break
        case "b":
        y-=dis
        console.log('se mueve hacia atrás')
        break
        case "l":
        x-=dis
        console.log('se mueve hacia la izquierda')
        break;
        case "r":
        x+=dis
        console.log('se mueve hacia la derecha')
        break;
    }
    //Cuanto quieres que me mueva?
    return [x,y]
    //Dame tu nueva posicion

}

module.exports = {
    rover,
    roverDisplacement,
    roverDirection,
    roverCoordinates,
    roverMovement
}