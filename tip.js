const clear = function () {
  this.value = "";
};

const tipCalc = function () {
  tip = ((percent / 100) * bill) / person;
  tipAmount.innerHTML = tip.toFixed(2);
};

const totalCalc = function () {
  total = bill / person + tip;
  totalAmount.innerHTML = total.toFixed(2);
};

const setDefault = function () {};

const billAmount = document.querySelector("#bill");

const percentButton = document.querySelectorAll(".percent");

for (button of percentButton) {
  console.log(button.innerHTML);
}

let bill = 0;

billAmount.addEventListener("change", function () {
  bill = this.value;
  console.log(this.value);
  tipCalc();
  totalCalc();
});

const customPercent = document.querySelector("#custom-percent");

let percent = 10;

const click = () => {
  console.log("I was clicked!");
};

customPercent.addEventListener("click", clear);

customPercent.addEventListener("change", function () {
  percent = this.value;
  console.log(this.value);
  this.value += "%";
  tipCalc();
  totalCalc();
});

const numPeople = document.querySelector("#people-amount");

let person = 1;

numPeople.addEventListener("change", function () {
  person = this.value;
  console.log(this.value);
  tipCalc();
  totalCalc();
});

const tipAmount = document.querySelector("#tip");
let tip = 0;
const totalAmount = document.querySelector("#total");
let total = 0;
