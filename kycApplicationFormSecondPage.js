let addAnotherRelatedPersonBtn = document.querySelector(
  ".addAnotherRelatedPersonBtn"
);

document.addEventListener("DOMContentLoaded", (event) => {
  let dematAccountType = JSON.parse(localStorage.getItem("dematAccountType"));
  console.log(dematAccountType);
  if (dematAccountType["dematAccountType"] === "HUF") {
    console.log(dematAccountType);
    document.querySelector(".addAnother").style.display = "none";
  }
});

let relatedPersonArray = [
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
addAnotherRelatedPersonBtn.addEventListener("click", (event) => {
  let companyRelatedPersonDetails = document.querySelector(
    ".companyRelatedPersonDetails"
  );
  let anotherRelatedPersonDiv = document.createElement("div");
  anotherRelatedPersonDiv.style.marginTop = "10vh";
  anotherRelatedPersonDiv.innerHTML = `
    <div class="flex flex-wrap">
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonName" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Name</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonName" id="company${relatedPersonArray[count]}RelatedPersonName"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonAddress" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Residential
                  Address</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonAddress" id="company${relatedPersonArray[count]}RelatedPersonAddress"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonDesignation"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">Designation</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonDesignation" id="company${relatedPersonArray[count]}RelatedPersonDesignation"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonPan" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Pan
                  Number</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonPan" id="company${relatedPersonArray[count]}RelatedPersonPan"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonContactNumber"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">Contact Number</label>
                <input type="tel" pattern="[0-9]*" name="company${relatedPersonArray[count]}RelatedPersonContactNumber" id="company${relatedPersonArray[count]}RelatedPersonContactNumber"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonDob" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Date
                  of Birth</label>
                <input type="date" name="company${relatedPersonArray[count]}RelatedPersonDob" id="company${relatedPersonArray[count]}RelatedPersonDob" max=""
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonDinUid"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">DIN/UID</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonDinUid" id="company${relatedPersonArray[count]}RelatedPersonDinUid"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonAadhar" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Aadhar
                  Number</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonAadhar" id="company${relatedPersonArray[count]}RelatedPersonAadhar"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
            </div>
  `;
  companyRelatedPersonDetails.appendChild(anotherRelatedPersonDiv);
  count++;
});

let kycApplicationFormSecondPageDetails = {};
let kycApplicationFormSecondPageForm = document.querySelector(
  "#kycApplicationFormSecondPageForm"
);

kycApplicationFormSecondPageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kycApplicationFormSecondPageFormData = new FormData(event.target);
  kycApplicationFormSecondPageFormData.forEach((value, key) => {
    kycApplicationFormSecondPageDetails[key] = value;
  });

  localStorage.setItem(
    "kycApplicationFormSecondPageDetails",
    JSON.stringify(kycApplicationFormSecondPageDetails)
  );
  localStorage.setItem("totalPartners", totalPartners);
  console.log(
    JSON.parse(localStorage.getItem("kycApplicationFormSecondPageDetails"))
  );

  // Redirect to the next page
  window.location.href = "5_acknowledgementDetails.html";
});

let totalPartners = 1;

function addAnotherPartner() {
  totalPartners++;
}

document.addEventListener("DOMContentLoaded", () => {
  getkycApplicationFormSecondPageDetail();
});

function getkycApplicationFormSecondPageDetail() {
  let kycApplicationFormSecondPageDetail = JSON.parse(
    localStorage.getItem("kycApplicationFormSecondPageDetails")
  );
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

  if (kycApplicationFormSecondPageDetail !== null) {
    primaryAccountType.value =
      kycApplicationFormSecondPageDetail["primaryAccountType"];
    primaryBankAccountNo.value =
      kycApplicationFormSecondPageDetail["primaryBankAccountNo"];

    primaryBankName.value =
      kycApplicationFormSecondPageDetail["primaryBankName"];

    primaryBranchAddress.value =
      kycApplicationFormSecondPageDetail["primaryBranchAddress"];

    primaryMicrCode.value =
      kycApplicationFormSecondPageDetail["primaryMicrCode"];

    primaryIfscCode.value =
      kycApplicationFormSecondPageDetail["primaryIfscCode"];

    primaryUpiId.value = kycApplicationFormSecondPageDetail["primaryUpiId"];

    secondaryAccountType.value =
      kycApplicationFormSecondPageDetail["secondaryAccountType"];

    secondaryBankAccountNo.value =
      kycApplicationFormSecondPageDetail["secondaryBankAccountNo"];

    secondaryBankName.value =
      kycApplicationFormSecondPageDetail["secondaryBankName"];

    secondaryBranchAddress.value =
      kycApplicationFormSecondPageDetail["secondaryBranchAddress"];

    secondaryMicrCode.value =
      kycApplicationFormSecondPageDetail["secondaryMicrCode"];

    secondaryIfscCode.value =
      kycApplicationFormSecondPageDetail["secondaryIfscCode"];

    secondaryUpiId.value = kycApplicationFormSecondPageDetail["secondaryUpiId"];

    if (kycApplicationFormSecondPageDetail["contractOption"] === "Physical") {
      physicalContractNote.checked = true;
    } else {
      electronicContractNote.checked = true;
    }

    electronicEmailId.value =
      kycApplicationFormSecondPageDetail["electronicEmailId"];

    if (kycApplicationFormSecondPageDetail["internetTradingOption"] === "Yes") {
      internetTradingOptionyes.checked = true;
    } else {
      internetTradingOptionno.checked = true;
    }

    tradingExperience.value =
      kycApplicationFormSecondPageDetail["tradingExperience"];
  }
}
