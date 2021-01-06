let foodStyle = document.getElementsByName("order-style");
let foodTip = document.getElementsByName("tipping");
let foodTotal = document.getElementById("cost");
let orderCost = Number(foodStyle[0].value);
let orderTip = Number(foodTip[0].value);
let orderTotal = 0.0;

function setInitialCost() {
  foodTotal.innerHTML = "$" + orderTotal.toPrecision(3);
}

function calculateTotal(cost, tip) {
  let tipAmount = cost * tip;
  //   console.log(tipAmount);
  orderTotal = cost + tipAmount;

  orderTotal >= 10.0
    ? (foodTotal.innerHTML = "$" + orderTotal.toPrecision(4))
    : (foodTotal.innerHTML = "$" + orderTotal.toPrecision(3));
  //   return orderTotal.toPrecision(3);
}

// console.log(foodStyle);
// console.log(foodTip);
// console.log(foodTotal);

foodTotal.onload = setInitialCost();

for (var i = 0; i < foodStyle.length; i++) {
  foodStyle[i].onclick = function () {
    orderCost = Number(this.value);
    console.log(orderCost);
    console.log(calculateTotal(orderCost, orderTip));
  };
}

for (var i = 0; i < foodTip.length; i++) {
  foodTip[i].onclick = function () {
    orderTip = Number(this.value);
    console.log(orderTip);
    console.log(calculateTotal(orderCost, orderTip));
  };
}

// console.log(calculateTotal(orderCost, orderTip));
