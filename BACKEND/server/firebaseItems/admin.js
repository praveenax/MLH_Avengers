var admin = require("firebase-admin");

var serviceAccount = require("./config.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gjden-ac410.firebaseio.com"
});

admin.database().ref("rota").once("value").then((snapshot) => {
    console.log(snapshot.val());
});
