(function(e){function a(a){for(var t,r,s=a[0],d=a[1],l=a[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);c&&c(a);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,a=0;a<i.length;a++){for(var o=i[a],t=!0,s=1;s<o.length;s++){var d=o[s];0!==n[d]&&(t=!1)}t&&(i.splice(a--,1),e=r(r.s=o[0]))}return e}var t={},n={app:0},i=[];function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,a,o){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(o,t,function(a){return e[a]}.bind(null,t));return o},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var c=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"034f":function(e,a,o){"use strict";var t=o("85ec"),n=o.n(t);n.a},"185e":function(e,a,o){"use strict";var t=o("1c85"),n=o.n(t);n.a},"1c85":function(e,a,o){},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("2b0e"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("app-header"),o("router-view"),o("app-footer")],1)},i=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"header"}},[t("router-link",{staticClass:"router-link",attrs:{to:"/main"}},[t("img",{staticClass:"logo link",attrs:{src:o("7e1f"),alt:""}})]),t("router-link",{staticClass:"router-link",attrs:{to:"/main"}},[t("h3",{staticClass:"link"},[e._v("HOME")])]),t("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t("h3",{staticClass:"link"},[e._v("ABOUT")])])],1)},s=[],d={data:function(){return{logo:""}}},l=d,c=(o("77a0"),o("2877")),u=Object(c["a"])(l,r,s,!1,null,"196b43ce",null),m=u.exports,C=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"footer"}},[o("p",[e._v(" Created by "),o("a",{attrs:{target:"_blank",href:"https://github.com/Korak-997"}},[e._v("Korak Kurani (Dani)")])])])}],h={data:function(){return{}}},p=h,v=(o("8e7c"),Object(c["a"])(p,C,N,!1,null,"4cd9d682",null)),f=v.exports,b={name:"App",components:{"app-header":m,"app-footer":f}},g=b,S=(o("034f"),Object(c["a"])(g,n,i,!1,null,null,null)),M=S.exports,_=o("8c4f"),y=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"main"}},[e._m(0),o("div",{staticClass:"search-boxes"},[o("div",{staticClass:"manual"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.suggestion,expression:"suggestion"}],staticClass:"suggestion"},[o("ul",e._l(e.filtered,(function(a){return o("li",{key:a.id},[e._v(e._s(a[0]))])})),0)]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"},{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}],attrs:{type:"text",id:"search-input",placeholder:"Germany or DE"},domProps:{value:e.search},on:{keyup:e.showSuggestion,input:function(a){a.target.composing||(e.search=a.target.value)}}}),o("button",{directives:[{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}],staticClass:"search-btn",on:{click:e.getLatestM}},[e._v("SEARCH")]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"errorMsg"},[o("p",[e._v("Sorry !!!")]),o("p",[e._v("There has been an Error")]),o("P",[e._v("We do not have Data for the Choosen Country")]),o("p",[e._v("Or maybe there is an Error in our Servers.")]),o("button",{staticClass:"error-btn",on:{click:e.removeError}},[e._v("X")])],1)]),o("div",{staticClass:"defaults"},[o("div",{staticClass:"search-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.noLocation,expression:"!noLocation"}]},[o("h3",[e._v("Current Location : "+e._s(e.currentLocation))]),o("button",{staticClass:"search-btn",on:{click:e.getLatestCL}},[e._v("LATEST")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.noLocation,expression:"noLocation"}]},[o("p",[e._v("Sorry were not able to get your Location !")]),o("p",[e._v("Please try to refresh the Page and allow locations. So we can show you the Statics for your Current Location.")])])]),o("div",{staticClass:"search-box"},[o("h3",[e._v("Worldwide Statics")]),o("button",{staticClass:"search-btn",on:{click:e.getLatestW}},[e._v("LATEST")])])])]),o("div",{staticClass:"result-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[o("H3",[e._v("Loading please wait ...")]),e._m(1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[o("h3",[e._v("Latest")]),o("div",{staticClass:"results"},[o("div",{staticClass:"result"},[o("h5",[e._v("CONFIRMED:")]),o("p",[e._v(e._s(e.location))]),o("p",[e._v(e._s(e.confirmed))])]),o("div",{staticClass:"result"},[o("h5",[e._v("DEATHS:")]),o("p",[e._v(e._s(e.location))]),o("p",[e._v(e._s(e.deaths))])])])])])])},T=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"info"},[o("h1",[e._v("Corona Tracker")]),o("p",[e._v("Please Hit Latest to get Latest Data")]),o("p",[e._v("Also if you like you can Search for latest Data in your Desired Country.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"sk-cube-grid"},[o("div",{staticClass:"sk-cube sk-cube1"}),o("div",{staticClass:"sk-cube sk-cube2"}),o("div",{staticClass:"sk-cube sk-cube3"}),o("div",{staticClass:"sk-cube sk-cube4"}),o("div",{staticClass:"sk-cube sk-cube5"}),o("div",{staticClass:"sk-cube sk-cube6"}),o("div",{staticClass:"sk-cube sk-cube7"}),o("div",{staticClass:"sk-cube sk-cube8"}),o("div",{staticClass:"sk-cube sk-cube9"})])}],k=(o("99af"),o("4de4"),o("4160"),o("d3b7"),o("ac1f"),o("466d"),o("841c"),o("159b"),[{Code:"AF",Name:"Afghanistan"},{Code:"AX",Name:"Åland Islands"},{Code:"AL",Name:"Albania"},{Code:"DZ",Name:"Algeria"},{Code:"AS",Name:"American Samoa"},{Code:"AD",Name:"Andorra"},{Code:"AO",Name:"Angola"},{Code:"AI",Name:"Anguilla"},{Code:"AQ",Name:"Antarctica"},{Code:"AG",Name:"Antigua and Barbuda"},{Code:"AR",Name:"Argentina"},{Code:"AM",Name:"Armenia"},{Code:"AW",Name:"Aruba"},{Code:"AU",Name:"Australia"},{Code:"AT",Name:"Austria"},{Code:"AZ",Name:"Azerbaijan"},{Code:"BS",Name:"Bahamas"},{Code:"BH",Name:"Bahrain"},{Code:"BD",Name:"Bangladesh"},{Code:"BB",Name:"Barbados"},{Code:"BY",Name:"Belarus"},{Code:"BE",Name:"Belgium"},{Code:"BZ",Name:"Belize"},{Code:"BJ",Name:"Benin"},{Code:"BM",Name:"Bermuda"},{Code:"BT",Name:"Bhutan"},{Code:"BO",Name:"Bolivia, Plurinational State of"},{Code:"BQ",Name:"Bonaire, Sint Eustatius and Saba"},{Code:"BA",Name:"Bosnia and Herzegovina"},{Code:"BW",Name:"Botswana"},{Code:"BV",Name:"Bouvet Island"},{Code:"BR",Name:"Brazil"},{Code:"IO",Name:"British Indian Ocean Territory"},{Code:"BN",Name:"Brunei Darussalam"},{Code:"BG",Name:"Bulgaria"},{Code:"BF",Name:"Burkina Faso"},{Code:"BI",Name:"Burundi"},{Code:"KH",Name:"Cambodia"},{Code:"CM",Name:"Cameroon"},{Code:"CA",Name:"Canada"},{Code:"CV",Name:"Cape Verde"},{Code:"KY",Name:"Cayman Islands"},{Code:"CF",Name:"Central African Republic"},{Code:"TD",Name:"Chad"},{Code:"CL",Name:"Chile"},{Code:"CN",Name:"China"},{Code:"CX",Name:"Christmas Island"},{Code:"CC",Name:"Cocos (Keeling) Islands"},{Code:"CO",Name:"Colombia"},{Code:"KM",Name:"Comoros"},{Code:"CG",Name:"Congo"},{Code:"CD",Name:"Congo, the Democratic Republic of the"},{Code:"CK",Name:"Cook Islands"},{Code:"CR",Name:"Costa Rica"},{Code:"CI",Name:"Côte d'Ivoire"},{Code:"HR",Name:"Croatia"},{Code:"CU",Name:"Cuba"},{Code:"CW",Name:"Curaçao"},{Code:"CY",Name:"Cyprus"},{Code:"CZ",Name:"Czech Republic"},{Code:"DK",Name:"Denmark"},{Code:"DJ",Name:"Djibouti"},{Code:"DM",Name:"Dominica"},{Code:"DO",Name:"Dominican Republic"},{Code:"EC",Name:"Ecuador"},{Code:"EG",Name:"Egypt"},{Code:"SV",Name:"El Salvador"},{Code:"GQ",Name:"Equatorial Guinea"},{Code:"ER",Name:"Eritrea"},{Code:"EE",Name:"Estonia"},{Code:"ET",Name:"Ethiopia"},{Code:"FK",Name:"Falkland Islands (Malvinas)"},{Code:"FO",Name:"Faroe Islands"},{Code:"FJ",Name:"Fiji"},{Code:"FI",Name:"Finland"},{Code:"FR",Name:"France"},{Code:"GF",Name:"French Guiana"},{Code:"PF",Name:"French Polynesia"},{Code:"TF",Name:"French Southern Territories"},{Code:"GA",Name:"Gabon"},{Code:"GM",Name:"Gambia"},{Code:"GE",Name:"Georgia"},{Code:"DE",Name:"Germany"},{Code:"GH",Name:"Ghana"},{Code:"GI",Name:"Gibraltar"},{Code:"GR",Name:"Greece"},{Code:"GL",Name:"Greenland"},{Code:"GD",Name:"Grenada"},{Code:"GP",Name:"Guadeloupe"},{Code:"GU",Name:"Guam"},{Code:"GT",Name:"Guatemala"},{Code:"GG",Name:"Guernsey"},{Code:"GN",Name:"Guinea"},{Code:"GW",Name:"Guinea-Bissau"},{Code:"GY",Name:"Guyana"},{Code:"HT",Name:"Haiti"},{Code:"HM",Name:"Heard Island and McDonald Islands"},{Code:"VA",Name:"Holy See (Vatican City State)"},{Code:"HN",Name:"Honduras"},{Code:"HK",Name:"Hong Kong"},{Code:"HU",Name:"Hungary"},{Code:"IS",Name:"Iceland"},{Code:"IN",Name:"India"},{Code:"ID",Name:"Indonesia"},{Code:"IR",Name:"Iran, Islamic Republic of"},{Code:"IQ",Name:"Iraq"},{Code:"IE",Name:"Ireland"},{Code:"IM",Name:"Isle of Man"},{Code:"IL",Name:"Israel"},{Code:"IT",Name:"Italy"},{Code:"JM",Name:"Jamaica"},{Code:"JP",Name:"Japan"},{Code:"JE",Name:"Jersey"},{Code:"JO",Name:"Jordan"},{Code:"KZ",Name:"Kazakhstan"},{Code:"KE",Name:"Kenya"},{Code:"KI",Name:"Kiribati"},{Code:"KP",Name:"Korea, Democratic People's Republic of"},{Code:"KR",Name:"Korea, Republic of"},{Code:"KW",Name:"Kuwait"},{Code:"KG",Name:"Kyrgyzstan"},{Code:"LA",Name:"Lao People's Democratic Republic"},{Code:"LV",Name:"Latvia"},{Code:"LB",Name:"Lebanon"},{Code:"LS",Name:"Lesotho"},{Code:"LR",Name:"Liberia"},{Code:"LY",Name:"Libya"},{Code:"LI",Name:"Liechtenstein"},{Code:"LT",Name:"Lithuania"},{Code:"LU",Name:"Luxembourg"},{Code:"MO",Name:"Macao"},{Code:"MK",Name:"Macedonia, the Former Yugoslav Republic of"},{Code:"MG",Name:"Madagascar"},{Code:"MW",Name:"Malawi"},{Code:"MY",Name:"Malaysia"},{Code:"MV",Name:"Maldives"},{Code:"ML",Name:"Mali"},{Code:"MT",Name:"Malta"},{Code:"MH",Name:"Marshall Islands"},{Code:"MQ",Name:"Martinique"},{Code:"MR",Name:"Mauritania"},{Code:"MU",Name:"Mauritius"},{Code:"YT",Name:"Mayotte"},{Code:"MX",Name:"Mexico"},{Code:"FM",Name:"Micronesia, Federated States of"},{Code:"MD",Name:"Moldova, Republic of"},{Code:"MC",Name:"Monaco"},{Code:"MN",Name:"Mongolia"},{Code:"ME",Name:"Montenegro"},{Code:"MS",Name:"Montserrat"},{Code:"MA",Name:"Morocco"},{Code:"MZ",Name:"Mozambique"},{Code:"MM",Name:"Myanmar"},{Code:"NA",Name:"Namibia"},{Code:"NR",Name:"Nauru"},{Code:"NP",Name:"Nepal"},{Code:"NL",Name:"Netherlands"},{Code:"NC",Name:"New Caledonia"},{Code:"NZ",Name:"New Zealand"},{Code:"NI",Name:"Nicaragua"},{Code:"NE",Name:"Niger"},{Code:"NG",Name:"Nigeria"},{Code:"NU",Name:"Niue"},{Code:"NF",Name:"Norfolk Island"},{Code:"MP",Name:"Northern Mariana Islands"},{Code:"NO",Name:"Norway"},{Code:"OM",Name:"Oman"},{Code:"PK",Name:"Pakistan"},{Code:"PW",Name:"Palau"},{Code:"PS",Name:"Palestine, State of"},{Code:"PA",Name:"Panama"},{Code:"PG",Name:"Papua New Guinea"},{Code:"PY",Name:"Paraguay"},{Code:"PE",Name:"Peru"},{Code:"PH",Name:"Philippines"},{Code:"PN",Name:"Pitcairn"},{Code:"PL",Name:"Poland"},{Code:"PT",Name:"Portugal"},{Code:"PR",Name:"Puerto Rico"},{Code:"QA",Name:"Qatar"},{Code:"RE",Name:"Réunion"},{Code:"RO",Name:"Romania"},{Code:"RU",Name:"Russian Federation"},{Code:"RW",Name:"Rwanda"},{Code:"BL",Name:"Saint Barthélemy"},{Code:"SH",Name:"Saint Helena, Ascension and Tristan da Cunha"},{Code:"KN",Name:"Saint Kitts and Nevis"},{Code:"LC",Name:"Saint Lucia"},{Code:"MF",Name:"Saint Martin (French part)"},{Code:"PM",Name:"Saint Pierre and Miquelon"},{Code:"VC",Name:"Saint Vincent and the Grenadines"},{Code:"WS",Name:"Samoa"},{Code:"SM",Name:"San Marino"},{Code:"ST",Name:"Sao Tome and Principe"},{Code:"SA",Name:"Saudi Arabia"},{Code:"SN",Name:"Senegal"},{Code:"RS",Name:"Serbia"},{Code:"SC",Name:"Seychelles"},{Code:"SL",Name:"Sierra Leone"},{Code:"SG",Name:"Singapore"},{Code:"SX",Name:"Sint Maarten (Dutch part)"},{Code:"SK",Name:"Slovakia"},{Code:"SI",Name:"Slovenia"},{Code:"SB",Name:"Solomon Islands"},{Code:"SO",Name:"Somalia"},{Code:"ZA",Name:"South Africa"},{Code:"GS",Name:"South Georgia and the South Sandwich Islands"},{Code:"SS",Name:"South Sudan"},{Code:"ES",Name:"Spain"},{Code:"LK",Name:"Sri Lanka"},{Code:"SD",Name:"Sudan"},{Code:"SR",Name:"Suriname"},{Code:"SJ",Name:"Svalbard and Jan Mayen"},{Code:"SZ",Name:"Swaziland"},{Code:"SE",Name:"Sweden"},{Code:"CH",Name:"Switzerland"},{Code:"SY",Name:"Syrian Arab Republic"},{Code:"TW",Name:"Taiwan, Province of China"},{Code:"TJ",Name:"Tajikistan"},{Code:"TZ",Name:"Tanzania, United Republic of"},{Code:"TH",Name:"Thailand"},{Code:"TL",Name:"Timor-Leste"},{Code:"TG",Name:"Togo"},{Code:"TK",Name:"Tokelau"},{Code:"TO",Name:"Tonga"},{Code:"TT",Name:"Trinidad and Tobago"},{Code:"TN",Name:"Tunisia"},{Code:"TR",Name:"Turkey"},{Code:"TM",Name:"Turkmenistan"},{Code:"TC",Name:"Turks and Caicos Islands"},{Code:"TV",Name:"Tuvalu"},{Code:"UG",Name:"Uganda"},{Code:"UA",Name:"Ukraine"},{Code:"AE",Name:"United Arab Emirates"},{Code:"GB",Name:"United Kingdom"},{Code:"US",Name:"United States"},{Code:"UM",Name:"United States Minor Outlying Islands"},{Code:"UY",Name:"Uruguay"},{Code:"UZ",Name:"Uzbekistan"},{Code:"VU",Name:"Vanuatu"},{Code:"VE",Name:"Venezuela, Bolivarian Republic of"},{Code:"VN",Name:"Viet Nam"},{Code:"VG",Name:"Virgin Islands, British"},{Code:"VI",Name:"Virgin Islands, U.S."},{Code:"WF",Name:"Wallis and Futuna"},{Code:"EH",Name:"Western Sahara"},{Code:"YE",Name:"Yemen"},{Code:"ZM",Name:"Zambia"},{Code:"ZW",Name:"Zimbabwe"}]),A=k,G=["BD : Bangladesh","BE : Belgium","BF : Burkina Faso","BG : Bulgaria","BA : Bosnia and Herzegovina","BB : Barbados","WF : Wallis and Futuna","BL : Saint Barthelemy","BM : Bermuda","BN : Brunei","BO : Bolivia","BH : Bahrain","BI : Burundi","BJ : Benin","BT : Bhutan","JM : Jamaica","BV : Bouvet Island","BW : Botswana","WS : Samoa","BQ : Bonaire, Saint Eustatius and Saba ","BR : Brazil","BS : Bahamas","JE : Jersey","BY : Belarus","BZ : Belize","RU : Russia","RW : Rwanda","RS : Serbia","TL : East Timor","RE : Reunion","TM : Turkmenistan","TJ : Tajikistan","RO : Romania","TK : Tokelau","GW : Guinea-Bissau","GU : Guam","GT : Guatemala","GS : South Georgia and the South Sandwich Islands","GR : Greece","GQ : Equatorial Guinea","GP : Guadeloupe","JP : Japan","GY : Guyana","GG : Guernsey","GF : French Guiana","GE : Georgia","GD : Grenada","GB : United Kingdom","GA : Gabon","SV : El Salvador","GN : Guinea","GM : Gambia","GL : Greenland","GI : Gibraltar","GH : Ghana","OM : Oman","TN : Tunisia","JO : Jordan","HR : Croatia","HT : Haiti","HU : Hungary","HK : Hong Kong","HN : Honduras","HM : Heard Island and McDonald Islands","VE : Venezuela","PR : Puerto Rico","PS : Palestinian Territory","PW : Palau","PT : Portugal","SJ : Svalbard and Jan Mayen","PY : Paraguay","IQ : Iraq","PA : Panama","PF : French Polynesia","PG : Papua New Guinea","PE : Peru","PK : Pakistan","PH : Philippines","PN : Pitcairn","PL : Poland","PM : Saint Pierre and Miquelon","ZM : Zambia","EH : Western Sahara","EE : Estonia","EG : Egypt","ZA : South Africa","EC : Ecuador","IT : Italy","VN : Vietnam","SB : Solomon Islands","ET : Ethiopia","SO : Somalia","ZW : Zimbabwe","SA : Saudi Arabia","ES : Spain","ER : Eritrea","ME : Montenegro","MD : Moldova","MG : Madagascar","MF : Saint Martin","MA : Morocco","MC : Monaco","UZ : Uzbekistan","MM : Myanmar","ML : Mali","MO : Macao","MN : Mongolia","MH : Marshall Islands","MK : Macedonia","MU : Mauritius","MT : Malta","MW : Malawi","MV : Maldives","MQ : Martinique","MP : Northern Mariana Islands","MS : Montserrat","MR : Mauritania","IM : Isle of Man","UG : Uganda","TZ : Tanzania","MY : Malaysia","MX : Mexico","IL : Israel","FR : France","IO : British Indian Ocean Territory","SH : Saint Helena","FI : Finland","FJ : Fiji","FK : Falkland Islands","FM : Micronesia","FO : Faroe Islands","NI : Nicaragua","NL : Netherlands","NO : Norway","NA : Namibia","VU : Vanuatu","NC : New Caledonia","NE : Niger","NF : orfolk Island","NG : Nigeria","NZ : New Zealand","NP : Nepal","NR : Nauru","NU : Niue","CK : Cook Islands","XK : Kosovo","CI : Ivory Coast","CH : Switzerland","CO : Colombia","CN : China","CM : Cameroon","CL : Chile","CC : ocos Islands","CA : Canada","CG : Republic of the Congo","CF : Central African Republic","CD : Democratic Republic of the Congo","CZ : Czech Republic","CY : Cyprus","CX : Christmas Island","CR : Costa Rica","CW : Curacao","CV : Cape Verde","CU : Cuba","SZ : Swaziland","SY : Syria","SX : Sint Maarten","KG : Kyrgyzstan","KE : Kenya","SS : South Sudan","SR : Suriname","KI : Kiribati","KH : Cambodia","KN : Saint Kitts and Nevis","KM : Comoros","ST : Sao Tome and Principe","SK : Slovakia","KR : South Korea","SI : Slovenia","KP : North Korea","KW : Kuwait","SN : Senegal","SM : San Marino","SL : Sierra Leone","SC : Seychelles","KZ : Kazakhstan","KY : Cayman Islands","SG : Singapore","SE : Sweden","SD : Sudan","DO : Dominican Republic","DM : Dominica","DJ : Djibouti","DK : Denmark","VG : British Virgin Islands","DE : Germany","YE : Yemen","DZ : Algeria","US : United States","UY : Uruguay","YT : Mayotte","UM : United States Minor Outlying Islands","LB : Lebanon","LC : Saint Lucia","LA : Laos","TV : Tuvalu","TW : Taiwan","TT : Trinidad and Tobago","TR : Turkey","LK : Sri Lanka","LI : Liechtenstein","LV : Latvia","TO : Tonga","LT : Lithuania","LU : Luxembourg","LR : Liberia","LS : Lesotho","TH : Thailand","TF : French Southern Territories","TG : Togo","TD : Chad","TC : Turks and Caicos Islands","LY : Libya","VA : Vatican","VC : Saint Vincent and the Grenadines","AE : United Arab Emirates","AD : Andorra","AG : Antigua and Barbuda","AF : Afghanistan","AI : Anguilla","VI : U.S. Virgin Islands","IS : Iceland","IR : Iran","AM : Armenia","AL : Albania","AO : Angola","AQ : Antarctica","AS : American Samoa","AR : Argentina","AU : Australia","AT : Austria","AW : Aruba","IN : India","AX : Aland Islands","AZ : Azerbaijan","IE : Ireland","ID : Indonesia","UA : Ukraine","QA : Qatar","MZ : Mozambique"],I=G,B={data:function(){return{search:"",deaths:"-",confirmed:"-",noLocation:!1,location:"",currentLocation:"",countryCode:"",filtered:[],error:!1,checked:!1,loading:!1,suggestion:!1}},beforeMount:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){var o={method:"GET",redirect:"follow"};fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(a.coords.latitude,"&longitude=").concat(a.coords.longitude),o).then((function(e){return e.json()})).then((function(a){e.currentLocation=a.city,e.countryCode=a.countryCode})).catch((function(e){return console.log("error",e)}))})):(this.noLocation=!0,this.location="No location Provided")},methods:{getLatestW:function(){var e=this,a={method:"GET",redirect:"follow"};fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest",a).then((function(a){return e.loading=!0,a.json()})).then((function(a){e.confirmed=a.latest.confirmed,e.deaths=a.latest.deaths,e.loading=!1})).catch((function(a){e.error=!0,console.log("error",a)})),this.location="Worldwide"},removeError:function(){this.error=!1,this.loading=!1},showSuggestion:function(){var e=this;this.suggestion=!0,2==this.search.length&&this.filtered.push(I.filter((function(a){return a.match(e.search)})))},getLatestM:function(){var e=this;if(this.suggestion=!1,A.forEach((function(a){if(a.Name==e.search){var o=a.Code;console.log(o),e.countryCode=o,e.checked=!0}else a.Code==e.search&&(console.log(a.Code),e.countryCode=a.Code,e.checked=!0)})),this.checked){var a={method:"GET",redirect:"follow"};fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=".concat(this.countryCode),a).then((function(a){return e.loading=!0,a.json()})).then((function(a){e.confirmed=a.latest.confirmed,e.deaths=a.latest.deaths,e.location=a.locations[0].country,console.log(a.locations[0].country),e.loading=!1})).catch((function(a){e.error=!0,console.log("error",a)})),this.search=""}this.filtered=[]},getLatestCL:function(){var e=this,a={method:"GET",redirect:"follow"};fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=".concat(this.countryCode),a).then((function(a){return e.loading=!0,a.json()})).then((function(a){e.confirmed=a.latest.confirmed,e.deaths=a.latest.deaths,e.location=e.currentLocation,e.loading=!1})).catch((function(a){e.error=!0,console.log("error",a)}))}}},w=B,E=(o("185e"),Object(c["a"])(w,y,T,!1,null,"4b71b960",null)),L=E.exports,P=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"container"}},[o("div",[o("h1",[e._v("___Welcome___")]),o("p",[e._v("This is a Corona Virus (Codvid-19) Tracker")]),e._m(0),o("br"),o("h3",[e._v("Some info about the App :")]),o("p",[e._v("The application is still under Development.")]),o("p",[e._v("We are Sorry if there will be any Issues")]),o("h4",[e._v("How the App works ?")]),o("p",[e._v("When the Application starts it asks for Permmision to use your Location.")]),o("p",[e._v(" Please Provide us that Permission so we will be able to show your Current Location. ")]),e._m(1),o("p",[e._v(" Otherwise you are able to make a Manual search by Writing the country name in the search Fiel and hit Search. ")]),o("p",[e._v("Currently we are only able to provide Statics based on Countries.")]),e._m(2),o("br"),o("h3",[e._v("NOTE:")]),o("p",[e._v("The searches are based on the Country names or their ISO-2 digit code.")]),o("p",[e._v("In order to face no problems please write the correct Search values.")]),o("p",[e._v("Country names like : Germany")]),o("p",[e._v("ISO-2 digit code like : DE")]),o("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[o("p",{staticClass:"link"},[e._v("Click Here to Read More")])])],1),o("router-link",{staticClass:"router-link",attrs:{to:"/main"}},[o("p",{staticClass:"link"},[e._v("CONTINUE")])])],1)},R=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("p",[e._v(" Developed by "),o("a",{staticClass:"link",attrs:{href:" https://twitter.com/Dani60579343",target:"_blank"}},[e._v("Korak Kurani (Dani)")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("p",[e._v(" As default, By clicking "),o("strong",[e._v("Latest")]),e._v(" on the Worldwide or Current Location. You will be able to get Statics (Number of Deathes and Confrimed cases). ")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("p",[e._v(" We also can only provide "),o("strong",[e._v("Number of Death")]),e._v(" and "),o("strong",[e._v("Number of confirmed cases")])])}],K={data:function(){return{}}},D=K,O=(o("c164"),Object(c["a"])(D,P,R,!1,null,"285c45fa",null)),F=O.exports,H=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"container"}},[o("div",{staticClass:"info-header"},[o("h1",[e._v("Welcome")]),o("h3",[e._v("In this page i am Going to explain my Application.")])]),o("hr"),o("div",{staticClass:"app-info"},[o("h2",[e._v("About the Application :")]),o("p",[e._v("This is a Corona Tracker Webapp.")]),o("p",[e._v(" The Application was Created and developed by: "),o("strong",[e._v("Korak Kurani (Dani)")])]),o("p",[e._v(" Main point of the App was learning. So there maybe Issues and Mistakes that can be catched easily! ")]),o("p",[e._v("The Application was Created using VueJs-Cli3 and some Apis.")]),o("p",[e._v(" The application have "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/MIT_License",target:"_blank"}},[e._v("MITLicense")])]),o("p",[e._v(" That means everyone is free to use this Application freely under the "),o("strong",[o("a",{attrs:{href:"https://opensource.org/osd-annotated",target:"_blank"}},[e._v("Open-Source-Rules")])])])]),o("hr"),o("div",{staticClass:"dev-info"},[o("h2",[e._v("For Developers :")]),o("p",[e._v("As mentioned above this App is an Open-Source App")]),o("p",[e._v("Everyone is welcomed to modify the Application the way they want.")]),o("h3",[e._v("Want to Contribute ?")]),o("p",[e._v(" You found a Bug ,an Error or like to Change something in the Application or Add something ! ")]),o("p",[e._v("I will be more than happy to accept your suggestion/s.")]),o("p",[e._v("Please feel free to contact me or Contribute to the Project !")])]),o("hr"),o("div",{staticClass:"author-info"},[o("h2",[e._v("About me ( THE DEVELOPER ) :")]),o("p",[e._v("My name is Korak Kurani , love to be called Dani")]),o("p",[e._v(" I am a Self-Tuaght Programmer. Mostly focused in Web developemnt and Web designs ")]),o("p",[e._v(" Still i am at my first steps , so maybe the project will not be 100% perfect ! ")]),o("p",[e._v("I do learn by myself and improve my skills daily.")]),o("p",[e._v("My last station will be a Fullstack Developer :)")])]),o("hr"),o("div",{staticClass:"contact"},[o("h2",[e._v("Contact informations:")]),o("ul",[o("li",[o("a",{attrs:{href:" https://twitter.com/Dani60579343",target:"_blank"}},[e._v("TWITTER")])]),o("li",[o("a",{attrs:{href:"https://github.com/Korak-997",target:"_blank"}},[e._v("GITHUB")])]),o("li",[e._v("Gmail : korak.kurani.info@gmail.com")])]),o("h3",[e._v("Contributions can be made to :")]),o("a",{attrs:{href:"https://github.com/Korak-997/codvid-tracker/tree/test",target:"_blank"}},[e._v("Github-repo/Test branch")]),o("h3",[e._v("Source Code is at :")]),o("a",{attrs:{href:"https://github.com/Korak-997/codvid-tracker/tree/test",target:"_blank"}},[e._v("Github-repo/Test branch")])])])}],V={data:function(){return{}}},W=V,x=(o("8ef9"),Object(c["a"])(W,H,U,!1,null,"602c6916",null)),Z=x.exports,J=[{path:"/",component:F},{path:"/main",component:L},{path:"/about",component:Z}];t["a"].use(_["a"]),t["a"].config.productionTip=!1;var j=new _["a"]({routes:J,mode:"history"});new t["a"]({render:function(e){return e(M)},router:j}).$mount("#app")},"77a0":function(e,a,o){"use strict";var t=o("95b7"),n=o.n(t);n.a},"7e1f":function(e,a,o){e.exports=o.p+"img/Group 5logo2.c7d3daa8.png"},"85ec":function(e,a,o){},"8e7c":function(e,a,o){"use strict";var t=o("a782"),n=o.n(t);n.a},"8ef9":function(e,a,o){"use strict";var t=o("bf21"),n=o.n(t);n.a},"95b7":function(e,a,o){},"9ef5":function(e,a,o){},a782:function(e,a,o){},bf21:function(e,a,o){},c164:function(e,a,o){"use strict";var t=o("9ef5"),n=o.n(t);n.a}});
//# sourceMappingURL=app.665a88db.js.map