function getSum(a, b){
  var test = 0;
  if(a>b){
    for(let i=b;i<=a;i++){
      test +=i; 
    }
  }
  else if(b>a){
    for(let i=a;i<=b;i++){
      test +=i; 
    }
  }else{
    return a;
  }
  return test;
}

module.exports = {getSum};