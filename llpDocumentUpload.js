let llpDocuments = [];

let llpDocumentUploadForm = document.getElementById("llpDocumentUploadForm");

llpDocumentUploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Loop through all the file input elements
  for (let i = 1; i <= 16; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      llpDocuments.push(fileInput.files[0]);
    }
  }

  const llpPdfDocuments = await Promise.all(
    llpDocuments.map((file) => {
      return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
          resolve({
            name: file.name,
            type: file.type,
            data: e.target.result,
          });
        };
        fileReader.readAsDataURL(file);
      });
    })
  );

  await downloadAllDocs(llpPdfDocuments);

  // Redirect to next page
  window.location.href = "9_corporateAccountPreviewPage.html";
});

async function downloadAllDocs(llpPdfDocuments) {
  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const fileData of llpPdfDocuments) {
    // Extract the base64 data part
    const base64 = fileData.data.split(",")[1];
    const pdfBytes = base64ToArrayBuffer(base64);

    const pdf = await PDFLib.PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const combinedPdfBytes = await mergedPdf.save();
  const blobPdf = new Blob([combinedPdfBytes], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(blobPdf);

  const pdfLink = document.createElement("a");
  pdfLink.href = pdfUrl;
  pdfLink.download = "allDocuments.pdf";
  pdfLink.click();
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

let docPreviewSectionMain = document.querySelector(".docPreviewSectionMain");
function showPreview(preview) {
  docPreviewSectionMain.style.display = "block";
  let docPreviewSection = document.querySelector(".docPreviewSection");
  const iframe = document.createElement("iframe");

  // Set attributes for the iframe
  if (preview === "ubo") iframe.src = "page36.pdf";
  else iframe.src = "page52.pdf";
  // Set the PDF source
  iframe.width = "300px"; // Set iframe width
  iframe.height = "446px"; // Set iframe height

  docPreviewSection.appendChild(iframe);
}

function removePreview(event) {
  document.querySelector(".docPreviewSection").innerHTML = "";
  docPreviewSectionMain.style.display = "none";
}

function showInfo(cardName) {
  let showCard = document.querySelector("." + cardName);
  showCard.style.display = "inline-block";
}

function closeInfo(cardName) {
  let hideCard = document.querySelector("." + cardName);
  hideCard.style.display = "none";
}