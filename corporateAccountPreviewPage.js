let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
let relatedPersonDetails = JSON.parse(
  localStorage.getItem("relatedPersonDetails")
);
let kycApplicationFormFirstPageDetails = JSON.parse(
  localStorage.getItem("kycApplicationFormFirstPageDetails")
);
let kycApplicationFormSecondPageDetails = JSON.parse(
  localStorage.getItem("kycApplicationFormSecondPageDetails")
);
let acknowledgementDetails = JSON.parse(
  localStorage.getItem("acknowledgementDetails")
);
let fatcaPartOneDetails = JSON.parse(
  localStorage.getItem("fatcaPartOneDetails")
);
let fatcaPartTwoDetails = JSON.parse(
  localStorage.getItem("fatcaPartTwoDetails")
);

document.addEventListener("DOMContentLoaded", () => {
  getCompanyDetails();
  getRelatedPersonDetails();
  getKycApplicationFormFirstPageDetails();
  getKycApplicationFormSecondPageDetails();
  getAcknowledgementDetails();
  getFatcaPartOneDetails();
  // getFatcaPartTwoDetails();
});

// Company Details section manages from here
function getCompanyDetails() {
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
  let declarationPlace = document.getElementById("declarationPlace");

  if (companyDetails !== null) {
    companyName.value = companyDetails["companyName"];

    incorporationDate.value = companyDetails["incorporationDate"];

    incorporationPlace.value = companyDetails["incorporationPlace"];

    incorporationCountry.value = companyDetails["incorporationCountry"];

    entityConstitutionType.value = companyDetails["entityConstitutionType"];

    companyPan.value = companyDetails["companyPan"];

    tinIssuingCountry.value = companyDetails["tinOrEquivalentIssuingCountry"];

    gstReg.value = companyDetails["gstRegistration"];

    commenceBussinessDate.value = companyDetails["bussinessCommenceDate"];

    companyAddress.value = companyDetails["companyAddress"];

    companyCity.value = companyDetails["registeredCity"];

    companyDistrict.value = companyDetails["registeredDistrict"];

    companyPinCode.value = companyDetails["registeredPinCode"];

    companyState.value = companyDetails["registeredState"];

    companyCountry.value = companyDetails["registeredCountry"];

    if (companyDetails["isLocalSame"] === "Yes") {
      isLocalSame.checked = true;
    }
    localAddress.value = companyDetails["localAddress"];

    localCity.value = companyDetails["localCity"];

    localDistrict.value = companyDetails["localDistrict"];

    localPinCode.value = companyDetails["localPinCode"];

    localState.value = companyDetails["localState"];

    localCountry.value = companyDetails["localCountry"];

    companyPhoneNumber.value = companyDetails["companyPhoneNumber"];

    companyEmailId.value = companyDetails["companyEmailId"];

    companyTelephoneNumber.value = companyDetails["companyTelephoneNumber"];

    companyFaxNumber.value = companyDetails["companyFaxNumber"];

    declarationPlace.value = companyDetails["declarationPlace"];
  }
}

// Related Person Details section manages from here
function getRelatedPersonDetails() {
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
  let relatedPersonIdentityProof = document.getElementById(
    "relatedPersonIdentityProof"
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
  let currentIdentityProof = document.getElementById("currentIdentityProof");
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

  if (relatedPersonDetails !== null) {
    if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetails["kycNumber"];

    personType.value = relatedPersonDetails["personType"];
    din.value = relatedPersonDetails["din"];

    firstName.value = relatedPersonDetails["firstName"];

    lastName.value = relatedPersonDetails["lastName"];

    familyFirstName.value = relatedPersonDetails["familyFirstName"];

    familyLastName.value = relatedPersonDetails["familyLastName"];

    motherFirstName.value = relatedPersonDetails["motherFirstName"];

    motherLastName.value = relatedPersonDetails["motherLastName"];

    dob.value = relatedPersonDetails["dob"];

    gender.value = relatedPersonDetails["gender"];

    if (relatedPersonDetails["nationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetails["otherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetails["relatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetails["relatedPersonIdentityProof"];

    relatedPersonAddress.value = relatedPersonDetails["relatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetails["relatedPersonCity"];

    relatedPersonDistrict.value = relatedPersonDetails["relatedPersonDistrict"];

    relatedPersonPinCode.value = relatedPersonDetails["relatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetails["relatedPersonState"];

    relatedPersonCountry.value = relatedPersonDetails["relatedPersonCountry"];

    if (relatedPersonDetails["isRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    currentIdentityProof.value = relatedPersonDetails["currentIdentityProof"];

    relatedPersonCurrentAddress.value =
      relatedPersonDetails["relatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetails["relatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetails["relatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetails["relatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetails["relatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetails["relatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetails["relatedPersonMobileNumber"];

    relatedPersonEmailId.value = relatedPersonDetails["relatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetails["relatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetails["relatedPersonTelephoneRes"];
  }
}

// kycApplicationFormFirstPageDetails section manages from here
function getKycApplicationFormFirstPageDetails() {
  let nsdl = document.getElementById("nsdl");
  let cdsl = document.getElementById("cdsl");

  if (kycApplicationFormFirstPageDetails !== null) {

    if (
      kycApplicationFormFirstPageDetails["nsdlCdslOption"] ===
      "National Securities Depository Limited"
    ) {
      nsdl.checked = true;
    } else {
      cdsl.checked = true;
    }

    let totalHolders = localStorage.getItem("totalHolders");
    let holderArray = [
      "First",
      "Second",
      "Third",
    ];

    for (let i = 1; i <= totalHolders; i++) {
      let otherDetailsValueBox = document.querySelector(".otherDetailsValues");
      let anotherHolderDiv = document.createElement("div");
      anotherHolderDiv.innerHTML = `
    <div class="${
      holderArray[i - 1]
    }HolderOtherDetails mt-5 text-lg text-blue-800 font-semibold">${
        holderArray[i - 1]
      } Holder</div>
            <div class="details">
              <div class="grossAnnualIncome flex items-center justify-between">
                <div>
                  <label class="block font-semibold text-gray-700">1. Gross Annual Income</label>
                  <div class="incomeRanges flex items-center mt-2">
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }incomeRange" value="Below 1Lac" id="${
        holderArray[i - 1]
      }belowOneLakh" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "incomeRange"
        ] === "Below 1Lac"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }belowOneLakh" class="font-semibold text-gray-800">Below 1Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }incomeRange" value="1-5Lac" id="${
        holderArray[i - 1]
      }oneToFiveLakh" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "incomeRange"
        ] === "1-5Lac"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }oneToFiveLakh" class="font-semibold text-gray-800">1-5Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }incomeRange" value="5-10Lac" id="${
        holderArray[i - 1]
      }fiveToTenLakh" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "incomeRange"
        ] === "5-10Lac"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }fiveToTenLakh" class="font-semibold text-gray-800">5-10Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }incomeRange" value="10-25Lac" id="${
        holderArray[i - 1]
      }tenToTwentyFiveLakh" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "incomeRange"
        ] === "10-25Lac"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }tenToTwentyFiveLakh" class="font-semibold text-gray-800">10-25Lac</label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }incomeRange" value="Above 25Lac" id="${
        holderArray[i - 1]
      }aboveTwentyFiveLakh" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "incomeRange"
        ] === "Above 25Lac"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }aboveTwentyFiveLakh" class="font-semibold text-gray-800">Above 25Lac</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block font-semibold text-gray-700">Net Worth (Not older than 1 year)</label>
                  <div class="${holderArray[i - 1]}NetWorth flex">
                    <div class="mr-5 mt-2">
                      <label for="${
                        holderArray[i - 1]
                      }NetWorthAmount" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Amount</label>
                      <input type="text" name="${
                        holderArray[i - 1]
                      }NetWorthAmount" id="${holderArray[i - 1]}NetWorthAmount"
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" value="${
                          kycApplicationFormFirstPageDetails !== null &&
                          kycApplicationFormFirstPageDetails[
                            holderArray[i - 1] + "NetWorthAmount"
                          ]
                        }" readonly>
                    </div>
                  
                    <div class="mr-5 mt-2">
                      <label for="${
                        holderArray[i - 1]
                      }NetWorthDate" class="block text-sm text-gray-700 font-semibold my-1 pl-1">As on (Date)</label>
                      <input type="date" name="${
                        holderArray[i - 1]
                      }NetWorthDate" id="${holderArray[i - 1]}NetWorthDate"
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" value="${
                          kycApplicationFormFirstPageDetails !== null &&
                          kycApplicationFormFirstPageDetails[
                            holderArray[i - 1] + "NetWorthDate"
                          ]
                        }" readonly>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="politicalRelation">
                  <label class="block font-semibold text-gray-700">4. Please Tick (if applicable)</label>
                  <div class="${
                    holderArray[i - 1]
                  }PoliticalDetails flex items-center mt-2">
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }PoliticalInfo" value="Politically Exposed Person" id="${
        holderArray[i - 1]
      }PEP" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "PoliticalInfo"
        ] === "Politically Exposed Person"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }PEP" class="font-semibold text-gray-800">Politically Exposed Person</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${
                        holderArray[i - 1]
                      }PoliticalInfo" value="Related to Politically Exposed Person" id="${
        holderArray[i - 1]
      }RPEP" class="size-4 mr-2" ${
        kycApplicationFormFirstPageDetails[
          holderArray[i - 1] + "PoliticalInfo"
        ] === "Related to Politically Exposed Person"
          ? "checked"
          : ""
      } disabled>
                      <label for="${
                        holderArray[i - 1]
                      }RPEP" class="font-semibold text-gray-800">Related to Politically Exposed Person</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
      otherDetailsValueBox.appendChild(anotherHolderDiv);
    }
  }
}

// kycApplicationFormSecondPageDetails section manages from here
function getKycApplicationFormSecondPageDetails() {
  let primaryAccountType = document.getElementById("primaryAccountType");
  let primaryBankAccountNo = document.getElementById("primaryBankAccountNo");
  let primaryBankName = document.getElementById("primaryBankName");
  let primaryBranchAddress = document.getElementById("primaryBranchAddress");
  let primaryMicrCode = document.getElementById("primaryMicrCode");
  let primaryIfscCode = document.getElementById("primaryIfscCode");
  let primaryUpiId = document.getElementById("primaryUpiId");

  let secondaryAccountType = document.getElementById("secondaryAccountType");
  let secondaryBankAccountNo = document.getElementById(
    "secondaryBankAccountNo"
  );
  let secondaryBankName = document.getElementById("secondaryBankName");
  let secondaryBranchAddress = document.getElementById(
    "secondaryBranchAddress"
  );
  let secondaryMicrCode = document.getElementById("secondaryMicrCode");
  let secondaryIfscCode = document.getElementById("secondaryIfscCode");
  let secondaryUpiId = document.getElementById("secondaryUpiId");

  let physicalContractNote = document.getElementById("physicalContractNote");
  let electronicContractNote = document.getElementById(
    "electronicContractNote"
  );
  let electronicEmailId = document.getElementById("electronicEmailId");
  let tradingExperience = document.getElementById("tradingExperience");
  let internetTradingOptionyes = document.getElementById(
    "internetTradingOptionyes"
  );
  let internetTradingOptionno = document.getElementById(
    "internetTradingOptionno"
  );

  if (kycApplicationFormSecondPageDetails !== null) {
    primaryAccountType.value =
      kycApplicationFormSecondPageDetails["primaryAccountType"];
    primaryBankAccountNo.value =
      kycApplicationFormSecondPageDetails["primaryBankAccountNo"];

    primaryBankName.value =
      kycApplicationFormSecondPageDetails["primaryBankName"];

    primaryBranchAddress.value =
      kycApplicationFormSecondPageDetails["primaryBranchAddress"];

    primaryMicrCode.value =
      kycApplicationFormSecondPageDetails["primaryMicrCode"];

    primaryIfscCode.value =
      kycApplicationFormSecondPageDetails["primaryIfscCode"];

    primaryUpiId.value = kycApplicationFormSecondPageDetails["primaryUpiId"];

    secondaryAccountType.value =
      kycApplicationFormSecondPageDetails["secondaryAccountType"];

    secondaryBankAccountNo.value =
      kycApplicationFormSecondPageDetails["secondaryBankAccountNo"];

    secondaryBankName.value =
      kycApplicationFormSecondPageDetails["secondaryBankName"];

    secondaryBranchAddress.value =
      kycApplicationFormSecondPageDetails["secondaryBranchAddress"];

    secondaryMicrCode.value =
      kycApplicationFormSecondPageDetails["secondaryMicrCode"];

    secondaryIfscCode.value =
      kycApplicationFormSecondPageDetails["secondaryIfscCode"];

    secondaryUpiId.value =
      kycApplicationFormSecondPageDetails["secondaryUpiId"];

    if (kycApplicationFormSecondPageDetails["contractOption"] === "Physical") {
      physicalContractNote.checked = true;
    } else {
      electronicContractNote.checked = true;
    }

    electronicEmailId.value =
      kycApplicationFormSecondPageDetails["electronicEmailId"];

    if (
      kycApplicationFormSecondPageDetails["internetTradingOption"] === "Yes"
    ) {
      internetTradingOptionyes.checked = true;
    } else {
      internetTradingOptionno.checked = true;
    }

    tradingExperience.value =
      kycApplicationFormSecondPageDetails["tradingExperience"];

    let totalPartners = localStorage.getItem("totalPartners");
    let partnersArray = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
    ];

    for (let i = 1; i <= totalPartners; i++) {
      let companyRelatedPersonDetails = document.querySelector(
        ".companyRelatedPersonDetails"
      );
      let anotherRelatedPersonDiv = document.createElement("div");
      anotherRelatedPersonDiv.style.marginTop = "10vh";
      anotherRelatedPersonDiv.innerHTML = `
    <div class="flex flex-wrap">
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonName" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Name</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonName" id="company${
        partnersArray[i - 1]
      }RelatedPersonName"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonName"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonAddress" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Residential
                  Address</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonAddress" id="company${
        partnersArray[i - 1]
      }RelatedPersonAddress"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonAddress"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonDesignation"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">Designation</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonDesignation" id="company${
        partnersArray[i - 1]
      }RelatedPersonDesignation"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" +
                        partnersArray[i - 1] +
                        "RelatedPersonDesignation"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonPan" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Pan
                  Number</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonPan" id="company${
        partnersArray[i - 1]
      }RelatedPersonPan"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonPan"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonContactNumber"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">Contact Number</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonContactNumber" id="company${
        partnersArray[i - 1]
      }RelatedPersonContactNumber"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" +
                        partnersArray[i - 1] +
                        "RelatedPersonContactNumber"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonDob" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Date
                  of Birth</label>
                <input type="date" name="company${
                  partnersArray[i - 1]
                }RelatedPersonDob" id="company${
        partnersArray[i - 1]
      }RelatedPersonDob"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonDob"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${partnersArray[i - 1]}RelatedPersonDinUid"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">DIN/UID</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonDinUid" id="company${
        partnersArray[i - 1]
      }RelatedPersonDinUid"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonDinUid"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${
                  partnersArray[i - 1]
                }RelatedPersonAadhar" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Aadhar
                  Number</label>
                <input type="text" name="company${
                  partnersArray[i - 1]
                }RelatedPersonAadhar" id="company${
        partnersArray[i - 1]
      }RelatedPersonAadhar"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" readonly value = "${
                    kycApplicationFormSecondPageDetails[
                      "company" + partnersArray[i - 1] + "RelatedPersonAadhar"
                    ]
                  }">
              </div>
              
              <div class="mr-5 mt-2">
                <div class="companyRelatedPersonPoliticalRelation text-lg text-gray-700 font-semibold">PEP/RPEP</div>
                <div class="politicalRelations flex">
                  <div class="mr-8 flex items-center">
                    <input type="radio" name="political${
                      partnersArray[i - 1]
                    }RelationPepRpep" value="Yes" id="${
        partnersArray[i - 1]
      }politicalYes" class="size-5 mr-2" ${
        kycApplicationFormSecondPageDetails[
          "political" + partnersArray[i - 1] + "RelationPepRpep"
        ] === "Yes"
          ? "checked"
          : ""
      } disabled>
                    <label for="${
                      partnersArray[i - 1]
                    }politicalYes" class="text-lg text-gray-700">Yes</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="political${
                      partnersArray[i - 1]
                    }RelationPepRpep" value="No" id="${
        partnersArray[i - 1]
      }politicalNo" class="size-5 mr-2" ${
        kycApplicationFormSecondPageDetails[
          "political" + partnersArray[i - 1] + "RelationPepRpep"
        ] === "No"
          ? "checked"
          : ""
      } disabled>
                    <label for="${
                      partnersArray[i - 1]
                    }politicalNo" class="text-lg text-gray-700">No</label>
                  </div>
                </div>
              </div>
            </div>
  `;
      companyRelatedPersonDetails.appendChild(anotherRelatedPersonDiv);
    }
  }
}

// acknowledgementDetails section manages from here
function getAcknowledgementDetails() {

  let ecnClientMandateName = document.getElementById("ecnClientMandateName");
  let ecnClientEmail = document.getElementById("ecnClientEmail");
  let ecnClientName = document.getElementById("ecnClientName");
  let ecnClientAddress = document.getElementById("ecnClientAddress");
  let ecnClientPan = document.getElementById("ecnClientPan");
  let ecnClientNameDesignation = document.getElementById(
    "ecnClientNameDesignation"
  );
  let internetEmailId = document.getElementById("internetEmailId");
  let internetApplicantName = document.getElementById("internetApplicantName");
  let internetApplicantAddress = document.getElementById(
    "internetApplicantAddress"
  );
  let internetApplicantMobileNumber = document.getElementById(
    "internetApplicantMobileNumber"
  );
  let internetApplicantTelephoneNumber = document.getElementById(
    "internetApplicantTelephoneNumber"
  );

  if (acknowledgementDetails !== null) {
    ecnClientMandateName.value = acknowledgementDetails["ecnClientMandateName"];
    ecnClientEmail.value = acknowledgementDetails["ecnClientEmail"];
    ecnClientName.value = acknowledgementDetails["ecnClientName"];
    ecnClientAddress.value = acknowledgementDetails["ecnClientAddress"];
    ecnClientPan.value = acknowledgementDetails["ecnClientPan"];
    ecnClientNameDesignation.value =
      acknowledgementDetails["ecnClientNameDesignation"];
    internetEmailId.value = acknowledgementDetails["internetEmailId"];
    internetApplicantName.value =
      acknowledgementDetails["internetApplicantName"];
    internetApplicantAddress.value =
      acknowledgementDetails["internetApplicantAddress"];
    internetApplicantMobileNumber.value =
      acknowledgementDetails["internetApplicantMobileNumber"];
    internetApplicantTelephoneNumber.value =
      acknowledgementDetails["internetApplicantTelephoneNumber"];
  }
}

// fatcaPartOneDetails section manages from here
function getFatcaPartOneDetails() {
  let days90 = document.getElementById("90Days");
  let days30 = document.getElementById("30Days");

  let optionAYes = document.getElementById("optionAYes");
  let optionANo = document.getElementById("optionANo");
  let listedCompanyName = document.getElementById("listedCompanyName");

  let optionBYes = document.getElementById("optionBYes");
  let optionBNo = document.getElementById("optionBNo");

  let optionCYes = document.getElementById("optionCYes");
  let optionCNo = document.getElementById("optionCNo");
  let giinNumber = document.getElementById("giinNumber");

  let optionDYes = document.getElementById("optionDYes");
  let optionDNo = document.getElementById("optionDNo");

  if (fatcaPartOneDetails !== null) {
    if (fatcaPartOneDetails["settlementTimePeriod"] === "90 Days") {
      days90.checked = true;
    } else {
      days30.checked = true;
    }

    if (fatcaPartOneDetails["QuesAOptions"] === "Yes") {
      optionAYes.checked = true;
      listedCompanyName.value = fatcaPartOneDetails["listedCompanyName"];
    } else {
      optionANo.checked = true;
    }

    if (fatcaPartOneDetails["QuesBOptions"] === "Yes") {
      optionBYes.checked = true;
    } else {
      optionBNo.checked = true;
    }

    if (fatcaPartOneDetails["QuesCOptions"] === "Yes") {
      optionCYes.checked = true;
      giinNumber.value = fatcaPartOneDetails["giinNumber"];
    } else {
      optionCNo.checked = true;
    }

    if (fatcaPartOneDetails["QuesDOptions"] === "Yes") {
      optionDYes.checked = true;
    } else {
      optionDNo.checked = true;
    }
  }
}

// fatcaPartTwoDetails section manages from here
function getFatcaPartTwoDetails() {
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

  if (fatcaPartTwoDetails !== null) {
    // section1
    EntityName.value = fatcaPartTwoDetails["EntityName"];

    customerId.value = fatcaPartTwoDetails["customerId"];

    entityConsitutionType.value = fatcaPartTwoDetails["entityConsitutionType"];

    entityIdentificationType.value =
      fatcaPartTwoDetails["entityIdentificationType"];

    entityIdentificationNumber.value =
      fatcaPartTwoDetails["entityIdentificationNumber"];

    entityIdentificationIssuingCountry.value =
      fatcaPartTwoDetails["entityIdentificationIssuingCountry"];

    countryOfResidence.value = fatcaPartTwoDetails["countryOfResidence"];

    // section2
    if (fatcaPartTwoDetails["USTaxable"] === "Yes") {
      USTaxableYes.checked = true;
      taxpayerIdentificationNumber.value =
        fatcaPartTwoDetails["taxpayerIdentificationNumber"];
    } else {
      USTaxableNo.checked = true;
    }

    if (fatcaPartTwoDetails["otherCountryTaxable"] === "Yes") {
      otherCountryTaxableYes.checked = true;
    } else {
      otherCountryTaxableNo.checked = true;
    }
    tinIssuingCountry.value = fatcaPartTwoDetails["tinIssuingCountry"];

    if (fatcaPartTwoDetails["additionalDetailOfUSPerson"] === "Active NFFE") {
      activeNffe.checked = true;
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Passive NFFE without any controlling Person"
    ) {
      passiveNffeWithoutControlPerson.checked = true;
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Passive NFFE with controlling Person"
    ) {
      passiveNffeWithControlPerson.checked = true;
      if (fatcaPartTwoDetails["USCountry"] == "USCountryYes") {
        USCountryYes.checked = true;
      } else {
        USCountryNo.checked = true;
      }
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Direct Reporting NFFE"
    ) {
      directNffe.checked = true;
    }
    GIINNumber.value = fatcaPartTwoDetails["GIINNumber"];

    // section3
    if (
      fatcaPartTwoDetails["USFinancialInstitute"] === "USFinancialInstituteYes"
    ) {
      USFinancialInstituteYes.checked = true;
      entityTaxpayerIdentificationNumber.value =
        fatcaPartTwoDetails["entityTaxpayerIdentificationNumber"];

      usFinancialInstituteGiinNumber.value =
        fatcaPartTwoDetails["usFinancialInstituteGiinNumber"];
    } else {
      USFinancialInstituteNo.checked = true;
      if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel1") {
        igaModel1Btn.checked = true;
        igaModel1.value = fatcaPartTwoDetails["igaModel1"];
      } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel2") {
        igaModel2Btn.checked = true;
        igaModel2.value = fatcaPartTwoDetails["igaModel2"];
      } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "ffi") {
        ffiBtn.checked = true;
        ffi.value = fatcaPartTwoDetails["ffi"];
      } else if (
        fatcaPartTwoDetails["fatcaNoClassification"] === "nonReportingFi"
      ) {
        nonReportingFiBtn.checked = true;
        nonReportingFi.value = fatcaPartTwoDetails["nonReportingFi"];
      } else if (
        fatcaPartTwoDetails["fatcaNoClassification"] === "nonParticipatingFi"
      ) {
        nonParticipatingFiBtn.checked = true;
        nonParticipatingFi.value = fatcaPartTwoDetails["nonParticipatingFi"];
      } else {
        ownerDocumentedBtn.checked = true;
        ownerDocumented.value = fatcaPartTwoDetails["ownerDocumented"];
      }
    }

    // section4
    controllingPersonName.value = fatcaPartTwoDetails["controllingPersonName"];

    controllingPersonCorrespondenceAddress.value =
      fatcaPartTwoDetails["controllingPersonCorrespondenceAddress"];

    controllingPersonResidenceCountry.value =
      fatcaPartTwoDetails["controllingPersonResidenceCountry"];

    controllingPersonTin.value = fatcaPartTwoDetails["controllingPersonTin"];

    controllingPersonTinIssuingCountry.value =
      fatcaPartTwoDetails["controllingPersonTinIssuingCountry"];

    controllingPersonType.value = fatcaPartTwoDetails["controllingPersonType"];

    controllingPersonIdenticationType.value =
      fatcaPartTwoDetails["controllingPersonIdenticationType"];

    controllingPersonIdentificationNumber.value =
      fatcaPartTwoDetails["controllingPersonIdentificationNumber"];

    controllingPersonOccupationType.value =
      fatcaPartTwoDetails["controllingPersonOccupationType"];

    controllingPersonOccupation.value =
      fatcaPartTwoDetails["controllingPersonOccupation"];

    controllingPersonDob.value = fatcaPartTwoDetails["controllingPersonDob"];

    controllingPersonNationality.value =
      fatcaPartTwoDetails["controllingPersonNationality"];

    controllingPersonBirthCountry.value =
      fatcaPartTwoDetails["controllingPersonBirthCountry"];

    // section5
    name.value = fatcaPartTwoDetails["name"];

    signingDate.value = fatcaPartTwoDetails["signingDate"];
  }
}

let submitDetails = document.getElementById("submitDetails");
submitDetails.addEventListener("submit", async (event) => {
  event.preventDefault();
  // editing pdf file
  // Fetch the PDF file from the server
  const url = "./KYCTRADING.pdf"; // Path to your PDF file
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
  // Get the form
  const form = pdfDoc.getForm();

  // Fill the form fields
  if (companyDetails !== null) {
    form.getCheckBox("applicationTypeNew").check();
    form.getCheckBox("entityDetails").check();

    form
      .getTextField("companyName")
      .setText(companyDetails["companyName"].toUpperCase());

    form
      .getTextField("incorporationDate")
      .setText(formatDate(companyDetails["incorporationDate"]));

    form
      .getTextField("incorporationPlace")
      .setText(companyDetails["incorporationPlace"].toUpperCase());

    form
      .getTextField("incorporationCountry")
      .setText(companyDetails["incorporationCountry"].toUpperCase());

    form
      .getTextField("entityConstitutionType")
      .setText(companyDetails["entityConstitutionType"].toUpperCase());

    form
      .getTextField("companyPan")
      .setText(companyDetails["companyPan"].toUpperCase());

    form
      .getTextField("tinOrEquivalentIssuingCountry")
      .setText(companyDetails["tinOrEquivalentIssuingCountry"].toUpperCase());

    form
      .getTextField("gstRegistration")
      .setText(companyDetails["gstRegistration"].toUpperCase());

    form
      .getTextField("bussinessCommenceDate")
      .setText(formatDate(companyDetails["bussinessCommenceDate"]));

    form.getCheckBox("otherDocuments").check();

    form
      .getTextField("companyAddress")
      .setText(companyDetails["companyAddress"].toUpperCase());

    form
      .getTextField("registeredCity")
      .setText(companyDetails["registeredCity"].toUpperCase());

    form
      .getTextField("registeredDistrict")
      .setText(companyDetails["registeredDistrict"].toUpperCase());

    form
      .getTextField("registeredPinCode")
      .setText(companyDetails["registeredPinCode"].toUpperCase());

    form
      .getTextField("registeredState")
      .setText(companyDetails["registeredState"].toUpperCase());

    form
      .getTextField("registeredCountry")
      .setText(companyDetails["registeredCountry"].toUpperCase());

    form
      .getTextField("localAddress")
      .setText(companyDetails["localAddress"].toUpperCase());

    form
      .getTextField("localCity")
      .setText(companyDetails["localCity"].toUpperCase());

    form
      .getTextField("localDistrict")
      .setText(companyDetails["localDistrict"].toUpperCase());

    form
      .getTextField("localPinCode")
      .setText(companyDetails["localPinCode"].toUpperCase());

    form
      .getTextField("localState")
      .setText(companyDetails["localState"].toUpperCase());

    form
      .getTextField("localCountry")
      .setText(companyDetails["localCountry"].toUpperCase());

    form
      .getTextField("companyPhoneNumber")
      .setText(companyDetails["companyPhoneNumber"].toUpperCase());

    form
      .getTextField("companyEmailId")
      .setText(companyDetails["companyEmailId"].toUpperCase());

    form
      .getTextField("companyTelephoneNumber")
      .setText(companyDetails["companyTelephoneNumber"].toUpperCase());

    form
      .getTextField("companyFaxNumber")
      .setText(companyDetails["companyFaxNumber"].toUpperCase());
    
    form.getCheckBox("certifiedCopy").check();

  }

  if (relatedPersonDetails !== null) {
    if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      form.getCheckBox("relatedPersonAddition").check();
      form.getCheckBox("newRelatedPerson").check();
    } else if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      form.getCheckBox("relatedPersonUpdation").check();
      form.getCheckBox("updateRelatedPerson").check();
    } else {
      form.getCheckBox("relatedPersonDeletion").check();
      form.getCheckBox("deleteRelatedPerson").check();
    }

    form.getCheckBox("relatedPersonNameSection").check();
    form.getCheckBox("relatedPersonCertifiedCopy").check();

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
  }

  if (kycApplicationFormFirstPageDetails !== null) {
    form
      .getTextField("applicantName")
      .setText(companyDetails["companyName"].toUpperCase());

    form
      .getTextField("incorporationDateKyc")
      .setText(formatDate(companyDetails["incorporationDate"]));

    form
      .getTextField("incorporationPlaceKyc")
      .setText(companyDetails["incorporationPlace"].toUpperCase());

    form
      .getTextField("panNumberKyc")
      .setText(companyDetails["companyPan"].toUpperCase());

    form
      .getTextField("gstRegistrationKyc")
      .setText(companyDetails["gstRegistration"].toUpperCase());

    form
      .getTextField("bussinessCommenceDateKyc")
      .setText(formatDate(companyDetails["bussinessCommenceDate"]));

    form.getCheckBox("bodyCorporate").check();

    form
      .getTextField("correspondenceAddress")
      .setText(companyDetails["companyAddress"].toUpperCase());

    form
      .getTextField("cityName")
      .setText(companyDetails["registeredCity"].toUpperCase());

    form
      .getTextField("stateName")
      .setText(companyDetails["registeredState"].toUpperCase());

    form
      .getTextField("countryName")
      .setText(companyDetails["registeredCountry"].toUpperCase());

    form
      .getTextField("pinCode")
      .setText(companyDetails["registeredPinCode"].toUpperCase());

    form
      .getTextField("mobileNumber")
      .setText(companyDetails["companyPhoneNumber"].toUpperCase());

    form
      .getTextField("emailId")
      .setText(companyDetails["companyEmailId"].toUpperCase());

    form
      .getTextField("faxNumber")
      .setText(companyDetails["companyFaxNumber"].toUpperCase());

    form
      .getTextField("officeTelephone")
      .setText(companyDetails["companyTelephoneNumber"].toUpperCase());

    form
      .getTextField("resTelephone")
      .setText(companyDetails["companyTelephoneNumber"].toUpperCase());

    form
      .getTextField("registeredAddress")
      .setText(companyDetails["localAddress"].toUpperCase());

    form
      .getTextField("registeredCityName")
      .setText(companyDetails["localCity"].toUpperCase());

    form
      .getTextField("registeredStateName")
      .setText(companyDetails["localState"].toUpperCase());

    form
      .getTextField("registeredCountryName")
      .setText(companyDetails["localCountry"].toUpperCase());

    form
      .getTextField("registeredPinCodeKyc")
      .setText(companyDetails["localPinCode"].toUpperCase());

    if (
      kycApplicationFormFirstPageDetails["nsdlCdslOption"] ===
      "National Securities Depository Limited"
    ) {
      form.getCheckBox("nsdl").check();
    } else {
      form.getCheckBox("cdsl").check();
    }

    form
      .getTextField("firstHolderName")
      .setText(companyDetails["companyName"].toUpperCase());
    
    form
      .getTextField("kycApplicantName")
      .setText(companyDetails["companyName"].toUpperCase());

    form
      .getTextField("firstHolderPanNumber")
      .setText(companyDetails["companyPan"].toUpperCase());
    
    form
      .getTextField("kycApplicantPan")
      .setText(companyDetails["companyPan"].toUpperCase());

    let totalHolders = localStorage.getItem("totalHolders");
    let holderArray = [
      "First",
      "Second",
      "Third",
    ];

    for (let i = 1; i <= totalHolders; i++) {
      let incomeRange =
        kycApplicationFormFirstPageDetails[`${holderArray[i - 1]}incomeRange`];
      if (incomeRange === "Below 1Lac") {
        form.getCheckBox(`${holderArray[i - 1]}belowOneLakh`).check();
      } else if (incomeRange === "1-5Lac") {
        form.getCheckBox(`${holderArray[i - 1]}oneToFiveLakh`).check();
      } else if (incomeRange === "5-10Lac") {
        form.getCheckBox(`${holderArray[i - 1]}fiveToTenLakh`).check();
      } else if (incomeRange === "10-25Lac") {
        form.getCheckBox(`${holderArray[i - 1]}tenToTwentyFiveLakh`).check();
      } else {
        form.getCheckBox(`${holderArray[i - 1]}aboveTwentyFiveLakh`).check();
      }

      form
        .getTextField(`${holderArray[i - 1]}NetWorthAmount`)
        .setText(
          kycApplicationFormFirstPageDetails[
            `${holderArray[i - 1]}NetWorthAmount`
          ].toUpperCase()
        );
      form
        .getTextField(`${holderArray[i - 1]}NetWorthDate`)
        .setText(
          formatDate(
            kycApplicationFormFirstPageDetails[
              `${holderArray[i - 1]}NetWorthDate`
            ].toUpperCase()
          )
        );

      let politicalInfo =
        kycApplicationFormFirstPageDetails[
          `${holderArray[i - 1]}PoliticalInfo`
        ];
      if (politicalInfo === "Politically Exposed Person") {
        form.getCheckBox(`${holderArray[i - 1]}PEP`).check();
      } else if (politicalInfo === "Related to Politically Exposed Person") {
        form.getCheckBox(`${holderArray[i - 1]}RPEP`).check();
      }
    }
  }

  if (kycApplicationFormSecondPageDetails !== null) {
    if (
      kycApplicationFormSecondPageDetails["primaryAccountType"] === "saving"
    ) {
      form.getCheckBox("primarySavingAccount").check();
      form.getCheckBox("primaryBankProof").check();
    } else if (
      kycApplicationFormSecondPageDetails["primaryAccountType"] === "current"
    ) {
      form.getCheckBox("primaryCurrentAccount").check();
      form.getCheckBox("primaryBankProof").check();
    } else {
      form.getCheckBox("primaryOtherAccount").check();
      form.getCheckBox("primaryBankProof").check();
    }
    form
      .getTextField("primaryBankAccountNo")
      .setText(
        kycApplicationFormSecondPageDetails[
          "primaryBankAccountNo"
        ].toUpperCase()
      );

    form
      .getTextField("primaryBankName")
      .setText(
        kycApplicationFormSecondPageDetails["primaryBankName"].toUpperCase()
      );

    form
      .getTextField("primaryBranchAddress")
      .setText(
        kycApplicationFormSecondPageDetails[
          "primaryBranchAddress"
        ].toUpperCase()
      );

    form
      .getTextField("primaryMicrCode")
      .setText(
        kycApplicationFormSecondPageDetails["primaryMicrCode"].toUpperCase()
      );

    form
      .getTextField("primaryIfscCode")
      .setText(
        kycApplicationFormSecondPageDetails["primaryIfscCode"].toUpperCase()
      );

    form
      .getTextField("primaryUpiId")
      .setText(
        kycApplicationFormSecondPageDetails["primaryUpiId"].toUpperCase()
      );

    if (
      kycApplicationFormSecondPageDetails["secondaryAccountType"] === "saving"
    ) {
      form.getCheckBox("secondarySavingAccount").check();
      form.getCheckBox("secondaryBankProof").check();
    } else if (
      kycApplicationFormSecondPageDetails["secondaryAccountType"] === "current"
    ) {
      form.getCheckBox("secondaryCurrentAccount").check();
      form.getCheckBox("secondaryBankProof").check();
    } else {
      form.getCheckBox("secondaryOtherAccount").check();
      form.getCheckBox("secondaryBankProof").check();
    }

    form
      .getTextField("secondaryBankAccountNo")
      .setText(
        kycApplicationFormSecondPageDetails[
          "secondaryBankAccountNo"
        ].toUpperCase()
      );

    form
      .getTextField("secondaryBankName")
      .setText(
        kycApplicationFormSecondPageDetails["secondaryBankName"].toUpperCase()
      );

    form
      .getTextField("secondaryBranchAddress")
      .setText(
        kycApplicationFormSecondPageDetails[
          "secondaryBranchAddress"
        ].toUpperCase()
      );

    form
      .getTextField("secondaryMicrCode")
      .setText(
        kycApplicationFormSecondPageDetails["secondaryMicrCode"].toUpperCase()
      );

    form
      .getTextField("secondaryIfscCode")
      .setText(
        kycApplicationFormSecondPageDetails["secondaryIfscCode"].toUpperCase()
      );

    form
      .getTextField("secondaryUpiId")
      .setText(kycApplicationFormSecondPageDetails["secondaryUpiId"]);

    if (kycApplicationFormSecondPageDetails["contractOption"] === "Physical") {
      form.getCheckBox("physicalContractNote").check();
    } else {
      form.getCheckBox("electronicContractNote").check();
    }

    form
      .getTextField("electronicEmailId")
      .setText(
        kycApplicationFormSecondPageDetails["electronicEmailId"].toUpperCase()
      );

    if (
      kycApplicationFormSecondPageDetails["internetTradingOption"] === "Yes"
    ) {
      form.getCheckBox("internetTradingYes").check();
    } else {
      form.getCheckBox("internetTradingNo").check();
    }

    form
      .getTextField("tradingExperience")
      .setText(
        kycApplicationFormSecondPageDetails["tradingExperience"].toUpperCase()
      );

    let totalPartners = localStorage.getItem("totalPartners");
    let partnersArray = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
    ];

    for (let i = 1; i <= totalPartners; i++) {
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonName`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonName`
          ].toUpperCase()
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonAddress`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonAddress`
          ].toUpperCase()
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonDesignation`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonDesignation`
          ].toUpperCase()
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonPan`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonPan`
          ].toUpperCase()
        );
      form
        .getTextField(
          `company${partnersArray[i - 1]}RelatedPersonContactNumber`
        )
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonContactNumber`
          ].toUpperCase()
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonDob`)
        .setText(
          formatDate(
            kycApplicationFormSecondPageDetails[
              `company${partnersArray[i - 1]}RelatedPersonDob`
            ].toUpperCase()
          )
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonDinUid`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonDinUid`
          ].toUpperCase()
        );
      form
        .getTextField(`company${partnersArray[i - 1]}RelatedPersonAadhar`)
        .setText(
          kycApplicationFormSecondPageDetails[
            `company${partnersArray[i - 1]}RelatedPersonAadhar`
          ].toUpperCase()
        );

      if (
        kycApplicationFormSecondPageDetails[
          `political${partnersArray[i - 1]}RelationPepRpep`
        ] === "Yes"
      ) {
        form.getCheckBox(`${partnersArray[i - 1]}politicalYes`).check();
      } else if (
        kycApplicationFormSecondPageDetails[
          `political${partnersArray[i - 1]}RelationPepRpep`
        ] === "No"
      ) {
        form.getCheckBox(`${partnersArray[i - 1]}politicalNo`).check();
      }
    }
  }

  if (acknowledgementDetails !== null) {
    form.getCheckBox("optionSecond").check();
    form
      .getTextField("memberName2")
      .setText(companyDetails["companyName"].toUpperCase());

    form
      .getTextField("firstSoleHolderName")
      .setText(companyDetails["companyName"].toUpperCase());

    form
      .getTextField("mobileForAlert")
      .setText(companyDetails["companyPhoneNumber"]);
    form.getCheckBox("trustNo").check();
    form.getCheckBox("schemeB").check();

  }

  if (fatcaPartOneDetails !== null) {
    if (fatcaPartOneDetails["settlementTimePeriod"] === "90 Days") {
      form.getCheckBox("90Days").check();
    } else {
      form.getCheckBox("30Days").check();
    }

    form
      .getTextField("fatcaApplicantName")
      .setText(companyDetails["companyName"].toUpperCase());

    if (fatcaPartOneDetails["QuesAOptions"] === "Yes") {
      form.getCheckBox("optionAYes").check();
      form
        .getTextField("listedCompanyName")
        .setText(fatcaPartOneDetails["listedCompanyName"].toUpperCase());
    } else {
      form.getCheckBox("optionANo").check();
    }

    if (fatcaPartOneDetails["QuesBOptions"] === "Yes") {
      form.getCheckBox("optionBYes").check();
    } else {
      form.getCheckBox("optionBNo").check();
    }

    if (fatcaPartOneDetails["QuesCOptions"] === "Yes") {
      form.getCheckBox("optionCYes").check();
      form
        .getTextField("giinNumberFatca")
        .setText(fatcaPartOneDetails["giinNumber"].toUpperCase());
    } else {
      form.getCheckBox("optionCNo").check();
    }

    if (fatcaPartOneDetails["QuesDOptions"] === "Yes") {
      form.getCheckBox("optionDYes").check();
    } else {
      form.getCheckBox("optionDNo").check();
    }
    form
      .getTextField("companyNameFatca")
      .setText(companyDetails["companyName"].toUpperCase());
  }

  // if (fatcaPartTwoDetails !== null) {
  //   // section1
  //   form
  //     .getTextField("EntityName")
  //     .setText(fatcaPartTwoDetails["EntityName"].toUpperCase());

  //   form
  //     .getTextField("customerId")
  //     .setText(fatcaPartTwoDetails["customerId"].toUpperCase());

  //   form
  //     .getTextField("entityConsitutionType")
  //     .setText(
  //       fatcaPartTwoDetails["entityConsitutionType"].toUpperCase().toUpperCase()
  //     );

  //   if (fatcaPartTwoDetails["entityIdentificationType"] === "TIN") {
  //     form.getCheckBox("TIN").check();
  //   } else if (fatcaPartTwoDetails["entityIdentificationType"] === "US_GIIN") {
  //     form.getCheckBox("US_GIIN").check();
  //   } else if (fatcaPartTwoDetails["entityIdentificationType"] === "CIN") {
  //     form.getCheckBox("CIN").check();
  //   } else if (fatcaPartTwoDetails["entityIdentificationType"] === "EIN") {
  //     form.getCheckBox("EIN").check();
  //   } else {
  //     form.getCheckBox("otherEIT").check();
  //   }

  //   form
  //     .getTextField("entityIdentificationNumber")
  //     .setText(fatcaPartTwoDetails["entityIdentificationNumber"].toUpperCase());

  //   form
  //     .getTextField("entityIdentificationIssuingCountry")
  //     .setText(
  //       fatcaPartTwoDetails["entityIdentificationIssuingCountry"].toUpperCase()
  //     );

  //   form
  //     .getTextField("countryOfResidence")
  //     .setText(fatcaPartTwoDetails["countryOfResidence"].toUpperCase());

  //   // section2
  //   if (fatcaPartTwoDetails["USTaxable"] === "Yes") {
  //     form.getCheckBox("USTaxableYes").check();
  //     form
  //       .getTextField("taxpayerIdentificationNumber")
  //       .setText(
  //         fatcaPartTwoDetails["taxpayerIdentificationNumber"].toUpperCase()
  //       );
  //   } else {
  //     form.getCheckBox("USTaxableNo").check();
  //   }

  //   if (fatcaPartTwoDetails["otherCountryTaxable"] === "Yes") {
  //     form.getCheckBox("otherCountryTaxableYes").check();
  //   } else {
  //     form.getCheckBox("otherCountryTaxableNo").check();
  //   }
  //   form
  //     .getTextField("tinIssuingCountry")
  //     .setText(fatcaPartTwoDetails["tinIssuingCountry"].toUpperCase());

  //   if (fatcaPartTwoDetails["additionalDetailOfUSPerson"] === "Active NFFE") {
  //     form.getCheckBox("activeNffe").check();
  //   } else if (
  //     fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
  //     "Passive NFFE without any controlling Person"
  //   ) {
  //     form.getCheckBox("passiveNffeWithoutControlPerson").check();
  //   } else if (
  //     fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
  //     "Passive NFFE with controlling Person"
  //   ) {
  //     form.getCheckBox("passiveNffeWithControlPerson").check();
  //     if (fatcaPartTwoDetails["USCountry"] == "USCountryYes") {
  //       form.getCheckBox("USCountryYes").check();
  //     } else {
  //       form.getCheckBox("USCountryNo").check();
  //     }
  //   } else if (
  //     fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
  //     "Direct Reporting NFFE"
  //   ) {
  //     form.getCheckBox("directNffe").check();
  //   }
  //   form
  //     .getTextField("giinNumberFatcaTwo")
  //     .setText(fatcaPartTwoDetails["GIINNumber"].toUpperCase());

  //   // section3
  //   if (
  //     fatcaPartTwoDetails["USFinancialInstitute"] === "USFinancialInstituteYes"
  //   ) {
  //     form.getCheckBox("USFinancialInstituteYes").check();
  //     form
  //       .getTextField("entityTaxpayerIdentificationNumber")
  //       .setText(
  //         fatcaPartTwoDetails[
  //           "entityTaxpayerIdentificationNumber"
  //         ].toUpperCase()
  //       );

  //     form
  //       .getTextField("usFinancialInstituteGiinNumber")
  //       .setText(
  //         fatcaPartTwoDetails["usFinancialInstituteGiinNumber"].toUpperCase()
  //       );
  //   } else {
  //     form.getCheckBox("USFinancialInstituteNo").check();
  //     if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel1") {
  //       form.getCheckBox("iga1").check();
  //       form
  //         .getTextField("igaModel1")
  //         .setText(fatcaPartTwoDetails["igaModel1"].toUpperCase());
  //     } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel2") {
  //       form.getCheckBox("iga2").check();
  //       form
  //         .getTextField("igaModel2")
  //         .setText(fatcaPartTwoDetails["igaModel2"]);
  //     } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "ffi") {
  //       form.getCheckBox("nonIgaFfi").check();
  //       form
  //         .getTextField("ffi")
  //         .setText(fatcaPartTwoDetails["ffi"].toUpperCase());
  //     } else if (
  //       fatcaPartTwoDetails["fatcaNoClassification"] === "nonReportingFi"
  //     ) {
  //       form.getCheckBox("nonFi").check();
  //       form
  //         .getTextField("nonReportingFi")
  //         .setText(fatcaPartTwoDetails["nonReportingFi"].toUpperCase());
  //     } else if (
  //       fatcaPartTwoDetails["fatcaNoClassification"] === "nonParticipatingFi"
  //     ) {
  //       form.getCheckBox("nonPartFi").check();
  //       form
  //         .getTextField("nonParticipatingFi")
  //         .setText(fatcaPartTwoDetails["nonParticipatingFi"].toUpperCase());
  //     } else {
  //       form.getCheckBox("ownerDocumentedFi").check();
  //       form
  //         .getTextField("ownerDocumented")
  //         .setText(fatcaPartTwoDetails["ownerDocumented"].toUpperCase());
  //     }
  //   }

  //   // section4
  //   form
  //     .getTextField("controllingPersonName")
  //     .setText(fatcaPartTwoDetails["controllingPersonName"].toUpperCase());

  //   form
  //     .getTextField("controllingPersonCorrespondenceAddress")
  //     .setText(
  //       fatcaPartTwoDetails[
  //         "controllingPersonCorrespondenceAddress"
  //       ].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonResidenceCountry")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonResidenceCountry"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonTin")
  //     .setText(fatcaPartTwoDetails["controllingPersonTin"].toUpperCase());

  //   form
  //     .getTextField("controllingPersonTinIssuingCountry")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonTinIssuingCountry"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonType")
  //     .setText(fatcaPartTwoDetails["controllingPersonType"].toUpperCase());

  //   form
  //     .getTextField("controllingPersonIdenticationType")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonIdenticationType"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonIdentificationNumber")
  //     .setText(
  //       fatcaPartTwoDetails[
  //         "controllingPersonIdentificationNumber"
  //       ].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonOccupationType")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonOccupationType"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonOccupation")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonOccupation"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonDob")
  //     .setText(formatDate(fatcaPartTwoDetails["controllingPersonDob"]));

  //   form
  //     .getTextField("controllingPersonNationality")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonNationality"].toUpperCase()
  //     );

  //   form
  //     .getTextField("controllingPersonBirthCountry")
  //     .setText(
  //       fatcaPartTwoDetails["controllingPersonBirthCountry"].toUpperCase()
  //     );

  //   // section5
  //   form
  //     .getTextField("name")
  //     .setText(fatcaPartTwoDetails["name"].toUpperCase());

  //   form
  //     .getTextField("signingDate")
  //     .setText(formatDate(fatcaPartTwoDetails["signingDate"]));
  // }

  form
    .getTextField("declarationDate1")
    .setText(new Date().toLocaleDateString("en-GB"));
  form
    .getTextField("declarationDate2")
    .setText(new Date().toLocaleDateString("en-GB"));
  form
    .getTextField("declarationDate3")
    .setText(new Date().toLocaleDateString("en-GB"));
  form
    .getTextField("declarationDate4")
    .setText(new Date().toLocaleDateString("en-GB"));
  form
    .getTextField("declarationPlace1")
    .setText(localStorage.getItem("declarationPlace").toUpperCase());
  form
    .getTextField("declarationPlace2")
    .setText(localStorage.getItem("declarationPlace").toUpperCase());
  form
    .getTextField("declarationPlace3")
    .setText(localStorage.getItem("declarationPlace").toUpperCase());
  form
    .getTextField("declarationPlace4")
    .setText(localStorage.getItem("declarationPlace").toUpperCase());
  form.getCheckBox("nonIndividualBodyCorporate").check();

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  // Create a Blob from the bytes
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "kyc_trading_form.pdf";
  link.click();

  // Redirect to the next page
  // window.location.href = "2_relatedPersonDetails.html";

  const corporatePdfDocuments = JSON.parse(
    sessionStorage.getItem("corporatePdfDocuments")
  );

  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const fileData of corporatePdfDocuments) {
    
    // Extract the base64 data part
    const base64 = fileData.data.split(",")[1];
    const pdfBytes = base64ToArrayBuffer(base64);

    const pdf = await PDFLib.PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }
  const combinedPdfBytes = await mergedPdf.save();
  const blobPdf = new Blob([combinedPdfBytes], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(blobPdf);

  const pdfLink = document.createElement("a");
  pdfLink.href = pdfUrl;
  pdfLink.download = "allCorporateDocuments.pdf";
  pdfLink.click();
});

function formatDate(dateString) {
  // Split the date string into components [yyyy, mm, dd]
  const parts = dateString.split("-");

  // Rearrange the components to [dd, mm, yyyy]
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

window.onload = function () {
  const corporatePdfDocuments = JSON.parse(
    sessionStorage.getItem("corporatePdfDocuments")
  );

  if (corporatePdfDocuments && corporatePdfDocuments.length > 0) {
    const previewContainer = document.getElementById("documentPreview");

    corporatePdfDocuments.forEach((fileData) => {

      // Display based on file type
      const iframe = document.createElement("iframe");
      iframe.src = fileData.data;
      iframe.width = "30%";
      iframe.height = "400px";
      iframe.style.paddingTop = "10px";
      iframe.style.paddingBottom = "10px";
      previewContainer.appendChild(iframe);
    });
  }
};
