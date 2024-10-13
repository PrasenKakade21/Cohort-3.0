// server
const express = require("express");
const app = express();
// auth
const jwt = require("jsonwebtoken");
// database
const mongoose = require("mongoose")


app.use(express.json());

app.post("/user/signup", (req, res) => {

    
    
});

app.post("/user/signin", (req, res) => {

    

});
app.post("/user/course/purchase", (req, res) => {

    

});
app.get("/user/purchases", (req, res) => {

    

});
app.get("/courses", (req, res) => {

    
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🔥`));
