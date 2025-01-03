document.addEventListener("DOMContentLoaded", (event) => {
  let dematAccountType = JSON.parse(localStorage.getItem("dematAccountType"));
  console.log(dematAccountType);
  if (dematAccountType["dematAccountType"] === "HUF") {
    console.log(dematAccountType);
    document.querySelector(".addAnotherRelatedPerson").style.display = "none";
  }
});

let relatedPersonDetails = {};

let relatedPersonDetailsForm = document.getElementById(
  "relatedPersonDetailsForm"
);

let addSecond;
let mainSubmit;

function getAddSecondBtn() {
  addSecond = document.getElementById("addSecond");
}

function getSubmitBtn() {
  mainSubmit = document.getElementById("mainSubmit");
}

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
  if (addSecond !== undefined) {
    window.location.href = "2_relatedPersonDetailsSecond.html";
  } else if (mainSubmit !== undefined) {
    window.location.href = "3_kycApplicationFormFirstPage.html";
  }
});

let checkbox = document.querySelector("#isRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let relatedPersonAddress = document.querySelector("#relatedPersonAddress");
    let relatedPersonCity = document.querySelector("#relatedPersonCity");
    let relatedPersonDistrict = document.querySelector(
      "#relatedPersonDistrict"
    );
    let relatedPersonPinCode = document.querySelector("#relatedPersonPinCode");
    let relatedPersonState = document.querySelector("#relatedPersonState");
    let relatedPersonCountry = document.querySelector("#relatedPersonCountry");

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
    document.querySelector("#relatedPersonCurrentAddress").value = "";
    document.querySelector("#relatedPersonCurrentCity").value = "";
    document.querySelector("#relatedPersonCurrentDistrict").value = "";
    document.querySelector("#relatedPersonCurrentPinCode").value = "";
    document.querySelector("#relatedPersonCurrentState").value = "";
    document.querySelector("#relatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("relatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById("relatedPersonAddition");
  let relatedPersonUpdation = document.getElementById("relatedPersonUpdation");
  let relatedPersonDeletion = document.getElementById("relatedPersonDeletion");

  let kycNumber = document.getElementById("kycNumber");
  let personType = document.getElementById("personType");
  let din = document.getElementById("din");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let familyFirstName = document.getElementById("familyFirstName");
  let familyLastName = document.getElementById("familyLastName");
  let motherFirstName = document.getElementById("motherFirstName");
  let motherLastName = document.getElementById("motherLastName");
  let dob = document.getElementById("dob");
  let gender = document.getElementById("gender");

  let indian = document.getElementById("indian");
  let otherCountry = document.getElementById("otherCountry");
  let otherCountryCode = document.getElementById("otherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "relatedPersonPanNumber"
  );
  let relatedPersonAddress = document.getElementById("relatedPersonAddress");
  let relatedPersonCity = document.getElementById("relatedPersonCity");
  let relatedPersonDistrict = document.getElementById("relatedPersonDistrict");
  let relatedPersonPinCode = document.getElementById("relatedPersonPinCode");
  let relatedPersonState = document.getElementById("relatedPersonState");
  let relatedPersonCountry = document.getElementById("relatedPersonCountry");
  let isRelatedPersonLocalSame = document.getElementById(
    "isRelatedPersonLocalSame"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "relatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "relatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "relatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "relatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "relatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "relatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "relatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById("relatedPersonEmailId");
  let relatedPersonTelephoneOffice = document.getElementById(
    "relatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "relatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["kycNumber"];

    personType.value = relatedPersonDetail["personType"];
    din.value = relatedPersonDetail["din"];

    firstName.value = relatedPersonDetail["firstName"];

    lastName.value = relatedPersonDetail["lastName"];

    familyFirstName.value = relatedPersonDetail["familyFirstName"];

    familyLastName.value = relatedPersonDetail["familyLastName"];

    motherFirstName.value = relatedPersonDetail["motherFirstName"];

    motherLastName.value = relatedPersonDetail["motherLastName"];

    dob.value = relatedPersonDetail["dob"];

    gender.value = relatedPersonDetail["gender"];

    if (relatedPersonDetail["nationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["otherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["relatedPersonPanNumber"];

    relatedPersonAddress.value = relatedPersonDetail["relatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["relatedPersonCity"];

    relatedPersonDistrict.value = relatedPersonDetail["relatedPersonDistrict"];

    relatedPersonPinCode.value = relatedPersonDetail["relatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["relatedPersonState"];

    relatedPersonCountry.value = relatedPersonDetail["relatedPersonCountry"];

    if (relatedPersonDetail["isRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["relatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["relatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["relatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["relatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["relatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["relatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["relatedPersonMobileNumber"];

    relatedPersonEmailId.value = relatedPersonDetail["relatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["relatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["relatedPersonTelephoneRes"];
  }
}
