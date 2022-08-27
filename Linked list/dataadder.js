var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        throw err;
    }
    var db = client.db("Final_Project");
    const coordinates = [{ 'x': 40, 'y': 90 }, { 'x': 160, 'y': 90 }, { 'x': 280, 'y': 90 }, { 'x': 400, 'y': 90 },
{ 'x': 520, 'y': 90 }, { 'x': 640, 'y': 90 }, { 'x': 760, 'y': 90 }, { 'x': 880, 'y': 90 }, { 'x': 1000, 'y': 90 },
{ 'x': 1120, 'y': 90 }, { 'x': 40, 'y': 200 }, { 'x': 160, 'y': 200 }, { 'x': 280, 'y': 200 }, { 'x': 400, 'y': 200 },
{ 'x': 520, 'y': 200 }, { 'x': 640, 'y': 200 }, { 'x': 760, 'y': 200 }, { 'x': 880, 'y': 200 }, { 'x': 1000, 'y': 200 },
{ 'x': 1120, 'y': 200 }];
    db.collection("Coordinates").insertMany(coordinates, function (err) {
        if (err) {
            throw err;
        }
        console.log("Successfully inserted");
        client.close();
    })
})