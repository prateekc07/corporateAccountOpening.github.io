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
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" required>
                    </div>
                  
                    <div class="mr-5 mt-2">
                      <label for="${holderArray[count]}NetWorthDate" class="block text-sm text-gray-700 font-semibold my-1 pl-1">As on (Date)</label>
                      <input type="date" name="${holderArray[count]}NetWorthDate" id="${holderArray[count]}NetWorthDate" max=""
                        class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="politicalRelation">
                  <label class="block font-semibold text-gray-700">2. Please Tick (if applicable)</label>
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
  event.preventDefault(); // Prevent form submission

  const isFirstChecked = document.querySelector(
    'input[name="FirstincomeRange"]:checked'
  );

  if (!isFirstChecked) {
    // Prevent form submission if no radio button is selected
    alert("Please select Gross Annual Income");
    return;
  }

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

  let nsdl = document.getElementById("nsdl");
  let cdsl = document.getElementById("cdsl");

  if (kycApplicationFormFirstPageDetail !== null) {

    if (
      kycApplicationFormFirstPageDetail["nsdlCdslOption"] ===
      "National Securities Depository Limited"
    ) {
      nsdl.checked = true;
    } else {
      cdsl.checked = true;
    }
  }
}
