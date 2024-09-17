let llpDocuments = [];

let llpDocumentUploadForm = document.getElementById("llpDocumentUploadForm");

llpDocumentUploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Loop through all the file input elements
  for (let i = 1; i <= 16; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      llpDocuments.push(fileInput.files[0]);
    }
  }

  const llpPdfDocuments = [];

  llpDocuments.forEach((file, index) => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        const fileData = {
          name: file.name,
          type: file.type,
          data: e.target.result,
        };

        llpPdfDocuments.push(fileData);

        // Once all files are processed, store the data and navigate
        if (llpPdfDocuments.length === llpDocuments.length) {
          sessionStorage.setItem(
            "llpPdfDocuments",
            JSON.stringify(llpPdfDocuments)
          );
          // Redirect to the next page
          window.location.href = "9_corporateAccountPreviewPage.html";
        }
      };
      fileReader.readAsDataURL(file);
    }
  });
});
