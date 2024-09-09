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

  const companyDetailFormData = new FormData(event.target);
  companyDetailFormData.forEach((value, key) => {
    companyDetails[key] = value;
  });

  localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
  console.log(JSON.parse(localStorage.getItem("companyDetails")));

  // Redirect to the next page
  window.location.href = "2_relatedPersonDetails.html";
});

document.addEventListener("DOMContentLoaded", () => {
  let companyDetail = JSON.parse(localStorage.getItem("companyDetails"));
  // 1
  let companyName = document.getElementById("companyName");
  let incorporationDate = document.getElementById("incorporationDate");
  let incorporationPlace = document.getElementById("incorporationPlace");
  let incorporationCountry = document.getElementById("incorporationCountry");
  let entityConstitutionType = document.getElementById(
    "entityConstitutionType"
  );
  let companyPan = document.getElementById("companyPan");
  let tinIssuingCountry = document.getElementById(
    "tinOrEquivalentIssuingCountry"
  );
  let gstReg = document.getElementById("gstRegistration");
  let commenceBussinessDate = document.getElementById("bussinessCommenceDate");

  // 2
  let incorporationCertificate = document.getElementById(
    "incorporationCertificate"
  );
  let registrationCertificate = document.getElementById(
    "registrationCertificate"
  );
  let otherDocuments = document.getElementById("otherDocuments");

  let companyAddress = document.getElementById("companyAddress");
  let companyCity = document.getElementById("registeredCity");
  let companyDistrict = document.getElementById("registeredDistrict");
  let companyPinCode = document.getElementById("registeredPinCode");
  let companyState = document.getElementById("registeredState");
  let companyCountry = document.getElementById("registeredCountry");

  // 3
  let isLocalSame = document.getElementById("isLocalSame");
  let localAddress = document.getElementById("localAddress");
  let localCity = document.getElementById("localCity");
  let localDistrict = document.getElementById("localDistrict");
  let localPinCode = document.getElementById("localPinCode");
  let localState = document.getElementById("localState");
  let localCountry = document.getElementById("localCountry");

  // 4
  let companyPhoneNumber = document.getElementById("companyPhoneNumber");
  let companyEmailId = document.getElementById("companyEmailId");
  let companyTelephoneNumber = document.getElementById(
    "companyTelephoneNumber"
  );
  let companyFaxNumber = document.getElementById("companyFaxNumber");

  // 5
  let relatedPersonCount = document.getElementById("relatedPersonCount");

  if (companyDetail !== null) {
    companyName.value = companyDetail["companyName"];

    incorporationDate.value = companyDetail["incorporationDate"];

    incorporationPlace.value = companyDetail["incorporationPlace"];

    incorporationCountry.value = companyDetail["incorporationCountry"];

    entityConstitutionType.value = companyDetail["entityConstitutionType"];

    companyPan.value = companyDetail["companyPan"];

    tinIssuingCountry.value = companyDetail["tinOrEquivalentIssuingCountry"];

    gstReg.value = companyDetail["gstRegistration"];

    commenceBussinessDate.value = companyDetail["bussinessCommenceDate"];

    if (companyDetail["addressProof"] === "Certificate of incorporation") {
      incorporationCertificate.checked = true;
    } else if (companyDetail["addressProof"] === "Registration Certificate") {
      registrationCertificate.checked = true;
    } else {
      otherDocuments.checked = true;
    }

    companyAddress.value = companyDetail["companyAddress"];

    companyCity.value = companyDetail["registeredCity"];

    companyDistrict.value = companyDetail["registeredDistrict"];

    companyPinCode.value = companyDetail["registeredPinCode"];

    companyState.value = companyDetail["registeredState"];

    companyCountry.value = companyDetail["registeredCountry"];

    if (companyDetail["isLocalSame"] === "Yes") {
      isLocalSame.checked = true;
    }
    localAddress.value = companyDetail["localAddress"];

    localCity.value = companyDetail["localCity"];

    localDistrict.value = companyDetail["localDistrict"];

    localPinCode.value = companyDetail["localPinCode"];

    localState.value = companyDetail["localState"];

    localCountry.value = companyDetail["localCountry"];

    companyPhoneNumber.value = companyDetail["companyPhoneNumber"];

    companyEmailId.value = companyDetail["companyEmailId"];

    companyTelephoneNumber.value = companyDetail["companyTelephoneNumber"];

    companyFaxNumber.value = companyDetail["companyFaxNumber"];

    relatedPersonCount.value = companyDetail["relatedPersonCount"];
  }
});