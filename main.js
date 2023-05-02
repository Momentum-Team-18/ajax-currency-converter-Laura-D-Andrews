let containerBox = document.querySelector("#containerBox");
let countryCodesBox = document.querySelector("#countryCodesBox"); // blue background
let inputAmountBox = document.querySelector("#inputAmountBox");
let form = document.querySelector("#form");
let convertButton = document.querySelector(".convertButton");
let startOverButton = document.querySelector(".startOverButton");
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
    console.log(Array.isArray(parsedResponse));
    const makeAnArray = parsedResponse.rates;

    let countryCodes = Object.keys(makeAnArray);
    for (code of countryCodes) {
      countryCodes = document.createElement("option");
      countryCodes.innerText = `${code}`;
      countryCodesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
      // appended in blue countryCodesBox
    }

    let countryRates = Object.values(makeAnArray);
    for (rate of countryRates) {
      console.log(Array.isArray(countryRates));
    }

    // let codeRateArray = Object.entries(makeAnArray);

    let outputBox = document.createElement("div");
    containerBox.appendChild(outputBox);
    outputBox.classList.add("outputBox");
    // brown background

    let exchangeRateBox = document.createElement("div");
    exchangeRateBox.innerText = "0.00";
    containerBox.appendChild(exchangeRateBox);
    exchangeRateBox.classList.add("exchangeRateBox");
    //yellow background


    // event listeners
    countryCodesBox.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let exchangeRateText = `${rate}` + `${countryCodes.innerText}`;
      exchangeRateBox.innerText = exchangeRateText;
      /* goal - when choose country code (blue) from dropdown list, exchange rate 
      and the same country code populate in exchange rate box (yellow)
      tried adding event listener to countryCodes, but doesn't work in browser
      and nothing shows on console*/
    });

    convertButton.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let answer = inputAmountBox.value * `${rate}`;
      outputBox.innerText = answer;
    });

    startOverButton.addEventListener("click", (event) => {
      console.log(event.target.innerText)
      event.preventDefault();
      exchangeRateBox.replaceChildren();
      outputBox.replaceChildren();
      form.reset();
    });
  });
