// let promise = new Promise(function(res,rej){

//     res();
//     rej();
// });

// promise.then(
//     function(value){  },
//     function(error){  }
// );

// //Another example
// const count = true;  //true //there is a count value
// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

// //then() methods
// let countvalue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countvalue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

// //catch method

// let value = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  value.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );

//  //Finally

// let values = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });

// add other blocks of code
// values.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );
  
