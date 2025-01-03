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

let FifthrelatedPersonDetails = {};

let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));

let relatedPersonDetails;

let relatedPersonDetailsForm = document.getElementById(
  "relatedPersonDetailsForm"
);

relatedPersonDetailsForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const relatedPersonFormData = new FormData(event.target);
  relatedPersonFormData.forEach((value, key) => {
    FifthrelatedPersonDetails[key] = value;
  });

  localStorage.setItem(
    "FifthrelatedPersonDetails",
    JSON.stringify(FifthrelatedPersonDetails)
  );
  console.log(JSON.parse(localStorage.getItem("FifthrelatedPersonDetails")));

  relatedPersonDetails = JSON.parse(
    localStorage.getItem("FifthrelatedPersonDetails")
  );
  await downloadRelatedPerson();

  // Redirect to the next page
  window.location.href = "3_kycApplicationFormFirstPage.html";
});

let checkbox = document.querySelector("#isRelatedPersonLocalSame");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let relatedPersonAddress = document.querySelector("#relatedPersonAddress");
    let relatedPersonCity = document.querySelector("#relatedPersonCity");
    let relatedPersonDistrict = document.querySelector(
      "#relatedPersonDistrict"
    );
    let relatedPersonPinCode = document.querySelector("#relatedPersonPinCode");
    let relatedPersonState = document.querySelector("#relatedPersonState");
    let relatedPersonCountry = document.querySelector("#relatedPersonCountry");

    document.querySelector("#relatedPersonCurrentAddress").value =
      relatedPersonAddress.value;
    document.querySelector("#relatedPersonCurrentCity").value =
      relatedPersonCity.value;
    document.querySelector("#relatedPersonCurrentDistrict").value =
      relatedPersonDistrict.value;
    document.querySelector("#relatedPersonCurrentPinCode").value =
      relatedPersonPinCode.value;
    document.querySelector("#relatedPersonCurrentState").value =
      relatedPersonState.value;
    document.querySelector("#relatedPersonCurrentCountry").value =
      relatedPersonCountry.value;
  } else {
    document.querySelector("#relatedPersonCurrentAddress").value = "";
    document.querySelector("#relatedPersonCurrentCity").value = "";
    document.querySelector("#relatedPersonCurrentDistrict").value = "";
    document.querySelector("#relatedPersonCurrentPinCode").value = "";
    document.querySelector("#relatedPersonCurrentState").value = "";
    document.querySelector("#relatedPersonCurrentCountry").value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getrelatedPersonDetail();
});

function getrelatedPersonDetail() {
  let relatedPersonDetail = JSON.parse(
    localStorage.getItem("FifthrelatedPersonDetails")
  );

  let relatedPersonAddition = document.getElementById("relatedPersonAddition");
  let relatedPersonUpdation = document.getElementById("relatedPersonUpdation");
  let relatedPersonDeletion = document.getElementById("relatedPersonDeletion");

  let kycNumber = document.getElementById("kycNumber");
  let personType = document.getElementById("personType");
  let din = document.getElementById("din");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let familyFirstName = document.getElementById("familyFirstName");
  let familyLastName = document.getElementById("familyLastName");
  let motherFirstName = document.getElementById("motherFirstName");
  let motherLastName = document.getElementById("motherLastName");
  let dob = document.getElementById("dob");
  let gender = document.getElementById("gender");

  let indian = document.getElementById("indian");
  let otherCountry = document.getElementById("otherCountry");
  let otherCountryCode = document.getElementById("otherCountryCode");

  let relatedPersonPanNumber = document.getElementById(
    "relatedPersonPanNumber"
  );
  let relatedPersonAddress = document.getElementById("relatedPersonAddress");
  let relatedPersonCity = document.getElementById("relatedPersonCity");
  let relatedPersonDistrict = document.getElementById("relatedPersonDistrict");
  let relatedPersonPinCode = document.getElementById("relatedPersonPinCode");
  let relatedPersonState = document.getElementById("relatedPersonState");
  let relatedPersonCountry = document.getElementById("relatedPersonCountry");
  let isRelatedPersonLocalSame = document.getElementById(
    "isRelatedPersonLocalSame"
  );
  let relatedPersonCurrentAddress = document.getElementById(
    "relatedPersonCurrentAddress"
  );
  let relatedPersonCurrentCity = document.getElementById(
    "relatedPersonCurrentCity"
  );
  let relatedPersonCurrentDistrict = document.getElementById(
    "relatedPersonCurrentDistrict"
  );
  let relatedPersonCurrentPinCode = document.getElementById(
    "relatedPersonCurrentPinCode"
  );
  let relatedPersonCurrentState = document.getElementById(
    "relatedPersonCurrentState"
  );
  let relatedPersonCurrentCountry = document.getElementById(
    "relatedPersonCurrentCountry"
  );
  let relatedPersonMobileNumber = document.getElementById(
    "relatedPersonMobileNumber"
  );
  let relatedPersonEmailId = document.getElementById("relatedPersonEmailId");
  let relatedPersonTelephoneOffice = document.getElementById(
    "relatedPersonTelephoneOffice"
  );
  let relatedPersonTelephoneRes = document.getElementById(
    "relatedPersonTelephoneRes"
  );

  if (relatedPersonDetail !== null) {
    if (
      relatedPersonDetail["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      relatedPersonAddition.checked = true;
    } else if (
      relatedPersonDetail["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      relatedPersonUpdation.checked = true;
    } else {
      relatedPersonDeletion.checked = true;
    }

    kycNumber.value = relatedPersonDetail["kycNumber"];

    personType.value = relatedPersonDetail["personType"];
    din.value = relatedPersonDetail["din"];

    firstName.value = relatedPersonDetail["firstName"];

    lastName.value = relatedPersonDetail["lastName"];

    familyFirstName.value = relatedPersonDetail["familyFirstName"];

    familyLastName.value = relatedPersonDetail["familyLastName"];

    motherFirstName.value = relatedPersonDetail["motherFirstName"];

    motherLastName.value = relatedPersonDetail["motherLastName"];

    dob.value = relatedPersonDetail["dob"];

    gender.value = relatedPersonDetail["gender"];

    if (relatedPersonDetail["nationality"] === "IN") {
      indian.checked = true;
    } else {
      otherCountry.checked = true;
      otherCountryCode.value = relatedPersonDetail["otherCountryCode"];
    }

    relatedPersonPanNumber.value =
      relatedPersonDetail["relatedPersonPanNumber"];

    relatedPersonIdentityProof.value =
      relatedPersonDetail["relatedPersonIdentityProof"];

    relatedPersonAddress.value = relatedPersonDetail["relatedPersonAddress"];

    relatedPersonCity.value = relatedPersonDetail["relatedPersonCity"];

    relatedPersonDistrict.value = relatedPersonDetail["relatedPersonDistrict"];

    relatedPersonPinCode.value = relatedPersonDetail["relatedPersonPinCode"];

    relatedPersonState.value = relatedPersonDetail["relatedPersonState"];

    relatedPersonCountry.value = relatedPersonDetail["relatedPersonCountry"];

    if (relatedPersonDetail["isRelatedPersonLocalSame"] === "Yes") {
      isRelatedPersonLocalSame.checked = true;
    }

    relatedPersonCurrentAddress.value =
      relatedPersonDetail["relatedPersonCurrentAddress"];

    relatedPersonCurrentCity.value =
      relatedPersonDetail["relatedPersonCurrentCity"];

    relatedPersonCurrentDistrict.value =
      relatedPersonDetail["relatedPersonCurrentDistrict"];

    relatedPersonCurrentPinCode.value =
      relatedPersonDetail["relatedPersonCurrentPinCode"];

    relatedPersonCurrentState.value =
      relatedPersonDetail["relatedPersonCurrentState"];

    relatedPersonCurrentCountry.value =
      relatedPersonDetail["relatedPersonCurrentCountry"];

    relatedPersonMobileNumber.value =
      relatedPersonDetail["relatedPersonMobileNumber"];

    relatedPersonEmailId.value = relatedPersonDetail["relatedPersonEmailId"];

    relatedPersonTelephoneOffice.value =
      relatedPersonDetail["relatedPersonTelephoneOffice"];

    relatedPersonTelephoneRes.value =
      relatedPersonDetail["relatedPersonTelephoneRes"];
  }
}

async function downloadRelatedPerson() {
  // editing pdf file
  // Fetch the PDF file from the server
  const url = "./RELATED_PERSONS.pdf"; // Path to your PDF file
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  // Load the existing PDF
  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
  // Get the form
  const form = pdfDoc.getForm();

  if (relatedPersonDetails !== null) {
    if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Addition of Related Person"
    ) {
      form.getCheckBox("relatedPersonAddition").check();
    } else if (
      relatedPersonDetails["selectRelatedPersonAction"] ===
      "Updation of Related Person"
    ) {
      form.getCheckBox("relatedPersonUpdation").check();
    } else {
      form.getCheckBox("relatedPersonDeletion").check();
    }

    form
      .getTextField("kycNumber")
      .setText(relatedPersonDetails["kycNumber"].toUpperCase());

    if (relatedPersonDetails["personType"] === "director") {
      form.getCheckBox("director").check();
    } else if (relatedPersonDetails["personType"] === "promoter") {
      form.getCheckBox("promoter").check();
    } else if (relatedPersonDetails["personType"] === "karta") {
      form.getCheckBox("karta").check();
    } else if (relatedPersonDetails["personType"] === "trustee") {
      form.getCheckBox("trustee").check();
    } else if (relatedPersonDetails["personType"] === "partner") {
      form.getCheckBox("partner").check();
    } else if (relatedPersonDetails["personType"] === "beneficiary") {
      form.getCheckBox("beneficiary").check();
    } else if (relatedPersonDetails["personType"] === "authorisedSignatory") {
      form.getCheckBox("authorisedSignatory").check();
    } else if (relatedPersonDetails["personType"] === "beneficiaryOwner") {
      form.getCheckBox("beneficiaryOwner").check();
    } else if (relatedPersonDetails["personType"] === "proprietor") {
      form.getCheckBox("proprietor").check();
    } else if (
      relatedPersonDetails["personType"] === "countAppointmentOfficial"
    ) {
      form.getCheckBox("courtAppointmentOfficial").check();
    } else {
      form.getCheckBox("other").check();
    }

    form.getTextField("din").setText(relatedPersonDetails["din"].toUpperCase());

    form
      .getTextField("firstName")
      .setText(relatedPersonDetails["firstName"].toUpperCase());

    form
      .getTextField("lastName")
      .setText(relatedPersonDetails["lastName"].toUpperCase());

    form
      .getTextField("familyFirstName")
      .setText(relatedPersonDetails["familyFirstName"].toUpperCase());

    form
      .getTextField("familyLastName")
      .setText(relatedPersonDetails["familyLastName"].toUpperCase());

    form
      .getTextField("motherFirstName")
      .setText(relatedPersonDetails["motherFirstName"].toUpperCase());

    form
      .getTextField("motherLastName")
      .setText(relatedPersonDetails["motherLastName"].toUpperCase());

    form.getTextField("dob").setText(formatDate(relatedPersonDetails["dob"]));

    if (relatedPersonDetails["gender"] === "male") {
      form.getCheckBox("male").check();
    } else if (relatedPersonDetails["gender"] === "female") {
      form.getCheckBox("female").check();
    } else {
      form.getCheckBox("otherGender").check();
    }

    if (relatedPersonDetails["nationality"] === "IN") {
      form.getCheckBox("india").check();
    } else {
      form.getCheckBox("otherCountry").check();
      form
        .getTextField("otherCountryCode")
        .setText(
          countryCodeList[
            relatedPersonDetails["otherCountryCode"].toLowerCase()
          ]
        );
    }

    form
      .getTextField("panNumber")
      .setText(relatedPersonDetails["relatedPersonPanNumber"].toUpperCase());

    form
      .getTextField("relatedPersonAddress")
      .setText(relatedPersonDetails["relatedPersonAddress"].toUpperCase());

    form
      .getTextField("relatedPersonCity")
      .setText(relatedPersonDetails["relatedPersonCity"].toUpperCase());

    form
      .getTextField("relatedPersonDistrict")
      .setText(relatedPersonDetails["relatedPersonDistrict"].toUpperCase());

    form
      .getTextField("relatedPersonPinCode")
      .setText(relatedPersonDetails["relatedPersonPinCode"].toUpperCase());

    form
      .getTextField("relatedPersonState")
      .setText(
        stateCodeList[
          relatedPersonDetails["relatedPersonCountry"].toLowerCase()
        ].states[relatedPersonDetails["relatedPersonState"].toLowerCase()]
      );

    form
      .getTextField("relatedPersonCountry")
      .setText(
        countryCodeList[
          relatedPersonDetails["relatedPersonCountry"].toLowerCase()
        ]
      );

    if (relatedPersonDetails["isRelatedPersonLocalSame"] === "Yes") {
      form.getCheckBox("isLocalSame").check();
    }

    form
      .getTextField("relatedPersonCurrentAddress")
      .setText(
        relatedPersonDetails["relatedPersonCurrentAddress"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentCity")
      .setText(relatedPersonDetails["relatedPersonCurrentCity"].toUpperCase());

    form
      .getTextField("relatedPersonCurrentDistrict")
      .setText(
        relatedPersonDetails["relatedPersonCurrentDistrict"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentPinCode")
      .setText(
        relatedPersonDetails["relatedPersonCurrentPinCode"].toUpperCase()
      );

    form
      .getTextField("relatedPersonCurrentState")
      .setText(
        stateCodeList[
          relatedPersonDetails["relatedPersonCurrentCountry"].toLowerCase()
        ].states[
          relatedPersonDetails["relatedPersonCurrentState"].toLowerCase()
        ]
      );

    form
      .getTextField("relatedPersonCurrentCountry")
      .setText(
        countryCodeList[
          relatedPersonDetails["relatedPersonCurrentCountry"].toLowerCase()
        ]
      );

    form
      .getTextField("relatedPersonMobileNumber")
      .setText(relatedPersonDetails["relatedPersonMobileNumber"].toUpperCase());

    form
      .getTextField("relatedPersonEmailId")
      .setText(relatedPersonDetails["relatedPersonEmailId"].toUpperCase());

    form
      .getTextField("relatedPersonTelephoneOffice")
      .setText(
        relatedPersonDetails["relatedPersonTelephoneOffice"].toUpperCase()
      );

    form
      .getTextField("relatedPersonTelephoneRes")
      .setText(relatedPersonDetails["relatedPersonTelephoneRes"].toUpperCase());

    form
      .getTextField("declarationPlace")
      .setText(companyDetails["declarationPlace"].toUpperCase());

    form
      .getTextField("declarationDate")
      .setText(new Date().toLocaleDateString("en-GB"));
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  // Create a Blob from the bytes
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create a link element to download the filled PDF
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "second_related_person.pdf";
  link.click();
}

function formatDate(dateString) {
  // Split the date string into components [yyyy, mm, dd]
  const parts = dateString.split("-");

  // Rearrange the components to [dd, mm, yyyy]
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}
