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
