let countryCodeList = {
  afghanistan: "AF",
  "åland islands": "AX",
  albania: "AL",
  algeria: "DZ",
  "american samoa": "AS",
  andorra: "AD",
  angola: "AO",
  anguilla: "AI",
  antarctica: "AQ",
  "antigua and barbuda": "AG",
  argentina: "AR",
  armenia: "AM",
  aruba: "AW",
  australia: "AU",
  austria: "AT",
  azerbaijan: "AZ",
  bahamas: "BS",
  bahrain: "BH",
  bangladesh: "BD",
  barbados: "BB",
  belarus: "BY",
  belgium: "BE",
  belize: "BZ",
  benin: "BJ",
  bermuda: "BM",
  bhutan: "BT",
  bolivia: "BO",
  "bosnia and herzegovina": "BA",
  botswana: "BW",
  brazil: "BR",
  "brunei darussalam": "BN",
  bulgaria: "BG",
  "burkina faso": "BF",
  burundi: "BI",
  "cabo verde": "CV",
  cambodia: "KH",
  cameroon: "CM",
  canada: "CA",
  "cayman islands": "KY",
  "central african republic": "CF",
  chad: "TD",
  chile: "CL",
  china: "CN",
  colombia: "CO",
  comoros: "KM",
  congo: "CG",
  "congo, democratic republic of the": "CD",
  "costa rica": "CR",
  croatia: "HR",
  cuba: "CU",
  cyprus: "CY",
  czechia: "CZ",
  denmark: "DK",
  djibouti: "DJ",
  dominica: "DM",
  "dominican republic": "DO",
  ecuador: "EC",
  egypt: "EG",
  "el salvador": "SV",
  "equatorial guinea": "GQ",
  eritrea: "ER",
  estonia: "EE",
  eswatini: "SZ",
  ethiopia: "ET",
  fiji: "FJ",
  finland: "FI",
  france: "FR",
  gabon: "GA",
  gambia: "GM",
  georgia: "GE",
  germany: "DE",
  ghana: "GH",
  greece: "GR",
  grenada: "GD",
  guatemala: "GT",
  guinea: "GN",
  "guinea-bissau": "GW",
  guyana: "GY",
  haiti: "HT",
  honduras: "HN",
  hungary: "HU",
  iceland: "IS",
  india: "IN",
  indonesia: "ID",
  iran: "IR",
  iraq: "IQ",
  ireland: "IE",
  israel: "IL",
  italy: "IT",
  jamaica: "JM",
  japan: "JP",
  jordan: "JO",
  kazakhstan: "KZ",
  kenya: "KE",
  kiribati: "KI",
  "korea (north)": "KP",
  "korea (south)": "KR",
  kuwait: "KW",
  kyrgyzstan: "KG",
  "lao people's democratic republic": "LA",
  latvia: "LV",
  lebanon: "LB",
  lesotho: "LS",
  liberia: "LR",
  libya: "LY",
  liechtenstein: "LI",
  lithuania: "LT",
  luxembourg: "LU",
  madagascar: "MG",
  malawi: "MW",
  malaysia: "MY",
  maldives: "MV",
  mali: "ML",
  malta: "MT",
  "marshall islands": "MH",
  mauritania: "MR",
  mauritius: "MU",
  mexico: "MX",
  micronesia: "FM",
  moldova: "MD",
  monaco: "MC",
  mongolia: "MN",
  montenegro: "ME",
  morocco: "MA",
  mozambique: "MZ",
  myanmar: "MM",
  namibia: "NA",
  nauru: "NR",
  nepal: "NP",
  netherlands: "NL",
  "new zealand": "NZ",
  nicaragua: "NI",
  niger: "NE",
  nigeria: "NG",
  "north macedonia": "MK",
  norway: "NO",
  oman: "OM",
  pakistan: "PK",
  palau: "PW",
  panama: "PA",
  "papua new guinea": "PG",
  paraguay: "PY",
  peru: "PE",
  philippines: "PH",
  poland: "PL",
  portugal: "PT",
  qatar: "QA",
  romania: "RO",
  "russian federation": "RU",
  rwanda: "RW",
  "saint kitts and nevis": "KN",
  "saint lucia": "LC",
  "saint vincent and the grenadines": "VC",
  samoa: "WS",
  "san marino": "SM",
  "sao tome and principe": "ST",
  "saudi arabia": "SA",
  senegal: "SN",
  serbia: "RS",
  seychelles: "SC",
  "sierra leone": "SL",
  singapore: "SG",
  slovakia: "SK",
  slovenia: "SI",
  "solomon islands": "SB",
  somalia: "SO",
  "south africa": "ZA",
  "south sudan": "SS",
  spain: "ES",
  "sri lanka": "LK",
  sudan: "SD",
  suriname: "SR",
  sweden: "SE",
  switzerland: "CH",
  "syrian arab republic": "SY",
  tajikistan: "TJ",
  tanzania: "TZ",
  thailand: "TH",
  "timor-leste": "TL",
  togo: "TG",
  tonga: "TO",
  "trinidad and tobago": "TT",
  tunisia: "TN",
  turkey: "TR",
  turkmenistan: "TM",
  tuvalu: "TV",
  uganda: "UG",
  ukraine: "UA",
  "united arab emirates": "AE",
  "united kingdom": "GB",
  "united states of america": "US",
  "united state of america": "US",
  "united state america": "US",
  "united states america": "US",
  "united states": "US",
  "united state": "US",
  america: "US",
  uruguay: "UY",
  uzbekistan: "UZ",
  vanuatu: "VU",
  venezuela: "VE",
  vietnam: "VN",
  yemen: "YE",
  zambia: "ZM",
  zimbabwe: "ZW",
};

let stateCodeList = {
  afghanistan: {
    states: {
      badakhshan: "BDS",
      badghis: "BDG",
      baghlan: "BGL",
      balkh: "BAL",
      bamyan: "BAM",
      daykundi: "DAY",
      farah: "FRA",
      faryab: "FYB",
      ghazni: "GHA",
      ghor: "GHO",
    },
  },
  "united kingdom": {
    states: {
      england: "ENG",
      scotland: "SCT",
      wales: "WLS",
      "northern ireland": "NIR",
    },
  },
  argentina: {
    states: {
      "buenos aires": "BA",
      catamarca: "CT",
      chaco: "CH",
      chubut: "CU",
      cordoba: "CB",
      corrientes: "CR",
      "entre rios": "ER",
      formosa: "FO",
      jujuy: "JY",
      "la pampa": "LP",
    },
  },
  australia: {
    states: {
      "new south wales": "NSW",
      queensland: "QLD",
      "south australia": "SA",
      tasmania: "TAS",
      victoria: "VIC",
      "western australia": "WA",
      "australian capital territory": "ACT",
      "northern territory": "NT",
    },
  },
  brazil: {
    states: {
      acre: "AC",
      alagoas: "AL",
      amapa: "AP",
      amazonas: "AM",
      bahia: "BA",
      ceara: "CE",
      "distrito federal": "DF",
      "espirito santo": "ES",
      goias: "GO",
      maranhao: "MA",
    },
  },
  canada: {
    states: {
      alberta: "AB",
      "british columbia": "BC",
      manitoba: "MB",
      "new brunswick": "NB",
      "newfoundland and labrador": "NL",
      "nova scotia": "NS",
      ontario: "ON",
      "prince edward island": "PE",
      quebec: "QC",
      saskatchewan: "SK",
    },
  },
  india: {
    states: {
      "andhra pradesh": "AP",
      "arunachal pradesh": "AR",
      assam: "AS",
      bihar: "BR",
      chhattisgarh: "CG",
      goa: "GA",
      gujarat: "GJ",
      haryana: "HR",
      "himachal pradesh": "HP",
      jharkhand: "JH",
      karnataka: "KA",
      kerala: "KL",
      "madhya pradesh": "MP",
      maharashtra: "MH",
      manipur: "MN",
      meghalaya: "ML",
      mizoram: "MZ",
      nagaland: "NL",
      odisha: "OR",
      punjab: "PB",
      rajasthan: "RJ",
      sikkim: "SK",
      "tamil nadu": "TN",
      telangana: "TS",
      tripura: "TR",
      "uttar pradesh": "UP",
      uttarakhand: "UK",
      "west bengal": "WB",
      "andaman and nicobar islands": "AN",
      chandigarh: "CH",
      "dadra and nagar haveli and daman and diu": "DN",
      delhi: "DL",
      "jammu and kashmir": "JK",
      ladakh: "LA",
      lakshadweep: "LD",
      puducherry: "PY",
    },
  },
  "united states": {
    states: {
      alabama: "AL",
      alaska: "AK",
      arizona: "AZ",
      arkansas: "AR",
      california: "CA",
      colorado: "CO",
      connecticut: "CT",
      delaware: "DE",
      florida: "FL",
      georgia: "GA",
      hawaii: "HI",
      idaho: "ID",
      illinois: "IL",
      indiana: "IN",
      iowa: "IA",
      kansas: "KS",
      kentucky: "KY",
      louisiana: "LA",
      maine: "ME",
      maryland: "MD",
      massachusetts: "MA",
      michigan: "MI",
      minnesota: "MN",
      mississippi: "MS",
      missouri: "MO",
      montana: "MT",
      nebraska: "NE",
      nevada: "NV",
      "new hampshire": "NH",
      "new jersey": "NJ",
      "new mexico": "NM",
      "new york": "NY",
      "north carolina": "NC",
      "north dakota": "ND",
      ohio: "OH",
      oklahoma: "OK",
      oregon: "OR",
      pennsylvania: "PA",
      "rhode island": "RI",
      "south carolina": "SC",
      "south dakota": "SD",
      tennessee: "TN",
      texas: "TX",
      utah: "UT",
      vermont: "VT",
      virginia: "VA",
      washington: "WA",
      "west virginia": "WV",
      wisconsin: "WI",
      wyoming: "WY",
    },
  },
  germany: {
    states: {
      "baden-wurttemberg": "BW",
      bavaria: "BY",
      berlin: "BE",
      brandenburg: "BB",
      bremen: "HB",
      hamburg: "HH",
      hesse: "HE",
      "lower saxony": "NI",
      "mecklenburg-western pomerania": "MV",
      "north rhine-westphalia": "NW",
      "rhineland-palatinate": "RP",
      saarland: "SL",
      saxony: "SN",
      "saxony-anhalt": "ST",
      "schleswig-holstein": "SH",
      thuringia: "TH",
    },
  },
  italy: {
    states: {
      abruzzo: "65",
      basilicata: "77",
      calabria: "78",
      campania: "72",
      "emilia-romagna": "45",
      "friuli-venezia giulia": "36",
      lazio: "62",
      liguria: "42",
      lombardy: "25",
      marche: "57",
      molise: "67",
      piedmont: "21",
      puglia: "75",
      sardinia: "88",
      sicily: "82",
      tuscany: "52",
      "trentino-south tyrol": "32",
      umbria: "55",
      "valle d'aosta": "23",
      veneto: "34",
    },
  },
  japan: {
    states: {
      aichi: "23",
      akita: "05",
      aomori: "02",
      chiba: "12",
      ehime: "38",
      fukui: "18",
      fukuoka: "40",
      fukushima: "07",
      gifu: "21",
      gunma: "10",
      hiroshima: "34",
      hokkaido: "01",
      hyogo: "28",
      ibaraki: "08",
      ishikawa: "17",
      iwate: "03",
      kagawa: "37",
      kagoshima: "46",
      kanagawa: "14",
      kochi: "39",
      kumamoto: "43",
      kyoto: "26",
      mie: "24",
      miyagi: "04",
      miyazaki: "45",
      nagano: "20",
      nagasaki: "42",
      nara: "29",
      niigata: "15",
      oita: "44",
      okayama: "33",
      okinawa: "47",
      osaka: "27",
      saga: "41",
      saitama: "11",
      shiga: "25",
      shimane: "32",
      shizuoka: "22",
      tochigi: "09",
      tokushima: "36",
      tokyo: "13",
      tottori: "31",
      toyama: "16",
      wakayama: "30",
      yamagata: "06",
      yamaguchi: "35",
      yamanashi: "19",
    },
  },
  mexico: {
    states: {
      aguascalientes: "AGU",
      "baja california": "BCN",
      "baja california sur": "BCS",
      campeche: "CAM",
      chiapas: "CHP",
      chihuahua: "CHH",
      coahuila: "COA",
      colima: "COL",
      durango: "DUR",
      guanajuato: "GUA",
      guerrero: "GRO",
      hidalgo: "HID",
      jalisco: "JAL",
      "mexico city": "CMX",
      michoacan: "MIC",
      morelos: "MOR",
      nayarit: "NAY",
      "nuevo leon": "NLE",
      oaxaca: "OAX",
      puebla: "PUE",
      queretaro: "QUE",
      "quintana roo": "ROO",
      "san luis potosi": "SLP",
      sinaloa: "SIN",
      sonora: "SON",
      tabasco: "TAB",
      tamaulipas: "TAM",
      tlaxcala: "TLA",
      veracruz: "VER",
      yucatan: "YUC",
      zacatecas: "ZAC",
    },
  },
  nigeria: {
    states: {
      abia: "AB",
      adamawa: "AD",
      "akwa ibom": "AK",
      anambra: "AN",
      bauchi: "BA",
      bayelsa: "BY",
      benue: "BE",
      borno: "BO",
      "cross river": "CR",
      delta: "DE",
      ebonyi: "EB",
      edo: "ED",
      ekiti: "EK",
      enugu: "EN",
      gombe: "GO",
      imo: "IM",
      jigawa: "JI",
      kaduna: "KD",
      kano: "KN",
      katsina: "KT",
      kebbi: "KE",
      kogi: "KO",
      kwara: "KW",
      lagos: "LA",
      nasarawa: "NA",
      niger: "NI",
      ogun: "OG",
      ondo: "ON",
      osun: "OS",
      oyo: "OY",
      plateau: "PL",
      rivers: "RI",
      sokoto: "SO",
      taraba: "TA",
      yobe: "YO",
      zamfara: "ZA",
      "federal capital territory": "FC",
    },
  },
  russia: {
    states: {
      adygea: "AD",
      altai: "AL",
      bashkortostan: "BA",
      buryatia: "BU",
      chechnya: "CE",
      chuvashia: "CU",
      dagestan: "DA",
      ingushetia: "IN",
      "kabardino-balkaria": "KB",
      kalmykia: "KL",
      "karachay-cherkessia": "KC",
      karelia: "KR",
      khakassia: "KK",
      komi: "KO",
      "mari el": "ME",
      mordovia: "MO",
      sakha: "SA",
      "north ossetia": "NO",
      tatarstan: "TA",
      tuva: "TY",
      udmurtia: "UD",
      "altai krai": "ALT",
      "amur oblast": "AMU",
      "arkhangelsk oblast": "ARK",
      "astrakhan oblast": "AST",
      "belgorod oblast": "BEL",
      "bryansk oblast": "BRY",
      "chelyabinsk oblast": "CHE",
      "irkutsk oblast": "IRK",
      "kaliningrad oblast": "KGD",
      "krasnodar krai": "KDA",
      "krasnoyarsk krai": "KYA",
      "moscow oblast": "MOS",
      "novosibirsk oblast": "NVS",
      "saint petersburg": "SPE",
      "sverdlovsk oblast": "SVE",
      "vladimir oblast": "VLA",
      "voronezh oblast": "VOR",
    },
  },
  china: {
    states: {
      anhui: "AH",
      beijing: "BJ",
      chongqing: "CQ",
      fujian: "FJ",
      gansu: "GS",
      guangdong: "GD",
      guangxi: "GX",
      guizhou: "GZ",
      hainan: "HI",
      hebei: "HE",
      heilongjiang: "HL",
      henan: "HA",
      "hong kong": "HK",
      hubei: "HB",
      hunan: "HN",
      "inner mongolia": "NM",
      jiangsu: "JS",
      jiangxi: "JX",
      jilin: "JL",
      liaoning: "LN",
      macau: "MO",
      ningxia: "NX",
      qinghai: "QH",
      shaanxi: "SN",
      shandong: "SD",
      shanghai: "SH",
      shanxi: "SX",
      sichuan: "SC",
      tianjin: "TJ",
      tibet: "XZ",
      xinjiang: "XJ",
      yunnan: "YN",
      zhejiang: "ZJ",
    },
  },
  france: {
    states: {
      "auvergne-rhone-alpes": "ARA",
      "bourgogne-franche-comte": "BFC",
      brittany: "BRE",
      "centre-val de loire": "CVL",
      corsica: "COR",
      "grand est": "GES",
      "hauts-de-france": "HDF",
      "ile-de-france": "IDF",
      normandy: "NOR",
      "nouvelle-aquitaine": "NAQ",
      occitanie: "OCC",
      "pays de la loire": "PDL",
      "provence-alpes-cote d'azur": "PAC",
    },
  },
  indonesia: {
    states: {
      aceh: "AC",
      bali: "BA",
      banten: "BT",
      bengkulu: "BE",
      "central java": "JT",
      "central kalimantan": "KT",
      "central sulawesi": "ST",
      "east java": "JI",
      "east kalimantan": "KI",
      "east nusa tenggara": "NT",
      gorontalo: "GO",
      jakarta: "JK",
      jambi: "JA",
      lampung: "LA",
      maluku: "MA",
      "north kalimantan": "KU",
      "north maluku": "MU",
      "north sulawesi": "SA",
      "north sumatra": "SU",
      papua: "PA",
      riau: "RI",
      "riau islands": "KR",
      "south east sulawesi": "SG",
      "south kalimantan": "KS",
      "south sulawesi": "SN",
      "south sumatra": "SS",
      "west java": "JB",
      "west kalimantan": "KB",
      "west nusa tenggara": "NB",
      "west papua": "PB",
      "west sulawesi": "SR",
      "west sumatra": "SB",
      yogyakarta: "YO",
    },
  },
};

let hufDocuments = [];

let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
let relatedPersonDetails = JSON.parse(
  localStorage.getItem("relatedPersonDetails")
);
let kycApplicationFormFirstPageDetails = JSON.parse(
  localStorage.getItem("kycApplicationFormFirstPageDetails")
);
let kycApplicationFormSecondPageDetails = JSON.parse(
  localStorage.getItem("kycApplicationFormSecondPageDetails")
);
let acknowledgementDetails = JSON.parse(
  localStorage.getItem("acknowledgementDetails")
);
let familyDeclarationDetails = {};

let addAnotherRelatedPersonBtn = document.querySelector(
  ".addAnotherRelatedPersonBtn"
);
let relatedPersonArray = [
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
];
let count = 0;
addAnotherRelatedPersonBtn.addEventListener("click", (event) => {
  let companyRelatedPersonDetails = document.querySelector(
    ".companyRelatedPersonDetails"
  );
  let anotherRelatedPersonDiv = document.createElement("div");
  anotherRelatedPersonDiv.style.marginTop = "5vh";
  anotherRelatedPersonDiv.innerHTML = `
    <div class="flex flex-wrap">
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonName" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Name</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonName" id="company${relatedPersonArray[count]}RelatedPersonName"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-72 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonDesignation"
                  class="block text-sm text-gray-700 font-semibold my-1 pl-1">Designation</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonDesignation" id="company${relatedPersonArray[count]}RelatedPersonDesignation"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-60 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonPan" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Pan
                  Number</label>
                <input type="text" name="company${relatedPersonArray[count]}RelatedPersonPan" id="company${relatedPersonArray[count]}RelatedPersonPan"
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>
              
              <div class="mr-5 mt-2">
                <label for="company${relatedPersonArray[count]}RelatedPersonDob" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Date
                  of Birth</label>
                <input type="date" name="company${relatedPersonArray[count]}RelatedPersonDob" id="company${relatedPersonArray[count]}RelatedPersonDob" max=""
                  class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-52 h-10" required>
              </div>

              <div class="mr-5 mt-2">
                  <label for="${relatedPersonArray[count]}gender" class="block text-sm text-gray-700 font-semibold my-1 pl-1">Gender</label>
                  <select name="${relatedPersonArray[count]}gender" id="${relatedPersonArray[count]}gender"
                    class="border border-gray-300 text-lg py-1 outline-none rounded-md px-2 text-gray-600 font-semibold w-44 h-10">
                    <option value="" selected disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

            </div>
  `;
  companyRelatedPersonDetails.appendChild(anotherRelatedPersonDiv);
  count++;
});

let hufDocumentUploadForm = document.getElementById("hufDocumentUploadForm");

hufDocumentUploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const familyDeclarationFormData = new FormData(event.target);
  familyDeclarationFormData.forEach((value, key) => {
    familyDeclarationDetails[key] = value;
  });

  console.log(familyDeclarationDetails);

  // Loop through all the file input elements
  for (let i = 1; i <= 11; i++) {
    // Adjust the upper limit to the number of file inputs
    const fileInput = document.getElementById(`inputFile${i}`);
    if (fileInput && fileInput.files[0]) {
      hufDocuments.push(fileInput.files[0]);
    }
  }

  const hufPdfDocuments = await Promise.all(
    hufDocuments.map((file) => {
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

  await downloadAllDocs(hufPdfDocuments);

  // editing pdf file
  // Fetch the PDF file from the server
  const uboFormat = "./UBO_FORMAT.pdf"; // Path to your PDF file
  const existingPdfBytesUbo = await fetch(uboFormat).then((res) =>
    res.arrayBuffer()
  );
  // Load the existing PDF
  const pdfDocUbo = await PDFLib.PDFDocument.load(existingPdfBytesUbo);
  // Get the form
  const uboForm = pdfDocUbo.getForm();

  if (acknowledgementDetails !== null) {
    uboForm
      .getTextField("hufCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    uboForm
      .getTextField("hufInvestorName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    uboForm
      .getTextField("hufAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
    uboForm
      .getTextField("uboAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());

    uboForm
      .getTextField("hufUboClientName")
      .setText(acknowledgementDetails["ecnClientName"].toUpperCase());
    uboForm
      .getTextField("uboDeclarationDate")
      .setText(new Date().toLocaleDateString("en-GB"));
  }

  if (companyDetails !== null) {
    uboForm
      .getTextField("uboDeclarationPlace")
      .setText(companyDetails["declarationPlace"].toUpperCase());
  }

  if (relatedPersonDetails !== null) {
    uboForm
      .getTextField("uboName")
      .setText(
        relatedPersonDetails["firstName"].toUpperCase() +
          " " +
          relatedPersonDetails["lastName"].toUpperCase()
      );
    if (relatedPersonDetails["nationality"] === "IN") {
      uboForm.getTextField("uboNationality").setText("INDIA");
      uboForm.getTextField("uboCountry").setText("INDIA");
    } else {
      uboForm
        .getTextField("uboNationality")
        .setText(
          countryCodeList[
            relatedPersonDetails["otherCountryCode"].toLowerCase()
          ]
        );
      uboForm
        .getTextField("uboCountry")
        .setText(
          countryCodeList[
            relatedPersonDetails["otherCountryCode"].toLowerCase()
          ]
        );
    }
    uboForm
      .getTextField("uboTin")
      .setText(relatedPersonDetails["relatedPersonPanNumber"].toUpperCase());
    uboForm.getTextField("uboPercentage").setText("100%");
    uboForm
      .getTextField("uboGender")
      .setText(relatedPersonDetails["gender"].toUpperCase());
    uboForm.getTextField("uboOccupation").setText("BUSINESS");
  }

  if (kycApplicationFormFirstPageDetails !== null) {
    let politicalInfo =
      kycApplicationFormFirstPageDetails[`FirstPoliticalInfo`];
    if (politicalInfo === "Politically Exposed Person") {
      uboForm.getTextField("uboPep").setText("PEP");
    } else if (politicalInfo === "Related to Politically Exposed Person") {
      uboForm.getTextField("uboPep").setText("RPEP");
    } else {
      uboForm.getTextField("uboPep").setText("NO");
    }
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesUbo = await pdfDocUbo.save();
  // Create a Blob from the bytes
  const blobUbo = new Blob([pdfBytesUbo], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const linkUbo = document.createElement("a");
  linkUbo.href = URL.createObjectURL(blobUbo);
  linkUbo.download = "UBO_FORMAT.pdf";
  linkUbo.click();

  // editing pdf file
  // Fetch the PDF file from the server
  const familyDeclaration = "./FAMILY_DECLARATION.pdf"; // Path to your PDF file
  const existingPdfBytesFamily = await fetch(familyDeclaration).then((res) =>
    res.arrayBuffer()
  );
  // Load the existing PDF
  const pdfDocFamily = await PDFLib.PDFDocument.load(existingPdfBytesFamily);
  // Get the form
  const familyForm = pdfDocFamily.getForm();

  /* Here i need to configure the family_declaration details into the pdf file....................... */
  if (acknowledgementDetails !== null) {
    familyForm
      .getTextField("hufCompanyName")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    familyForm
      .getTextField("hufCompanyName1")
      .setText(acknowledgementDetails["ecnClientMandateName"].toUpperCase());
    familyForm
      .getTextField("hufAddress")
      .setText(acknowledgementDetails["ecnClientAddress"].toUpperCase());
    familyForm
      .getTextField("hufClientName")
      .setText(acknowledgementDetails["ecnClientName"].toUpperCase());
  }

  if (familyDeclarationDetails !== null) {
    relatedPersonArray = ["First", "Second", "Third", "Fourth", "Fifth"];

    for (let i = 0; i <= count; i++) {
      if(i > 4) break;

      familyForm
        .getTextField(`familyName${i + 1}`)
        .setText(
          familyDeclarationDetails[
            `company${relatedPersonArray[i]}RelatedPersonName`
          ].toUpperCase()
        );

      if (
        familyDeclarationDetails[`${relatedPersonArray[i]}gender`] === "male"
      ) {
        familyForm.getTextField(`familyGender${i + 1}`).setText("M");
      } else if (
        familyDeclarationDetails[`${relatedPersonArray[i]}gender`] === "female"
      ) {
        familyForm.getTextField(`familyGender${i + 1}`).setText("F");
      } else {
        familyForm.getTextField(`familyGender${i + 1}`).setText("O");
      }

      familyForm
        .getTextField(`familyDob${i + 1}`)
        .setText(
          familyDeclarationDetails[
            `company${relatedPersonArray[i]}RelatedPersonDob`
          ].toUpperCase()
        );
      familyForm
        .getTextField(`familyRelation${i + 1}`)
        .setText(
          familyDeclarationDetails[
            `company${relatedPersonArray[i]}RelatedPersonDesignation`
          ].toUpperCase()
        );
      familyForm
        .getTextField(`familyPan${i + 1}`)
        .setText(
          familyDeclarationDetails[
            `company${relatedPersonArray[i]}RelatedPersonPan`
          ].toUpperCase()
        );
    }
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesFamily = await pdfDocFamily.save();
  // Create a Blob from the bytes
  const blobFamily = new Blob([pdfBytesFamily], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const linkFamily = document.createElement("a");
  linkFamily.href = URL.createObjectURL(blobFamily);
  linkFamily.download = "FAMILY_DECLARATION.pdf";
  linkFamily.click();

  // Redirect to next page
  // window.location.href = "9_corporateAccountPreviewPage.html";
});

async function downloadAllDocs(hufPdfDocuments) {
  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const fileData of hufPdfDocuments) {
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
  else iframe.src = "page54.pdf";
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

function formatDate(dateString) {
  // Split the date string into components [yyyy, mm, dd]
  const parts = dateString.split("-");

  // Rearrange the components to [dd, mm, yyyy]
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}
