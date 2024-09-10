let SecondrelatedPersonDetails = {};

let SecondrelatedPersonDetailsForm = document.getElementById(
  "SecondrelatedPersonDetailsForm"
);

let addThird;
let mainSubmit;

function getAddSecondBtn() {
  addThird = document.getElementById("addThird");
}

function getSubmitBtn() {
  mainSubmit = document.getElementById("mainSubmit");
}

SecondrelatedPersonDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const SecondrelatedPersonFormData = new FormData(event.target);
  SecondrelatedPersonFormData.forEach((value, key) => {
    SecondrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "SecondrelatedPersonDetails",
    JSON.stringify(SecondrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("SecondrelatedPersonDetails")));

  // Redirect to the next page
  if (addThird !== undefined) {
    window.location.href = "2_relatedPersonDetailsThird.html";
  } else if (mainSubmit !== undefined) {
    window.location.href = "3_kycApplicationFormFirstPage.html";
  }
});

let checkbox = document.querySelector("#SecondisRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let SecondrelatedPersonIdentityProof = document.querySelector(
      "#SecondrelatedPersonIdentityProof"
    );
    let SecondrelatedPersonAddress = document.querySelector(
      "#SecondrelatedPersonAddress"
    );
    let SecondrelatedPersonCity = document.querySelector(
      "#SecondrelatedPersonCity"
    );
    let SecondrelatedPersonDistrict = document.querySelector(
      "#SecondrelatedPersonDistrict"
    );
    let SecondrelatedPersonPinCode = document.querySelector(
      "#SecondrelatedPersonPinCode"
    );
    let SecondrelatedPersonState = document.querySelector(
      "#SecondrelatedPersonState"
    );
    let SecondrelatedPersonCountry = document.querySelector(
      "#SecondrelatedPersonCountry"
    );

    document.querySelector("#SecondcurrentIdentityProof").value =
      SecondrelatedPersonIdentityProof.value;
    document.querySelector("#SecondrelatedPersonCurrentAddress").value =
      SecondrelatedPersonAddress.value;
    document.querySelector("#SecondrelatedPersonCurrentCity").value =
      SecondrelatedPersonCity.value;
    document.querySelector("#SecondrelatedPersonCurrentDistrict").value =
      SecondrelatedPersonDistrict.value;
    document.querySelector("#SecondrelatedPersonCurrentPinCode").value =
      SecondrelatedPersonPinCode.value;
    document.querySelector("#SecondrelatedPersonCurrentState").value =
      SecondrelatedPersonState.value;
    document.querySelector("#SecondrelatedPersonCurrentCountry").value =
      SecondrelatedPersonCountry.value;
  } else {
    document.querySelector("#SecondcurrentIdentityProof").value = "";
    document.querySelector("#SecondrelatedPersonCurrentAddress").value = "";
    document.querySelector("#SecondrelatedPersonCurrentCity").value = "";
    document.querySelector("#SecondrelatedPersonCurrentDistrict").value = "";
    document.querySelector("#SecondrelatedPersonCurrentPinCode").value = "";
    document.querySelector("#SecondrelatedPersonCurrentState").value = "";
    document.querySelector("#SecondrelatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("SecondrelatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById(
    "SecondrelatedPersonAddition"
  );
  let relatedPersonUpdation = document.getElementById(
    "SecondrelatedPersonUpdation"
  );
  let relatedPersonDeletion = document.getElementById(
    "SecondrelatedPersonDeletion"
  );

  let kycNumber = document.getElementById("SecondkycNumber");
  let personType = document.getElementById("SecondpersonType");
  let din = document.getElementById("Seconddin");
  let firstName = document.getElementById("SecondfirstName");
  let lastName = document.getElementById("SecondlastName");
  let familyFirstName = document.getElementById("SecondfamilyFirstName");
  let familyLastName = document.getElementById("SecondfamilyLastName");
  let motherFirstName = document.getElementById("SecondmotherFirstName");
  let motherLastName = document.getElementById("SecondmotherLastName");
  let dob = document.getElementById("Seconddob");
  let gender = document.getElementById("Secondgender");

  let indian = document.getElementById("Secondindian");
  let otherCountry = document.getElementById("SecondotherCountry");
  let otherCountryCode = document.getElementById("SecondotherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "SecondrelatedPersonPanNumber"
  );
  let relatedPersonIdentityProof = document.getElementById(
    "SecondrelatedPersonIdentityProof"
  );
  let relatedPersonAddress = document.getElementById(
    "SecondrelatedPersonAddress"
  );
  let relatedPersonCity = document.getElementById("SecondrelatedPersonCity");
  let relatedPersonDistrict = document.getElementById(
    "SecondrelatedPersonDistrict"
  );
  let relatedPersonPinCode = document.getElementById(
    "SecondrelatedPersonPinCode"
  );
  let relatedPersonState = document.getElementById("SecondrelatedPersonState");
  let relatedPersonCountry = document.getElementById(
    "SecondrelatedPersonCountry"
  );
  let isRelatedPersonLocalSame = document.getElementById(
    "SecondisRelatedPersonLocalSame"
  );
  let currentIdentityProof = document.getElementById(
    "SecondcurrentIdentityProof"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "SecondrelatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "SecondrelatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "SecondrelatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "SecondrelatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "SecondrelatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "SecondrelatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "SecondrelatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById(
    "SecondrelatedPersonEmailId"
  );
  let relatedPersonTelephoneOffice = document.getElementById(
    "SecondrelatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "SecondrelatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectSecondRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectSecondRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["SecondkycNumber"];

    personType.value = relatedPersonDetail["SecondpersonType"];
    din.value = relatedPersonDetail["Seconddin"];

    firstName.value = relatedPersonDetail["SecondfirstName"];

    lastName.value = relatedPersonDetail["SecondlastName"];

    familyFirstName.value = relatedPersonDetail["SecondfamilyFirstName"];

    familyLastName.value = relatedPersonDetail["SecondfamilyLastName"];

    motherFirstName.value = relatedPersonDetail["SecondmotherFirstName"];

    motherLastName.value = relatedPersonDetail["SecondmotherLastName"];

    dob.value = relatedPersonDetail["Seconddob"];

    gender.value = relatedPersonDetail["Secondgender"];

    if (relatedPersonDetail["Secondnationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["SecondotherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["SecondrelatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetail["SecondrelatedPersonIdentityProof"];

    relatedPersonAddress.value =
      relatedPersonDetail["SecondrelatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["SecondrelatedPersonCity"];

    relatedPersonDistrict.value =
      relatedPersonDetail["SecondrelatedPersonDistrict"];

    relatedPersonPinCode.value =
      relatedPersonDetail["SecondrelatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["SecondrelatedPersonState"];

    relatedPersonCountry.value =
      relatedPersonDetail["SecondrelatedPersonCountry"];

    if (relatedPersonDetail["SecondisRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    currentIdentityProof.value =
      relatedPersonDetail["SecondcurrentIdentityProof"];

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["SecondrelatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["SecondrelatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["SecondrelatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["SecondrelatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["SecondrelatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["SecondrelatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["SecondrelatedPersonMobileNumber"];

    relatedPersonEmailId.value =
      relatedPersonDetail["SecondrelatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["SecondrelatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["SecondrelatedPersonTelephoneRes"];
  }
}