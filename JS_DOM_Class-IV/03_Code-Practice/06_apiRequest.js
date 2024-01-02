// xml http request (refer mdn)

// github api url
const requestUrl = 'https://api.github.com/users/shoaib-1729';
// create xml object
const xhr = new XMLHttpRequest();
// send the api request using open()
xhr.open('GET', requestUrl);
// send the api request
xhr.send();

// console.log('HERE');
// console.log(xhr.readyState);

// if you want the states when it changes use 'onreadystatechange'
//  execute this function when the state changes
xhr.onreadystatechange = function() {
    // print the state
    console.log(xhr.readyState);
    // printing the data received via 'get' API request
    console.log(this.responseText);
    // when the state is 4, i.e. data is sent from the api, then fetch the data from api
    if (xhr.readyState == 4) {
        // the data received from api, will always be in string, we will have to convert it into object using JSON.parse() to convert the data from sting to object (just like Number(), String() )

        const data = JSON.parse(this.responseText);
        console.log(data)
        console.log(typeof data);
        console.log(data.followers);
    }
}