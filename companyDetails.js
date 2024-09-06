let companyDetails = {};

let companyForm = document.querySelector("#companyForm");

let checkbox = document.querySelector("#isLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let companyAddress = document.querySelector("#companyAddress");
    let companyCity = document.querySelector("#registeredCity");
    let companyPinCode = document.querySelector("#registeredPinCode");
    let companyDistrict = document.querySelector("#registeredDistrict");
    let companyState = document.querySelector("#registeredState");
    let companyCountry = document.querySelector("#registeredCountry");

    document.querySelector("#localAddress").value = companyAddress.value;
    document.querySelector("#localCity").value = companyCity.value;
    document.querySelector("#localPinCode").value = companyPinCode.value;
    document.querySelector("#localDistrict").value = companyDistrict.value;
    document.querySelector("#localState").value = companyState.value;
    document.querySelector("#localCountry").value = companyCountry.value;
  } else {
    document.querySelector("#localAddress").value = "";
    document.querySelector("#localCity").value = "";
    document.querySelector("#localPinCode").value = "";
    document.querySelector("#localDistrict").value = "";
    document.querySelector("#localState").value = "";
    document.querySelector("#localCountry").value = "";
  }
});

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const companyDetailsFormData = new FormData(event.target);
  companyDetailsFormData.forEach((value, key) => {
    companyDetails[key] = value;
  });

  localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
  console.log(JSON.parse(localStorage.getItem("companyDetails")));

  // Redirect to the next page
  window.location.href = "2_relatedPersonDetails.html";
});