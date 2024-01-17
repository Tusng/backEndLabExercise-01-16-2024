//Import express package, require express
const express = require('express'); //This line has to be on the top always

//Import cors package
//Cors is a package allowing clients and server communicate with each other without the need of advanced configuration
const cors = require("cors");

//Create variable app and set the value to an invocation of express; express = require('express')
const app = express(); //express(), express object

//Set up server to accept JSON object responses
app.use(express.json()); //use the method .use

//Set up server to use cors functionality
app.use(cors());

//Create Get endpoint and method to handle/respond this specific endpoint
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

//Create another Get endpoint and method
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});



//Set this express server to listen to request on port 4000
app.listen(4000, () => console.log('Server is running on 4000')); //Use method .listen

