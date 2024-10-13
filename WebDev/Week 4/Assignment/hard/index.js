const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;
const todoRoutes = require('./routes/todo.js');
const userRoutes = require('./routes/user.js');

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use('/user', userRoutes);
app.use('/todo', todoRoutes);

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));