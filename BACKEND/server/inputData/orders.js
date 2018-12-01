module.exports = function (str, itemCount) {

    var order = {};

    var item = require('./items');

    //console.log(item);
    //console.log(item("test"));
    //console.log(item().sort());

    var itemObj = item("burger");
    var itemObj2 = item("appam");
    
    order["items"] = [];


    for (var i = 0; i < itemCount; i++) {
        var itemObj = item("item #"+i);
//        var orderObj = order("O" + i, u.randInt(1, 5));
//
//        orders.push(orderObj);
        
        order["items"].push(itemObj);
    }


//    order["items"] = [itemObj, itemObj2];
    order["createdAt"] = Date.now();
    order["cusId"] = str;
    order["value"] = 100;

    //    console.log(order);

    return order;

}
