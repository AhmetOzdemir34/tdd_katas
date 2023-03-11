function countConsonants(str) {
    var arr = ["a","A","e","E","i","I","o","O","u","U"];
    var set = new Set();
    str.split("").forEach((s)=>{
        if(!arr.includes(s) && s.toUpperCase() != s.toLowerCase()){
            set.add(s.toLowerCase());
        }
    });
    return set.size;
}

module.exports = {countConsonants};