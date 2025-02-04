// Coin exchange value in BRL
const USD = 5.81;
const EUR = 6.01;
const GBP = 7.22;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.getElementById("description");

//Allows the amount input to only receive Numbers
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captures the currency (form submit)
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Exchange math function
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`;
    // Add the show-result class to the footer
    footer.classList.add("show-result");
  } catch (error) {
    // Remove the show-result class off the footer
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente!");
  }
}
