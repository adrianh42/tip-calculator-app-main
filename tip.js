// Functions

const clear = function () {
  this.value = "";
};

const calc = function () {
  if (bill == 0 || percent == 0 || person == 0) {
    tipAmount.innerHTML = 0;
    totalAmount.innerHTML = 0;
  } else {
    tip = ((percent / 100) * bill) / person;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    total = bill / person + tip;
    totalAmount.innerHTML = `$${total.toFixed(2)}`;
  }
  if (bill == 0 && percent == 0 && person == 0) {
    resetButton.setAttribute("disabled", true);
  } else {
    resetButton.removeAttribute("disabled");
  }
};

const resetSelected = function () {
  for (button of percentButton) {
    button.classList.remove("active");
  }
};

const isDefault = function () {
  if (percent == 0) {
    percentButton[1].classList.toggle("active");
    percent = 10;
  }
  if (person == 0) {
    error.classList.add("hidden");
    numPerson.value = 1;
    person = 1;
  }
};

const inactive = function () {
  resetButton.classList.toggle("active");
};

// Variables

const tipAmount = document.querySelector("#tip");
const totalAmount = document.querySelector("#total");

let percent = 0;

let bill = 0;

let person = 0;

let tip = 0;

let total = 0;

// Bill amount

const billAmount = document.querySelector("#bill-amount");

billAmount.addEventListener("input", function () {
  bill = this.value;
  console.log(this.value);
  isDefault();
  calc();
});

// Percentage buttons

const percentButton = document.querySelectorAll(".percent");

for (button of percentButton) {
  button.addEventListener("click", function () {
    resetSelected();
    this.classList.toggle("active");
    percent = this.innerHTML.slice(0, -1);
    customPercent.value = "";
    calc();
  });
}

// Custom percentage

const customPercent = document.querySelector("#custom-percent");

customPercent.addEventListener("click", clear);

customPercent.addEventListener("change", function () {
  resetSelected();
  percent = this.value;
  console.log(this.value);
  this.value += "%";
  calc();
});

// Number of people

const numPerson = document.querySelector("#people-amount");

const error = document.querySelector(".error-text");

numPerson.addEventListener("click", clear);

numPerson.addEventListener("input", function () {
  if (numPerson.value == 0 || numPerson.value == "") {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
  person = this.value;
  console.log(this.value);
  calc();
});

// Reset button

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  resetSelected();
  billAmount.value = "";
  customPercent.value = "";
  numPerson.value = "";
  error.classList.add("hidden");
  percent = 0;
  bill = 0;
  person = 0;
  calc();
});
