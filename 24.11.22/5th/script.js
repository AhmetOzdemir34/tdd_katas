function generateHashtag (str) {
    str = str.trim();
    numb = 0;
    if(!str){
      return false;
    }
    var willReturn = "#";
    str.split(" ").forEach((exa)=>{
        willReturn += exa.charAt(0).toUpperCase() + exa.slice(1);
        numb += exa.length;
    })
    if(numb>=140){
        return false;
    }
    return willReturn;
}

// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

module.exports = {generateHashtag};