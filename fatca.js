let fatcaPartOneDetails = {};

let fatcaForm = document.getElementById("fatcaForm");

fatcaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fatcaFormData = new FormData(event.target);
  fatcaFormData.forEach((value, key) => {
    fatcaPartOneDetails[key] = value;
  });

  localStorage.setItem(
    "fatcaPartOneDetails",
    JSON.stringify(fatcaPartOneDetails)
  );
  console.log(JSON.parse(localStorage.getItem("fatcaPartOneDetails")));

  // Redirect to the next page
  window.location.href = "8_corporateDocumentUpload.html";
});

document.addEventListener("DOMContentLoaded", () => {
  getfatcaPartOneDetail();
});

function getfatcaPartOneDetail() {
  let fatcaPartOneDetail = JSON.parse(
    localStorage.getItem("fatcaPartOneDetails")
  );

  let optionAYes = document.getElementById("optionAYes");
  let optionANo = document.getElementById("optionANo");
  let listedCompanyName = document.getElementById("listedCompanyName");

  let optionBYes = document.getElementById("optionBYes");
  let optionBNo = document.getElementById("optionBNo");

  let optionCYes = document.getElementById("optionCYes");
  let optionCNo = document.getElementById("optionCNo");
  let giinNumber = document.getElementById("giinNumber");

  let optionDYes = document.getElementById("optionDYes");
  let optionDNo = document.getElementById("optionDNo");

  if (fatcaPartOneDetail !== null) {

    if (fatcaPartOneDetail["QuesAOptions"] === "Yes") {
      optionAYes.checked = true;
      listedCompanyName.value = fatcaPartOneDetail["listedCompanyName"];
    } else {
      optionANo.checked = true;
    }

    if (fatcaPartOneDetail["QuesBOptions"] === "Yes") {
      optionBYes.checked = true;
    } else {
      optionBNo.checked = true;
    }

    if (fatcaPartOneDetail["QuesCOptions"] === "Yes") {
      optionCYes.checked = true;
      giinNumber.value = fatcaPartOneDetail["giinNumber"];
    } else {
      optionCNo.checked = true;
    }

    if (fatcaPartOneDetail["QuesDOptions"] === "Yes") {
      optionDYes.checked = true;
    } else {
      optionDNo.checked = true;
    }
  }
}

const optionAYes = document.getElementById("optionAYes");
const optionANo = document.getElementById("optionANo");
const listedCompanyName = document.getElementById("listedCompanyName");

// Function to toggle required attribute based on the selected radio button
function toggleARequired() {
  if (optionAYes.checked) {
    listedCompanyName.setAttribute("required", "required");
  } else if (optionANo.checked) {
    listedCompanyName.removeAttribute("required");
  }
}

// Listen for changes on both radio buttons
optionAYes.addEventListener("change", toggleARequired);
optionANo.addEventListener("change", toggleARequired);

// Set the required field based on the initial selection
toggleARequired();

const optionCYes = document.getElementById("optionCYes");
const optionCNo = document.getElementById("optionCNo");
const giinNumber = document.getElementById("giinNumber");

// Function to toggle required attribute based on the selected radio button
function toggleCRequired() {
  if (optionCYes.checked) {
    giinNumber.setAttribute("required", "required");
  } else if (optionCNo.checked) {
    giinNumber.removeAttribute("required");
  }
}

// Listen for changes on both radio buttons
optionCYes.addEventListener("change", toggleCRequired);
optionCNo.addEventListener("change", toggleCRequired);

// Set the required field based on the initial selection
toggleCRequired();
