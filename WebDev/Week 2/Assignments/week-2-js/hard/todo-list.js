/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
constructor(){
  this.todolist = []

}
  validI(i){
    if(i < this.todolist.length && i >= 0){
      return true;
    }
    else{
      return false;
    }
  }
  add(todo){
    this.todolist.push(todo);
  }
  remove(i){
    if(this.validI(i)){
      this.todolist.splice(i,1);
    }
  }
  update(i,todo){
    if(this.validI(i)){
      this.todolist[i] = todo;
    }
  }
  getAll(){
    return this.todolist;
  }
  get(i){
    if(this.validI(i)){
      return this.todolist[i];
    }
    else{
      return null;
    }
  }
  clear(){
    this.todolist = [];
  }
}

module.exports = Todo;
