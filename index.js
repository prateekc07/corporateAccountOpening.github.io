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
