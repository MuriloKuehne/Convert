// Coin exchange value in BRL
const USD = 5.81;
const EUR = 6.01;
const GBP = 7.22;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
    // Shows the coin exchange value
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // calculates the total
    let total = amount * price;

    // alerts if any bug happens
    if (isNaN(total)) {
      return alert("Digite apenas números para serem convertidos.");
    }

    // Formats the total value
    total = formatCurrencyBRL(total);

    // shows the total
    result.textContent = total;

    // Add the show-result class to the footer
    footer.classList.add("show-result");
  } catch (error) {
    // Remove the show-result class off the footer
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente!");
  }
}

// Formats the base coin as BRL
function formatCurrencyBRL(value) {
  // Convert the value to a Number to use toLocaleString to format as BRL pattern (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
