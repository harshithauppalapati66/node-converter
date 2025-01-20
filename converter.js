const readlineSync = require('readline-sync');

// Fixed exchange rates
const exchangeRate = {
  INR_TO_USD: 0.012, // 1 INR = 0.012 USD (example rate)
  USD_TO_INR: 83.15, // 1 USD = 83.15 INR (example rate)
};

function convertCurrency() {
  let continueConverting = true;

  while (continueConverting) {
    console.log("Currency Converter");
    console.log("1. INR to USD");
    console.log("2. USD to INR");
    console.log("3. Exit");

    // Get the user's choice
    const choice = readlineSync.question("Choose an option (1, 2, or 3): ");

    switch (choice) {
      case '1':
        // Convert INR to USD
        const inrAmount = parseFloat(readlineSync.question("Enter amount in INR: "));
        const usdAmount = inrAmount * exchangeRate.INR_TO_USD;
        console.log(`${inrAmount} INR = ${usdAmount.toFixed(2)} USD`);
        break;

      case '2':
        // Convert USD to INR
        const usdAmountInput = parseFloat(readlineSync.question("Enter amount in USD: "));
        const inrAmountConverted = usdAmountInput * exchangeRate.USD_TO_INR;
        console.log(`${usdAmountInput} USD = ${inrAmountConverted.toFixed(2)} INR`);
        break;

      case '3':
        // Exit the program
        console.log("Exiting the currency converter.");
        continueConverting = false;
        break;

      default:
        console.log("Invalid choice. Please choose 1, 2, or 3.");
    }

    // Ask if user wants to continue
    if (continueConverting) {
      const continueOption = readlineSync.question("Do you want to convert again? (y/n): ");
      if (continueOption.toLowerCase() !== 'y') {
        continueConverting = false;
        console.log("Exiting the currency converter.");
      }
    }
  }
}

// Run the converter function
convertCurrency();

