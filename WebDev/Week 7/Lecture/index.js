// server
const express = require("express")
const app = express();
// auth
const jwt = require("jsonwebtoken")
const {auth,SECRET} = require("./auth")
// encryption
const bcrypt = require("bcrypt");
// input validation
const {z} = require("zod");
// database
const { UserModel,TodoModel} = require("./db");
const mongoose = require("mongoose");
mongoose.connect("")


app.use(express.json());

app.post("/signup", async (req, res) => {

    const reqBody = z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(3).max(100).email(),
        password: z.string().min(8).max(30)
    });

    const parsedData = reqBody.safeParse(req.body)
    if(!parsedData.success){
        res.json({
            message:"Invalid Data",
            error: parsedData.error
        })
        return;
    }
  const name = req.body.name; 
  const email = req.body.email;
  const password = req.body.password;
try {
    
    const hashed_passowrd = await bcrypt.hash(password,5);
      await UserModel.create({
          name: name,
          email: email,
          password: hashed_passowrd
        });
} catch (error) {
    console.log(error);
}
    res.json({
        message:"You are Logged in"
    })

});

app.post("/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  })

  const matchUser = bcrypt.compare(password,user.password)
    if(matchUser){
        const token = jwt.sign({
            id: user.id
        },SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(404).json({
            message:"Invalid Login"
        })
    }


});
app.post("/todo",auth, (req, res) => {
    res.json({
        userid: req.userId
    })
});
app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});


const port = 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);