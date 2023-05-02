let containerBox = document.querySelector("#containerBox");
let countryCodesBox = document.querySelector("#countryCodesBox")
let inputAmountBox = document.querySelector("#inputAmountBox")
let form = document.querySelector("#form")
let convertButton = document.querySelector('.convertButton')
let startOverButton = document.querySelector('.startOverButton')
let ratesUrl =
  "https://openexchangerates.org/api/latest.json?app_id=d176522a23eb485885d8f97ffb0cf101";

fetch(ratesUrl, {
  // mode: 'no-cors',
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
    console.log(parsedResponse.rates);
    console.log(Array.isArray(parsedResponse));
    const makeAnArray = parsedResponse.rates;

    let countryCodes = Object.keys(makeAnArray);
    for (code of countryCodes) {
      countryCodes = document.createElement("option");
      countryCodes.innerText = `${code}`;
      countryCodesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
      console.log(countryCodes);
    }

    let countryRates = Object.values(makeAnArray);
    for (rate of countryRates) {
    console.log(Array.isArray(countryRates));
    }

    let codeRateArray = Object.entries(makeAnArray);
    console.log(codeRateArray);
    console.log(Array.isArray(codeRateArray));

    let outputBox = document.createElement("div");
    outputBox.innerText = `${rate}`;
    containerBox.appendChild(outputBox);
    console.log(outputBox);
    outputBox.classList.add("ratesBox");

    let exchangeRateBox = document.createElement("div");
    exchangeRateBox.innerText = "0.00";
    containerBox.appendChild(exchangeRateBox);
    console.log(exchangeRateBox);
    exchangeRateBox.classList.add("exchangeBox");

    // event listeners
    countryCodesBox.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let exchangeRate = "? amount";
      console.log(exchangeRate);
      exchangeRateBox.innerText = `${rate}` + `${countryCodes.innerText}` //how to make a space
    });

    convertButton.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let answer = inputAmountBox.value * `${rate}`;
      console.log(answer);
      outputBox.innerText = answer 
    });

    startOverButton.addEventListener('click', (event) => {
      event.preventDefault()
      exchangeRateBox.replaceChildren()
      outputBox.replaceChildren()
      form.reset()      
    })
    
  });
