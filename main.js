let containerBox = document.querySelector("#containerBox");

let ratesUrl ='https://openexchangerates.org/api/latest.json?app_id=d176522a23eb485885d8f97ffb0cf101'
 
fetch(ratesUrl, {
  // mode: 'no-cors',
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
  console.log(parsedResponse.rates)
  console.log(Array.isArray(parsedResponse))
  let countryCodes = parsedResponse.rates
  countryCodes = Object.keys(countryCodes)
  console.log(countryCodes)

  let countryRates = parsedResponse.rates
  countryRates = Object.values(countryRates)
  console.log(countryRates)
  })
 
  // const arr = `${parsedResponse.rates}`
  // console.log(typeof arr)

 


// for (let currencyNumber of parsedResponse ) {
  
// let outputAmountBox = document.createElement('div')
// outputAmountBox.innerText = currencyNumber
// containerBox.appendChild(containerBox)
// outputAmountBox.classList.add("outputAmount")
// console.log(outputAmountBox)
//     }
//   });


// let fromBox = document.createElement('div')
// fromBox.innerText = "From"
// containerBox.appendChild(fromBox)
// fromBox.classList.add("from")
// console.log(fromBox)

// let toBox = document.createElement('div')
// toBox.innerText = "To"
// containerBox.appendChild(toBox)
// toBox.classList.add("to")
// console.log(toBox)

// let targetCurrencyBox = document.createElement("div");
// targetCurrencyBox.innerText = `${currencies}`
// containerBox.appendChild(targetCurrencyBox);
// targetCurrencyBox.classList.add("targetCurrency");
// console.log(targetCurrencyBox)

