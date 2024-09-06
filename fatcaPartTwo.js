let fatcaPartTwoDetails = {};

let fatcaPartTwoForm = document.getElementById("fatcaPartTwoForm");

fatcaPartTwoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fatcaPartTwoFormData = new FormData(event.target);
  fatcaPartTwoFormData.forEach((value, key) => {
    fatcaPartTwoDetails[key] = value;
  });

  localStorage.setItem(
    "fatcaPartTwoDetails",
    JSON.stringify(fatcaPartTwoDetails)
  );
  console.log(JSON.parse(localStorage.getItem("fatcaPartTwoDetails")));

  // Redirect to the next page
  window.location.href = "8_corporateDocumentUpload.html";
});