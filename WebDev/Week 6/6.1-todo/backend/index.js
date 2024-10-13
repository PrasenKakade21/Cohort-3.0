const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.use(cors());
const { getAllTodo, createTodo, updateTodo, deleteTodoById } = require('./routes/todo'); // importing callback functions for routes
const PORT = 3000;
const JWT_SECRET = "CHAI"
const users = []




function auth(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
    console.log(users);

});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token;
       // res.sendFile('D:/coding/Cohort 3.0/WebDev/Week 6/6.1-todo/frontend/index.html')
         res.send({
            token
         })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username
    })
})


app.get('/',(req,res)=>{
  res.sendFile('D:/coding/Cohort 3.0/WebDev/Week 6/6.1-todo/frontend/auth.html')
})
// Get all todos
app.get('/todos',auth, getAllTodo);

// Add a new todo
app.post('/todos',auth, createTodo);

// Update a todo
app.put('/todos/:id',auth, updateTodo);

// Delete a todo
app.delete('/todos/:id',auth, deleteTodoById);


// TODO: can you implement search todo route ??? yes, but dont have time :(

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
