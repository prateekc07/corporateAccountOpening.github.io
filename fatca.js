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
  if (
    fatcaPartOneDetails["QuesBOptions"] === "Yes" ||
    fatcaPartOneDetails["QuesDOptions"] === "Yes"
  ) {
    console.log("fatca part two is loaded....");
    window.location.href = "7_fatcaPartTwo.html";
  } else {
    console.log("document page is loaded.....");
    window.location.href = "8_corporateDocumentUpload.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getfatcaPartOneDetail();
});

function getfatcaPartOneDetail() {
  let fatcaPartOneDetail = JSON.parse(
    localStorage.getItem("fatcaPartOneDetails")
  );
  let days90 = document.getElementById("90Days");
  let days30 = document.getElementById("30Days");

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
    if (fatcaPartOneDetail["settlementTimePeriod"] === "90 Days") {
      days90.checked = true;
    } else {
      days30.checked = true;
    }

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
