const {CNN} = require('nodeml');
let cnn = new CNN();

cnn.configure({learning_rate: 0.1, momentum: 0.001, batch_size: 5, l2_decay: 0.0001});


var layer = [];
layer.push({type: 'input', out_sx: 1, out_sy: 1, out_depth: 8});
layer.push({type: 'svm', num_classes: 10});

cnn.makeLayer(layer);

// set pre-trained
//cnn.setModel(JSON.parse(str));

//cnn.train([0.2, 0.5, 0.7, 0.4], 1);       
//cnn.train({ 'my': 20, 'home': 30 }, 1);   
//
//// training bulk
//cnn.train([[2, 5,], [2, 1,]], [1, 2]);    
//cnn.train([{}, {}], [1, 2]);   



cnn.train({'fun': 3, 'couple': 1}, 'comedy');
cnn.train({'couple': 1, 'fast': 1, 'fun': 3}, 'comedy');
cnn.train({'fast': 3, 'furious': 2, 'shoot': 2}, 'action');
cnn.train({'furious': 2, 'shoot': 4, 'fun': 1}, 'action');
cnn.train({'fly': 2, 'fast': 3, 'shoot': 2, 'love': 1}, 'action');

//let result = cnn.test([2, 5, 1, 4]);
let result2 = cnn.test({'fun': 3, 'fast': 3, 'shoot': 2});


//console.log(result);

console.log(result2);