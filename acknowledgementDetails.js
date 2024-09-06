let acknowledgementDetails = {};
let acknowledgementDetailsForm = document.getElementById("acknowledgementDetailsForm");

acknowledgementDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const acknowledgementDetailsFormData = new FormData(event.target);
  acknowledgementDetailsFormData.forEach((value, key) => {
    acknowledgementDetails[key] = value;
  });

  localStorage.setItem(
    "acknowledgementDetails",
    JSON.stringify(acknowledgementDetails)
  );
  console.log(JSON.parse(localStorage.getItem("acknowledgementDetails")));

  // Redirect to the next page
  window.location.href = "6_fatca.html";
});
