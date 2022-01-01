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
    tipAmount.innerHTML = tip.toFixed(2);
    total = bill / person + tip;
    totalAmount.innerHTML = total.toFixed(2);
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
    numPeople.value = 1;
    person = 1;
  }
};

// Code

let percent = 0;

let bill = 0;

let person = 0;

// Bill amount

const billAmount = document.querySelector("#bill");

billAmount.addEventListener("change", function () {
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
    isDefault();
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
  isDefault();
  calc();
});

// Number of people

const numPeople = document.querySelector("#people-amount");

numPeople.addEventListener("click", clear);

numPeople.addEventListener("change", function () {
  const error = document.querySelector(".error-text");
  if (numPeople.value == 0) {
    error.classList.toggle("hidden");
  } else {
    error.classList.add("hidden");
  }
  person = this.value;
  console.log(this.value);
  isDefault();
  calc();
});

const tipAmount = document.querySelector("#tip");
let tip = 0;
const totalAmount = document.querySelector("#total");
let total = 0;

// Reset button

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  resetSelected();
  numPeople.value = "";
  customPercent.value = "";
  billAmount.value = "";
  percent = 0;
  bill = 0;
  person = 0;
  calc();
});
