function arrayDiff(a, b) {
    var banned = [];
    var newArr = [];
    a.forEach((item)=>{
      if(!banned.includes(item)){
        if(b.includes(item)){
            banned.push(item);
        }
        else{
        newArr.push(item);
        }
      }
    })
    return newArr;
  }

  console.log(arrayDiff([],[1]));
  module.exports = {arrayDiff};