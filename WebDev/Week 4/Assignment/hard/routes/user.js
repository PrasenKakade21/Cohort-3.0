const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const users = []

// User Routes
router.post('/signup', (req, res) => {
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

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token;
        res.sendFile('D:/coding/Cohort 3.0/WebDev/Week 6/6.1-todo/frontend/index.html')
        // res.send({
        //     token
        // })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user

});

router.post('/logout', userMiddleware, (req, res) => {


});

module.exports = router