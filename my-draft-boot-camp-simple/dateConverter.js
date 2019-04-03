const twelveTotwenty = function(twelve) {
    
  var strToNum = twelve.length > 4 ? +twelve.substr(0, 2) : +twelve.substr(0, 1);
  var a = strToNum + 12 == 24 ? a = '00' : strToNum + 12; 
  var b = strToNum > 9 ? twelve.substr(2, 3) : twelve.substr(1, 3);
  var twenty = a + b; 
  
  return twenty;
}

const twentyToTwelve = function(twenty) {
    
    var strToNum = twenty.length > 4 ? +twenty.substr(0, 2) : +twenty.substr(0, 1);
    var a = (strToNum % 12) || 12;
    var b = (strToNum > 9) ? twenty.substr(2, 3) : (strToNum <= 9 & twenty.length > 4) ? twenty.substr(2, 3) : twenty.substr(1, 3);
    var amPm = strToNum < 12 ? " AM" : " PM";
    var twelve = a + b + amPm;

    return twelve;
  }

export { twentyToTwelve, twelveTotwenty }