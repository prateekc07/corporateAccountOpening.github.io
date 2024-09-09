let acknowledgementDetails = {};
let acknowledgementDetailsForm = document.getElementById(
  "acknowledgementDetailsForm"
);

acknowledgementDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const acknowledgementDetailsFormData = new FormData(event.target);
  acknowledgementDetailsFormData.forEach((value, key) => {
    acknowledgementDetails[key] = value;
  });

  localStorage.setItem(
    "acknowledgementDetails",
    JSON.stringify(acknowledgementDetails)
  );
  console.log(JSON.parse(localStorage.getItem("acknowledgementDetails")));

  // Redirect to the next page
  window.location.href = "6_fatca.html";
});

document.addEventListener("DOMContentLoaded", () => {
  getacknowledgementDetail();
});

function getacknowledgementDetail() {
  let acknowledgementDetail = JSON.parse(
    localStorage.getItem("acknowledgementDetails")
  );
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

  if (acknowledgementDetail !== null) {
    if (acknowledgementDetail["bookletOptions"] === "Option 1") {
      optionFirst.checked = true;
      memberName1.value = acknowledgementDetail["memberName1"];
    } else {
      optionSecond.checked = true;
      memberName2.value = acknowledgementDetail["memberName2"];
    }

    firstSoleHolderName.value = acknowledgementDetail["firstSoleHolderName"];

    secondJointHolderName.value =
      acknowledgementDetail["secondJointHolderName"];

    thirdJointHolderName.value = acknowledgementDetail["thirdJointHolderName"];

    mobileForAlert.value = acknowledgementDetail["mobileForAlert"];

    if (acknowledgementDetail["textingOptionsByTrust"] === "Yes") {
      textingOptionsByTrustYes.checked = true;
    } else {
      textingOptionsByTrustNo.checked = true;
    }
  }
}
