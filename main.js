// fetch request: `https://openexchangerates.org/api/latest.json?app_id=APP_ID&base=BASE_CURRENCY`
// `BASE_CURRENCY` is a placeholder for the base currency code
// `APP_ID` is placeholder for access key - d176522a23eb485885d8f97ffb0cf101

// User flow
// user chooses target currency from dropdown
// user inputs $ amount to convert to target currency (via text)
// user clicks convert button

// JS/API flow
    // "chooses target currency" - reads target currency
    // event listener - update user interface
    // "clicks to change $ amount" - reads the new dollar amount
    // event listener - update user interface
    // "clicks convert button" - read the base and target currencies from dropdown
    // makes a fetch request? 
    // wait on response
    // use response to update user interface to show target currency amount
    

// need to incorporate 
    // dropdown list of currencies - use currencies.js file in this repo

// event listeners
    // convert button "click"
    // choose currency - update user interface
    // changes $ amount - update user interface