function minMinMax(array) {
    var ma = Math.max(...array);
    var mi = Math.min(...array);
    
    for(let i=mi;i<ma;i++){
      if(!array.includes(i)){
        return [mi,i,ma];
      }
    }
}

module.exports = {minMinMax};