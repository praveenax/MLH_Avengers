var _ = require('lodash');
var order = require('./orders');
var utils = require('../utils');

var orders = [];
var u = new utils();
for (var i = 0; i < 2; i++) {
    var orderObj = order("O" + i, u.randInt(1, 2));

    orders.push(orderObj);
}


//console.log(orders);

//console.log(JSON.stringify(orders));

//need to read the order one by one.

//order

var itemIds = []
var values = orders.map(order => (
//    console.log(order) 
//    var items = order["items"];
    order["items"].map(item => (
        item["id"]
    ))
    
));

console.log(values);

var tasks = [];
var all_items = _.flattenDeep(values);
console.log(all_items);

//fetch the tasks from items 

