import path from 'path';
import MMDBReader from 'mmdb-reader';

const pathToMmdb = process.env.NODE_ENV !== 'production' ? './files/GeoLite2-City.mmdb' : './resources/files/GeoLite2-City.mmdb';

const reader = new MMDBReader(path.resolve(pathToMmdb));

const codes = {
    AF: { flag: 'afghanistan', name: 'Afghanistan' },
    AL: { flag: 'albania', name: 'Albania' },
    DZ: { flag: 'algeria', name: 'Algeria' },
    DS: { flag: 'american-samoa', name: 'American Samoa' },
    AD: { flag: 'andorra', name: 'Andorra' },
    AO: { flag: 'angola', name: 'Angola' },
    AI: { flag: 'anguilla', name: 'Anguilla' },
    AQ: { flag: 'antarctica', name: 'Antarctica' },
    AG: { flag: 'antigua-and-barbuda', name: 'Antigua and Barbuda' },
    AR: { flag: 'argentina', name: 'Argentina' },
    AM: { flag: 'armenia', name: 'Armenia' },
    AW: { flag: 'aruba', name: 'Aruba' },
    AU: { flag: 'australia', name: 'Australia' },
    AT: { flag: 'austria', name: 'Austria' },
    AZ: { flag: 'azerbaijan', name: 'Azerbaijan' },
    BS: { flag: 'bahamas', name: 'Bahamas' },
    BH: { flag: 'bahrain', name: 'Bahrain' },
    BD: { flag: 'bangladesh', name: 'Bangladesh' },
    BB: { flag: 'barbados', name: 'Barbados' },
    BY: { flag: 'belarus', name: 'Belarus' },
    BE: { flag: 'belgium', name: 'Belgium' },
    BZ: { flag: 'belize', name: 'Belize' },
    BJ: { flag: 'benin', name: 'Benin' },
    BM: { flag: 'bermuda', name: 'Bermuda' },
    BT: { flag: 'bhutan', name: 'Bhutan' },
    BO: { flag: 'bolivia', name: 'Bolivia' },
    BA: { flag: 'bosnia-and-herzegovina', name: 'Bosnia and Herzegovina' },
    BW: { flag: 'botswana', name: 'Botswana' },
    BV: { flag: 'bouvet-island', name: 'Bouvet Island' },
    BR: { flag: 'brazil', name: 'Brazil' },
    IO: { flag: 'british-indian-ocean-territory', name: 'British Indian Ocean Territory' },
    BN: { flag: 'brunei-darussalam', name: 'Brunei Darussalam' },
    BG: { flag: 'bulgaria', name: 'Bulgaria' },
    BF: { flag: 'burkina-faso', name: 'Burkina Faso' },
    BI: { flag: 'burundi', name: 'Burundi' },
    KH: { flag: 'cambodia', name: 'Cambodia' },
    CM: { flag: 'cameroon', name: 'Cameroon' },
    CA: { flag: 'canada', name: 'Canada' },
    CV: { flag: 'cape-verde', name: 'Cape Verde' },
    KY: { flag: 'cayman-islands', name: 'Cayman Islands' },
    CF: { flag: 'central-african-republic', name: 'Central African Republic' },
    TD: { flag: 'chad', name: 'Chad' },
    CL: { flag: 'chile', name: 'Chile' },
    CN: { flag: 'china', name: 'China' },
    CX: { flag: 'christmas-island', name: 'Christmas Island' },
    CC: { flag: 'cocos-keeling-islands', name: 'Cocos (Keeling) Islands' },
    CO: { flag: 'colombia', name: 'Colombia' },
    KM: { flag: 'comoros', name: 'Comoros' },
    CG: { flag: 'congo', name: 'Congo' },
    CK: { flag: 'cook-islands', name: 'Cook Islands' },
    CR: { flag: 'costa-rica', name: 'Costa Rica' },
    HR: { flag: 'croatia-hrvatska', name: 'Croatia (Hrvatska)' },
    CU: { flag: 'cuba', name: 'Cuba' },
    CY: { flag: 'cyprus', name: 'Cyprus' },
    CZ: { flag: 'czech-republic', name: 'Czech Republic' },
    DK: { flag: 'denmark', name: 'Denmark' },
    DJ: { flag: 'djibouti', name: 'Djibouti' },
    DM: { flag: 'dominica', name: 'Dominica' },
    DO: { flag: 'dominican-republic', name: 'Dominican Republic' },
    TP: { flag: 'east-timor', name: 'East Timor' },
    EC: { flag: 'ecuador', name: 'Ecuador' },
    EG: { flag: 'egypt', name: 'Egypt' },
    SV: { flag: 'el-salvador', name: 'El Salvador' },
    GQ: { flag: 'equatorial-guinea', name: 'Equatorial Guinea' },
    ER: { flag: 'eritrea', name: 'Eritrea' },
    EE: { flag: 'estonia', name: 'Estonia' },
    ET: { flag: 'ethiopia', name: 'Ethiopia' },
    FK: { flag: 'falkland-islands-malvinas', name: 'Falkland Islands (Malvinas)' },
    FO: { flag: 'faroe-islands', name: 'Faroe Islands' },
    FJ: { flag: 'fiji', name: 'Fiji' },
    FI: { flag: 'finland', name: 'Finland' },
    FR: { flag: 'france', name: 'France' },
    FX: { flag: 'france-metropolitan', name: 'France, Metropolitan' },
    GF: { flag: 'french-guiana', name: 'French Guiana' },
    PF: { flag: 'french-polynesia', name: 'French Polynesia' },
    TF: { flag: 'french-southern-territories', name: 'French Southern Territories' },
    GA: { flag: 'gabon', name: 'Gabon' },
    GM: { flag: 'gambia', name: 'Gambia' },
    GE: { flag: 'georgia', name: 'Georgia' },
    DE: { flag: 'germany', name: 'Germany' },
    GH: { flag: 'ghana', name: 'Ghana' },
    GI: { flag: 'gibraltar', name: 'Gibraltar' },
    GK: { flag: 'guernsey', name: 'Guernsey' },
    GR: { flag: 'greece', name: 'Greece' },
    GL: { flag: 'greenland', name: 'Greenland' },
    GD: { flag: 'grenada', name: 'Grenada' },
    GP: { flag: 'guadeloupe', name: 'Guadeloupe' },
    GU: { flag: 'guam', name: 'Guam' },
    GT: { flag: 'guatemala', name: 'Guatemala' },
    GN: { flag: 'guinea', name: 'Guinea' },
    GW: { flag: 'guinea-bissau', name: 'Guinea-Bissau' },
    GY: { flag: 'guyana', name: 'Guyana' },
    HT: { flag: 'haiti', name: 'Haiti' },
    HM: { flag: 'heard-and-mc-donald-islands', name: 'Heard and Mc Donald Islands' },
    HN: { flag: 'honduras', name: 'Honduras' },
    HK: { flag: 'hong-kong', name: 'Hong Kong' },
    HU: { flag: 'hungary', name: 'Hungary' },
    IS: { flag: 'iceland', name: 'Iceland' },
    IN: { flag: 'india', name: 'India' },
    IM: { flag: 'isle-of-man', name: 'Isle of Man' },
    ID: { flag: 'indonesia', name: 'Indonesia' },
    IR: { flag: 'iran', name: 'Iran' },
    IQ: { flag: 'iraq', name: 'Iraq' },
    IE: { flag: 'ireland', name: 'Ireland' },
    IL: { flag: 'israel', name: 'Israel' },
    IT: { flag: 'italy', name: 'Italy' },
    CI: { flag: 'ivory-coast', name: 'Ivory Coast' },
    JE: { flag: 'jersey', name: 'Jersey' },
    JM: { flag: 'jamaica', name: 'Jamaica' },
    JP: { flag: 'japan', name: 'Japan' },
    JO: { flag: 'jordan', name: 'Jordan' },
    KZ: { flag: 'kazakhstan', name: 'Kazakhstan' },
    KE: { flag: 'kenya', name: 'Kenya' },
    KI: { flag: 'kiribati', name: 'Kiribati' },
    KP: { flag: 'korea-democratic-peoples-republic-of', name: "Korea, Democratic People's Republic of" },
    KR: { flag: 'korea', name: 'Korea' },
    XK: { flag: 'kosovo', name: 'Kosovo' },
    KW: { flag: 'kuwait', name: 'Kuwait' },
    KG: { flag: 'kyrgyzstan', name: 'Kyrgyzstan' },
    LA: { flag: 'laos', name: 'Laos' },
    LV: { flag: 'latvia', name: 'Latvia' },
    LB: { flag: 'lebanon', name: 'Lebanon' },
    LS: { flag: 'lesotho', name: 'Lesotho' },
    LR: { flag: 'liberia', name: 'Liberia' },
    LY: { flag: 'libyan-arab-jamahiriya', name: 'Libyan Arab Jamahiriya' },
    LI: { flag: 'liechtenstein', name: 'Liechtenstein' },
    LT: { flag: 'lithuania', name: 'Lithuania' },
    LU: { flag: 'luxembourg', name: 'Luxembourg' },
    MO: { flag: 'macau', name: 'Macau' },
    MK: { flag: 'macedonia', name: 'Macedonia' },
    MG: { flag: 'madagascar', name: 'Madagascar' },
    MW: { flag: 'malawi', name: 'Malawi' },
    MY: { flag: 'malaysia', name: 'Malaysia' },
    MV: { flag: 'maldives', name: 'Maldives' },
    ML: { flag: 'mali', name: 'Mali' },
    MT: { flag: 'malta', name: 'Malta' },
    MH: { flag: 'marshall-islands', name: 'Marshall Islands' },
    MQ: { flag: 'martinique', name: 'Martinique' },
    MR: { flag: 'mauritania', name: 'Mauritania' },
    MU: { flag: 'mauritius', name: 'Mauritius' },
    TY: { flag: 'mayotte', name: 'Mayotte' },
    MX: { flag: 'mexico', name: 'Mexico' },
    FM: { flag: 'micronesia-federated-states-of', name: 'Micronesia, Federated States of' },
    MD: { flag: 'moldova', name: 'Moldova' },
    MC: { flag: 'monaco', name: 'Monaco' },
    MN: { flag: 'mongolia', name: 'Mongolia' },
    ME: { flag: 'montenegro', name: 'Montenegro' },
    MS: { flag: 'montserrat', name: 'Montserrat' },
    MA: { flag: 'morocco', name: 'Morocco' },
    MZ: { flag: 'mozambique', name: 'Mozambique' },
    MM: { flag: 'myanmar', name: 'Myanmar' },
    NA: { flag: 'namibia', name: 'Namibia' },
    NR: { flag: 'nauru', name: 'Nauru' },
    NP: { flag: 'nepal', name: 'Nepal' },
    NL: { flag: 'netherlands', name: 'Netherlands' },
    AN: { flag: 'netherlands-antilles', name: 'Netherlands Antilles' },
    NC: { flag: 'new-caledonia', name: 'New Caledonia' },
    NZ: { flag: 'new-zealand', name: 'New Zealand' },
    NI: { flag: 'nicaragua', name: 'Nicaragua' },
    NE: { flag: 'niger', name: 'Niger' },
    NG: { flag: 'nigeria', name: 'Nigeria' },
    NU: { flag: 'niue', name: 'Niue' },
    NF: { flag: 'norfolk-island', name: 'Norfolk Island' },
    MP: { flag: 'northern-mariana-islands', name: 'Northern Mariana Islands' },
    NO: { flag: 'norway', name: 'Norway' },
    OM: { flag: 'oman', name: 'Oman' },
    PK: { flag: 'pakistan', name: 'Pakistan' },
    PW: { flag: 'palau', name: 'Palau' },
    PS: { flag: 'palestine', name: 'Palestine' },
    PA: { flag: 'panama', name: 'Panama' },
    PG: { flag: 'papua-new-guinea', name: 'Papua New Guinea' },
    PY: { flag: 'paraguay', name: 'Paraguay' },
    PE: { flag: 'peru', name: 'Peru' },
    PH: { flag: 'philippines', name: 'Philippines' },
    PN: { flag: 'pitcairn', name: 'Pitcairn' },
    PL: { flag: 'poland', name: 'Poland' },
    PT: { flag: 'portugal', name: 'Portugal' },
    PR: { flag: 'puerto-rico', name: 'Puerto Rico' },
    QA: { flag: 'qatar', name: 'Qatar' },
    RE: { flag: 'reunion', name: 'Reunion' },
    RO: { flag: 'romania', name: 'Romania' },
    RU: { flag: 'russian-federation', name: 'Russian Federation' },
    RW: { flag: 'rwanda', name: 'Rwanda' },
    KN: { flag: 'saint-kitts-and-nevis', name: 'Saint Kitts and Nevis' },
    LC: { flag: 'saint-lucia', name: 'Saint Lucia' },
    VC: { flag: 'saint-vincent-and-the-grenadines', name: 'Saint Vincent and the Grenadines' },
    WS: { flag: 'samoa', name: 'Samoa' },
    SM: { flag: 'san-marino', name: 'San Marino' },
    ST: { flag: 'sao-tome-and-principe', name: 'Sao Tome and Principe' },
    SA: { flag: 'saudi-arabia', name: 'Saudi Arabia' },
    SN: { flag: 'senegal', name: 'Senegal' },
    RS: { flag: 'serbia', name: 'Serbia' },
    SC: { flag: 'seychelles', name: 'Seychelles' },
    SL: { flag: 'sierra-leone', name: 'Sierra Leone' },
    SG: { flag: 'singapore', name: 'Singapore' },
    SK: { flag: 'slovakia', name: 'Slovakia' },
    SI: { flag: 'slovenia', name: 'Slovenia' },
    SB: { flag: 'solomon-islands', name: 'Solomon Islands' },
    SO: { flag: 'somalia', name: 'Somalia' },
    ZA: { flag: 'south-africa', name: 'South Africa' },
    GS: { flag: 'south-georgia-south-sandwich-islands', name: 'South Georgia South Sandwich Islands' },
    ES: { flag: 'spain', name: 'Spain' },
    LK: { flag: 'sri-lanka', name: 'Sri Lanka' },
    SH: { flag: 'st-helena', name: 'St. Helena' },
    PM: { flag: 'st-pierre-and-miquelon', name: 'St. Pierre and Miquelon' },
    SD: { flag: 'sudan', name: 'Sudan' },
    SR: { flag: 'suriname', name: 'Suriname' },
    SJ: { flag: 'svalbard-and-jan-mayen-islands', name: 'Svalbard and Jan Mayen Islands' },
    SZ: { flag: 'swaziland', name: 'Swaziland' },
    SE: { flag: 'sweden', name: 'Sweden' },
    CH: { flag: 'switzerland', name: 'Switzerland' },
    SY: { flag: 'syria', name: 'Syria' },
    TW: { flag: 'taiwan', name: 'Taiwan' },
    TJ: { flag: 'tajikistan', name: 'Tajikistan' },
    TZ: { flag: 'tanzania', name: 'Tanzania' },
    TH: { flag: 'thailand', name: 'Thailand' },
    TG: { flag: 'togo', name: 'Togo' },
    TK: { flag: 'tokelau', name: 'Tokelau' },
    TO: { flag: 'tonga', name: 'Tonga' },
    TT: { flag: 'trinidad-and-tobago', name: 'Trinidad and Tobago' },
    TN: { flag: 'tunisia', name: 'Tunisia' },
    TR: { flag: 'turkey', name: 'Turkey' },
    TM: { flag: 'turkmenistan', name: 'Turkmenistan' },
    TC: { flag: 'turks-and-caicos-islands', name: 'Turks and Caicos Islands' },
    TV: { flag: 'tuvalu', name: 'Tuvalu' },
    UG: { flag: 'uganda', name: 'Uganda' },
    UA: { flag: 'ukraine', name: 'Ukraine' },
    AE: { flag: 'united-arab-emirates', name: 'United Arab Emirates' },
    GB: { flag: 'united-kingdom', name: 'United Kingdom' },
    US: { flag: 'united-states', name: 'United States' },
    UM: { flag: 'united-states-minor-outlying-islands', name: 'United States minor outlying islands' },
    UY: { flag: 'uruguay', name: 'Uruguay' },
    UZ: { flag: 'uzbekistan', name: 'Uzbekistan' },
    VU: { flag: 'vanuatu', name: 'Vanuatu' },
    VA: { flag: 'vatican-city-state', name: 'Vatican City State' },
    VE: { flag: 'venezuela', name: 'Venezuela' },
    VN: { flag: 'vietnam', name: 'Vietnam' },
    VG: { flag: 'virgin-islands-british', name: 'Virgin Islands (British)' },
    VI: { flag: 'virgin-islands-us', name: 'Virgin Islands (U.S.)' },
    WF: { flag: 'wallis-and-futuna-islands', name: 'Wallis and Futuna Islands' },
    EH: { flag: 'western-sahara', name: 'Western Sahara' },
    YE: { flag: 'yemen', name: 'Yemen' },
    ZR: { flag: 'zaire', name: 'Zaire' },
    ZM: { flag: 'zambia', name: 'Zambia' },
    ZW: { flag: 'zimbabwe', name: 'Zimbabwe' },
    AS: { flag: 'american-samoa', name: 'American Samoa' },
    AX: { flag: 'aland-islands', name: 'Aland Islands' },
    BQ: { flag: 'bonaire-sint-eustatius-saba', name: 'Bonaire, Sint Eustatius, Saba' },
    CD: { flag: 'congo-the-democratic-republic-of-the', name: 'Congo The Democratic Republic of The' },
    CW: { flag: 'curacao', name: 'Curacao' },
    EU: { flag: 'european-union', name: 'European Union' },
    GG: { flag: 'guernsey', name: 'Guernsey' },
    MF: { flag: 'saint-martin', name: 'Saint Martin' },
    SS: { flag: 'south-sudan', name: 'South Sudan' },
    SX: { flag: 'sint-maarten', name: 'Sint Maarten' },
    TL: { flag: 'timor-leste', name: 'Timor-leste' },
    YT: { flag: 'mayotte', name: 'Mayotte' },
    ZZ: { flag: 'reserved', name: 'Reserved' }
};

export const lookup = ip => {
    try {
        const { city: city = '', country } = reader.lookup(ip);

        const extractCity = city => {
            try {
                return city.names.en;
            } catch (error) {
                return '';
            }
        };

        return {
            city: extractCity(city),
            ...codes[country.iso_code]
        };
    } catch (error) {
        return {
            city: '',
            ...codes.ZZ
        };
    }
};