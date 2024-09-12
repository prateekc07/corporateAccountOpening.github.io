let corporateDocuments = [];

let corporateDocumentUploadForm = document.getElementById(
  "corporateDocumentUploadForm"
);

corporateDocumentUploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Loop through all the file input elements
  for (let i = 1; i <= 13; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      corporateDocuments.push(fileInput.files[0]);
    }
  }

  const corporatePdfDocuments = [];

  corporateDocuments.forEach((file, index) => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        const fileData = {
          name: file.name,
          type: file.type,
          data: e.target.result,
        };

        corporatePdfDocuments.push(fileData);

        // Once all files are processed, store the data and navigate
        if (corporatePdfDocuments.length === corporateDocuments.length) {
          sessionStorage.setItem(
            "corporatePdfDocuments",
            JSON.stringify(corporatePdfDocuments)
          );
          // Redirect to the next page
          window.location.href = "9_corporateAccountPreviewPage.html";
        }
      };
      fileReader.readAsDataURL(file);
    }
  });
});