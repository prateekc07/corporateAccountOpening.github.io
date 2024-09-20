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

  let ecnClientMandateName = document.getElementById("ecnClientMandateName");
  let ecnClientEmail = document.getElementById("ecnClientEmail");
  let ecnClientName = document.getElementById("ecnClientName");
  let ecnClientAddress = document.getElementById("ecnClientAddress");
  let ecnClientPan = document.getElementById("ecnClientPan");
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

  if (acknowledgementDetail !== null) {
    ecnClientMandateName.value = acknowledgementDetail["ecnClientMandateName"];
    ecnClientEmail.value = acknowledgementDetail["ecnClientEmail"];
    ecnClientName.value = acknowledgementDetail["ecnClientName"];
    ecnClientAddress.value = acknowledgementDetail["ecnClientAddress"];
    ecnClientPan.value = acknowledgementDetail["ecnClientPan"];
    internetEmailId.value = acknowledgementDetail["internetEmailId"];
    internetApplicantName.value =
      acknowledgementDetail["internetApplicantName"];
    internetApplicantAddress.value =
      acknowledgementDetail["internetApplicantAddress"];
    internetApplicantMobileNumber.value =
      acknowledgementDetail["internetApplicantMobileNumber"];
    internetApplicantTelephoneNumber.value =
      acknowledgementDetail["internetApplicantTelephoneNumber"];
  }
}
