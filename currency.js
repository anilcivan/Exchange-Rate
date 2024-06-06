// Define the Currency class
class Currency {
    // Constructor method to initialize the base URL for the API
    constructor() {
        // Base URL for the currency exchange API with the API key
        this.url = "https://api.freecurrencyapi.com/...";
    }

    // Method to perform the currency exchange
    async exchange(amount, firstCurrency, secondCurrency) {
        // Fetch the exchange rate data for the first currency
        const response = await fetch(`${this.url}${firstCurrency}`);
        // Parse the response as JSON
        const result = await response.json();
        // Calculate the exchange result by multiplying the amount with the exchange rate for the second currency
        const exchangeResult = amount * result.data[secondCurrency];

        // Return the exchange result
        return exchangeResult;
    }
}
