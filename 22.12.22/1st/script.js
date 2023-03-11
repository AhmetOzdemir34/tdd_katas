function hasSurvived(attackers, defenders){
    var len = defenders.length >= attackers.length ? defenders.length : attackers.length;
    var def_point=0;
    var att_point=0;
    
    for(var i=0;i<len;i++){
      if(defenders[i]>attackers[i]){
        def_point += 1; 
      }
      else if(defenders[i]<attackers[i]){
       att_point += 1; 
      }
      else if(defenders[i] && !attackers[i]){
        def_point += 1;
      }
      else if(!defenders[i] && attackers[i]){
        att_point += 1;
      }
    }
    if(att_point==def_point){
      var a = 0;
      var d = 0;
      
      attackers.forEach(e => a+=e);
      defenders.forEach(e => d+=e);
      
      return d>=a;
    }
    return def_point>=att_point;
}

module.exports = {hasSurvived};
  