// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
let content = "";

for (let i = 0; i < 10; i++) {
    content += i + "\n";
}
// console.log(content);

fs.writeFile("a.txt",content, err => {

    if(err != null){
        console.log(err)
    }
    else{
        console.log("Write Successful")
    }
});
