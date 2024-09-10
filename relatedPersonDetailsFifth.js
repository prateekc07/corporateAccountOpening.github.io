let FifthrelatedPersonDetails = {};

let FifthrelatedPersonDetailsForm = document.getElementById(
  "FifthrelatedPersonDetailsForm"
);

FifthrelatedPersonDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const FifthrelatedPersonFormData = new FormData(event.target);
  FifthrelatedPersonFormData.forEach((value, key) => {
    FifthrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "FifthrelatedPersonDetails",
    JSON.stringify(FifthrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("FifthrelatedPersonDetails")));

  // Redirect to the next page
  window.location.href = "3_kycApplicationFormFirstPage.html";
});

let checkbox = document.querySelector("#FifthisRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let FifthrelatedPersonIdentityProof = document.querySelector(
      "#FifthrelatedPersonIdentityProof"
    );
    let FifthrelatedPersonAddress = document.querySelector(
      "#FifthrelatedPersonAddress"
    );
    let FifthrelatedPersonCity = document.querySelector(
      "#FifthrelatedPersonCity"
    );
    let FifthrelatedPersonDistrict = document.querySelector(
      "#FifthrelatedPersonDistrict"
    );
    let FifthrelatedPersonPinCode = document.querySelector(
      "#FifthrelatedPersonPinCode"
    );
    let FifthrelatedPersonState = document.querySelector(
      "#FifthrelatedPersonState"
    );
    let FifthrelatedPersonCountry = document.querySelector(
      "#FifthrelatedPersonCountry"
    );

    document.querySelector("#FifthcurrentIdentityProof").value =
      FifthrelatedPersonIdentityProof.value;
    document.querySelector("#FifthrelatedPersonCurrentAddress").value =
      FifthrelatedPersonAddress.value;
    document.querySelector("#FifthrelatedPersonCurrentCity").value =
      FifthrelatedPersonCity.value;
    document.querySelector("#FifthrelatedPersonCurrentDistrict").value =
      FifthrelatedPersonDistrict.value;
    document.querySelector("#FifthrelatedPersonCurrentPinCode").value =
      FifthrelatedPersonPinCode.value;
    document.querySelector("#FifthrelatedPersonCurrentState").value =
      FifthrelatedPersonState.value;
    document.querySelector("#FifthrelatedPersonCurrentCountry").value =
      FifthrelatedPersonCountry.value;
  } else {
    document.querySelector("#FifthcurrentIdentityProof").value = "";
    document.querySelector("#FifthrelatedPersonCurrentAddress").value = "";
    document.querySelector("#FifthrelatedPersonCurrentCity").value = "";
    document.querySelector("#FifthrelatedPersonCurrentDistrict").value = "";
    document.querySelector("#FifthrelatedPersonCurrentPinCode").value = "";
    document.querySelector("#FifthrelatedPersonCurrentState").value = "";
    document.querySelector("#FifthrelatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("FifthrelatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById(
    "FifthrelatedPersonAddition"
  );
  let relatedPersonUpdation = document.getElementById(
    "FifthrelatedPersonUpdation"
  );
  let relatedPersonDeletion = document.getElementById(
    "FifthrelatedPersonDeletion"
  );

  let kycNumber = document.getElementById("FifthkycNumber");
  let personType = document.getElementById("FifthpersonType");
  let din = document.getElementById("Fifthdin");
  let firstName = document.getElementById("FifthfirstName");
  let lastName = document.getElementById("FifthlastName");
  let familyFirstName = document.getElementById("FifthfamilyFirstName");
  let familyLastName = document.getElementById("FifthfamilyLastName");
  let motherFirstName = document.getElementById("FifthmotherFirstName");
  let motherLastName = document.getElementById("FifthmotherLastName");
  let dob = document.getElementById("Fifthdob");
  let gender = document.getElementById("Fifthgender");

  let indian = document.getElementById("Fifthindian");
  let otherCountry = document.getElementById("FifthotherCountry");
  let otherCountryCode = document.getElementById("FifthotherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "FifthrelatedPersonPanNumber"
  );
  let relatedPersonIdentityProof = document.getElementById(
    "FifthrelatedPersonIdentityProof"
  );
  let relatedPersonAddress = document.getElementById(
    "FifthrelatedPersonAddress"
  );
  let relatedPersonCity = document.getElementById("FifthrelatedPersonCity");
  let relatedPersonDistrict = document.getElementById(
    "FifthrelatedPersonDistrict"
  );
  let relatedPersonPinCode = document.getElementById(
    "FifthrelatedPersonPinCode"
  );
  let relatedPersonState = document.getElementById("FifthrelatedPersonState");
  let relatedPersonCountry = document.getElementById(
    "FifthrelatedPersonCountry"
  );
  let isRelatedPersonLocalSame = document.getElementById(
    "FifthisRelatedPersonLocalSame"
  );
  let currentIdentityProof = document.getElementById(
    "FifthcurrentIdentityProof"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "FifthrelatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "FifthrelatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "FifthrelatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "FifthrelatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "FifthrelatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "FifthrelatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "FifthrelatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById(
    "FifthrelatedPersonEmailId"
  );
  let relatedPersonTelephoneOffice = document.getElementById(
    "FifthrelatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "FifthrelatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectFifthRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectFifthRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["FifthkycNumber"];

    personType.value = relatedPersonDetail["FifthpersonType"];
    din.value = relatedPersonDetail["Fifthdin"];

    firstName.value = relatedPersonDetail["FifthfirstName"];

    lastName.value = relatedPersonDetail["FifthlastName"];

    familyFirstName.value = relatedPersonDetail["FifthfamilyFirstName"];

    familyLastName.value = relatedPersonDetail["FifthfamilyLastName"];

    motherFirstName.value = relatedPersonDetail["FifthmotherFirstName"];

    motherLastName.value = relatedPersonDetail["FifthmotherLastName"];

    dob.value = relatedPersonDetail["Fifthdob"];

    gender.value = relatedPersonDetail["Fifthgender"];

    if (relatedPersonDetail["Fifthnationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["FifthotherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["FifthrelatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetail["FifthrelatedPersonIdentityProof"];

    relatedPersonAddress.value =
      relatedPersonDetail["FifthrelatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["FifthrelatedPersonCity"];

    relatedPersonDistrict.value =
      relatedPersonDetail["FifthrelatedPersonDistrict"];

    relatedPersonPinCode.value =
      relatedPersonDetail["FifthrelatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["FifthrelatedPersonState"];

    relatedPersonCountry.value =
      relatedPersonDetail["FifthrelatedPersonCountry"];

    if (relatedPersonDetail["FifthisRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    currentIdentityProof.value =
      relatedPersonDetail["FifthcurrentIdentityProof"];

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["FifthrelatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["FifthrelatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["FifthrelatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["FifthrelatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["FifthrelatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["FifthrelatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["FifthrelatedPersonMobileNumber"];

    relatedPersonEmailId.value =
      relatedPersonDetail["FifthrelatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["FifthrelatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["FifthrelatedPersonTelephoneRes"];
  }
}