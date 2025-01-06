let accountTypeForm = document.getElementById("startPageForm");
let dematAccountType = {};

accountTypeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const accountType = new FormData(event.target);
  accountType.forEach((value, key) => {
    dematAccountType[key] = value;
  });

  localStorage.setItem(
    "dematAccountType",
    JSON.stringify(dematAccountType)
  );
  let dematAccount = JSON.parse(localStorage.getItem("dematAccountType"));
  console.log(dematAccount);

  if (Object.keys(dematAccount).length === 0) {
    return;
  }

  // Redirect to the next page
  window.location.href = "companyDetails.html";
});

let caSection = document.getElementById("corporateAccountSection");
let hufSection = document.getElementById("hufSection");
let llpSection = document.getElementById("llpSection");

function changeDocList(type) {
  if (type === "corporate") {
    caSection.style.display = "block";
    hufSection.style.display = "none";
    llpSection.style.display = "none";
  } else if (type === "huf") {
    caSection.style.display = "none";
    hufSection.style.display = "block";
    llpSection.style.display = "none";
  } else {
    caSection.style.display = "none";
    hufSection.style.display = "none";
    llpSection.style.display = "block";
  }
}