
var utils = require('../utils');
var u = new utils();
var ITEMCOUNT = 20;
var items = {};

for(var i=0;i<ITEMCOUNT;i++){
    var itemName = "task"+(i+1);
    
//    var tasks = [];
//    var startingValue = u.randInt(1,10);
//    for(var j=startingValue;j<=startingValue + u.randInt(1,10);j++){
//        tasks.push('task'+j);
//    }
    
    
    items[itemName] = {
        id:itemName,
        name:itemName,
        desc:'this is a desc ' + itemName,
        
    }
}

console.log(JSON.stringify(items));