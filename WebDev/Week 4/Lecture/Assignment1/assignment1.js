const express = require('express')
const app = express()
const fs = require('fs');


let data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))

let counter = 0;
if (data.length > 0) {

    counter = data[data.length - 1].id + 1;
}
app.options('/', function (req, res) {
    const str = "Welcome to TODO APP \n Your Options \n Get request - Shows List of TODOs \n Post request - Add TODOs (TODO,Time) \n Put request - Update TODOs (id,Todo,Time) \n Delete request - Deletes TODO (id)"
    res.send(str);
})
app.get('/', function (req, res) {
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    res.send(data);
})
app.post('/', function (req, res) {
    const dataenitiy = {
        id: counter,
        title: req.query.todo,
        time: req.query.time
    }
    data = JSON.parse(fs.readFileSync("todos.json", "utf-8"))
    data.push(dataenitiy);
    pushdata();
    res.send("Todo Added")
})
app.put('/', function (req, res) {
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
})
app.delete('/', function (req, res) {
    data = data.filter(obj => obj.id != req.query.id);
    pushdata();
    res.send("Todo Deleted")
})
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
app.listen(3000)
