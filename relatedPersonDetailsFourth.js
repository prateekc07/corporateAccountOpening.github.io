let FourthrelatedPersonDetails = {};

let FourthrelatedPersonDetailsForm = document.getElementById(
  "FourthrelatedPersonDetailsForm"
);

let addFifth;
let mainSubmit;

function getAddFourthBtn() {
  addFifth = document.getElementById("addFifth");
}

function getSubmitBtn() {
  mainSubmit = document.getElementById("mainSubmit");
}

FourthrelatedPersonDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const FourthrelatedPersonFormData = new FormData(event.target);
  FourthrelatedPersonFormData.forEach((value, key) => {
    FourthrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "FourthrelatedPersonDetails",
    JSON.stringify(FourthrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("FourthrelatedPersonDetails")));

  // Redirect to the next page
  if (addFifth !== undefined) {
    window.location.href = "2_relatedPersonDetailsFifth.html";
  } else if (mainSubmit !== undefined) {
    window.location.href = "3_kycApplicationFormFirstPage.html";
  }
});

let checkbox = document.querySelector("#FourthisRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let FourthrelatedPersonIdentityProof = document.querySelector(
      "#FourthrelatedPersonIdentityProof"
    );
    let FourthrelatedPersonAddress = document.querySelector(
      "#FourthrelatedPersonAddress"
    );
    let FourthrelatedPersonCity = document.querySelector(
      "#FourthrelatedPersonCity"
    );
    let FourthrelatedPersonDistrict = document.querySelector(
      "#FourthrelatedPersonDistrict"
    );
    let FourthrelatedPersonPinCode = document.querySelector(
      "#FourthrelatedPersonPinCode"
    );
    let FourthrelatedPersonState = document.querySelector(
      "#FourthrelatedPersonState"
    );
    let FourthrelatedPersonCountry = document.querySelector(
      "#FourthrelatedPersonCountry"
    );

    document.querySelector("#FourthcurrentIdentityProof").value =
      FourthrelatedPersonIdentityProof.value;
    document.querySelector("#FourthrelatedPersonCurrentAddress").value =
      FourthrelatedPersonAddress.value;
    document.querySelector("#FourthrelatedPersonCurrentCity").value =
      FourthrelatedPersonCity.value;
    document.querySelector("#FourthrelatedPersonCurrentDistrict").value =
      FourthrelatedPersonDistrict.value;
    document.querySelector("#FourthrelatedPersonCurrentPinCode").value =
      FourthrelatedPersonPinCode.value;
    document.querySelector("#FourthrelatedPersonCurrentState").value =
      FourthrelatedPersonState.value;
    document.querySelector("#FourthrelatedPersonCurrentCountry").value =
      FourthrelatedPersonCountry.value;
  } else {
    document.querySelector("#FourthcurrentIdentityProof").value = "";
    document.querySelector("#FourthrelatedPersonCurrentAddress").value = "";
    document.querySelector("#FourthrelatedPersonCurrentCity").value = "";
    document.querySelector("#FourthrelatedPersonCurrentDistrict").value = "";
    document.querySelector("#FourthrelatedPersonCurrentPinCode").value = "";
    document.querySelector("#FourthrelatedPersonCurrentState").value = "";
    document.querySelector("#FourthrelatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("FourthrelatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById(
    "FourthrelatedPersonAddition"
  );
  let relatedPersonUpdation = document.getElementById(
    "FourthrelatedPersonUpdation"
  );
  let relatedPersonDeletion = document.getElementById(
    "FourthrelatedPersonDeletion"
  );

  let kycNumber = document.getElementById("FourthkycNumber");
  let personType = document.getElementById("FourthpersonType");
  let din = document.getElementById("Fourthdin");
  let firstName = document.getElementById("FourthfirstName");
  let lastName = document.getElementById("FourthlastName");
  let familyFirstName = document.getElementById("FourthfamilyFirstName");
  let familyLastName = document.getElementById("FourthfamilyLastName");
  let motherFirstName = document.getElementById("FourthmotherFirstName");
  let motherLastName = document.getElementById("FourthmotherLastName");
  let dob = document.getElementById("Fourthdob");
  let gender = document.getElementById("Fourthgender");

  let indian = document.getElementById("Fourthindian");
  let otherCountry = document.getElementById("FourthotherCountry");
  let otherCountryCode = document.getElementById("FourthotherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "FourthrelatedPersonPanNumber"
  );
  let relatedPersonIdentityProof = document.getElementById(
    "FourthrelatedPersonIdentityProof"
  );
  let relatedPersonAddress = document.getElementById(
    "FourthrelatedPersonAddress"
  );
  let relatedPersonCity = document.getElementById("FourthrelatedPersonCity");
  let relatedPersonDistrict = document.getElementById(
    "FourthrelatedPersonDistrict"
  );
  let relatedPersonPinCode = document.getElementById(
    "FourthrelatedPersonPinCode"
  );
  let relatedPersonState = document.getElementById("FourthrelatedPersonState");
  let relatedPersonCountry = document.getElementById(
    "FourthrelatedPersonCountry"
  );
  let isRelatedPersonLocalSame = document.getElementById(
    "FourthisRelatedPersonLocalSame"
  );
  let currentIdentityProof = document.getElementById(
    "FourthcurrentIdentityProof"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "FourthrelatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "FourthrelatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "FourthrelatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "FourthrelatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "FourthrelatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "FourthrelatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "FourthrelatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById(
    "FourthrelatedPersonEmailId"
  );
  let relatedPersonTelephoneOffice = document.getElementById(
    "FourthrelatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "FourthrelatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectFourthRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectFourthRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["FourthkycNumber"];

    personType.value = relatedPersonDetail["FourthpersonType"];
    din.value = relatedPersonDetail["Fourthdin"];

    firstName.value = relatedPersonDetail["FourthfirstName"];

    lastName.value = relatedPersonDetail["FourthlastName"];

    familyFirstName.value = relatedPersonDetail["FourthfamilyFirstName"];

    familyLastName.value = relatedPersonDetail["FourthfamilyLastName"];

    motherFirstName.value = relatedPersonDetail["FourthmotherFirstName"];

    motherLastName.value = relatedPersonDetail["FourthmotherLastName"];

    dob.value = relatedPersonDetail["Fourthdob"];

    gender.value = relatedPersonDetail["Fourthgender"];

    if (relatedPersonDetail["Fourthnationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["FourthotherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["FourthrelatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetail["FourthrelatedPersonIdentityProof"];

    relatedPersonAddress.value =
      relatedPersonDetail["FourthrelatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["FourthrelatedPersonCity"];

    relatedPersonDistrict.value =
      relatedPersonDetail["FourthrelatedPersonDistrict"];

    relatedPersonPinCode.value =
      relatedPersonDetail["FourthrelatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["FourthrelatedPersonState"];

    relatedPersonCountry.value =
      relatedPersonDetail["FourthrelatedPersonCountry"];

    if (relatedPersonDetail["FourthisRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    currentIdentityProof.value =
      relatedPersonDetail["FourthcurrentIdentityProof"];

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["FourthrelatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["FourthrelatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["FourthrelatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["FourthrelatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["FourthrelatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["FourthrelatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["FourthrelatedPersonMobileNumber"];

    relatedPersonEmailId.value =
      relatedPersonDetail["FourthrelatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["FourthrelatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["FourthrelatedPersonTelephoneRes"];
  }
}
