let ThirdrelatedPersonDetails = {};

let ThirdrelatedPersonDetailsForm = document.getElementById(
  "ThirdrelatedPersonDetailsForm"
);

let addFourth;
let mainSubmit;

function getAddThirdBtn() {
  addFourth = document.getElementById("addFourth");
}

function getSubmitBtn() {
  mainSubmit = document.getElementById("mainSubmit");
}

ThirdrelatedPersonDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ThirdrelatedPersonFormData = new FormData(event.target);
  ThirdrelatedPersonFormData.forEach((value, key) => {
    ThirdrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "ThirdrelatedPersonDetails",
    JSON.stringify(ThirdrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("ThirdrelatedPersonDetails")));

  // Redirect to the next page
  if (addFourth !== undefined) {
    window.location.href = "2_relatedPersonDetailsFourth.html";
  } else if (mainSubmit !== undefined) {
    window.location.href = "3_kycApplicationFormFirstPage.html";
  }
});

let checkbox = document.querySelector("#ThirdisRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let ThirdrelatedPersonIdentityProof = document.querySelector(
      "#ThirdrelatedPersonIdentityProof"
    );
    let ThirdrelatedPersonAddress = document.querySelector(
      "#ThirdrelatedPersonAddress"
    );
    let ThirdrelatedPersonCity = document.querySelector(
      "#ThirdrelatedPersonCity"
    );
    let ThirdrelatedPersonDistrict = document.querySelector(
      "#ThirdrelatedPersonDistrict"
    );
    let ThirdrelatedPersonPinCode = document.querySelector(
      "#ThirdrelatedPersonPinCode"
    );
    let ThirdrelatedPersonState = document.querySelector(
      "#ThirdrelatedPersonState"
    );
    let ThirdrelatedPersonCountry = document.querySelector(
      "#ThirdrelatedPersonCountry"
    );

    document.querySelector("#ThirdcurrentIdentityProof").value =
      ThirdrelatedPersonIdentityProof.value;
    document.querySelector("#ThirdrelatedPersonCurrentAddress").value =
      ThirdrelatedPersonAddress.value;
    document.querySelector("#ThirdrelatedPersonCurrentCity").value =
      ThirdrelatedPersonCity.value;
    document.querySelector("#ThirdrelatedPersonCurrentDistrict").value =
      ThirdrelatedPersonDistrict.value;
    document.querySelector("#ThirdrelatedPersonCurrentPinCode").value =
      ThirdrelatedPersonPinCode.value;
    document.querySelector("#ThirdrelatedPersonCurrentState").value =
      ThirdrelatedPersonState.value;
    document.querySelector("#ThirdrelatedPersonCurrentCountry").value =
      ThirdrelatedPersonCountry.value;
  } else {
    document.querySelector("#ThirdcurrentIdentityProof").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentAddress").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentCity").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentDistrict").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentPinCode").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentState").value = "";
    document.querySelector("#ThirdrelatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("ThirdrelatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById(
    "ThirdrelatedPersonAddition"
  );
  let relatedPersonUpdation = document.getElementById(
    "ThirdrelatedPersonUpdation"
  );
  let relatedPersonDeletion = document.getElementById(
    "ThirdrelatedPersonDeletion"
  );

  let kycNumber = document.getElementById("ThirdkycNumber");
  let personType = document.getElementById("ThirdpersonType");
  let din = document.getElementById("Thirddin");
  let firstName = document.getElementById("ThirdfirstName");
  let lastName = document.getElementById("ThirdlastName");
  let familyFirstName = document.getElementById("ThirdfamilyFirstName");
  let familyLastName = document.getElementById("ThirdfamilyLastName");
  let motherFirstName = document.getElementById("ThirdmotherFirstName");
  let motherLastName = document.getElementById("ThirdmotherLastName");
  let dob = document.getElementById("Thirddob");
  let gender = document.getElementById("Thirdgender");

  let indian = document.getElementById("Thirdindian");
  let otherCountry = document.getElementById("ThirdotherCountry");
  let otherCountryCode = document.getElementById("ThirdotherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "ThirdrelatedPersonPanNumber"
  );
  let relatedPersonIdentityProof = document.getElementById(
    "ThirdrelatedPersonIdentityProof"
  );
  let relatedPersonAddress = document.getElementById(
    "ThirdrelatedPersonAddress"
  );
  let relatedPersonCity = document.getElementById("ThirdrelatedPersonCity");
  let relatedPersonDistrict = document.getElementById(
    "ThirdrelatedPersonDistrict"
  );
  let relatedPersonPinCode = document.getElementById(
    "ThirdrelatedPersonPinCode"
  );
  let relatedPersonState = document.getElementById("ThirdrelatedPersonState");
  let relatedPersonCountry = document.getElementById(
    "ThirdrelatedPersonCountry"
  );
  let isRelatedPersonLocalSame = document.getElementById(
    "ThirdisRelatedPersonLocalSame"
  );
  let currentIdentityProof = document.getElementById(
    "ThirdcurrentIdentityProof"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "ThirdrelatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "ThirdrelatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "ThirdrelatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "ThirdrelatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "ThirdrelatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "ThirdrelatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "ThirdrelatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById(
    "ThirdrelatedPersonEmailId"
  );
  let relatedPersonTelephoneOffice = document.getElementById(
    "ThirdrelatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "ThirdrelatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectThirdRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectThirdRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["ThirdkycNumber"];

    personType.value = relatedPersonDetail["ThirdpersonType"];
    din.value = relatedPersonDetail["Thirddin"];

    firstName.value = relatedPersonDetail["ThirdfirstName"];

    lastName.value = relatedPersonDetail["ThirdlastName"];

    familyFirstName.value = relatedPersonDetail["ThirdfamilyFirstName"];

    familyLastName.value = relatedPersonDetail["ThirdfamilyLastName"];

    motherFirstName.value = relatedPersonDetail["ThirdmotherFirstName"];

    motherLastName.value = relatedPersonDetail["ThirdmotherLastName"];

    dob.value = relatedPersonDetail["Thirddob"];

    gender.value = relatedPersonDetail["Thirdgender"];

    if (relatedPersonDetail["Thirdnationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["ThirdotherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["ThirdrelatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetail["ThirdrelatedPersonIdentityProof"];

    relatedPersonAddress.value =
      relatedPersonDetail["ThirdrelatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["ThirdrelatedPersonCity"];

    relatedPersonDistrict.value =
      relatedPersonDetail["ThirdrelatedPersonDistrict"];

    relatedPersonPinCode.value =
      relatedPersonDetail["ThirdrelatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["ThirdrelatedPersonState"];

    relatedPersonCountry.value =
      relatedPersonDetail["ThirdrelatedPersonCountry"];

    if (relatedPersonDetail["ThirdisRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    currentIdentityProof.value =
      relatedPersonDetail["ThirdcurrentIdentityProof"];

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["ThirdrelatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["ThirdrelatedPersonMobileNumber"];

    relatedPersonEmailId.value =
      relatedPersonDetail["ThirdrelatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["ThirdrelatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["ThirdrelatedPersonTelephoneRes"];
  }
}
