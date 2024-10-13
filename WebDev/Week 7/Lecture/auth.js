const SECRET = "Chai";
const jwt = require("jsonwebtoken")

function auth(req,res,next){

    const token = req.headers.token;

    const decoded_data = jwt.verify(token,SECRET);

    if(decoded_data){
        req.userId = decoded_data.id;
     
        next()
    }
    else {
        res.status(403).json({
            message:"Invalid Credentials"
        })
    }
jwt.decode(token);

}

module.exports = {
    auth,
    SECRET
}