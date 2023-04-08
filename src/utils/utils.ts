
function randomNumber(maxValue:number):number{
    return Math.floor(Math.random()*maxValue)
}

function generateColor():string{
    let firstNb:number = randomNumber(255)
    let secondeNb:number = randomNumber(255)
    let thirdNb:number = randomNumber(255)

    return "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);
}
function randomSentences():string{
    let sentences:string[]=["Do you like this one ?","Maybe this one ?","This color is the one !","This color is cool right ^^"
        ,"Interesting one !","What about this color ?","Check this one !","Another one is ready","Do you see that one?"
        ,"Bruh this one is great","Will it be the one ?","Feeling of deja vu?"];

    return sentences[randomNumber(8)];
}
export {generateColor,randomSentences}