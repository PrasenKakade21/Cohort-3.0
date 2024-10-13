const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
let dataenitiy = {
    id:0,
    title: "",
    time: Date
}
let data = JSON.parse(fs.readFileSync("todos.json","utf-8"))

  let counter = 0;
  if(data.length > 0){

      counter = data[data.length - 1].id + 1; 
  }
 
program
  .name('todo')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('add')
  .description('Adds todo')
  .argument('<string>', 'todo title')
  .argument('<Time hh:mm:ss>', 'todo time')
  .action((title,time) => {
        dataenitiy.id = counter;
        dataenitiy.title = title;
        dataenitiy.time = time;
        data.push(dataenitiy);
        pushdata();
  });
program.command('show')
  .description('Updates todo')
  .action(() => {
    data.forEach(obj => {
        console.log(obj)
    });
  });
program.command('delete')
  .description('Delete todo by id')
  .argument('<int>', 'todo id')
  .action((id) => {
    data = data.filter(obj => obj.id != id);
    pushdata();
  });

  
 function pushdata(){   
    console.log(data)
    try {
        
        const jsondata = JSON.stringify(data);
        fs.writeFile("todos.json",jsondata, err => {

            if(err != null){
                console.log(err)
            }
            else{
                counter++;
                console.log("Updated Successfully")
            }
        });
    } catch (error) {
        console.log(error)
    }


 }

 program.parse(process.argv);
