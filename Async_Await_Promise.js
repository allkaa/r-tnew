'use strict';

let dtVar = new Date();
console.log('Begin of MAIN script ====================================' + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// A ES2015 Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Using Promise for asyn error catch and handling.
//
// The Promise executor normally initiates some asynchronous work, immediately return control to main path and then,
// later once that completes, either calls the resolve function to resolve the promise or
// else rejects it if an error occurred.
// If an error is thrown in the executor function, the promise is rejected.
// The return value of the executor is ignored.

// Function passed to then() is put on a microtask queue, which means it runs later when the queue is emptied
// at the end of the current run of the JavaScript event loop.
// Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise
// respectively. This can be useful at times.
/*
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1 immedately,  2 and 3 after END or return in MAIN script code at the end of the current run of the JavaScript event loop.
*/

/*
// Add .then after .catch  - it works.
new Promise((resolve, reject) => {
  console.log('Initial');
  resolve();
})
.then(() => {
  throw new Error('Something failed simulation'); // create and throw new error object;
  console.log('Do this');
})
.catch((failureErrorObject) => {
  console.log(failureErrorObject);
  console.log('Do that');
})
.then(() => {
  console.log('Do this even after catch, no matter what happened before');
});
*/

/*
dtVar = new Date();
console.log('Create promise ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were done asynchronously was successful, and reject(...) when it failed.
  //sleep(3*1000); // Synchronous sleep for 3 secs.
  //throw {ErrNo: 1, ErrMsg: "Programmatically thrown error in Promise executor."}; // reject(...) will be implicitly called.
  setTimeout(() => { // Simulate asynchronous prodess. Sleep for 3 secs.
    // Asyn process.
    // For next throw reject(...) will NOT be implicitly called because it is fired inside Asyn process.
    //throw {ErrNo: 10, ErrMsg: "Programmatically thrown error in Asyn process."};
    let asynRetCode = 1; // Generates 0 or 1 randomly, 0 success, 1 failure.
    //let asynRetCode = Math.round(Math.random()); // Generates 0 or 1 randomly, 0 success, 1 failure.
    if (asynRetCode === 0) { // Simulate success of asynchronous code and call resolve(...)
      //resolve('Success'); // resolve with string message.
      // resolve with object
      resolve({ErrNo: 0, ErrMsg: "No errors so resolve(...) was called"}); // resolve case can be detected using .then(successMessageOrObject)
    }
    else { //  1 simulate errors in asynchronous code and call reject(...)
      //reject('Failure'); // reject with string message.
      // reject with object and generate exception seen in Debug mode.
      reject({ErrNo: 100, ErrMsg: "Errors occured so reject(...) was called"}); // and thrown error that will be cached using .catch(failureMessageOrObject)
    }
  }, 1000);
  dtVar = new Date();
  console.log('myFirstPromise promise created, asyn code scheduled at 1 second, return to main path ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
}).then((successMessageOrObject) => { // later if successfully fulfilled resolve(...) will pass control here:
  // successMsuccessMessageOrObjectessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  dtVar = new Date();
  console.log(successMessageOrObject);
  console.log("Promise myFirstPromise asyn finished and resolved (fulfilled)." + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
}).catch((failureMessageOrObject) => { // later if non-success reject(...) will pass control here:
  // failureMessageOrObject is whatever we passed in the reject(...) function above.
  // It doesn't have to be a string, but if it is only a failure message, it probably will be.
  // catch(failureCallback) is short for then(null, failureCallback).
  dtVar = new Date();
  console.log(failureMessageOrObject);
  console.log("Promise myFirstPromise asyn finished and rejected." + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});

// Immediately return control to main path.
dtVar = new Date();
console.log('Promise object myFirstPromise created and asyn code scheduled ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

dtVar = new Date();
console.log("retrun in MAIN script ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
return;
*/

// Asyn/await ES2017

const http = require('http');
const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=225-13818091-1101234'; // + search;
let rawData = '';

// returning new Promise with resolve or reject.
function GetTicketEx(ticnum) {
  dtVar = new Date();
  console.log(`start GetTicketEx(${ticnum}) ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return new Promise((resolve, reject) => {
    dtVar = new Date();
    console.log(`inside  GetTicketEx(${ticnum}) return new Promise with resolve XML or reject with error.message at ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    /*
    setTimeout(() => {
      if (userId === 1) resolve('john');
      else if (userId === 2) resolve('mary');
      else reject(`unknown userId ${userId}`)
    }, 1000);
    */
    http.get(reqString, (res) => { 
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
      }
      else if (!/^text\/xml/.test(contentType)) {
        error = new Error(`Invalid content-type.\n Expected text/xml but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        //return error.message;
        reject(error.message);
      }

      res.setEncoding('utf8');
      //let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          //const parsedData = JSON.parse(rawData);
          //console.log(parsedData);
          //console.log(rawData);
          resolve(rawData);
        } catch (e) {
          console.error(e.message);
          reject(error.message);
        }
        //return rawData;
      });
    }) // end of http.get(reqString, (res).
    .on('error', (e) => {
        console.error(`Got error: ${e.message}`);
        //return e.message;
        reject(`Got error: ${e.message}`);
    }); // end of ..on('error', ...)
  }); // end of return New Promose.
} // end or function GetTicketEx(ticnum).

// Use ES2017 construction asyn/await.
/*
  The async keyword tells the JavaScript compiler to treat the function differently.
  The compiler pauses whenever it reaches the await keyword within that function.
  It assumes that the expression after await will return a promise and waits until the promise is resolved or rejected
   before moving further.
*/
async function GetTicket(ticnum) {
  dtVar = new Date();
  console.log(`start await GetTicketEx(${ticnum}) at ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  try {
    rawData = await GetTicketEx(ticnum);
    console.log('rawData in async:');
    console.log(rawData);
    return rawData;
  }
  catch (rejectMsgOrBlock) { // catch GetTicketEx(ticnum) reject if any.
    console.log(rejectMsgOrBlock);
  }
}
dtVar = new Date();
console.log("start GetTicket(ticnum) callilng " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//let test;
let test = GetTicket(`123-12345678-1234567`);
console.log('test in main:');
console.log(test);
console.log('rawData in main:');
console.log(rawData);

/*
setTimeout(() => {
  console.log('test after setTimeout:');
  console.log(test);
  console.log('rawData after setTimeout:');
  console.log(rawData);
  }, 5000);
*/

dtVar = new Date();
console.log("End of MAIN script ==================================== at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
return 0;

//=================================================================================================================================
// returning new Promise with resolve or reject.
function getUser(userId) {
  dtVar = new Date();
  console.log(`start getUser(${userId})` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return new Promise((resolve, reject) => { // returns only resolve as 'john'
    dtVar = new Date();
    console.log(`inside getUser(${userId}) return new Promise thru setTimeout 1 sec with resolve 'john or mary' or reject 'unknown userId'` + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    setTimeout(() => {
      if (userId === 1) resolve('john');
      else if (userId === 2) resolve('mary');
      else reject(`unknown userId ${userId}`)
    }, 1000);
  });
}

// returning new Promisse with resolve or reject.
function getBankBalance(user) {
  dtVar = new Date();
  console.log(`start getBankBalance(${user})` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return new Promise((resolve, reject) => {
    dtVar = new Date();
    console.log(`inside getBankBalance(${user}) return new Promise thru setTimeout 1 sec with resolve $1,000 or 2,000 or reject 'unknown user'` + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      setTimeout(() => {
      if (user == 'john') {
        resolve(`user ${user} salary $1,000`);
      }
      else if (user == 'mary') resolve(`user ${user} salary $2,000`)
      else {
        reject(`unknown user` );
      }
    }, 1000);
  });
}

// Using ES2015 Promise constuction .then() 
function getAmount(userId) {
  dtVar = new Date();
  console.log("inside getAmount(userId) create Promise getUser(userId) then Promise getBankBalace then log amount " + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  getUser(userId) // create Promise getUser(userId) and then...
    .then((successMessageOrObject) => {  // capture resolve from getUser Promise and call getBankBalance Promise
      getBankBalance(successMessageOrObject) // creaate Promise getBankBalance(user) and then...
      .then(amount => { // capture resolve from getBankBalance as amount and log it.
        console.log(amount)
      })
      .catch((rejectMsgOrBlock) => { // or catch reject from getBankBalance as errMsgOrObject and log it.
        console.log(rejectMsgOrBlock);
      });
    })
    .catch((rejectMsgOrBlock) => { // or catch reject from getUser(userId) Promise
      console.log(rejectMsgOrBlock);
    });
}


// Use ES2017 construction asyn/await.
/*
  The async keyword tells the JavaScript compiler to treat the function differently.
  The compiler pauses whenever it reaches the await keyword within that function.
  It assumes that the expression after await will return a promise and waits until the promise is resolved or rejected
   before moving further.
*/
async function getAmount2(userId) {
  dtVar = new Date();
  console.log(`start await getUser(${userId})` + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  let user;
  try {
    user = await getUser(userId);
    dtVar = new Date();
    console.log(`start await getBankBalance(${user})` + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    let amount;
    try {
      amount = await getBankBalance(user);
      dtVar = new Date();
      console.log("log user BankBalance amount" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      console.log(amount);
    }
    catch (rejectMsgOrBlock) { // catch getBAnkBalance(user) reject.
      console.log(rejectMsgOrBlock);
    }
  }
  catch (rejectMsgOrBlock) { // catch getUser(userId) reject.
    console.log(rejectMsgOrBlock);
  }
}

///*
dtVar = new Date();
console.log("start getAmount(userId)" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
getAmount(2); // 1 -> $1,000, 2 -> $2,000, 3 -> rejected as "unknown user"
//*/

/*
dtVar = new Date();
console.log("start getAmount2(userId)" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
getAmount2(1); // $1,000
*/

// Async functions themselves return a Promise!

function doubleAfter1Sec(param) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      let val = param*2;
      isNaN(val) ? reject(NaN) : resolve(param*2);
    },1000); // callback function for setTimeout first param: () => resolve(param*2)
  });
}

async function doubleAndAdd(a, b) {
  try {
    dtVar = new Date();
    console.log("start await doubleAfter1Sec(a)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    a = await doubleAfter1Sec(a); // create then wait and use resolve only Promise.
    try {
      dtVar = new Date();
      console.log("await doubleAfter1Sec(a) finished, now start await doubleAfter1Sec(b)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      b = await doubleAfter1Sec(b); // create wait then and use resolve only Promise.
    }
    catch (e) {
      dtVar = new Date();
      console.log("await doubleAfter1Sec(b) rejected return NaN" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      return NaN; // return something.
    }
  }
  catch (e) {
    console.log("await doubleAfter1Sec(a) rejected return NaN" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    return NaN; // return something.
  }
  dtVar = new Date();
  console.log("resolved: return a + b" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return a + b;
}

/*
// Usage one after one takes 1+1 sec.:
dtVar = new Date();
//console.log("start doubleAndAdd(a, b)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//doubleAndAdd(1,2).then(console.log); // this will also log successMessageOrObject by default.
console.log("start doubleAndAdd('a', b)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
doubleAndAdd(3,'x').then((successMessageOrObject) => {
  console.log(successMessageOrObject);
});
*/

async function doubleAndAddParallel(a, b) {
  dtVar = new Date();
  console.log("start await Promise.all([doubleAfter1Sec(a),doubleAfter1Sec(b)])" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  // Notice that Promise.all is used
  // Also Array destucting is used to capture the results.
  try {
    dtVar = new Date();
    console.log("start await Promise.all([doubleAfter1Sec(a),doubleAfter1Sec(b)])" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    [a, b] = await Promise.all([doubleAfter1Sec(a),doubleAfter1Sec(b)]);
  }
  catch (e) {
    console.log("await Promise.all([doubleAfter1Sec(a),doubleAfter1Sec(b)]) rejected return NaN" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    return NaN; // return someting.
  }
  dtVar = new Date();
  console.log("resolved: return a + b" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return a + b;
}

/*
// Usage in paralles - faster than 1+1 sec.:
dtVar = new Date();
console.log("start doubleAndAddParallel(a, b)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
doubleAndAddParallel(3,4).then((successMessageOrObject) => {
  console.log(successMessageOrObject);
});
console.log("start doubleAndAddParallel('a', b)" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
doubleAndAddParallel('three',4).then((successMessageOrObject) => {
  console.log(successMessageOrObject);
});
*/

// Option 2 - Async functions themselves return Promise and every await expression alse returns Promise, you can catch errors on each line as shown below.
async function doubleAndAdd2(a, b) {
  a = await doubleAfter1Sec(a).catch(e => console.log('"a" is NaN'));
  b = await doubleAfter1Sec(b).catch(e => console.log('"b" is NaN'));
  if (isNaN(a) || isNaN(b)) { // if (!a || !b)
   return NaN;
  }
  return a + b;
 }
 
/*
//Usage:
doubleAndAdd2('one', 2).then(console.log); // NaN  and logs:  "a" is NaN
doubleAndAdd2(1, 'two').then(console.log); // NaN  and logs:  "b" is NaN
doubleAndAdd2(1, 2).then(console.log); // logs 6
*/

//Option 3 - Dont do anything but handle outside the function
//since async/await returns a Promise, we can catch the whole function's error
async function doubleAndAdd3(a, b) {
  console.log(a, b);
  a = await doubleAfter1Sec(a);
  b = await doubleAfter1Sec(b);
  return a + b;
 }
 
//Usage:
doubleAndAdd3('one', 2)
.then(console.log)
.catch(console.log);

doubleAndAdd3(1, "two")
.then(console.log)
.catch(console.log);

doubleAndAdd3(1, 2)
.then(console.log)
.catch(console.log);

const promises = [
  new Promise (resolve => resolve(1)),
  new Promise (resolve => resolve(2)),
  new Promise (resolve => resolve(3))
];
async function test1 () {
  for (const obj of promises) console.log(obj);
}
test1();

/*
// ES2018
async function test2() {
  for await (const obj of promises) console.log(obj);
}
test2();
*/

dtVar = new Date();
console.log("End of MAIN script ====================================" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
