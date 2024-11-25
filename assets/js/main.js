const API_KEY= "Eyv6TMpyTbtP/9/Y5C5p4g==o8VZF3ayuL420PbJ";

function fetchPasswordGeneratorCall () {
    let generatedPassword = document.getElementById("api-password-result");
    let userPasswordLength = document.getElementById("password-length");
    generatedPassword.textContent = "Loading..."
    let passwordLength = userPasswordLength.value; //retrieve password length
    const api_url= `https://api.api-ninjas.com/v1/passwordgenerator?length=${passwordLength}`;
    fetch(api_url, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
        .then(function (response){
            // The api call was successful
            return response.json();
        })
        .then(function (data) {
            // The JSON response from the API call
            console.log(data);

            // Update the result text
            generatedPassword.textContent = data.random_password;
            generatedPassword.style.color = "green";
    })
        .catch(function (error) {
            console.log(error);
            generatedPassword.textContent = "Error... please try again";
    })
}

function fetchQuoteGeneratorCall () {
    let generatedQuote = document.getElementById("api-quote-result");
    let userCategory = document.getElementById("quote-category");
    generatedQuote.textContent = "Loading..."
    let quoteCategory = userCategory.value; //retrieve category
    const api_url= `https://api.api-ninjas.com/v1/quotes?category=${quoteCategory}`;
    fetch(api_url, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
        .then(function (response){
            // The api call was successful
            return response.json();
        })
        .then(function (data) {
            // The JSON response from the API call
            console.log(data);

            // Update the result text
            generatedQuote.textContent = `"${data[0].quote}"${data[0].author}`;
        })
        .catch(function (error) {
            console.log(error);
            generatedQuote.textContent = "Error... please try again";
        })
}

function fetchFactGeneratorCall () {
    let generatedFact = document.getElementById("api-facts-result");
    generatedFact.textContent = "Loading..."
    const api_url= `https://api.api-ninjas.com/v1/facts`;
    fetch(api_url, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
        .then(function (response){
            // The api call was successful
            return response.json();
        })
        .then(function (data) {
            // The JSON response from the API call
            console.log(data);

            // Update the result text
            generatedFact.textContent = data[0].fact;
        })
        .catch(function (error) {
            console.log(error);
            generatedFact.textContent = "Error... please try again";
        })
}

// register click event to button
document.getElementById("fetch-password-button").addEventListener('click', fetchPasswordGeneratorCall);
document.getElementById("fetch-quote-button").addEventListener('click', fetchQuoteGeneratorCall);
document.getElementById("fetch-facts-button").addEventListener('click', fetchFactGeneratorCall);

