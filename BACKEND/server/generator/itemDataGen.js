//id
//name
//duration
//cost
//tasks : [t1,t2,t3,t4]
//tag:[tag1,tag2,tag3]

var utils = require('../utils');
var u = new utils();
var ITEMCOUNT = 20;
var items = {};

for(var i=0;i<ITEMCOUNT;i++){
    var itemName = "item"+(i+1);
    
    var tasks = [];
    var startingValue = u.randInt(1,10);
    for(var j=startingValue;j<=startingValue + u.randInt(1,10);j++){
        tasks.push('task'+j);
    }
    
    
    items[itemName] = {
        id:itemName,
        name:itemName,
        duration:u.randInt(2,10),
        cost:u.randInt(10,200),
        tasks:tasks,
        tag:[]
        
    }
}

console.log(JSON.stringify(items));