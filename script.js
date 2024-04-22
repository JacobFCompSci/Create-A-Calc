// Cost of Living Calc

// Listener

var calc = document.getElementById("calc-total");

calc.addEventListener("click", calcIncome);

// Function

function calcIncome() {
  // Input

  let people = +document.getElementById("people").value;
  let savings = +document.getElementById("savings").value;
  let entertainment = +document.getElementById("entertain").value;
  let food = +document.getElementById("food").value;
  let bedrooms = +document.getElementById("bedrooms").value;
  let vehicles = +document.getElementById("vehicles").value;

  // Process

  let peopleCost = people * 580;
  let bedroomCost = bedrooms * 700 + 1600;
  let vehicleCost = vehicles * 320;
  let totalCost =
    peopleCost + bedroomCost + vehicleCost + savings + entertainment + food;
  let weeklyCost = totalCost / 4.3;
  let yearlyCost = totalCost * 12;
  weeklyCost = Math.floor(weeklyCost);

  // Output
  document.getElementById("monthlyInc").innerHTML = totalCost;
  document.getElementById("weeklyInc").innerHTML = weeklyCost;
  document.getElementById("yearlyInc").innerHTML = yearlyCost;
}

// Tax Calc

// Listener

var calcTax = document.getElementById("calc-tax");

calcTax.addEventListener("click", CalcTotalTax);

// Function

function CalcTotalTax() {
  // input
  let people = +document.getElementById("people").value;
  let savings = +document.getElementById("savings").value;
  let entertainment = +document.getElementById("entertain").value;
  let food = +document.getElementById("food").value;
  let bedrooms = +document.getElementById("bedrooms").value;
  let vehicles = +document.getElementById("vehicles").value;

  // Process
  let peopleCost = people * 580;
  let bedroomCost = bedrooms * 700 + 1600;
  let vehicleCost = vehicles * 320;
  let totalCost =
    peopleCost + bedroomCost + vehicleCost + savings + entertainment + food;
  let yearlyCost = totalCost * 12;
  let tax = yearlyCost / 4;
  let totalWithTax = (yearlyCost += tax);
  // Output
  document.getElementById("totalTaxes").innerHTML = totalWithTax;

  if (totalWithTax > 100 && totalWithTax < 34000) {
    document.getElementById("80perc").style.backgroundColor = "white";
  }
  if (totalWithTax < 50000 && totalWithTax > 22000) {
    document.getElementById("60perc").style.backgroundColor = "white";
  }
  if (totalWithTax < 81000 && totalWithTax > 41000) {
    document.getElementById("40perc").style.backgroundColor = "white";
  }
  if (totalWithTax < 125000 && totalWithTax > 51000) {
    document.getElementById("20perc").style.backgroundColor = "white";
  }
  if (totalWithTax >= 125000) {
    document.getElementById("10perc").style.backgroundColor = "white";
  }
}

// Clear Calc

//listener

var clearCalc = document.getElementById("calc-clear");

clearCalc.addEventListener("click", clearCalculator);

function clearCalculator() {
  window.location.reload();
}
