let todos = []; 
let counter = 0;

 async function getAllTodo(req, res, next) {

    let usertodo = [];
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id == req.body.id && todos[i].token === req.header.token){
            usertodo.push(todos[i]); 
        }
        res.send({
            todo : usertodo
        })}

}

 async function createTodo(req, res, next) {
    const todo = {
        token:req.header.token,
        id: counter,
        title: req.body.todo,
        completed: req.body.completed
    }
    todos.push(todo);
    res.send("Todo Added")
    counter++;
}

 async function updateTodo(req, res, next) {
    let updated = false;
    const todo = {
        token:req.body.token,
        id: counter,
        title: req.body.todo,
        completed: req.body.completed

    }
    for (let i = 0; i < todos.length; i++) {
            if(todos[i].id == req.body.id && todos[i].token === req.header.token){
                todos[i] = todo;
                updated = true;
            }
        
    }
    if(updated){
        res.send("Todo updated")
    }else{
        res.send("Todo not updated")
    }
}

 async function deleteTodo(req, res, next) {
    todos = todos.filter(obj => obj.id == req.body.id && obj.token === req.header.token);
    res.send("Todo Deleted");
}

async function deleteTodoById(req, res, next) {
    todos = todos.filter(obj => obj.id == req.body.id && obj.token === req.header.token);
    res.send("Todo Deleted");
}

module.exports = { getAllTodo, createTodo,updateTodo, deleteTodo,deleteTodoById}
