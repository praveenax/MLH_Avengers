const {kMeans} = require('nodeml');
let kmeans = new kMeans();

kmeans.train([[2, 5,], [2, 1,]], {
    k: 10, dm: 0.00001, iter: 1,  
    proc: (iter, j, d)=> { console.log(iter, j, d); }
});

let model = kmeans.getModel();
let str = JSON.stringify(model);
console.log(str);