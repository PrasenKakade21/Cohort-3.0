// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

try{

    const content = fs.readFileSync("a.txt","utf-8");
    console.log(content);
}
catch(error){
    if(error.code == 'ENOENT'){
        console.log("invalid file name/path")
    }
    else{
        console.log(error);
    }
}


function calculateTime(n) {
    const startTime = performance.now(); 
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(sum,i)
    }


    return (performance.now() - startTime) / 1000;
}

console.log('Time for sum from 1 to 1000000000:', calculateTime(10000));
