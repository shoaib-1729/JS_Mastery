// fetch userTab and searchTab
const userTab = document.querySelector('[userTab]')
const searchTab = document.querySelector('[searchTab]')
const userInfoContainer = document.querySelector(".user-info-container")
const searchFormContainer = document.querySelector(".search-form-container")
const grantAccessContainer = document.querySelector(".grant-access-container")
const loadingScreenContainer = document.querySelector(".loading-screen-container");
const httpErrorIcon = document.querySelector('[data-httpError-icon]')
    // const httpErrorIcon = document.querySelector('[data-httpError-icon]')

// API Key
const apiKey = '97f6babab775adee8cd446bf7a1c2ff0';


// set initial values
// the variable for storing the current tab
let currentTab;
// let 'userTab' bet the current Tab initially
currentTab = userTab;
// call get session storage function initially, to check that the user have the location in session storage or not
getFromSessionStorage();

// function switchTab
// task : tab switch karega, aur us tab ka UI visible karwaega baaki ko hide karke
function switchTab(e) {
    // fetch the tab clicked, with event object
    let clickedTab = e.target;
    // agar different tab par click hua hai
    if (clickedTab !== currentTab) {
        // remove the 'current-class' from current tab and it to the 'clickedTab'
        currentTab.classList.remove('current-tab');
        currentTab = clickedTab;
        currentTab.classList.add('current-tab')
    }
    // if, search tab is not active, this means user wants to switch to 'searchTab', so make it visible
    if (!searchFormContainer.classList.contains('active')) {
        // loadingScreenContainer.classList.remove('active')
        // httpErrorIcon.classList.remove('active');
        // hide user info container
        userInfoContainer.classList.remove('active');
        // hide grant access UI
        grantAccessContainer.classList.remove('active');
        // make switchTab active
        searchFormContainer.classList.add('active');

    }
    // if 'searchTab' is active, then user wants to switch to 'userTab'
    else {
        searchFormContainer.classList.remove('active')
        userInfoContainer.classList.remove('active');
        // hide not found wali image
        httpErrorIcon.classList.remove('active');

        // user wants to go to userWeather UI, first check the session storage, is user coordinates present there or not?
        getFromSessionStorage()
    }
}
// adding event listeners to 'searchTab' and 'userTab', and passing the tab clicked as parameters to the switchTab function
userTab.addEventListener('click', switchTab)
searchTab.addEventListener('click', switchTab)

// function getSessionStorage()
// task : to fetch the user coordinates from user session storage , and call the weather api function to show the weather detais
async function getFromSessionStorage() {
    // searchFormContainer.classList.remove('active')

    let userCoordinates = sessionStorage.getItem('user-coordinates')
        // if coordinates is not present in the session storage of the user
    if (!userCoordinates) {
        // show the grant access wala UI
        grantAccessContainer.classList.add('active');
    }
    // else, if the coordinates are present in the session storage
    else {
        searchFormContainer.classList.remove('active')
            // convert the data into 'json' format
        userCoordinates = await JSON.parse(userCoordinates)
            // call the API with the user coordinates as parameters
        fetchUserWeatherInfo(userCoordinates);
    }
}



// function userWeatherInfo()
// task : user location ko use karke, open weather API ko call karega, aur render function ko call karke UI pr render karega
async function fetchUserWeatherInfo(coordinates) {
    // fetch latitude and longitude from session storage data
    const { lat, long } = coordinates;
    // hide search form UI
    searchFormContainer.classList.remove('active')

    // hide grant access wala UI
    grantAccessContainer.classList.remove('active')
        // make load gif active
    loadingScreenContainer.classList.add('active')
        //  it gives temp in Kelvin by default, just add 'units=metric' to get into celsius and 'units=imperial' to get temp in fahrenheit
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        loadingScreenContainer.classList.remove('active');
        userInfoContainer.classList.add("active");
        const data = await response.json();
        renderWeatherInfo(data);
    } catch (err) {
        // handle error
        alert('Error: ' + err);
    }
}

function renderWeatherInfo(weatherInfo) {
    // fetch all the elements, jimei data insert karoge dynamically via JS
    const cityName = document.querySelector('[data-cityName]')
    const countryIcon = document.querySelector('[data-countryIcon]')
    const weatherDesc = document.querySelector('[data-weatherDesc]')
    const weatherIcon = document.querySelector('[data-weatherIcon]')
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector('[data-windspeed]')
    const humidity = document.querySelector('[data-humidity]')
    const cloudiness = document.querySelector('[data-cloud]')

    // now let's insert the weather data stores in 'weatherInfo' into these fetched elements using optional chaining
    cityName.innerText = `${weatherInfo?.name}`
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`
    weatherDesc.innerText = `${weatherInfo?.weather?.[0]?.description}`
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    // console.log('Printing temp:')
    console.log(temp.innerText);
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`
    humidity.innerText = `${weatherInfo?.main?.humidity} %`
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`
}
// getLocation() function
// task : fetches the user location coordinates and sets it to session storage, called when grant access button is clicked in grant wala UI
function getLocation() {
    // if, geolocation is available is user's device
    if (navigator.geolocation) {
        // pass reference to another function (setPosition)
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    // if, not geolocation is not available
    else {
        alert('Geolocation is not available in this device.')
    }
}

// here, 'position' of the user is passed in callback function by default
function showPosition(position) {
    const userCoordinates = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        // set location (latitude and longitude) to session storage
    sessionStorage.setItem('user-coordinates', JSON.stringify(userCoordinates))
        // fetch weather using coordinates (ab user weather wala UI active hoga)
    fetchUserWeatherInfo(userCoordinates);

}
// add event listener to grant access button
const grantAccessButton = document.querySelector('[grant-access-btn]')
grantAccessButton.addEventListener('click', getLocation)


// all event listener to search button (search weather wale UI mei)
const searchButton = document.querySelector(' [ data-search-btn] ')
const searchCityField = document.querySelector('[search-city-input]')
searchFormContainer.addEventListener('submit', function(e) {
    // prevent the fort data from 'submitting'
    e.preventDefault();
    // fetch city name entered by the user from the input field
    let cityName = searchCityField.value;
    // if, city name is null, then return
    if (cityName == "") return;
    // else, call the function
    // call the api using city name
    fetchSearchWeatherInfo(cityName);
})

// searchWeatherInfo(city) function
// task: api call karega using city name, aur usko user weather wala same UI visible karaega, after API call
// UI same rahega jaisa user weather mei tha, bass yaha API call city ke basis par hogi
async function fetchSearchWeatherInfo(city) {
    // const apiKey = '97f6babab775adee8cd446bf7a1c2ff0';
    // make user weather UI invisible
    userInfoContainer.classList.remove('active')
        // make grant access UI invisible
    grantAccessContainer.classList.remove('active')
        // make loading screen visible
    loadingScreenContainer.classList.add('active')

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const response = await fetch(url);
        console.log('search city api called')
        const data = await response.json();
        if (response.ok) {
            // response aa gaya, ab loading screen UI hata do
            loadingScreenContainer.classList.remove('active')
                // handle in case of http errors
                // if (response.ok) {
            console.log('search city data fetched')
                // make user weather UI active
            userInfoContainer.classList.add('active')
                // render the data into the user weather UI
            console.log('search city ui render called')
            renderWeatherInfo(data);
            console.log('search city ui rendered');
        } else {

            console.log(response.status);
            // remove user weather container
            userInfoContainer.classList.remove('active')
            loadingScreenContainer.classList.remove('active')
            httpErrorIcon.classList.add('active');
            httpErrorIcon.firstElementChild.src = `assets/not-found.png`
        }

    } catch (err) {
        loadingScreenContainer.classList.remove('active')
        alert('Error: ' + err)
    }
}