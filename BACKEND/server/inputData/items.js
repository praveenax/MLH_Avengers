module.exports = function (str) {

    var item = {};

    item["id"] = "A123";
//    item["name"] = "Burger" ;
    item["name"] = str;
    item["value"] = 100;

    //console.log(item);

//    item.sort = function () {
//        console.log('sorted');
//    }

    return item;

}
