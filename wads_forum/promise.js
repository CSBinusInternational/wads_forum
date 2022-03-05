//promise: creating a function that passes a resolve and reject callback
const promise = new Promise((resolve, reject) => {
    const rand = Math.random(); //gives me a random number between 0 and 1
    if (rand > 0.5) //if random number is more than 0.5, resolve
        resolve(rand);
    else
        reject(rand);//if random number is less than 0.5, reject
});
promise
    .then(result => console.log('Success', result)) //console will output 'success' when the number is greater than 0.5
    .catch(error => console.log('Error', error));   //console will output 'error' when the number is less than 0.5

//async is a neater verision of promise
async function getPromise() { //async function usually comes with a try and catch block
    try {
        const result = await promise; //await waits for the promise to resolve, can only be used inside an async function
        console.log('Success', result);
    } catch (error) 
    {
        console.log('Error', error);
    }
}

getPromise() //callback function