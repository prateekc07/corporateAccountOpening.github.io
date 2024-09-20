let FourthrelatedPersonDetails = {};

let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));

let relatedPersonDetails;

let relatedPersonDetailsForm = document.getElementById(
  "relatedPersonDetailsForm"
);

let addFifth;
let mainSubmit;

function getAddFifthBtn() {
  addFifth = document.getElementById("addFifth");
}

function getSubmitBtn() {
  mainSubmit = document.getElementById("mainSubmit");
}

relatedPersonDetailsForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const relatedPersonFormData = new FormData(event.target);
  relatedPersonFormData.forEach((value, key) => {
    FourthrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "FourthrelatedPersonDetails",
    JSON.stringify(FourthrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("FourthrelatedPersonDetails")));

  relatedPersonDetails = JSON.parse(
    localStorage.getItem("FourthrelatedPersonDetails")
  );
  await downloadRelatedPerson();

  // Redirect to the next page
  if (addFifth !== undefined) {
    window.location.href = "2_relatedPersonDetailsFifth.html";
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
    localStorage.getItem("FourthrelatedPersonDetails")
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

async function downloadRelatedPerson() {
  // editing pdf file
  // Fetch the PDF file from the server
  const url = "./RELATED_PERSONS.pdf"; // Path to your PDF file
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
  // Get the form
  const form = pdfDoc.getForm();

  if (relatedPersonDetails !== null) {
    if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      form.getCheckBox("relatedPersonAddition").check();
    } else if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      form.getCheckBox("relatedPersonUpdation").check();
    } else {
      form.getCheckBox("relatedPersonDeletion").check();
    }

    form
      .getTextField("kycNumber")
      .setText(relatedPersonDetails["kycNumber"].toUpperCase());

    if (relatedPersonDetails["personType"] === "director") {
      form.getCheckBox("director").check();
    } else if (relatedPersonDetails["personType"] === "promoter") {
      form.getCheckBox("promoter").check();
    } else if (relatedPersonDetails["personType"] === "karta") {
      form.getCheckBox("karta").check();
    } else if (relatedPersonDetails["personType"] === "trustee") {
      form.getCheckBox("trustee").check();
    } else if (relatedPersonDetails["personType"] === "partner") {
      form.getCheckBox("partner").check();
    } else if (relatedPersonDetails["personType"] === "beneficiary") {
      form.getCheckBox("beneficiary").check();
    } else if (relatedPersonDetails["personType"] === "authorisedSignatory") {
      form.getCheckBox("authorisedSignatory").check();
    } else if (relatedPersonDetails["personType"] === "beneficiaryOwner") {
      form.getCheckBox("beneficiaryOwner").check();
    } else if (relatedPersonDetails["personType"] === "proprietor") {
      form.getCheckBox("proprietor").check();
    } else if (
      relatedPersonDetails["personType"] === "countAppointmentOfficial"
    ) {
      form.getCheckBox("courtAppointmentOfficial").check();
    } else {
      form.getCheckBox("other").check();
    }

    form.getTextField("din").setText(relatedPersonDetails["din"].toUpperCase());

    form
      .getTextField("firstName")
      .setText(relatedPersonDetails["firstName"].toUpperCase());

    form
      .getTextField("lastName")
      .setText(relatedPersonDetails["lastName"].toUpperCase());

    form
      .getTextField("familyFirstName")
      .setText(relatedPersonDetails["familyFirstName"].toUpperCase());

    form
      .getTextField("familyLastName")
      .setText(relatedPersonDetails["familyLastName"].toUpperCase());

    form
      .getTextField("motherFirstName")
      .setText(relatedPersonDetails["motherFirstName"].toUpperCase());

    form
      .getTextField("motherLastName")
      .setText(relatedPersonDetails["motherLastName"].toUpperCase());

    form.getTextField("dob").setText(formatDate(relatedPersonDetails["dob"]));

    if (relatedPersonDetails["gender"] === "male") {
      form.getCheckBox("male").check();
    } else if (relatedPersonDetails["gender"] === "female") {
      form.getCheckBox("female").check();
    } else {
      form.getCheckBox("otherGender").check();
    }

    if (relatedPersonDetails["nationality"] === "IN") {
      form.getCheckBox("india").check();
    } else {
      form.getCheckBox("otherCountry").check();
      form
        .getTextField("otherCountryCode")
        .setText(relatedPersonDetails["otherCountryCode"].toUpperCase());
    }

    form
      .getTextField("panNumber")
      .setText(relatedPersonDetails["relatedPersonPanNumber"].toUpperCase());

    form
      .getTextField("relatedPersonAddress")
      .setText(relatedPersonDetails["relatedPersonAddress"].toUpperCase());

    form
      .getTextField("relatedPersonCity")
      .setText(relatedPersonDetails["relatedPersonCity"].toUpperCase());

    form
      .getTextField("relatedPersonDistrict")
      .setText(relatedPersonDetails["relatedPersonDistrict"].toUpperCase());

    form
      .getTextField("relatedPersonPinCode")
      .setText(relatedPersonDetails["relatedPersonPinCode"].toUpperCase());

    form
      .getTextField("relatedPersonState")
      .setText(relatedPersonDetails["relatedPersonState"].toUpperCase());

    form
      .getTextField("relatedPersonCountry")
      .setText(relatedPersonDetails["relatedPersonCountry"].toUpperCase());

    if (relatedPersonDetails["isRelatedPersonLocalSame"] === "Yes") {
      form.getCheckBox("isLocalSame").check();
    }

    form
      .getTextField("relatedPersonCurrentAddress")
      .setText(
        relatedPersonDetails["relatedPersonCurrentAddress"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentCity")
      .setText(relatedPersonDetails["relatedPersonCurrentCity"].toUpperCase());

    form
      .getTextField("relatedPersonCurrentDistrict")
      .setText(
        relatedPersonDetails["relatedPersonCurrentDistrict"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentPinCode")
      .setText(
        relatedPersonDetails["relatedPersonCurrentPinCode"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentState")
      .setText(relatedPersonDetails["relatedPersonCurrentState"].toUpperCase());

    form
      .getTextField("relatedPersonCurrentCountry")
      .setText(
        relatedPersonDetails["relatedPersonCurrentCountry"].toUpperCase()
      );

    form
      .getTextField("relatedPersonMobileNumber")
      .setText(relatedPersonDetails["relatedPersonMobileNumber"].toUpperCase());

    form
      .getTextField("relatedPersonEmailId")
      .setText(relatedPersonDetails["relatedPersonEmailId"].toUpperCase());

    form
      .getTextField("relatedPersonTelephoneOffice")
      .setText(
        relatedPersonDetails["relatedPersonTelephoneOffice"].toUpperCase()
      );

    form
      .getTextField("relatedPersonTelephoneRes")
      .setText(relatedPersonDetails["relatedPersonTelephoneRes"].toUpperCase());

    form
      .getTextField("declarationPlace")
      .setText(companyDetails["declarationPlace"].toUpperCase());

    form
      .getTextField("declarationDate")
      .setText(new Date().toLocaleDateString("en-GB"));
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  // Create a Blob from the bytes
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "second_related_person.pdf";
  link.click();
}

function formatDate(dateString) {
  // Split the date string into components [yyyy, mm, dd]
  const parts = dateString.split("-");

  // Rearrange the components to [dd, mm, yyyy]
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}