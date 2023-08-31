const data = [];

function calculateBMI() {
  const name = document.getElementById("name").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    alert("Height or weight values are not valid!");
    return;
  }

  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  const result = { name, height, weight, bmi };
  resetInputs();
  saveBMI(result);
}

function resetInputs() {
  document.getElementById("name").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}

function saveBMI(item) {
  data.push(item);
  console.log(item);
  console.log(data);
}

const form = document.getElementById("bmiForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateBMI();
});
