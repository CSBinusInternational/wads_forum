//fetch: request and loads information from a website and returns a promise, hence we can use async/await here as well
//will always succeed despite the error unless there's a network error
import fetch from 'cross-fetch';
fetch('http://reqres.in/api/users')//fake website to test frotend
    .then(response => {
        if (response.ok)//if response has a status of range 200-299, or to put simply is successful, will output this
            console.log('Lesgo');
        else
            console.log('U failed lol'); //if not successful, will output this
    })
    .then(data => console.log(data)) //if successful, will output the data
    .catch(error => console.log('Error', error)); //if error will output this