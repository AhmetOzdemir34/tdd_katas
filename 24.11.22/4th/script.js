function moveZeros(arr) {
    var numb = 0;
    arr = arr.filter((exa)=> {
      if(exa===0){
        numb++;
      }
      return exa !== 0;
    });
    
    for(let i=0;i<numb;i++){
      arr.push(0);
    }
    return arr;
}

module.exports = {moveZeros};