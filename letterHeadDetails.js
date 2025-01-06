let addAnotherRelatedPersonBtn = document.querySelector(
  ".addAnotherRelatedPersonBtn"
);
let count = 1;
addAnotherRelatedPersonBtn.addEventListener("click", (event) => {
  let companyRelatedPersonDetails = document.querySelector(
    ".companyRelatedPersonDetails"
  );
  let anotherRelatedPersonDiv = document.createElement("div");
  anotherRelatedPersonDiv.style.marginTop = "5vh";
  anotherRelatedPersonDiv.innerHTML = `
    <div class="flex flex-wrap">
                  <div class="mr-5 mt-2">
                    <label for="uboName${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">UBO Name</label>
                    <input type="text" name="uboName${count + 1}" id="uboName${
    count + 1
  }"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-80 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="taxResidencyCountry${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Tax Residency
                      Country</label>
                    <input type="text" name="taxResidencyCountry${
                      count + 1
                    }" id="taxResidencyCountry${count + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboTinPan${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">TIN / PAN</label>
                    <input type="text" name="uboTinPan${
                      count + 1
                    }" id="uboTinPan${count + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-64 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboBeneficialPercentage${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">% of Beneficial
                      Interest</label>
                    <input type="number" name="uboBeneficialPercentage${
                      count + 1
                    }" id="uboBeneficialPercentage${count + 1}" max=""
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboAddress${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Address</label>
                    <input type="text" name="uboAddress${
                      count + 1
                    }" id="uboAddress${count + 1}" max=""
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboGender${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Gender</label>
                    <select name="uboGender${count + 1}" id="uboGender${
    count + 1
  }"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-44 h-10">
                      <option value="" selected disabled>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboPep${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">PEP(Yes/No)</label>
                    <input type="text" name="uboPep${count + 1}" id="uboPep${
    count + 1
  }" max=""
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-24 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboNationality${
                      count + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Nationality</label>
                    <input type="text" name="uboNationality${
                      count + 1
                    }" id="uboNationality${count + 1}" max=""
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10"
                      required>
                  </div>
                
                  <div class="mr-5 mt-2">
                    <label for="uboOccupation${count + 1}"
                      class="block text-sm text-gray-700 font-semibold my-1 pl-1">Occupation(Service,Business,Other)</label>
                    <input type="text" name="uboOccupation${
                      count + 1
                    }" id="uboOccupation${count + 1}" max=""
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10"
                      required>
                  </div>
                </div>
  `;
  companyRelatedPersonDetails.appendChild(anotherRelatedPersonDiv);
  count++;
});

let addAnotherPartnerBtn = document.querySelector(".addAnotherPartnerBtn");
let partnerCount = 1;
addAnotherPartnerBtn.addEventListener("click", (event) => {
  let partnerDetails = document.querySelector(".partnerDetails");
  let anotherPartnerDiv = document.createElement("div");
  anotherPartnerDiv.style.marginTop = "5vh";
  anotherPartnerDiv.innerHTML = `
    <div class="flex flex-wrap">
                  <div class="mr-5 mt-2">
                    <label for="partnerName${
                      partnerCount + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Partner Name</label>
                    <input type="text" name="partnerName${
                      partnerCount + 1
                    }" id="partnerName${partnerCount + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-80 h-10"
                      required>
                  </div>
        
                  <div class="mr-5 mt-2">
                    <label for="partnerPan${
                      partnerCount + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">PAN</label>
                    <input type="text" name="partnerPan${
                      partnerCount + 1
                    }" id="partnerPan${partnerCount + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10"
                      required>
                  </div>
        
                  <div class="mr-5 mt-2">
                    <label for="partnerAddress${
                      partnerCount + 1
                    }" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Address</label>
                    <input type="text" name="partnerAddress${
                      partnerCount + 1
                    }" id="partnerAddress${partnerCount + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10"
                      required>
                  </div>
                </div>
  `;
  partnerDetails.appendChild(anotherPartnerDiv);
  partnerCount++;
});

let addAnotherAuthorizedPartnerBtn = document.querySelector(
  ".addAnotherAuthorizedPartnerBtn"
);
let authorizedCount = 1;
addAnotherAuthorizedPartnerBtn.addEventListener("click", (event) => {
  let authorizedPartnerDetails = document.querySelector(
    ".authorizedPartnerDetails"
  );
  let anotherPartnerDiv = document.createElement("div");
  anotherPartnerDiv.style.marginTop = "5vh";
  anotherPartnerDiv.innerHTML = `
    <div class="flex flex-wrap">
                  <div class="mr-5 mt-2">
                    <label for="authorizedPartner${authorizedCount + 1}" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Partner Name</label>
                    <input type="text" name="authorizedPartner${authorizedCount + 1}" id="authorizedPartner${authorizedCount + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10"
                      required>
                  </div>
        
                  <div class="mr-5 mt-2">
                    <label for="authorizedPartnerDesignation${authorizedCount + 1}" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Designation</label>
                    <input type="text" name="authorizedPartnerDesignation${authorizedCount + 1}" id="authorizedPartnerDesignation${authorizedCount + 1}"
                      class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-96 h-10"
                      required>
                  </div>
                </div>
  `;
  authorizedPartnerDetails.appendChild(anotherPartnerDiv);
  authorizedCount++;
});

let letterHeadDetails = {};
let letterHeadForm = document.getElementById("letterHeadForm");

let acknowledgementDetails = JSON.parse(
  localStorage.getItem("acknowledgementDetails")
);
let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));

letterHeadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const letterHeadFormData = new FormData(event.target);
  letterHeadFormData.forEach((value, key) => {
    letterHeadDetails[key] = value;
  });

  localStorage.setItem("letterHeadDetails", JSON.stringify(letterHeadDetails));
  console.log(JSON.parse(localStorage.getItem("letterHeadDetails")));

  // editing pdf file
  // Fetch the PDF file from the server
  const uboFormat = "./UBO.pdf"; // Path to your PDF file
  const existingPdfBytesUbo = await fetch(uboFormat).then((res) =>
    res.arrayBuffer()
  );
  // Load the existing PDF
  const pdfDocUbo = await PDFLib.PDFDocument.load(existingPdfBytesUbo);
  // Get the form
  const uboForm = pdfDocUbo.getForm();

  if (acknowledgementDetails !== null) {
    uboForm
      .getTextField("uboCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    uboForm
      .getTextField("uboCompanyAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
    uboForm
      .getTextField("uboClientName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());

    uboForm
      .getTextField("uboDeclarationDate")
      .setText(new Date().toLocaleDateString("en-GB"));
  }

  if (companyDetails !== null) {
    uboForm
      .getTextField("uboDeclarationPlace")
      .setText(companyDetails["declarationPlace"].toUpperCase());
  }

  if (letterHeadDetails !== null) {
    for (let i = 1; i <= count; i++) {
      if (i > 2) break;

      uboForm
        .getTextField(`uboName${i}`)
        .setText(letterHeadDetails[`uboName${i}`]);
      uboForm
        .getTextField(`uboTaxCountry${i}`)
        .setText(letterHeadDetails[`taxResidencyCountry${i}`]);
      uboForm
        .getTextField(`uboPanTin${i}`)
        .setText(letterHeadDetails[`uboTinPan${i}`]);
      uboForm
        .getTextField(`uboPercentage${i}`)
        .setText(letterHeadDetails[`uboBeneficialPercentage${i}`]);
      uboForm
        .getTextField(`uboAddress${i}`)
        .setText(letterHeadDetails[`uboAddress${i}`]);
      uboForm
        .getTextField(`uboGender${i}`)
        .setText(letterHeadDetails[`uboGender${i}`]);
      uboForm
        .getTextField(`uboPep${i}`)
        .setText(letterHeadDetails[`uboPep${i}`]);
      uboForm
        .getTextField(`uboNationality${i}`)
        .setText(letterHeadDetails[`uboNationality${i}`]);
      uboForm
        .getTextField(`uboOccupation${i}`)
        .setText(letterHeadDetails[`uboOccupation${i}`]);

      uboForm
        .getTextField(`uboName${i}${i}`)
        .setText(letterHeadDetails[`uboName${i}`]);
    }
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesUbo = await pdfDocUbo.save();
  // Create a Blob from the bytes
  const blobUbo = new Blob([pdfBytesUbo], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const linkUbo = document.createElement("a");
  linkUbo.href = URL.createObjectURL(blobUbo);
  linkUbo.download = "UBO.pdf";
  linkUbo.click();

  // editing pdf file
  // Fetch the PDF file from the server
  const listOfPartnersFormat = "./listOfPartners.pdf"; // Path to your PDF file
  const existingPdfBytesListOfPartners = await fetch(listOfPartnersFormat).then(
    (res) => res.arrayBuffer()
  );
  // Load the existing PDF
  const pdfDocListOfPartners = await PDFLib.PDFDocument.load(
    existingPdfBytesListOfPartners
  );
  // Get the form
  const lopForm = pdfDocListOfPartners.getForm();

  if (letterHeadDetails !== null) {
    for (let i = 1; i <= partnerCount; i++) {
      if (i > 5) break;

      lopForm
        .getTextField(`partnerName${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
      lopForm
        .getTextField(`partnerPan${i}`)
        .setText(letterHeadDetails[`partnerPan${i}`]);
      lopForm
        .getTextField(`partnerAddress${i}`)
        .setText(letterHeadDetails[`partnerAddress${i}`]);

      lopForm
        .getTextField(`authorizedName${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
    }
  }

  if (acknowledgementDetails !== null) {
    lopForm
      .getTextField("lopCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    lopForm
      .getTextField("lopCompanyAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesLop = await pdfDocListOfPartners.save();
  // Create a Blob from the bytes
  const blobLop = new Blob([pdfBytesLop], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const linkLop = document.createElement("a");
  linkLop.href = URL.createObjectURL(blobLop);
  linkLop.download = "listOfPartners.pdf";
  linkLop.click();

  // editing pdf file
  // Fetch the PDF file from the server
  const authorityLetterFormat = "./authorityLetter.pdf"; // Path to your PDF file
  const existingPdfBytesAuthorityLetter = await fetch(
    authorityLetterFormat
  ).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDocAuthorityLetter = await PDFLib.PDFDocument.load(
    existingPdfBytesAuthorityLetter
  );
  // Get the form
  const authorityLetterForm = pdfDocAuthorityLetter.getForm();

  if (acknowledgementDetails !== null) {
    authorityLetterForm
      .getTextField("authorityCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorityLetterForm
      .getTextField("firmName1")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorityLetterForm
      .getTextField("firmName2")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorityLetterForm
      .getTextField("firmName3")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorityLetterForm
      .getTextField("firmName4")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorityLetterForm
      .getTextField("authorityCompanyAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
  }

  if (letterHeadDetails !== null) {
    for (let i = 1; i <= partnerCount; i++) {
      if (i > 2) break;

      authorityLetterForm
        .getTextField(`firmPerson${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
      authorityLetterForm
        .getTextField(`firmPerson${i}${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);

      authorityLetterForm
        .getTextField(`authorityPartnerName${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
    }
  }

  if (companyDetails !== null) {
    authorityLetterForm
      .getTextField("firmAddress")
      .setText(companyDetails["companyAddress"].toUpperCase());
    authorityLetterForm
      .getTextField("firmCity")
      .setText(companyDetails["registeredCity"].toUpperCase());
    authorityLetterForm
      .getTextField("firmState")
      .setText(companyDetails["registeredState"].toUpperCase());
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesAuthorityLetter = await pdfDocAuthorityLetter.save();
  // Create a Blob from the bytes
  const blobAuthorityLetter = new Blob([pdfBytesAuthorityLetter], {
    type: "application/pdf",
  });

  // Create a link element to download the filled PDF
  const linkAuthorityLetter = document.createElement("a");
  linkAuthorityLetter.href = URL.createObjectURL(blobAuthorityLetter);
  linkAuthorityLetter.download = "authorityLetter.pdf";
  linkAuthorityLetter.click();

  // editing pdf file
  // Fetch the PDF file from the server
  const resolutionLetterFormat = "./resolutionLetter.pdf"; // Path to your PDF file
  const existingPdfBytesResolutionLetter = await fetch(
    resolutionLetterFormat
  ).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDocResolutionLetter = await PDFLib.PDFDocument.load(
    existingPdfBytesResolutionLetter
  );
  // Get the form
  const resolutionLetterForm = pdfDocResolutionLetter.getForm();

  if (acknowledgementDetails !== null) {
    resolutionLetterForm
      .getTextField("resolutionCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    resolutionLetterForm
      .getTextField("llpName1")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    resolutionLetterForm
      .getTextField("llpName2")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    resolutionLetterForm
      .getTextField("llpName3")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    resolutionLetterForm
      .getTextField("llpName4")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    resolutionLetterForm
      .getTextField("resolutionCompanyAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
  }

  if (letterHeadDetails !== null) {
    for (let i = 1; i <= partnerCount; i++) {
      if (i > 2) break;

      resolutionLetterForm
        .getTextField(`llpPartner${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
      resolutionLetterForm
        .getTextField(`llpPartner${i}${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);

      resolutionLetterForm
        .getTextField(`resolutionPartnerName${i}`)
        .setText(letterHeadDetails[`partnerName${i}`]);
    }
  }

  if (companyDetails !== null) {
    resolutionLetterForm
      .getTextField("llpAddress")
      .setText(companyDetails["companyAddress"].toUpperCase());
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesResolutionLetter = await pdfDocResolutionLetter.save();
  // Create a Blob from the bytes
  const blobResolutionLetter = new Blob([pdfBytesResolutionLetter], {
    type: "application/pdf",
  });

  // Create a link element to download the filled PDF
  const linkResolutionLetter = document.createElement("a");
  linkResolutionLetter.href = URL.createObjectURL(blobResolutionLetter);
  linkResolutionLetter.download = "resolutionLetter.pdf";
  linkResolutionLetter.click();

  // editing pdf file
  // Fetch the PDF file from the server
  const authorizedSignatoryFormat = "./listOfAuthorizedSignatory.pdf"; // Path to your PDF file
  const existingPdfBytesAuthorizedSignatory = await fetch(
    authorizedSignatoryFormat
  ).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDocAuthorizedSignatory = await PDFLib.PDFDocument.load(
    existingPdfBytesAuthorizedSignatory
  );
  // Get the form
  const authorizedSignatoryForm = pdfDocAuthorizedSignatory.getForm();

  if (acknowledgementDetails !== null) {
    authorizedSignatoryForm
      .getTextField("authorizedSignatoryCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    authorizedSignatoryForm
      .getTextField("authorizedSignatoryCompanyAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
  }

  if (letterHeadDetails !== null) {
    for (let i = 1; i <= authorizedCount; i++) {
      if (i > 5) break;

      authorizedSignatoryForm
        .getTextField(`authorizedSignatoryName${i}`)
        .setText(letterHeadDetails[`authorizedPartner${i}`]);
      authorizedSignatoryForm
        .getTextField(`authorizedSignatoryDesignation${i}`)
        .setText(letterHeadDetails[`authorizedPartnerDesignation${i}`]);
    }
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesAuthorizedSignatory = await pdfDocAuthorizedSignatory.save();
  // Create a Blob from the bytes
  const blobAuthorizedSignatory = new Blob([pdfBytesAuthorizedSignatory], {
    type: "application/pdf",
  });

  // Create a link element to download the filled PDF
  const linkAuthorizedSignatory = document.createElement("a");
  linkAuthorizedSignatory.href = URL.createObjectURL(blobAuthorizedSignatory);
  linkAuthorizedSignatory.download = "listOfAuthorizedSignatory.pdf";
  linkAuthorizedSignatory.click();

  // Redirect to the next page
  // window.location.href = "6_fatca.html";
});
