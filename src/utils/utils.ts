
function randomNumber(maxValue:number):number{
    return Math.floor(Math.random()*maxValue)
}

function generateColor():string{
    let firstNb:number = randomNumber(255)
    let secondeNb:number = randomNumber(255)
    let thirdNb:number = randomNumber(255)

    return "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);
}

export {generateColor}