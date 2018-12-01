var order = {};

var item = require('./items');

//console.log(item);
//console.log(item("test"));
//console.log(item().sort());

var itemObj = item("burger");


order["items"] = [itemObj];
order["createdAt"] = Date.now();
order["cusId"] = 1;
order["value"] = 100;

console.log(order);
