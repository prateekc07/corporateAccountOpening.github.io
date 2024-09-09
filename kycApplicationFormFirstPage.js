let anotherAccountHolderBtn = document.querySelector(".addAnotherHolderButton");
let holderArray = [
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
let count = 0;
anotherAccountHolderBtn.addEventListener("click", (e) => {
  let otherDetailsValueBox = document.querySelector(".otherDetailsValues");
  let anotherHolderDiv = document.createElement("div");
  anotherHolderDiv.innerHTML = `
    <div class="${holderArray[count]}HolderOtherDetails mt-5 text-lg text-blue-800 font-semibold">${holderArray[count]} Holder</div>
            <div class="details">
              <div class="grossAnnualIncome flex items-center justify-between">
                <div>
                  <label class="block font-semibold text-gray-700">1. Gross Annual Income</label>
                  <div class="incomeRanges flex items-center mt-2">
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}incomeRange" value="Below 1Lac" id="${holderArray[count]}belowOneLakh" class="size-4 mr-2">
                      <label for="${holderArray[count]}belowOneLakh" class="font-semibold text-gray-800">Below 1Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}incomeRange" value="1-5Lac" id="${holderArray[count]}oneToFiveLakh" class="size-4 mr-2">
                      <label for="${holderArray[count]}oneToFiveLakh" class="font-semibold text-gray-800">1-5Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}incomeRange" value="5-10Lac" id="${holderArray[count]}fiveToTenLakh" class="size-4 mr-2">
                      <label for="${holderArray[count]}fiveToTenLakh" class="font-semibold text-gray-800">5-10Lac</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}incomeRange" value="10-25Lac" id="${holderArray[count]}tenToTwentyFiveLakh" class="size-4 mr-2">
                      <label for="${holderArray[count]}tenToTwentyFiveLakh" class="font-semibold text-gray-800">10-25Lac</label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" name="${holderArray[count]}incomeRange" value="Above 25Lac" id="${holderArray[count]}aboveTwentyFiveLakh" class="size-4 mr-2">
                      <label for="${holderArray[count]}aboveTwentyFiveLakh" class="font-semibold text-gray-800">Above 25Lac</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block font-semibold text-gray-700">Net Worth (Not older than 1 year)</label>
                  <div class="${holderArray[count]}NetWorth flex">
                    <div class="mr-5 mt-2">
                      <label for="${holderArray[count]}NetWorthAmount" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Amount</label>
                      <input type="text" name="${holderArray[count]}NetWorthAmount" id="${holderArray[count]}NetWorthAmount"
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10">
                    </div>
                  
                    <div class="mr-5 mt-2">
                      <label for="${holderArray[count]}NetWorthDate" class="block text-sm text-gray-700 font-semibold my-1 pl-1">As on (Date)</label>
                      <input type="date" name="${holderArray[count]}NetWorthDate" id="${holderArray[count]}NetWorthDate" max=""
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="occupation flex">
                  <div class="mr-5 mt-2">
                    <label for="${holderArray[count]}occupationType" class="block text-sm text-gray-700 font-semibold my-1 pl-1">3. Occupation</label>
                    <select name="${holderArray[count]}occupationType" id="${holderArray[count]}occupationType"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-56 h-10">
                      <option value="" selected disabled>Type Selection</option>
                      <option value="Private Sector">Private Sector</option>
                      <option value="Public Sector">Public Sector</option>
                      <option value="Govt. Service">Govt. Service</option>
                      <option value="Bussiness">Bussiness</option>
                      <option value="Professional">Professional</option>
                      <option value="Agriculturist">Agriculturist</option>
                      <option value="Retired">Retired</option>
                      <option value="Housewife">Housewife</option>
                      <option value="Student">Student</option>
                      <option value="Forex Dealer">Forex Dealer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="politicalRelation ml-8">
                  <label class="block font-semibold text-gray-700">4. Please Tick (if applicable)</label>
                  <div class="${holderArray[count]}PoliticalDetails flex items-center mt-2">
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}PoliticalInfo" value="Politically Exposed Person" id="${holderArray[count]}PEP" class="size-4 mr-2">
                      <label for="${holderArray[count]}PEP" class="font-semibold text-gray-800">Politically Exposed Person</label>
                    </div>
                    <div class="flex items-center mr-5">
                      <input type="radio" name="${holderArray[count]}PoliticalInfo" value="Related to Politically Exposed Person" id="${holderArray[count]}RPEP" class="size-4 mr-2">
                      <label for="${holderArray[count]}RPEP" class="font-semibold text-gray-800">Related to Politically Exposed Person</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  count++;
  otherDetailsValueBox.appendChild(anotherHolderDiv);
});

let kycApplicationFormFirstPageDetails = {};
let kycApplicationFormFirstPageForm = document.querySelector(
  "#kycApplicationFormFirstPageForm"
);

kycApplicationFormFirstPageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kycApplicationFormFirstPageFormData = new FormData(event.target);
  kycApplicationFormFirstPageFormData.forEach((value, key) => {
    kycApplicationFormFirstPageDetails[key] = value;
  });

  localStorage.setItem(
    "kycApplicationFormFirstPageDetails",
    JSON.stringify(kycApplicationFormFirstPageDetails)
  );
  localStorage.setItem("totalHolders", totalHolders);
  console.log(
    JSON.parse(localStorage.getItem("kycApplicationFormFirstPageDetails"))
  );

  // Redirect to the next page
  window.location.href = "4_kycApplicationFormSecondPage.html";
});

let totalHolders = 1;

function addHolder() {
  totalHolders++;
}

document.addEventListener("DOMContentLoaded", () => {
  getkycApplicationFormFirstPageDetail();
});

function getkycApplicationFormFirstPageDetail() {
  let kycApplicationFormFirstPageDetail = JSON.parse(
    localStorage.getItem("kycApplicationFormFirstPageDetails")
  );
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

  if (kycApplicationFormFirstPageDetail !== null) {

    applicantName.value = kycApplicationFormFirstPageDetail["applicantName"];

    incorporationDate.value =
      kycApplicationFormFirstPageDetail["incorporationDateKyc"];

    incorporationPlace.value =
      kycApplicationFormFirstPageDetail["incorporationPlaceKyc"];

    panNumber.value = kycApplicationFormFirstPageDetail["panNumber"];

    gstRegistration.value =
      kycApplicationFormFirstPageDetail["gstRegistrationKyc"];

    bussinessCommenceDate.value =
      kycApplicationFormFirstPageDetail["bussinessCommenceDateKyc"];

    companyType.value = kycApplicationFormFirstPageDetail["companyType"];

    correspondenceAddress.value =
      kycApplicationFormFirstPageDetail["correspondenceAddress"];

    cityName.value = kycApplicationFormFirstPageDetail["cityName"];

    stateName.value = kycApplicationFormFirstPageDetail["stateName"];

    countryName.value = kycApplicationFormFirstPageDetail["countryName"];

    pinCode.value = kycApplicationFormFirstPageDetail["pinCode"];

    mobileNumber.value = kycApplicationFormFirstPageDetail["mobileNumber"];

    emailId.value = kycApplicationFormFirstPageDetail["emailId"];

    faxNumber.value = kycApplicationFormFirstPageDetail["faxNumber"];

    officeTelephone.value =
      kycApplicationFormFirstPageDetail["officeTelephone"];

    resTelephone.value = kycApplicationFormFirstPageDetail["resTelephone"];

    registeredAddress.value =
      kycApplicationFormFirstPageDetail["registeredAddress"];

    registeredCityName.value =
      kycApplicationFormFirstPageDetail["registeredCityName"];

    registeredStateName.value =
      kycApplicationFormFirstPageDetail["registeredStateName"];

    registeredCountryName.value =
      kycApplicationFormFirstPageDetail["registeredCountryName"];

    registeredPinCodeKyc.value =
      kycApplicationFormFirstPageDetail["registeredPinCodeKyc"];

    if (
      kycApplicationFormFirstPageDetail["nsdlCdslOption"] ===
      "National Securities Depository Limited"
    ) {
      nsdl.checked = true;
    } else {
      cdsl.checked = true;
    }

    firstHolderName.value =
      kycApplicationFormFirstPageDetail["firstHolderName"];

    firstHolderPanNumber.value =
      kycApplicationFormFirstPageDetail["firstHolderPanNumber"];

    secondHolderName.value =
      kycApplicationFormFirstPageDetail["secondHolderName"];

    secondHolderPanNumber.value =
      kycApplicationFormFirstPageDetail["secondHolderPanNumber"];

    thirdHolderName.value =
      kycApplicationFormFirstPageDetail["thirdHolderName"];

    thirdHolderPanNumber.value =
      kycApplicationFormFirstPageDetail["thirdHolderPanNumber"];
  }
}
