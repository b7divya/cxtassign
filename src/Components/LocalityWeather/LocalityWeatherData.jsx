const weatherStations = [
    {
      "cityName": "Delhi NCR",
      "localityName": "Sarita Vihar",
      "localityId": "ZWL005764",
      "latitude": 28.531759,
      "longitude": 77.293973,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Faridabad Sector 41-50",
      "localityId": "ZWL008752",
      "latitude": 28.460895,
      "longitude": 77.304764,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "New Friends Colony",
      "localityId": "ZWL005996",
      "latitude": 28.565268,
      "longitude": 77.274971,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 26 (Noida)",
      "localityId": "ZWL005243",
      "latitude": 28.574404,
      "longitude": 77.334178,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "New Industrial Town",
      "localityId": "ZWL009032",
      "latitude": 28.375702,
      "longitude": 77.299442,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Tilak Nagar",
      "localityId": "ZWL005428",
      "latitude": 28.641372,
      "longitude": 77.094689,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 10, Gurgaon",
      "localityId": "ZWL001073",
      "latitude": 28.436077,
      "longitude": 76.996757,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Ashok Vihar, Delhi",
      "localityId": "ZWL001319",
      "latitude": 28.684453,
      "longitude": 77.174418,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Kalkaji",
      "localityId": "ZWL004800",
      "latitude": 28.529029,
      "longitude": 77.258939,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 53",
      "localityId": "ZWL003118",
      "latitude": 28.442743,
      "longitude": 77.104379,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 49",
      "localityId": "ZWL002091",
      "latitude": 28.408012,
      "longitude": 77.050064,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Vasundhara",
      "localityId": "ZWL002662",
      "latitude": 28.665225,
      "longitude": 77.366782,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Rajinder Nagar",
      "localityId": "ZWL001404",
      "latitude": 28.640732,
      "longitude": 77.182900,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Safdarjung Enclave",
      "localityId": "ZWL008963",
      "latitude": 28.562608,
      "longitude": 77.191457,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Connaught Place",
      "localityId": "ZWL006538",
      "latitude": 28.630630,
      "longitude": 77.220640,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 66",
      "localityId": "ZWL003075",
      "latitude": 28.380856,
      "longitude": 77.062751,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 57",
      "localityId": "ZWL003721",
      "latitude": 28.422100,
      "longitude": 77.082740,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Moti Bagh, Delhi",
      "localityId": "ZWL006396",
      "latitude": 28.575774,
      "longitude": 77.180697,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Patel Nagar, Delhi",
      "localityId": "ZWL004535",
      "latitude": 28.652848,
      "longitude": 77.167909,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Greater Noida",
      "localityId": "ZWL008554",
      "latitude": 28.456171,
      "longitude": 77.521577,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Karkardooma, Delhi",
      "localityId": "ZWL004533",
      "latitude": 28.656829,
      "longitude": 77.310553,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Tigaon",
      "localityId": "ZWL002179",
      "latitude": 28.417120,
      "longitude": 77.412569,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 50 (Noida)",
      "localityId": "ZWL007487",
      "latitude": 28.569103,
      "longitude": 77.364876,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Vasant Kunj, Delhi",
      "localityId": "ZWL007120",
      "latitude": 28.524633,
      "longitude": 77.151206,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Dwarka, Delhi",
      "localityId": "ZWL007486",
      "latitude": 28.594467,
      "longitude": 77.047747,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 15",
      "localityId": "ZWL006287",
      "latitude": 28.457927,
      "longitude": 77.034816,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Mayur Vihar Phase III",
      "localityId": "ZWL002146",
      "latitude": 28.606000,
      "longitude": 77.323675,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Crossing Republik",
      "localityId": "ZWL008405",
      "latitude": 28.635043,
      "longitude": 77.419056,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 28",
      "localityId": "ZWL004455",
      "latitude": 28.473457,
      "longitude": 77.087532,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Palam Vihar, Gurgaon",
      "localityId": "ZWL005087",
      "latitude": 28.508782,
      "longitude": 77.033506,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 63 (Noida)",
      "localityId": "ZWL009648",
      "latitude": 28.621672,
      "longitude": 77.386474,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Raj Nagar, Ghaziabad",
      "localityId": "ZWL008317",
      "latitude": 28.689174,
      "longitude": 77.428976,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 128",
      "localityId": "ZWL005878",
      "latitude": 28.526706,
      "longitude": 77.354868,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 48, Gurgaon",
      "localityId": "ZWL003610",
      "latitude": 28.416008,
      "longitude": 77.032164,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Kirti Nagar",
      "localityId": "ZWL005971",
      "latitude": 28.654433,
      "longitude": 77.142367,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Faridabad Sector 81-89",
      "localityId": "ZWL003626",
      "latitude": 28.397247,
      "longitude": 77.345569,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "GK I",
      "localityId": "ZWL005876",
      "latitude": 28.550911,
      "longitude": 77.235272,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Mohan Estate",
      "localityId": "ZWL006295",
      "latitude": 28.494788,
      "longitude": 77.312727,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Mukherjee Nagar",
      "localityId": "ZWL007653",
      "latitude": 28.702971,
      "longitude": 77.209740,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Mehrauli",
      "localityId": "ZWL006697",
      "latitude": 28.524426,
      "longitude": 77.183996,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Burari",
      "localityId": "ZWL003259",
      "latitude": 28.753669,
      "longitude": 77.191037,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Gaur city, Ghaziabad",
      "localityId": "ZWL004759",
      "latitude": 28.607703,
      "longitude": 77.434385,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "GK II",
      "localityId": "ZWL004477",
      "latitude": 28.533936,
      "longitude": 77.243800,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Rohini",
      "localityId": "ZWL005077",
      "latitude": 28.723712,
      "longitude": 77.104596,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Rangpuri",
      "localityId": "ZWL008191",
      "latitude": 28.533976,
      "longitude": 77.119516,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 46",
      "localityId": "ZWL006092",
      "latitude": 28.438586,
      "longitude": 77.060773,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 62 (Noida)",
      "localityId": "ZWL001549",
      "latitude": 28.611088,
      "longitude": 77.369652,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Shalimar Bagh",
      "localityId": "ZWL001036",
      "latitude": 28.720312,
      "longitude": 77.164849,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Model Town",
      "localityId": "ZWL006996",
      "latitude": 28.717232,
      "longitude": 77.194643,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Faridabad Sector 16-20",
      "localityId": "ZWL007566",
      "latitude": 28.422437,
      "longitude": 77.310113,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 2 (Noida)",
      "localityId": "ZWL009852",
      "latitude": 28.581459,
      "longitude": 77.316720,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Govindpuram",
      "localityId": "ZWL008648",
      "latitude": 28.689317,
      "longitude": 77.486930,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Gwal Pahari",
      "localityId": "ZWL009728",
      "latitude": 28.435122,
      "longitude": 77.136308,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Nehru Nagar",
      "localityId": "ZWL006868",
      "latitude": 28.653441,
      "longitude": 77.449969,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Chittaranjan Park",
      "localityId": "ZWL002067",
      "latitude": 28.537530,
      "longitude": 77.249070,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "IMT Manesar",
      "localityId": "ZWL008791",
      "latitude": 28.384492,
      "longitude": 76.941950,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 73 Z Kitchen",
      "localityId": "ZWL003043",
      "latitude": 28.580105,
      "longitude": 77.385436,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 51",
      "localityId": "ZWL004159",
      "latitude": 28.430042,
      "longitude": 77.065213,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Ballabhgarh",
      "localityId": "ZWL005960",
      "latitude": 28.343049,
      "longitude": 77.330317,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Nangloi",
      "localityId": "ZWL009293",
      "latitude": 28.659524,
      "longitude": 77.060800,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Uttam Nagar",
      "localityId": "ZWL001663",
      "latitude": 28.616774,
      "longitude": 77.057136,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 47",
      "localityId": "ZWL005762",
      "latitude": 28.424524,
      "longitude": 77.050065,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Paharganj",
      "localityId": "ZWL005345",
      "latitude": 28.645112,
      "longitude": 77.212824,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 25",
      "localityId": "ZWL008225",
      "latitude": 28.484268,
      "longitude": 77.084693,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Pitampura",
      "localityId": "ZWL001933",
      "latitude": 28.688724,
      "longitude": 77.138225,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Shahdara",
      "localityId": "ZWL003591",
      "latitude": 28.688657,
      "longitude": 77.278267,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 31",
      "localityId": "ZWL007061",
      "latitude": 28.442946,
      "longitude": 77.057195,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 23",
      "localityId": "ZWL008476",
      "latitude": 28.509080,
      "longitude": 77.057138,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 12 (Noida)",
      "localityId": "ZWL009008",
      "latitude": 28.599952,
      "longitude": 77.343188,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Mayur Vihar Phase II",
      "localityId": "ZWL005323",
      "latitude": 28.613695,
      "longitude": 77.302775,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Faridabad Sector 12-15",
      "localityId": "ZWL001412",
      "latitude": 28.394334,
      "longitude": 77.324016,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "DLF PHASE 1 (SECTOR 26)",
      "localityId": "ZWL005925",
      "latitude": 28.477910,
      "longitude": 77.103843,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Laxmi Nagar",
      "localityId": "ZWL008716",
      "latitude": 28.627366,
      "longitude": 77.279200,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Karol Bagh",
      "localityId": "ZWL009339",
      "latitude": 28.647924,
      "longitude": 77.190463,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Chhatarpur",
      "localityId": "ZWL009096",
      "latitude": 28.497203,
      "longitude": 77.171629,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Paschim Vihar",
      "localityId": "ZWL006720",
      "latitude": 28.665591,
      "longitude": 77.098478,
      "deviceType": "Rain gauge system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 1, Noida",
      "localityId": "ZWL002908",
      "latitude": 28.573663,
      "longitude": 77.415427,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "South Extension I",
      "localityId": "ZWL001186",
      "latitude": 28.578498,
      "longitude": 77.223627,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Sector 18",
      "localityId": "ZWL004789",
      "latitude": 28.495291,
      "longitude": 77.069729,
      "deviceType": "Automated weather system"
    },
    {
      "cityName": "Delhi NCR",
      "localityName": "Kamla Nagar",
      "localityId": "ZWL008978",
      "latitude": 28.676018,
      "longitude": 77.208446,
      "deviceType": "Automated weather system"
    }
  ]


  export default weatherStations;