function dual(arr){
    max1 = null;
    max2 = null;

    arr.forEach((exa)=>{
        if(!max1){
            max1 = exa
        }else{
            if(max1<exa){
                max1 = exa;
            }
        }
    });
    filtered = arr.filter((exa)=> exa==max1);
    if(filtered.length==2){
        return 0;
    }
    arr = arr.filter((exa)=> exa!=max1);

    arr.forEach((exa)=>{
        if(!max2){
            max2 = exa
        }else{
            if(max2<exa){
                max2 = exa;
            }
        }
    });

    return max1-max2;
}

console.log(dual([10,20,20,15]));

module.exports = {dual};