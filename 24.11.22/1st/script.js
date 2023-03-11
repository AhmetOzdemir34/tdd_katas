function squareDigits(num){
    var returnStr = "";
    num = String(num);
    num.split("").forEach((exa)=>{
        returnStr = returnStr + String(Number(exa)**2);
    })
    return Number(returnStr);
}

module.exports = {squareDigits};
//squareDigits(123);