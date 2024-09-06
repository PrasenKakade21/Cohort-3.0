// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
let temp = "";
try{
    const content = fs.readFileSync('a.txt','utf-8');
    temp = content.replace(/\s+/g," ");
}
catch(err){
    console.log(err);
}


fs.writeFile('a.txt',temp,err => {
    if(err){
        console.log("write failed");
    }
    else{
        console.log("Cleanup Successful");
    }
})





