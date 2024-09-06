let corporateDocuments = {};

let corporateDocumentUploadForm = document.getElementById("corporateDocumentUploadForm");

corporateDocumentUploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Loop through all the file input elements
  for (let i = 1; i <= 13; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      corporateDocuments[`file${i}`] = fileInput.files[0];
    }
  }

 localStorage.setItem("corporateDocuments", JSON.stringify(corporateDocuments));
 console.log(JSON.parse(localStorage.getItem("corporateDocuments")));

  // Redirect to the next page
  window.location.href = "9_corporateAccountPreviewPage.html";
});