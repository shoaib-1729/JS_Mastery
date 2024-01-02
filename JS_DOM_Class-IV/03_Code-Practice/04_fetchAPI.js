// Getting (method: get) data from api using fetch() method, it returns a promise hence async-await can be used to deal with api requests using fetch()

async function utility() {
    // getting data from api
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // converting the data into 'json' object (refer json mdn)
    let res = await content.json();
    console.log(res);
}

utility();