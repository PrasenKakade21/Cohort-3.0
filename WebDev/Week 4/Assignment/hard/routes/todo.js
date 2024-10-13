const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const fs = require('fs');


let data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))

let counter = 0;
if (data.length > 0) {

    counter = data[data.length - 1].id + 1;
}
// todo Routes
router.post('/', (req, res) => {
    // Implement todo creation logic
    const dataenitiy = {
        id: counter,
        title: req.query.todo,
        time: req.query.time
    }
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    data.push(dataenitiy);
    pushdata();
    res.send("Todo Added")
});

router.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic   
    const dataenitiy = {
        id: req.query.id,
        title: req.query.todo,
        time: req.query.time
    }
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    const index = data.findIndex(entity => {
        return entity.id == dataenitiy.id
    });
    if (index > -1) {
        data[index] = dataenitiy;
    }
    else {
        res.send("No Todo with id", dataenitiy.id, "Found")

    }
    pushdata();
    res.send("Todo Added")
});

router.delete('/', adminMiddleware, (req, res) => {
    data = data.filter(obj => obj.id != req.query.id);
    pushdata();
    res.send("Todo Deleted")});

router.delete('/:id', adminMiddleware, (req, res) => {
    data = data.filter(obj => obj.id != req.query.id);
    pushdata();
    res.send("Todo Deleted")
});


router.get('/', adminMiddleware, (req, res) => {
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    res.send(data);
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    data = data.filter(obj => obj.id != req.query.id);
    res.send(data);
});
function pushdata() {
    console.log(data)
    try {

        const jsondata = JSON.stringify(data);
        fs.writeFile("todos.json", jsondata, err => {

            if (err != null) {
                console.log(err)
            }
            else {
                counter++;
                console.log("Updated Successfully")
            }
        });
    } catch (error) {
        console.log(error)
    }


}
module.exports = router;