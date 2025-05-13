// Get elements from the HTML
const inputTemp = document.getElementById("input-temp");
const selectForInput = document.getElementById("select-for-input");
const selectForOutput = document.getElementById("select-for-output");
const outputTemp = document.getElementById("output");
const form = document.getElementById("converter-form");

// Function to convert temperature
function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return value; // No conversion needed
  }

  let result;

  // Convert input to Celsius first
  if (fromUnit === "celsius") {
    result = value;
  } else if (fromUnit === "fahrenheit") {
    result = (value - 32) * (5 / 9);
  } else if (fromUnit === "kelvin") {
    result = value - 273.15;
  }

  // Convert from Celsius to the target unit
  if (toUnit === "celsius") {
    return result;
  } else if (toUnit === "fahrenheit") {
    return result * (9 / 5) + 32;
  } else if (toUnit === "kelvin") {
    return result + 273.15;
  }
}

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh

  const inputValue = parseFloat(inputTemp.value);
  const fromUnit = selectForInput.value;
  const toUnit = selectForOutput.value;

  if (isNaN(inputValue)) {
    outputTemp.innerHTML = "❌ Please enter a valid number!";
    outputTemp.style.color = "red";
    return;
  }

  if (fromUnit === toUnit) {
    outputTemp.innerHTML = "⚠️ Please select different units!";
    outputTemp.style.color = "orange";
    return;
  }

  const convertedTemp = convertTemperature(inputValue, fromUnit, toUnit);
  outputTemp.innerHTML = `🌡️ Converted Temperature: <b>${convertedTemp.toFixed(
    2
  )}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}</b>`;
  outputTemp.style.color = "green";
});
