let relatedPersonDetails = {};

let relatedPersonDetailsForm = document.getElementById(
  "relatedPersonDetailsForm"
);

relatedPersonDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const relatedPersonFormData = new FormData(event.target);
  relatedPersonFormData.forEach((value, key) => {
    relatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "relatedPersonDetails",
    JSON.stringify(relatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("relatedPersonDetails")));

  // Redirect to the next page
  window.location.href = "3_kycApplicationFormFirstPage.html";
});

let checkbox = document.querySelector("#isRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let relatedPersonIdentityProof = document.querySelector(
      "#relatedPersonIdentityProof"
    );
    let relatedPersonAddress = document.querySelector("#relatedPersonAddress");
    let relatedPersonCity = document.querySelector("#relatedPersonCity");
    let relatedPersonDistrict = document.querySelector(
      "#relatedPersonDistrict"
    );
    let relatedPersonPinCode = document.querySelector("#relatedPersonPinCode");
    let relatedPersonState = document.querySelector("#relatedPersonState");
    let relatedPersonCountry = document.querySelector("#relatedPersonCountry");

    document.querySelector("#currentIdentityProof").value =
      relatedPersonIdentityProof.value;
    document.querySelector("#relatedPersonCurrentAddress").value =
      relatedPersonAddress.value;
    document.querySelector("#relatedPersonCurrentCity").value =
      relatedPersonCity.value;
    document.querySelector("#relatedPersonCurrentDistrict").value =
      relatedPersonDistrict.value;
    document.querySelector("#relatedPersonCurrentPinCode").value =
      relatedPersonPinCode.value;
    document.querySelector("#relatedPersonCurrentState").value =
      relatedPersonState.value;
    document.querySelector("#relatedPersonCurrentCountry").value =
      relatedPersonCountry.value;
  } else {
    document.querySelector("#currentIdentityProof").value = "";
    document.querySelector("#relatedPersonCurrentAddress").value = "";
    document.querySelector("#relatedPersonCurrentCity").value = "";
    document.querySelector("#relatedPersonCurrentDistrict").value = "";
    document.querySelector("#relatedPersonCurrentPinCode").value = "";
    document.querySelector("#relatedPersonCurrentState").value = "";
    document.querySelector("#relatedPersonCurrentCountry").value = "";
  }
});
