let containerBox = document.querySelector("#containerBox");
let countryCodesBox = document.querySelector("#countryCodesBox"); // blue background
let inputAmountBox = document.querySelector("#inputAmountBox");
let form = document.querySelector("#form");
let convertButton = document.querySelector("#convertButton");
let startOverButton = document.querySelector("#startOverButton");
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
    const makeAnArray = parsedResponse.rates;
    let exchangeRate

    let countryCodes = Object.keys(makeAnArray);
    for (let code of countryCodes) {
      countryCodes = document.createElement("option");
      countryCodes.innerText = `${code}`;
      countryCodesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
      // appended in blue countryCodesBox
    }
    
    let countryRates = Object.values(makeAnArray);
    for (rate of countryRates) {
    }
    
    // let converterArray = Object.entries(makeAnArray);
    
    let outputBox = document.createElement("div");
    containerBox.appendChild(outputBox);
    outputBox.classList.add("outputBox");
    // brown background
    
    let exchangeRateBox = document.createElement("div");
    containerBox.appendChild(exchangeRateBox);
    exchangeRateBox.classList.add("exchangeRateBox");
    //yellow background
    
    
    // event listeners
  //   countryCodesBox.addEventListener("change", (event) => {
  //   console.log(event.target.innerText);  
  //      let exchangeRateText = `${rate}` + `${countryCodes.innerText}`;
  //     console.log(countryCodes.innerText)
  //     exchangeRateBox.textContent = exchangeRateText;
  // });

  countryCodesBox.addEventListener("change", (event) => {
  const currencyCode = event.target.value
  const exchangeRate = makeAnArray[currencyCode]
  console.log(exchangeRate)
  const exchangeRateText = `${currencyCode}  ${exchangeRate}`
  exchangeRateBox.innerText = exchangeRateText
  })
      
    convertButton.addEventListener("click", (event) => {
     const inputAmount = inputAmountBox.value
     console.log(inputAmount)
     const newAmount = inputAmount * exchangeRate
     console.log(exchangeRate)
     console.log(newAmount)
    outputBox.innerText = newAmount;

    });

    startOverButton.addEventListener("click", (event) => {
      console.log(event.target.innerText)
      event.preventDefault();
      exchangeRateBox.replaceChildren();
      outputBox.replaceChildren();
      form.reset();
    });
  
  });

