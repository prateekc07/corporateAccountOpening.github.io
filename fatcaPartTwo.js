let fatcaPartTwoDetails = {};

let fatcaPartTwoForm = document.getElementById("fatcaPartTwoForm");

fatcaPartTwoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fatcaPartTwoFormData = new FormData(event.target);
  fatcaPartTwoFormData.forEach((value, key) => {
    fatcaPartTwoDetails[key] = value;
  });

  localStorage.setItem(
    "fatcaPartTwoDetails",
    JSON.stringify(fatcaPartTwoDetails)
  );
  console.log(JSON.parse(localStorage.getItem("fatcaPartTwoDetails")));

  // Redirect to the next page
  window.location.href = "8_corporateDocumentUpload.html";
});

document.addEventListener("DOMContentLoaded", () => {
  getfatcaPartTwoDetail();
});

function getfatcaPartTwoDetail() {
  let fatcaPartTwoDetail = JSON.parse(
    localStorage.getItem("fatcaPartTwoDetails")
  );
  // section1
  let EntityName = document.getElementById("EntityName");
  let customerId = document.getElementById("customerId");
  let entityConsitutionType = document.getElementById("entityConsitutionType");
  let entityIdentificationType = document.getElementById(
    "entityIdentificationType"
  );
  let entityIdentificationNumber = document.getElementById(
    "entityIdentificationNumber"
  );
  let entityIdentificationIssuingCountry = document.getElementById(
    "entityIdentificationIssuingCountry"
  );
  let countryOfResidence = document.getElementById("countryOfResidence");

  // section2
  let USTaxableYes = document.getElementById("USTaxableYes");
  let USTaxableNo = document.getElementById("USTaxableNo");
  let taxpayerIdentificationNumber = document.getElementById(
    "taxpayerIdentificationNumber"
  );
  let otherCountryTaxableYes = document.getElementById(
    "otherCountryTaxableYes"
  );
  let otherCountryTaxableNo = document.getElementById("otherCountryTaxableNo");
  let tinIssuingCountry = document.getElementById("tinIssuingCountry");

  let activeNffe = document.getElementById("activeNffe");
  let passiveNffeWithoutControlPerson = document.getElementById(
    "passiveNffeWithoutControlPerson"
  );
  let passiveNffeWithControlPerson = document.getElementById(
    "passiveNffeWithControlPerson"
  );
  let USCountryYes = document.getElementById("USCountryYes");
  let USCountryNo = document.getElementById("USCountryNo");
  let directNffe = document.getElementById("directNffe");
  let GIINNumber = document.getElementById("GIINNumber");

  // section3
  let USFinancialInstituteYes = document.getElementById(
    "USFinancialInstituteYes"
  );
  let USFinancialInstituteNo = document.getElementById(
    "USFinancialInstituteNo"
  );
  let entityTaxpayerIdentificationNumber = document.getElementById(
    "entityTaxpayerIdentificationNumber"
  );
  let usFinancialInstituteGiinNumber = document.getElementById(
    "usFinancialInstituteGiinNumber"
  );

  let igaModel1Btn = document.getElementById("igaModel1Btn");
  let igaModel1 = document.getElementById("igaModel1");
  let igaModel2Btn = document.getElementById("igaModel2Btn");
  let igaModel2 = document.getElementById("igaModel2");
  let ffiBtn = document.getElementById("ffiBtn");
  let ffi = document.getElementById("ffi");
  let nonReportingFiBtn = document.getElementById("nonReportingFiBtn");
  let nonReportingFi = document.getElementById("nonReportingFi");
  let nonParticipatingFiBtn = document.getElementById("nonParticipatingFiBtn");
  let nonParticipatingFi = document.getElementById("nonParticipatingFi");
  let ownerDocumentedBtn = document.getElementById("ownerDocumentedBtn");
  let ownerDocumented = document.getElementById("ownerDocumented");

  // section4
  let controllingPersonName = document.getElementById("controllingPersonName");
  let controllingPersonCorrespondenceAddress = document.getElementById(
    "controllingPersonCorrespondenceAddress"
  );
  let controllingPersonResidenceCountry = document.getElementById(
    "controllingPersonResidenceCountry"
  );
  let controllingPersonTin = document.getElementById("controllingPersonTin");
  let controllingPersonTinIssuingCountry = document.getElementById(
    "controllingPersonTinIssuingCountry"
  );
  let controllingPersonType = document.getElementById("controllingPersonType");
  let controllingPersonIdenticationType = document.getElementById(
    "controllingPersonIdenticationType"
  );
  let controllingPersonIdentificationNumber = document.getElementById(
    "controllingPersonIdentificationNumber"
  );
  let controllingPersonOccupationType = document.getElementById(
    "controllingPersonOccupationType"
  );
  let controllingPersonOccupation = document.getElementById(
    "controllingPersonOccupation"
  );
  let controllingPersonDob = document.getElementById("controllingPersonDob");
  let controllingPersonNationality = document.getElementById(
    "controllingPersonNationality"
  );
  let controllingPersonBirthCountry = document.getElementById(
    "controllingPersonBirthCountry"
  );

  // section5
  let name = document.getElementById("name");
  let signingDate = document.getElementById("signingDate");

  if (fatcaPartTwoDetail !== null) {
    // section1
    EntityName.value = fatcaPartTwoDetail["EntityName"];

    customerId.value = fatcaPartTwoDetail["customerId"];

    entityConsitutionType.value = fatcaPartTwoDetail["entityConsitutionType"];

    entityIdentificationType.value =
      fatcaPartTwoDetail["entityIdentificationType"];

    entityIdentificationNumber.value =
      fatcaPartTwoDetail["entityIdentificationNumber"];

    entityIdentificationIssuingCountry.value =
      fatcaPartTwoDetail["entityIdentificationIssuingCountry"];

    countryOfResidence.value = fatcaPartTwoDetail["countryOfResidence"];

    // section2
    if (fatcaPartTwoDetail["USTaxable"] === "Yes") {
      USTaxableYes.checked = true;
      taxpayerIdentificationNumber.value =
        fatcaPartTwoDetail["taxpayerIdentificationNumber"];
    } else {
      USTaxableNo.checked = true;
    }

    if (fatcaPartTwoDetail["otherCountryTaxable"] === "Yes") {
      otherCountryTaxableYes.checked = true;
    } else {
      otherCountryTaxableNo.checked = true;
    }
    tinIssuingCountry.value = fatcaPartTwoDetail["tinIssuingCountry"];

    if (fatcaPartTwoDetail["additionalDetailOfUSPerson"] === "Active NFFE") {
      activeNffe.checked = true;
    } else if (
      fatcaPartTwoDetail["additionalDetailOfUSPerson"] ===
      "Passive NFFE without any controlling Person"
    ) {
      passiveNffeWithoutControlPerson.checked = true;
    } else if (
      fatcaPartTwoDetail["additionalDetailOfUSPerson"] ===
      "Passive NFFE with controlling Person"
    ) {
      passiveNffeWithControlPerson.checked = true;
      if (fatcaPartTwoDetail["USCountry"] == "USCountryYes") {
        USCountryYes.checked = true;
      } else {
        USCountryNo.checked = true;
      }
    } else if (
      fatcaPartTwoDetail["additionalDetailOfUSPerson"] ===
      "Direct Reporting NFFE"
    ) {
      directNffe.checked = true;
    }
    GIINNumber.value = fatcaPartTwoDetail["GIINNumber"];

    // section3
    if (
      fatcaPartTwoDetail["USFinancialInstitute"] === "USFinancialInstituteYes"
    ) {
      USFinancialInstituteYes.checked = true;
      entityTaxpayerIdentificationNumber.value =
        fatcaPartTwoDetail["entityTaxpayerIdentificationNumber"];

      usFinancialInstituteGiinNumber.value =
        fatcaPartTwoDetail["usFinancialInstituteGiinNumber"];
    } else {
      USFinancialInstituteNo.checked = true;
      if (fatcaPartTwoDetail["fatcaNoClassification"] === "igaModel1") {
        igaModel1Btn.checked = true;
        igaModel1.value = fatcaPartTwoDetail["igaModel1"];
      } else if (fatcaPartTwoDetail["fatcaNoClassification"] === "igaModel2") {
        igaModel2Btn.checked = true;
        igaModel2.value = fatcaPartTwoDetail["igaModel2"];
      } else if (fatcaPartTwoDetail["fatcaNoClassification"] === "ffi") {
        ffiBtn.checked = true;
        ffi.value = fatcaPartTwoDetail["ffi"];
      } else if (
        fatcaPartTwoDetail["fatcaNoClassification"] === "nonReportingFi"
      ) {
        nonReportingFiBtn.checked = true;
        nonReportingFi.value = fatcaPartTwoDetail["nonReportingFi"];
      } else if (
        fatcaPartTwoDetail["fatcaNoClassification"] === "nonParticipatingFi"
      ) {
        nonParticipatingFiBtn.checked = true;
        nonParticipatingFi.value = fatcaPartTwoDetail["nonParticipatingFi"];
      } else {
        ownerDocumentedBtn.checked = true;
        ownerDocumented.value = fatcaPartTwoDetail["ownerDocumented"];
      }
    }

    // section4
    controllingPersonName.value = fatcaPartTwoDetail["controllingPersonName"];

    controllingPersonCorrespondenceAddress.value =
      fatcaPartTwoDetail["controllingPersonCorrespondenceAddress"];

    controllingPersonResidenceCountry.value =
      fatcaPartTwoDetail["controllingPersonResidenceCountry"];

    controllingPersonTin.value = fatcaPartTwoDetail["controllingPersonTin"];

    controllingPersonTinIssuingCountry.value =
      fatcaPartTwoDetail["controllingPersonTinIssuingCountry"];

    controllingPersonType.value = fatcaPartTwoDetail["controllingPersonType"];

    controllingPersonIdenticationType.value =
      fatcaPartTwoDetail["controllingPersonIdenticationType"];

    controllingPersonIdentificationNumber.value =
      fatcaPartTwoDetail["controllingPersonIdentificationNumber"];

    controllingPersonOccupationType.value =
      fatcaPartTwoDetail["controllingPersonOccupationType"];

    controllingPersonOccupation.value =
      fatcaPartTwoDetail["controllingPersonOccupation"];

    controllingPersonDob.value = fatcaPartTwoDetail["controllingPersonDob"];

    controllingPersonNationality.value =
      fatcaPartTwoDetail["controllingPersonNationality"];

    controllingPersonBirthCountry.value =
      fatcaPartTwoDetail["controllingPersonBirthCountry"];

    // section5
    name.value = fatcaPartTwoDetail["name"];

    signingDate.value = fatcaPartTwoDetail["signingDate"];
  }
}
