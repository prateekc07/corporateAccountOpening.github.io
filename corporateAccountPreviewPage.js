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
  getFatcaPartTwoDetails();
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

    if (companyDetails["addressProof"] === "Certificate of incorporation") {
      incorporationCertificate.checked = true;
    } else if (companyDetails["addressProof"] === "Registration Certificate") {
      registrationCertificate.checked = true;
    } else {
      otherDocuments.checked = true;
    }

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

    relatedPersonCount.value = companyDetails["relatedPersonCount"];
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
  let applicantName = document.getElementById("applicantName");
  let incorporationDate = document.getElementById("incorporationDateKyc");
  let incorporationPlace = document.getElementById("incorporationPlaceKyc");
  let panNumber = document.getElementById("panNumber");
  let gstRegistration = document.getElementById("gstRegistrationKyc");
  let bussinessCommenceDate = document.getElementById(
    "bussinessCommenceDateKyc"
  );
  let companyType = document.getElementById("companyType");
  let correspondenceAddress = document.getElementById("correspondenceAddress");
  let cityName = document.getElementById("cityName");
  let stateName = document.getElementById("stateName");
  let countryName = document.getElementById("countryName");
  let pinCode = document.getElementById("pinCode");
  let mobileNumber = document.getElementById("mobileNumber");
  let emailId = document.getElementById("emailId");
  let faxNumber = document.getElementById("faxNumber");
  let officeTelephone = document.getElementById("officeTelephone");
  let resTelephone = document.getElementById("resTelephone");

  let registeredAddress = document.getElementById("registeredAddress");
  let registeredCityName = document.getElementById("registeredCityName");
  let registeredStateName = document.getElementById("registeredStateName");
  let registeredCountryName = document.getElementById("registeredCountryName");
  let registeredPinCodeKyc = document.getElementById("registeredPinCodeKyc");
  let nsdl = document.getElementById("nsdl");
  let cdsl = document.getElementById("cdsl");

  let firstHolderName = document.getElementById("firstHolderName");
  let firstHolderPanNumber = document.getElementById("firstHolderPanNumber");
  let secondHolderName = document.getElementById("secondHolderName");
  let secondHolderPanNumber = document.getElementById("secondHolderPanNumber");
  let thirdHolderName = document.getElementById("thirdHolderName");
  let thirdHolderPanNumber = document.getElementById("thirdHolderPanNumber");

  if (kycApplicationFormFirstPageDetails !== null) {
    applicantName.value = kycApplicationFormFirstPageDetails["applicantName"];

    incorporationDate.value =
      kycApplicationFormFirstPageDetails["incorporationDateKyc"];

    incorporationPlace.value =
      kycApplicationFormFirstPageDetails["incorporationPlaceKyc"];

    panNumber.value = kycApplicationFormFirstPageDetails["panNumber"];

    gstRegistration.value =
      kycApplicationFormFirstPageDetails["gstRegistrationKyc"];

    bussinessCommenceDate.value =
      kycApplicationFormFirstPageDetails["bussinessCommenceDateKyc"];

    companyType.value = kycApplicationFormFirstPageDetails["companyType"];

    correspondenceAddress.value =
      kycApplicationFormFirstPageDetails["correspondenceAddress"];

    cityName.value = kycApplicationFormFirstPageDetails["cityName"];

    stateName.value = kycApplicationFormFirstPageDetails["stateName"];

    countryName.value = kycApplicationFormFirstPageDetails["countryName"];

    pinCode.value = kycApplicationFormFirstPageDetails["pinCode"];

    mobileNumber.value = kycApplicationFormFirstPageDetails["mobileNumber"];

    emailId.value = kycApplicationFormFirstPageDetails["emailId"];

    faxNumber.value = kycApplicationFormFirstPageDetails["faxNumber"];

    officeTelephone.value =
      kycApplicationFormFirstPageDetails["officeTelephone"];

    resTelephone.value = kycApplicationFormFirstPageDetails["resTelephone"];

    registeredAddress.value =
      kycApplicationFormFirstPageDetails["registeredAddress"];

    registeredCityName.value =
      kycApplicationFormFirstPageDetails["registeredCityName"];

    registeredStateName.value =
      kycApplicationFormFirstPageDetails["registeredStateName"];

    registeredCountryName.value =
      kycApplicationFormFirstPageDetails["registeredCountryName"];

    registeredPinCodeKyc.value =
      kycApplicationFormFirstPageDetails["registeredPinCodeKyc"];

    if (
      kycApplicationFormFirstPageDetails["nsdlCdslOption"] ===
      "National Securities Depository Limited"
    ) {
      nsdl.checked = true;
    } else {
      cdsl.checked = true;
    }

    firstHolderName.value =
      kycApplicationFormFirstPageDetails["firstHolderName"];

    firstHolderPanNumber.value =
      kycApplicationFormFirstPageDetails["firstHolderPanNumber"];

    secondHolderName.value =
      kycApplicationFormFirstPageDetails["secondHolderName"];

    secondHolderPanNumber.value =
      kycApplicationFormFirstPageDetails["secondHolderPanNumber"];

    thirdHolderName.value =
      kycApplicationFormFirstPageDetails["thirdHolderName"];

    thirdHolderPanNumber.value =
      kycApplicationFormFirstPageDetails["thirdHolderPanNumber"];

    let totalHolders = localStorage.getItem("totalHolders");
    let holderArray = [
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
                <div class="occupation flex">
                  <div class="mr-5 mt-2">
                    <label for="${
                      holderArray[i - 1]
                    }occupationType" class="block text-sm text-gray-700 font-semibold my-1 pl-1">3. Occupation</label>
                    <select name="${holderArray[i - 1]}occupationType" id="${
        holderArray[i - 1]
      }occupationType"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-56 h-10" value="${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ]
                      }" disabled>
                      <option value="" selected disabled>Type Selection</option>

                      <option value="Private Sector" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Private Sector"
                          ? "selected"
                          : ""
                      }>Private Sector</option>

                      <option value="Public Sector" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Public Sector"
                          ? "selected"
                          : ""
                      }>Public Sector</option>

                      <option value="Govt. Service" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Govt. Service"
                          ? "selected"
                          : ""
                      }>Govt. Service</option>

                      <option value="Bussiness" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Bussiness"
                          ? "selected"
                          : ""
                      }>Bussiness</option>

                      <option value="Professional" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Professional"
                          ? "selected"
                          : ""
                      }>Professional</option>

                      <option value="Agriculturist" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Agriculturist"
                          ? "selected"
                          : ""
                      }>Agriculturist</option>

                      <option value="Retired" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Retired"
                          ? "selected"
                          : ""
                      }>Retired</option>

                      <option value="Housewife" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Housewife"
                          ? "selected"
                          : ""
                      }>Housewife</option>

                      <option value="Student" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Student"
                          ? "selected"
                          : ""
                      }>Student</option>

                      <option value="Forex Dealer" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "Forex Dealer"
                          ? "selected"
                          : ""
                      }>Forex Dealer</option>

                      <option value="other" ${
                        kycApplicationFormFirstPageDetails !== null &&
                        kycApplicationFormFirstPageDetails[
                          holderArray[i - 1] + "occupationType"
                        ] === "other"
                          ? "selected"
                          : ""
                      }>Other</option>

                    </select>
                  </div>
                </div>
                <div class="politicalRelation ml-8">
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
  let optionFirst = document.getElementById("optionFirst");
  let memberName1 = document.getElementById("memberName1");
  let optionSecond = document.getElementById("optionSecond");
  let memberName2 = document.getElementById("memberName2");
  let firstSoleHolderName = document.getElementById("firstSoleHolderName");
  let secondJointHolderName = document.getElementById("secondJointHolderName");
  let thirdJointHolderName = document.getElementById("thirdJointHolderName");

  let mobileForAlert = document.getElementById("mobileForAlert");
  let textingOptionsByTrustYes = document.getElementById(
    "textingOptionsByTrustYes"
  );
  let textingOptionsByTrustNo = document.getElementById(
    "textingOptionsByTrustNo"
  );

  if (acknowledgementDetails !== null) {
    if (acknowledgementDetails["bookletOptions"] === "Option 1") {
      optionFirst.checked = true;
      memberName1.value = acknowledgementDetails["memberName1"];
    } else {
      optionSecond.checked = true;
      memberName2.value = acknowledgementDetails["memberName2"];
    }

    firstSoleHolderName.value = acknowledgementDetails["firstSoleHolderName"];

    secondJointHolderName.value =
      acknowledgementDetails["secondJointHolderName"];

    thirdJointHolderName.value = acknowledgementDetails["thirdJointHolderName"];

    mobileForAlert.value = acknowledgementDetails["mobileForAlert"];

    if (acknowledgementDetails["textingOptionsByTrust"] === "Yes") {
      textingOptionsByTrustYes.checked = true;
    } else {
      textingOptionsByTrustNo.checked = true;
    }
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

    if (companyDetails["addressProof"] === "Certificate of incorporation") {
      form.getCheckBox("incorporationCertificate").check();
    } else if (companyDetails["addressProof"] === "Registration Certificate") {
      form.getCheckBox("registrationCertificate").check();
    } else {
      form.getCheckBox("otherDocuments").check();
    }

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

    form
      .getTextField("relatedPersonCount")
      .setText(companyDetails["relatedPersonCount"].toUpperCase());
  }

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
  }

  if (kycApplicationFormFirstPageDetails !== null) {
    form
      .getTextField("applicantName")
      .setText(
        kycApplicationFormFirstPageDetails["applicantName"].toUpperCase()
      );

    form
      .getTextField("incorporationDateKyc")
      .setText(
        formatDate(kycApplicationFormFirstPageDetails["incorporationDateKyc"])
      );

    form
      .getTextField("incorporationPlaceKyc")
      .setText(
        kycApplicationFormFirstPageDetails[
          "incorporationPlaceKyc"
        ].toUpperCase()
      );

    form
      .getTextField("panNumberKyc")
      .setText(kycApplicationFormFirstPageDetails["panNumber"].toUpperCase());

    form
      .getTextField("gstRegistrationKyc")
      .setText(
        kycApplicationFormFirstPageDetails["gstRegistrationKyc"].toUpperCase()
      );

    form
      .getTextField("bussinessCommenceDateKyc")
      .setText(
        formatDate(
          kycApplicationFormFirstPageDetails[
            "bussinessCommenceDateKyc"
          ].toUpperCase()
        )
      );

    if (kycApplicationFormFirstPageDetails["companyType"] === "Pvt. Ltd. Co.") {
      form.getCheckBox("pvtLtd").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Public Ltd. Co."
    ) {
      form.getCheckBox("publicLtd").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Body Corporate"
    ) {
      form.getCheckBox("bodyCorporate").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Partnership"
    ) {
      form.getCheckBox("partnership").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Charities"
    ) {
      form.getCheckBox("charities").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "Bank") {
      form.getCheckBox("bank").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Society"
    ) {
      form.getCheckBox("society").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "Trust") {
      form.getCheckBox("trust").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] ===
      "Defence Establishment"
    ) {
      form.getCheckBox("defenceEstablishment").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "FII") {
      form.getCheckBox("fii").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "HUF") {
      form.getCheckBox("huf").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "AOP") {
      form.getCheckBox("aop").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] ===
      "Non Govt. Organisation"
    ) {
      form.getCheckBox("nonGovOrganisation").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "LLP") {
      form.getCheckBox("llp").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "FI") {
      form.getCheckBox("fi").check();
    } else if (kycApplicationFormFirstPageDetails["companyType"] === "BOI") {
      form.getCheckBox("boi").check();
    } else if (
      kycApplicationFormFirstPageDetails["companyType"] === "Government Body"
    ) {
      form.getCheckBox("govtBody").check();
    } else {
      form.getCheckBox("otherStatus").check();
    }
    form
      .getTextField("correspondenceAddress")
      .setText(
        kycApplicationFormFirstPageDetails[
          "correspondenceAddress"
        ].toUpperCase()
      );

    form
      .getTextField("cityName")
      .setText(kycApplicationFormFirstPageDetails["cityName"].toUpperCase());

    form
      .getTextField("stateName")
      .setText(kycApplicationFormFirstPageDetails["stateName"].toUpperCase());

    form
      .getTextField("countryName")
      .setText(kycApplicationFormFirstPageDetails["countryName"].toUpperCase());

    form
      .getTextField("pinCode")
      .setText(kycApplicationFormFirstPageDetails["pinCode"].toUpperCase());

    form
      .getTextField("mobileNumber")
      .setText(
        kycApplicationFormFirstPageDetails["mobileNumber"].toUpperCase()
      );

    form
      .getTextField("emailId")
      .setText(kycApplicationFormFirstPageDetails["emailId"].toUpperCase());

    form
      .getTextField("faxNumber")
      .setText(kycApplicationFormFirstPageDetails["faxNumber"].toUpperCase());

    form
      .getTextField("officeTelephone")
      .setText(
        kycApplicationFormFirstPageDetails["officeTelephone"].toUpperCase()
      );

    form
      .getTextField("resTelephone")
      .setText(
        kycApplicationFormFirstPageDetails["resTelephone"].toUpperCase()
      );

    form
      .getTextField("registeredAddress")
      .setText(
        kycApplicationFormFirstPageDetails["registeredAddress"].toUpperCase()
      );

    form
      .getTextField("registeredCityName")
      .setText(
        kycApplicationFormFirstPageDetails["registeredCityName"].toUpperCase()
      );

    form
      .getTextField("registeredStateName")
      .setText(
        kycApplicationFormFirstPageDetails["registeredStateName"].toUpperCase()
      );

    form
      .getTextField("registeredCountryName")
      .setText(
        kycApplicationFormFirstPageDetails[
          "registeredCountryName"
        ].toUpperCase()
      );

    form
      .getTextField("registeredPinCodeKyc")
      .setText(
        kycApplicationFormFirstPageDetails["registeredPinCodeKyc"].toUpperCase()
      );

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
      .setText(
        kycApplicationFormFirstPageDetails["firstHolderName"].toUpperCase()
      );

    form
      .getTextField("firstHolderPanNumber")
      .setText(
        kycApplicationFormFirstPageDetails["firstHolderPanNumber"].toUpperCase()
      );

    form
      .getTextField("secondHolderName")
      .setText(
        kycApplicationFormFirstPageDetails["secondHolderName"].toUpperCase()
      );

    form
      .getTextField("secondHolderPanNumber")
      .setText(
        kycApplicationFormFirstPageDetails[
          "secondHolderPanNumber"
        ].toUpperCase()
      );

    form
      .getTextField("thirdHolderName")
      .setText(
        kycApplicationFormFirstPageDetails["thirdHolderName"].toUpperCase()
      );

    form
      .getTextField("thirdHolderPanNumber")
      .setText(
        kycApplicationFormFirstPageDetails["thirdHolderPanNumber"].toUpperCase()
      );

    let totalHolders = localStorage.getItem("totalHolders");
    let holderArray = [
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

      let occupation =
        kycApplicationFormFirstPageDetails[
          `${holderArray[i - 1]}occupationType`
        ];
      if (occupation === "Private Sector") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}PrivateSector`)
          .check();
      } else if (occupation === "Public Sector") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}PublicSector`)
          .check();
      } else if (occupation === "Govt. Service") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}GovService`)
          .check();
      } else if (occupation === "Business") {
        form.getCheckBox(`${holderArray[i - 1].toLowerCase()}Business`).check();
      } else if (occupation === "Professional") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}Professional`)
          .check();
      } else if (occupation === "Agriculturist") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}Agriculturist`)
          .check();
      } else if (occupation === "Retired") {
        form.getCheckBox(`${holderArray[i - 1].toLowerCase()}Retired`).check();
      } else if (occupation === "Housewife") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}Housewife`)
          .check();
      } else if (occupation === "Student") {
        form.getCheckBox(`${holderArray[i - 1].toLowerCase()}Student`).check();
      } else if (occupation === "Forex Dealer") {
        form
          .getCheckBox(`${holderArray[i - 1].toLowerCase()}ForexDealer`)
          .check();
      } else {
        form.getCheckBox(`${holderArray[i - 1].toLowerCase()}Other`).check();
      }
    }
  }

  if (kycApplicationFormSecondPageDetails !== null) {
    if (
      kycApplicationFormSecondPageDetails["primaryAccountType"] === "saving"
    ) {
      form.getCheckBox("primarySavingAccount").check();
    } else if (
      kycApplicationFormSecondPageDetails["primaryAccountType"] === "current"
    ) {
      form.getCheckBox("primaryCurrentAccount").check();
    } else {
      form.getCheckBox("primaryOtherAccount").check();
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
      .setText(kycApplicationFormSecondPageDetails["primaryBranchAddress"].toUpperCase());

    form
      .getTextField("primaryMicrCode")
      .setText(kycApplicationFormSecondPageDetails["primaryMicrCode"].toUpperCase());

    form
      .getTextField("primaryIfscCode")
      .setText(kycApplicationFormSecondPageDetails["primaryIfscCode"].toUpperCase());

    form
      .getTextField("primaryUpiId")
      .setText(kycApplicationFormSecondPageDetails["primaryUpiId"].toUpperCase());

    if (
      kycApplicationFormSecondPageDetails["secondaryAccountType"] === "saving"
    ) {
      form.getCheckBox("secondarySavingAccount").check();
    } else if (
      kycApplicationFormSecondPageDetails["secondaryAccountType"] === "current"
    ) {
      form.getCheckBox("secondaryCurrentAccount").check();
    } else {
      form.getCheckBox("secondaryOtherAccount").check();
    }

    form
      .getTextField("secondaryBankAccountNo")
      .setText(kycApplicationFormSecondPageDetails["secondaryBankAccountNo"].toUpperCase());

    form
      .getTextField("secondaryBankName")
      .setText(kycApplicationFormSecondPageDetails["secondaryBankName"].toUpperCase());

    form
      .getTextField("secondaryBranchAddress")
      .setText(kycApplicationFormSecondPageDetails["secondaryBranchAddress"].toUpperCase());

    form
      .getTextField("secondaryMicrCode")
      .setText(kycApplicationFormSecondPageDetails["secondaryMicrCode"].toUpperCase());

    form
      .getTextField("secondaryIfscCode")
      .setText(kycApplicationFormSecondPageDetails["secondaryIfscCode"].toUpperCase());

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
      .setText(kycApplicationFormSecondPageDetails["electronicEmailId"].toUpperCase());

    if (
      kycApplicationFormSecondPageDetails["internetTradingOption"] === "Yes"
    ) {
      form.getCheckBox("internetTradingYes").check();
    } else {
      form.getCheckBox("internetTradingNo").check();
    }

    form
      .getTextField("tradingExperience")
      .setText(kycApplicationFormSecondPageDetails["tradingExperience"].toUpperCase());

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
    if (acknowledgementDetails["bookletOptions"] === "Option 1") {
      form.getCheckBox("optionFirst").check();
      form
        .getTextField("memberName1")
        .setText(acknowledgementDetails["memberName1"].toUpperCase());
    } else {
      form.getCheckBox("optionSecond").check();
      form
        .getTextField("memberName2")
        .setText(acknowledgementDetails["memberName2"].toUpperCase());
    }

    form
      .getTextField("firstSoleHolderName")
      .setText(acknowledgementDetails["firstSoleHolderName"].toUpperCase());

    form
      .getTextField("secondJointHolderName")
      .setText(acknowledgementDetails["secondJointHolderName"].toUpperCase());

    form
      .getTextField("thirdJointHolderName")
      .setText(acknowledgementDetails["thirdJointHolderName"].toUpperCase());

    form
      .getTextField("mobileForAlert")
      .setText(acknowledgementDetails["mobileForAlert"]);

    if (acknowledgementDetails["textingOptionsByTrust"] === "Yes") {
      form.getCheckBox("trustYes").check();
    } else {
      form.getCheckBox("trustNo").check();
    }
  }

  if (fatcaPartOneDetails !== null) {
    if (fatcaPartOneDetails["settlementTimePeriod"] === "90 Days") {
      form.getCheckBox("90Days").check();
    } else {
      form.getCheckBox("30Days").check();
    }

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

  if (fatcaPartTwoDetails !== null) {
    // section1
    form.getTextField("EntityName").setText(fatcaPartTwoDetails["EntityName"].toUpperCase());

    form.getTextField("customerId").setText(fatcaPartTwoDetails["customerId"].toUpperCase());

    form
      .getTextField("entityConsitutionType")
      .setText(fatcaPartTwoDetails["entityConsitutionType"].toUpperCase().toUpperCase());

    if (fatcaPartTwoDetails["entityIdentificationType"] === "TIN") {
      form.getCheckBox("TIN").check();
    } else if (fatcaPartTwoDetails["entityIdentificationType"] === "US_GIIN") {
      form.getCheckBox("US_GIIN").check();
    } else if (fatcaPartTwoDetails["entityIdentificationType"] === "CIN") {
      form.getCheckBox("CIN").check();
    } else if (fatcaPartTwoDetails["entityIdentificationType"] === "EIN") {
      form.getCheckBox("EIN").check();
    } else {
      form.getCheckBox("otherEIT").check();
    }

    form
      .getTextField("entityIdentificationNumber")
      .setText(fatcaPartTwoDetails["entityIdentificationNumber"].toUpperCase());

    form
      .getTextField("entityIdentificationIssuingCountry")
      .setText(fatcaPartTwoDetails["entityIdentificationIssuingCountry"].toUpperCase());

    form
      .getTextField("countryOfResidence")
      .setText(fatcaPartTwoDetails["countryOfResidence"].toUpperCase());

    // section2
    if (fatcaPartTwoDetails["USTaxable"] === "Yes") {
      form.getCheckBox("USTaxableYes").check();
      form
        .getTextField("taxpayerIdentificationNumber")
        .setText(fatcaPartTwoDetails["taxpayerIdentificationNumber"].toUpperCase());
    } else {
      form.getCheckBox("USTaxableNo").check();
    }

    if (fatcaPartTwoDetails["otherCountryTaxable"] === "Yes") {
      form.getCheckBox("otherCountryTaxableYes").check();
    } else {
      form.getCheckBox("otherCountryTaxableNo").check();
    }
    form
      .getTextField("tinIssuingCountry")
      .setText(fatcaPartTwoDetails["tinIssuingCountry"].toUpperCase());

    if (fatcaPartTwoDetails["additionalDetailOfUSPerson"] === "Active NFFE") {
      form.getCheckBox("activeNffe").check();
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Passive NFFE without any controlling Person"
    ) {
      form.getCheckBox("passiveNffeWithoutControlPerson").check();
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Passive NFFE with controlling Person"
    ) {
      form.getCheckBox("passiveNffeWithControlPerson").check();
      if (fatcaPartTwoDetails["USCountry"] == "USCountryYes") {
        form.getCheckBox("USCountryYes").check();
      } else {
        form.getCheckBox("USCountryNo").check();
      }
    } else if (
      fatcaPartTwoDetails["additionalDetailOfUSPerson"] ===
      "Direct Reporting NFFE"
    ) {
      form.getCheckBox("directNffe").check();
    }
    form
      .getTextField("giinNumberFatcaTwo")
      .setText(fatcaPartTwoDetails["GIINNumber"].toUpperCase());

    // section3
    if (
      fatcaPartTwoDetails["USFinancialInstitute"] === "USFinancialInstituteYes"
    ) {
      form.getCheckBox("USFinancialInstituteYes").check();
      form
        .getTextField("entityTaxpayerIdentificationNumber")
        .setText(fatcaPartTwoDetails["entityTaxpayerIdentificationNumber"].toUpperCase());

      form
        .getTextField("usFinancialInstituteGiinNumber")
        .setText(fatcaPartTwoDetails["usFinancialInstituteGiinNumber"].toUpperCase());
    } else {
      form.getCheckBox("USFinancialInstituteNo").check();
      if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel1") {
        form.getCheckBox("iga1").check();
        form
          .getTextField("igaModel1")
          .setText(fatcaPartTwoDetails["igaModel1"].toUpperCase());
      } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "igaModel2") {
        form.getCheckBox("iga2").check();
        form
          .getTextField("igaModel2")
          .setText(fatcaPartTwoDetails["igaModel2"]);
      } else if (fatcaPartTwoDetails["fatcaNoClassification"] === "ffi") {
        form.getCheckBox("nonIgaFfi").check();
        form.getTextField("ffi").setText(fatcaPartTwoDetails["ffi"].toUpperCase());
      } else if (
        fatcaPartTwoDetails["fatcaNoClassification"] === "nonReportingFi"
      ) {
        form.getCheckBox("nonFi").check();
        form
          .getTextField("nonReportingFi")
          .setText(fatcaPartTwoDetails["nonReportingFi"].toUpperCase());
      } else if (
        fatcaPartTwoDetails["fatcaNoClassification"] === "nonParticipatingFi"
      ) {
        form.getCheckBox("nonPartFi").check();
        form
          .getTextField("nonParticipatingFi")
          .setText(fatcaPartTwoDetails["nonParticipatingFi"].toUpperCase());
      } else {
        form.getCheckBox("ownerDocumentedFi").check();
        form
          .getTextField("ownerDocumented")
          .setText(fatcaPartTwoDetails["ownerDocumented"].toUpperCase());
      }
    }

    // section4
    form
      .getTextField("controllingPersonName")
      .setText(fatcaPartTwoDetails["controllingPersonName"].toUpperCase());

    form
      .getTextField("controllingPersonCorrespondenceAddress")
      .setText(fatcaPartTwoDetails["controllingPersonCorrespondenceAddress"].toUpperCase());

    form
      .getTextField("controllingPersonResidenceCountry")
      .setText(fatcaPartTwoDetails["controllingPersonResidenceCountry"].toUpperCase());

    form
      .getTextField("controllingPersonTin")
      .setText(fatcaPartTwoDetails["controllingPersonTin"].toUpperCase());

    form
      .getTextField("controllingPersonTinIssuingCountry")
      .setText(fatcaPartTwoDetails["controllingPersonTinIssuingCountry"].toUpperCase());

    form
      .getTextField("controllingPersonType")
      .setText(fatcaPartTwoDetails["controllingPersonType"].toUpperCase());

    form
      .getTextField("controllingPersonIdenticationType")
      .setText(fatcaPartTwoDetails["controllingPersonIdenticationType"].toUpperCase());

    form
      .getTextField("controllingPersonIdentificationNumber")
      .setText(fatcaPartTwoDetails["controllingPersonIdentificationNumber"].toUpperCase());

    form
      .getTextField("controllingPersonOccupationType")
      .setText(fatcaPartTwoDetails["controllingPersonOccupationType"].toUpperCase());

    form
      .getTextField("controllingPersonOccupation")
      .setText(fatcaPartTwoDetails["controllingPersonOccupation"].toUpperCase());

    form
      .getTextField("controllingPersonDob")
      .setText(formatDate(fatcaPartTwoDetails["controllingPersonDob"]));

    form
      .getTextField("controllingPersonNationality")
      .setText(fatcaPartTwoDetails["controllingPersonNationality"].toUpperCase());

    form
      .getTextField("controllingPersonBirthCountry")
      .setText(fatcaPartTwoDetails["controllingPersonBirthCountry"].toUpperCase());

    // section5
    form.getTextField("name").setText(fatcaPartTwoDetails["name"].toUpperCase());

    form
      .getTextField("signingDate")
      .setText(formatDate(fatcaPartTwoDetails["signingDate"]));
  }

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
});

function formatDate(dateString) {
  // Split the date string into components [yyyy, mm, dd]
  const parts = dateString.split("-");

  // Rearrange the components to [dd, mm, yyyy]
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}
