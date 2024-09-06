const { rejects } = require("assert");

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)
  
//   function hello(){
//     return new Promise((resolve,rejects) => {

//         resolve("Hello Promise Resolved");
//         // rejects("Hello Promise Rejected");
//     })
//   }

//   hello().then(value => {
//     console.log(value);
//   })


function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
      await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();