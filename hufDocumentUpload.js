let hufDocuments = [];

let hufDocumentUploadForm = document.getElementById("hufDocumentUploadForm");

hufDocumentUploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Loop through all the file input elements
  for (let i = 1; i <= 11; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      hufDocuments.push(fileInput.files[0]);
    }
  }

  const hufPdfDocuments = [];

  hufDocuments.forEach((file, index) => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        const fileData = {
          name: file.name,
          type: file.type,
          data: e.target.result,
        };

        hufPdfDocuments.push(fileData);

        // Once all files are processed, store the data and navigate
        if (hufPdfDocuments.length === hufDocuments.length) {
          sessionStorage.setItem(
            "hufPdfDocuments",
            JSON.stringify(hufPdfDocuments)
          );
          // Redirect to the next page
          window.location.href = "9_corporateAccountPreviewPage.html";
        }
      };
      fileReader.readAsDataURL(file);
    }
  });
});