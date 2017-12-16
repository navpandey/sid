// Code goes here
var app = angular.module('myApp', ['ngMaterial', 'jkAngularCarousel', 'ngRoute','ui.router','ng','ngAnimate','ngTinyScrollbar','ezplus' ])


// Main Controller
app.controller('MyCtrl', function($scope, $http,$location,$anchorScroll) {


 $scope.countries={
	 India:{" Andaman & Nicobar Islands":["Alipur"," Andaman Island"," Anderson Island"," Arainj-Laka-Punga"," Austinabad"," Bamboo Flat"," Barren Island"," Beadonabad"," Betapur"," Bindraban"," Bonington"," Brookesabad"," Cadell Point"," Calicut"," Chetamale"," Cinque Islands"," Defence Island"," Digilpur"," Dolyganj"," Flat Island"," Geinyale"," Great Coco Island"," Haddo"," Havelock Island"," Henry Lawrence Island"," Herbertabad"," Hobdaypur"," Ilichar"," Ingoie"," Inteview Island"," Jangli Ghat"," Jhon Lawrence Island"," Karen"," Kartara","KYD Islannd"," Landfall Island"," Little Andmand"," Little Coco Island"," Long Island"," Maimyo"," Malappuram"," Manglutan"," Manpur"," Mitha Khari"," Neill Island"," Nicobar Island"," North Brother Island"," North Passage Island"," North Sentinel Island","Nothen Reef Island"," Outram Island"," Pahlagaon"," Palalankwe"," Passage Island"," Phaiapong"," Phoenix Island"," Port Blair"," Preparis Island","Protheroepur","Rangachang","Rongat","Rutland Island","Sabari","Saddle Peak","Shadipur","Smith Island","Sound Island","South Sentinel Island","Spike Island","Tarmugli Island","Taylerabad","Titaije","Toibalawe","Tusonabad","West Island","Wimberleyganj","Yadita"],"Andhra Pradesh":[" Achampet"," Adilabad"," Adoni"," Alampur"," Allagadda"," Alur"," Amalapuram"," Amangallu"," Anakapalle"," Anantapur"," Andole"," Araku","Armoor"," Asifabad"," Aswaraopet"," Atmakur"," B Kothakota"," Badvel"," Banaganapalle"," Bandar"," Bangarupalem"," Banswada"," Bapatla"," Bellampalli"," Bhadrachalam"," Bhainsa"," Bheemunipatnam"," Bhimadole"," Bhimavaram"," Bhongir"," Bhooragamphad"," Boath"," Bobbili"," Bodhan"," Chandoor"," Chavitidibbalu"," Chejerla"," Chepurupalli"," Cherial"," Chevella"," Chinnor"," Chintalapudi"," Chintapalle"," Chirala"," Chittoor"," Chodavaram"," Cuddapah"," Cumbum"," Darsi"," Devarakonda"," Dharmavaram"," Dichpalli"," Divi"," Donakonda"," Dronachalam"," East Godavari"," Eluru"," Eturnagaram"," Gadwal"," Gajapathinagaram"," Gajwel"," Garladinne"," Giddalur"," Godavari"," Gooty"," Gudivada"," Gudur"," Guntur"," Hindupur"," Hunsabad"," Huzurabad"," Huzurnagar"," Hyderabad"," Ibrahimpatnam"," Jaggayyapet"," Jagtial"," Jammalamadugu"," Jangaon"," Jangareddygudem"," Jannaram"," Kadiri"," Kaikaluru"," Kakinada"," Kalwakurthy"," Kalyandurg"," Kamalapuram"," Kamareddy"," Kambadur"," Kanaganapalle"," Kandukuru"," Kanigiri"," Karimnagar"," Kavali"," Khammam"," Khanapur (AP)"," Kodangal"," Koduru"," Koilkuntla"," Kollapur"," Kothagudem"," Kovvur"," Krishna"," Krosuru"," Kuppam"," Kurnool"," Lakkireddipalli"," Madakasira"," Madanapalli"," Madhira"," Madnur"," Mahabubabad"," Mahabubnagar"," Mahadevapur"," Makthal"," Mancherial"," Mandapeta"," Mangalagiri"," Manthani"," Markapur"," Marturu"," Medachal"," Medak"," Medarmetla"," Metpalli"," Mriyalguda"," Mulug"," Mylavaram"," Nagarkurnool"," Nalgonda","Nallacheruvu"," Nampalle"," Nandigama"," Nandikotkur"," Nandyal"," Narasampet"," Narasaraopet"," Narayanakhed"," Narayanpet"," Narsapur"," Narsipatnam"," Nazvidu"," Nelloe"," Nellore"," Nidamanur"," Nirmal"," Nizamabad"," Nuguru"," Ongole"," Outsarangapalle"," Paderu"," Pakala"," Palakonda"," Paland"," Palmaneru"," Pamuru"," Pargi"," Parkal"," Parvathipuram"," Pathapatnam"," Pattikonda"," Peapalle"," Peddapalli"," Peddapuram"," Penukonda"," Piduguralla"," Piler"," Pithapuram"," Podili"," Polavaram"," Prakasam"," Proddatur"," Pulivendla"," Punganur"," Putturu","Rajahmundri"," Rajampeta"," Ramachandrapuram"," Ramannapet"," Rampachodavaram"," Rangareddy"," Rapur"," Rayachoti"," Rayadurg"," Razole"," Repalle"," Saluru"," Sangareddy"," Sathupalli"," Sattenapalle"," Satyavedu"," Shadnagar"," Siddavattam"," Siddipet"," Sileru"," Sircilla"," Sirpur Kagaznagar"," Sodam"," Sompeta"," Srikakulam"," Srikalahasthi"," Srisailam"," Srungavarapukota"," Sudhimalla"," Sullarpet"," Tadepalligudem"," Tadipatri"," Tanduru"," Tanuku"," Tekkali"," Tenali"," Thungaturthy"," Tirivuru"," Tirupathi"," Tuni"," Udaygiri"," Ulvapadu"," Uravakonda"," Utnor"," VR Puram"," Vaimpalli"," Vayalpad"," Venkatgiri"," Venkatgirikota"," Vijayawada"," Vikrabad"," Vinjamuru"," Vinukonda"," Visakhapatnam"," Vizayanagaram"," Vizianagaram"," Vuyyuru"," Wanaparthy"," Warangal"," Wardhannapet"," Yelamanchili"," Yelavaram"," Yeleswaram"," Yellandu"," Yellanuru"," Yellareddy"," Yerragondapalem"," Zahirabad"],"Arunachal Pradesh":[" Along"," Anini"," Anjaw"," Bameng","Basar"," Changlang"," Chowkhem"," Daporizo"," Dibang Valley"," Dirang"," Hayuliang"," Huri"," Itanagar"," Jairampur"," Kalaktung"," Kameng"," Khonsa"," Kolaring"," Kurung Kumey"," Lohit"," Lower Dibang Valley"," Lower Subansiri"," Mariyang"," Mechuka"," Miao"," Nefra"," Pakkekesang"," Pangin"," Papum Pare"," Passighat"," Roing"," Sagalee"," Seppa"," Siang"," Tali"," Taliha"," Tawang"," Tezu"," Tirap"," Tuting"," Upper Siang"," Upper Subansiri"," Yiang Kiag"],Assam:["Abhayapuri"," Baithalangshu"," Barama"," Barpeta Road"," Bihupuria"," Bijni"," Bilasipara"," Bokajan"," Bokakhat"," Boko"," Bongaigaon"," Cachar"," Cachar Hills"," Darrang","Dhakuakhana"," Dhemaji"," Dhubri"," Dibrugarh"," Digboi"," Diphu"," Goalpara"," Gohpur"," Golaghat"," Guwahati"," Hailakandi"," Hajo"," Halflong"," Hojai"," Howraghat"," Jorhat"," Kamrup"," Karbi Anglong"," Karimganj"," Kokarajhar"," Kokrajhar","Lakhimpur"," Maibong"," Majuli"," Mangaldoi"," Mariani"," Marigaon"," Moranhat"," Morigaon"," Nagaon"," Nalbari"," Rangapara"," Sadiya"," Sibsagar"," Silchar"," Sivasagar"," Sonitpur"," Tarabarihat","Tezpur"," Tinsukia"," Udalgiri"," Udalguri"," UdarbondhBarpeta"],Bihar:["Adhaura"," Amarpur"," Araria"," Areraj"," Arrah"," Arwal"," Aurangabad"," Bagaha"," Banka"," Banmankhi"," Barachakia"," Barauni"," Barh"," Barosi"," Begusarai"," Benipatti"," Benipur"," Bettiah"," Bhabhua"," Bhagalpur"," Bhojpur"," Bidupur"," Biharsharif"," Bikram"," Bikramganj"," Birpur"," Buxar"," Chakai"," Champaran"," Chapara"," Dalsinghsarai"," Danapur"," Darbhanga"," Daudnagar"," Dhaka"," Dhamdaha","Dumraon"," Ekma"," Forbesganj"," Gaya"," Gogri"," Gopalganj"," HKharagpur"," Hajipur"," Hathua"," Hilsa"," Imamganj"," Jahanabad"," Jainagar"," Jamshedpur"," Jamui"," Jehanabad"," Jhajha"," Jhanjharpur"," Kahalgaon"," Kaimur (Bhabua)"," Katihar"," Katoria"," Khagaria"," Kishanganj"," Korha"," Lakhisarai"," Madhepura"," Madhubani"," Maharajganj"," Mahua"," Mairwa"," Mallehpur"," Masrakh"," Mohania"," Monghyr"," Motihari"," Motipur","Munger"," Muzaffarpur"," Nabinagar"," Nalanda"," Narkatiaganj"," Naugachia"," Nawada"," Pakribarwan"," Pakridayal"," Patna"," Phulparas"," Piro"," Pupri"," Purena"," Purnia"," Rafiganj","Rajauli"," Ramnagar"," Raniganj"," Raxaul"," Rohtas"," Rosera"," SBakhtiarpur"," Saharsa"," Samastipur"," Saran"," Sasaram"," Seikhpura"," Sheikhpura"," Sheohar"," Sherghati"," Sidhawalia"," Singhwara"," Sitamarhi"," Siwan"," Sonepur"," Supaul"," Thakurganj"," Triveniganj"," Udakishanganj"," Vaishali"," Wazirganj"],Chandigarh:["Chandigarh"," Mani Marja"],Chhatisgarh:["Ambikapur"," Antagarh"," Arang"," Bacheli"," Bagbahera"," Bagicha"," Baikunthpur"," Balod"," Balodabazar"," Balrampur"," Barpalli"," Basana"," Bastanar"," Bastar"," Bderajpur"," Bemetara"," Berla"," Bhairongarh"," Bhanupratappur"," Bharathpur"," Bhatapara"," Bhilai"," Bhilaigarh"," Bhopalpatnam"," Bijapur"," Bilaspur"," Bodla"," Bokaband"," Chandipara"," Chhinagarh"," Chhuriakala"," Chingmut"," Chuikhadan"," Dabhara"," Dallirajhara"," Dantewada"," Deobhog"," Dhamda"," Dhamtari"," Dharamjaigarh"," Dongargarh"," Durg"," Durgakondal"," Fingeshwar"," Gariaband"," Garpa"," Gharghoda"," Gogunda"," Ilamidi"," Jagdalpur"," Janjgir"," Janjgir-Champa"," Jarwa"," Jashpur"," Jashpurnagar"," Kabirdham-Kawardha"," Kanker"," Kasdol"," Kathdol"," Kathghora"," Kawardha"," Keskal"," Khairgarh"," Kondagaon"," Konta"," Korba"," Korea"," Kota"," Koyelibeda"," Kuakunda"," Kunkuri"," Kurud"," Lohadigundah"," Lormi"," Luckwada"," Mahasamund"," Makodi"," Manendragarh"," Manpur"," Marwahi"," Mohla"," Mungeli"," Nagri"," Narainpur"," Narayanpur"," Neora"," Netanar"," Odgi"," Padamkot"," Pakhanjur"," Pali"," Pandaria"," Pandishankar"," Parasgaon"," Pasan"," Patan"," Pathalgaon"," Pendra"," Pratappur"," Premnagar"," Raigarh"," Raipur"," Rajnandgaon"," Rajpur"," Ramchandrapur"," Saraipali"," Saranggarh"," Sarona"," Semaria"," Shakti"," Sitapur"," Sukma"," Surajpur"," Surguja"," Tapkara"," Toynar"," Udaipur"," Uproda"," Wadrainagar"],"Dadra & Nagar Haveli":[" Amal"," Amli"," Bedpa"," Chikhli"," Dadra & Nagar Haveli"," Dahikhed"," Dolara"," Galonda"," Kanadi"," Karchond"," Khadoli"," Kharadpada"," Kherabari"," Kherdi"," Kothar"," Luari"," Mashat"," Rakholi"," Rudana"," Saili"," Sili"," Silvassa"," Sindavni"," Udva"," Umbarkoi"," Vansda"," Vasona"," Velugam"],"Daman & Diu":[" Brancavare"," Dagasi"," Daman"," Diu"," Magarvara"," Nagwa"," Pariali"," Passo Covo"],Delhi:[" Central Delhi"," East Delhi"," New Delhi"," North Delhi"," North East Delhi"," North West Delhi"," South Delhi"," South West Delhi"," West Delhi"],Goa:[" Canacona"," Candolim"," Chinchinim"," Cortalim"," Goa"," Jua","Madgaon"," Mahem"," Mapuca"," Marmagao"," Panji"," Ponda"," Sanvordem","Terekhol"],Gujarat:[" Ahmedabad"," Ahwa"," Amod"," Amreli"," Anand"," Anjar"," Ankaleshwar"," Babra"," Balasinor"," Banaskantha"," Bansada"," Bardoli"," Bareja"," Baroda"," Barwala"," Bayad"," Bhachav"," Bhanvad"," Bharuch"," Bhavnagar"," Bhiloda"," Bhuj"," Billimora"," Borsad"," Botad"," Chanasma"," Chhota Udaipur"," Chotila"," Dabhoi"," Dahod"," Damnagar"," Dang"," Danta"," Dasada"," Dediapada"," Deesa"," Dehgam"," Deodar"," Devgadhbaria"," Dhandhuka"," Dhanera"," Dharampur"," Dhari"," Dholka"," Dhoraji"," Dhrangadhra"," Dhrol"," Dwarka"," Fortsongadh"," Gadhada"," Gandhi Nagar"," Gariadhar"," Godhra"," Gogodar"," Gondal"," Halol"," Halvad"," Harij"," Himatnagar"," Idar"," Jambusar"," Jamjodhpur"," Jamkalyanpur"," Jamnagar"," Jasdan"," Jetpur"," Jhagadia"," Jhalod"," Jodia"," Junagadh"," Junagarh"," Kalawad"," Kalol"," Kapad Wanj"," Keshod"," Khambat"," Khambhalia"," Khavda"," Kheda"," Khedbrahma"," Kheralu"," Kodinar"," Kotdasanghani"," Kunkawav"," Kutch"," Kutchmandvi"," Kutiyana"," Lakhpat"," Lakhtar"," Lalpur"," Limbdi"," Limkheda"," Lunavada"," MMMangrol"," Mahuva"," Malia-Hatina"," Maliya"," Malpur"," Manavadar"," Mandvi"," Mangrol"," Mehmedabad"," Mehsana"," Miyagam"," Modasa"," Morvi"," Muli"," Mundra"," Nadiad"," Nakhatrana"," Nalia"," Narmada"," Naswadi"," Navasari"," Nizar"," Okha"," Paddhari"," Padra"," Palanpur"," Palitana"," Panchmahals"," Patan"," Pavijetpur"," Porbandar"," Prantij"," Radhanpur","Rahpar"," Rajaula"," Rajpipla"," Ranavav"," Sabarkantha"," Sanand"," Sankheda"," Santalpur"," Santrampur"," Savarkundla"," Savli"," Sayan"," Sayla"," Shehra"," Sidhpur"," Sihor"," Sojitra"," Sumrasar"," Surat"," Surendranagar"," Talaja"," Thara"," Tharad"," Thasra"," Una-Diu"," Upleta"," Vadgam"," Vadodara"," Valia"," Vallabhipur"," Valod"," Valsad"," Vanthali"," Vapi"," Vav"," Veraval"," Vijapur"," Viramgam"," Visavadar"," Visnagar"," Vyara"," Waghodia"," Wankaner"],Haryana:[" Adampur Mandi"," Ambala"," Assandh"," Bahadurgarh"," Barara"," Barwala"," Bawal"," Bawanikhera"," Bhiwani"," Charkhidadri"," Cheeka"," Chhachrauli"," Dabwali"," Ellenabad"," Faridabad"," Fatehabad"," Ferojpur Jhirka"," Gharaunda"," Gohana"," Gurgaon"," Hansi"," Hisar"," Jagadhari"," Jatusana"," Jhajjar"," Jind"," Julana"," Kaithal"," Kalanaur"," Kalanwali"," Kalka"," Karnal"," Kosli"," Kurukshetra"," Loharu"," Mahendragarh"," Meham"," Mewat"," Mohindergarh"," Naraingarh"," Narnaul"," Narwana"," Nilokheri"," Nuh"," Palwal"," Panchkula"," Panipat"," Pehowa"," Ratia"," Rewari"," Rohtak"," Safidon"," Sirsa"," Siwani"," Sonipat"," Tohana"," Tohsam"," Yamunanagar"],"Himachal Pradesh":[" Amb"," Arki"," Banjar"," Bharmour"," Bilaspur"," Chamba"," Churah"," Dalhousie"," Dehra Gopipur"," Hamirpur"," Jogindernagar"," Kalpa"," Kangra"," Kinnaur"," Kullu"," Lahaul"," Mandi"," Nahan"," Nalagarh"," Nirmand"," Nurpur"," Palampur"," Pangi"," Paonta"," Pooh"," Rajgarh"," Rampur Bushahar"," Rohru"," Shimla"," Sirmaur"," Solan"," Spiti"," Sundernagar"," Theog"," Udaipur"," Una"],"Jammu & Kashmir":[" Akhnoor"," Anantnag"," Badgam"," Bandipur"," Baramulla"," Basholi"," Bedarwah"," Budgam"," Doda"," Gulmarg"," Jammu"," Kalakot"," Kargil"," Karnah"," Kathua"," Kishtwar"," Kulgam"," Kupwara"," Leh"," Mahore"," Nagrota"," Nobra"," Nowshera"," Nyoma"," Padam"," Pahalgam"," Patnitop"," Poonch"," Pulwama"," Rajouri"," Ramban"," Ramnagar"," Reasi"," Samba"," Srinagar"," Udhampur"," Vaishno Devi"],Jharkhand:[" Bagodar"," Baharagora"," Balumath"," Barhi"," Barkagaon"," Barwadih"," Basia"," Bermo"," Bhandaria"," Bhawanathpur"," Bishrampur"," Bokaro"," Bolwa"," Bundu"," Chaibasa"," Chainpur"," Chakardharpur"," Chandil"," Chatra"," Chavparan"," Daltonganj"," Deoghar"," Dhanbad"," Dumka"," Dumri"," Garhwa"," Garu"," Ghaghra"," Ghatsila"," Giridih"," Godda"," Gomia"," Govindpur"," Gumla"," Hazaribagh"," Hunterganj"," Ichak"," Itki"," Jagarnathpur"," Jamshedpur"," Jamtara"," Japla"," Jharmundi"," Jhinkpani"," Jhumaritalaiya"," Kathikund"," Kharsawa"," Khunti"," Koderma"," Kolebira"," Latehar"," Lohardaga"," Madhupur"," Mahagama"," Maheshpur Raj"," Mandar"," Mandu"," Manoharpur"," Muri"," Nagarutatri"," Nala"," Noamundi"," Pakur"," Palamu"," Palkot"," Patan"," Rajdhanwar"," Rajmahal"," Ramgarh"," Ranchi"," Sahibganj"," Saraikela"," Simaria"," Simdega"," Singhbhum"," Tisri"," Torpa"],Karnataka:[" Afzalpur"," Ainapur"," Aland"," Alur"," Anekal"," Ankola"," Arsikere"," Athani"," Aurad"," Bableshwar"," Badami"," Bagalkot"," Bagepalli"," Bailhongal"," Bangalore"," Bangalore Rural"," Bangarpet"," Bantwal"," Basavakalyan"," Basavanabagewadi"," Basavapatna"," Belgaum"," Bellary"," Belthangady"," Belur"," Bhadravati"," Bhalki"," Bhatkal"," Bidar"," Bijapur"," Biligi"," Chadchan"," Challakere"," Chamrajnagar"," Channagiri"," Channapatna"," Channarayapatna"," Chickmagalur"," Chikballapur"," Chikkaballapur"," Chikkanayakanahalli"," Chikkodi"," Chikmagalur"," Chincholi"," Chintamani"," Chitradurga"," Chittapur"," Cowdahalli"," Davanagere"," Deodurga"," Devangere"," Devarahippargi"," Dharwad"," Doddaballapur"," Gadag"," Gangavathi"," Gokak"," Gowribdanpur"," Gubbi"," Gulbarga"," Gundlupet"," HBHalli"," HD Kote"," Haliyal"," Hampi"," Hangal"," Harapanahalli"," Hassan"," Haveri"," Hebri"," Hirekerur"," Hiriyur"," Holalkere"," Holenarsipur"," Honnali"," Honnavar"," Hosadurga"," Hosakote"," Hosanagara"," Hospet"," Hubli"," Hukkeri"," Humnabad"," Hungund"," Hunsagi"," Hunsur"," Huvinahadagali"," Indi"," Jagalur"," Jamkhandi"," Jewargi"," Joida"," KR Nagar"," Kadur"," Kalghatagi"," Kanakapura"," Kannada"," Kargal"," Karkala"," Karwar"," Khanapur"," Kodagu"," Kolar"," Kollegal"," Koppa"," Koppal"," Koratageri"," Krishnarajapet"," Kudligi"," Kumta"," Kundapur"," Kundgol"," Kunigal"," Kurugodu"," Kustagi"," Lingsugur"," Madikeri"," Madugiri"," Malavalli"," Malur"," Mandya"," Mangalore"," Manipal"," Manvi"," Mashal"," Molkalmuru"," Mudalgi"," Muddebihal"," Mudhol"," Mudigere"," Mulbagal"," Mundagod"," Mundargi"," Murugod"," Mysore"," Nagamangala"," Nanjangud"," Nargund"," Narsimrajapur"," Navalgund"," Nelamangala"," Nimburga"," Pandavapura"," Pavagada"," Puttur"," Raibag"," Raichur"," Ramdurg"," Ranebennur"," Ron"," Sagar"," Sakleshpur"," Salkani"," Sandur"," Saundatti"," Savanur"," Sedam"," Shahapur"," Shankarnarayana"," Shikaripura"," Shimoga"," Shirahatti"," Shorapur"," Siddapur"," Sidlaghatta"," Sindagi"," Sindhanur"," Sira"," Sirsi"," Siruguppa"," Somwarpet"," Sorab"," Sringeri"," Sriniwaspur"," Srirangapatna"," T Narsipur"," Tallak"," Tarikere"," Telgi"," Thirthahalli"," Tiptur"," Tumkur"," Turuvekere"," Udupi"," Virajpet"," Wadi"," Yadgiri"," Yelburga"],Kerala:[" Adimaly"," Adoor","Agathy"," Alappuzha"," Alathur"," Alleppey"," Alwaye"," Amini"," Androth"," Attingal"," Badagara"," Bitra"," Calicut"," Cannanore"," Chetlet"," Ernakulam"," Idukki"," Irinjalakuda"," Kadamath"," Kalpeni"," Kalpetta"," Kanhangad"," Kanjirapally"," Kannur"," Karungapally"," Kasargode"," Kavarathy"," Kiltan"," Kochi"," Koduvayur"," Kollam"," Kottayam"," Kovalam"," Kozhikode"," Kunnamkulam"," Malappuram"," Mananthodi"," Manjeri"," Mannarghat"," Mavelikkara"," Minicoy"," Munnar"," Muvattupuzha"," Nedumandad"," Nedumgandam"," Nilambur"," Palai"," Palakkad"," Palghat"," Pathaanamthitta"," Pathanamthitta"," Payyanur"," Peermedu"," Perinthalmanna"," Perumbavoor"," Punalur"," Quilon"," Ranni"," Shertallai"," Shoranur"," Taliparamba"," Tellicherry"," Thiruvananthapuram"," Thodupuzha"," Thrissur"," Tirur"," Tiruvalla"," Trichur"," Trivandrum"," Uppala"," Vadakkanchery"," Vikom"," Wayanad"],Lakshadweep:[" Agatti Island"," Bingaram Island"," Bitra Island"," Chetlat Island"," Kadmat Island"," Kalpeni Island"," Kavaratti Island"," Kiltan Island"," Lakshadweep Sea"," Minicoy Island"," Minicoy Island"," North Island"," South Island"],"Madhya Pradesh":[" Agar"," Ajaigarh"," Alirajpur"," Amarpatan"," Amarwada"," Ambah"," Anuppur"," Arone"," Ashoknagar"," Ashta"," Atner"," Babaichichli"," Badamalhera"," Badarwsas"," Badnagar"," Badnawar"," Badwani"," Bagli"," Baihar"," Balaghat"," Baldeogarh"," Baldi"," Bamori"," Banda"," Bandhavgarh"," Bareli"," Baroda"," Barwaha"," Barwani"," Batkakhapa"," Begamganj"," Beohari"," Berasia"," Berchha"," Betul"," Bhainsdehi"," Bhander"," Bhanpura"," Bhikangaon"," Bhimpur"," Bhind"," Bhitarwar"," Bhopal"," Biaora"," Bijadandi"," Bijawar"," Bijaypur"," Bina"," Birsa"," Birsinghpur"," Budhni"," Burhanpur"," Buxwaha"," Chachaura"," Chanderi"," Chaurai"," Chhapara"," Chhatarpur"," Chhindwara"," Chicholi"," Chitrangi"," Churhat"," Dabra"," Damoh"," Datia"," Deori"," Deosar"," Depalpur"," Dewas"," Dhar"," Dharampuri"," Dindori"," Gadarwara"," Gairatganj"," Ganjbasoda"," Garoth"," Ghansour"," Ghatia"," Ghatigaon"," Ghorandogri"," Ghughari"," Gogaon"," Gohad"," Goharganj"," Gopalganj"," Gotegaon"," Gourihar"," Guna"," Gunnore"," Gwalior"," Gyraspur"," Hanumana"," Harda"," Harrai"," Harsud"," Hatta"," Hoshangabad"," Ichhawar"," Indore"," Isagarh"," Itarsi"," Jabalpur"," Jabera"," Jagdalpur"," Jaisinghnagar"," Jaithari"," Jaitpur"," Jaitwara"," Jamai"," Jaora"," Jatara"," Jawad"," Jhabua"," Jobat"," Jora"," Kakaiya"," Kannod"," Kannodi"," Karanjia"," Kareli"," Karera"," Karhal"," Karpa"," Kasrawad"," Katangi"," Katni"," Keolari"," Khachrod"," Khajuraho"," Khakner"," Khalwa"," Khandwa"," Khaniadhana"," Khargone"," Khategaon"," Khetia"," Khilchipur"," Khirkiya"," Khurai"," Kolaras"," Kotma"," Kukshi"," Kundam"," Kurwai"," Kusmi"," Laher"," Lakhnadon"," Lamta"," Lanji"," Lateri"," Laundi"," Maheshwar"," Mahidpurcity"," Maihar"," Majhagwan"," Majholi"," Malhargarh"," Manasa"," Manawar"," Mandla"," Mandsaur"," Manpur"," Mauganj"," Mawai"," Mehgaon"," Mhow"," Morena"," Multai"," Mungaoli"," Nagod"," Nainpur"," Narsingarh"," Narsinghpur"," Narwar"," Nasrullaganj"," Nateran"," Neemuch"," Niwari"," Niwas"," Nowgaon"," Pachmarhi"," Pandhana"," Pandhurna"," Panna"," Parasia"," Patan"," Patera"," Patharia"," Pawai"," Petlawad"," Pichhore"," Piparia"," Pohari"," Prabhapattan"," Punasa"," Raghogarh"," Raghunathpur"," Rahatgarh"," Raisen"," Rajgarh"," Rajpur"," Ratlam"," Rehli"," Rewa"," Sabalgarh"," Sagar"," Sailana"," Sanwer"," Sarangpur"," Sardarpur"," Satna"," Saunsar"," Sehore"," Sendhwa"," Seondha"," Seoni"," Seonimalwa"," Shahdol"," Shahnagar"," Shahpur"," Shajapur"," Sheopur"," Sheopurkalan"," Shivpuri"," Shujalpur"," Sidhi"," Sihora"," Silwani"," Singrauli"," Sirmour"," Sironj"," Sitamau"," Sohagpur"," Sondhwa"," Sonkatch"," Susner"," Tamia"," Tarana"," Tendukheda"," Teonthar"," Thandla"," Tikamgarh"," Timarani"," Udaipura"," Ujjain"," Umaria"," Umariapan"," Vidisha"," Vijayraghogarh"," Waraseoni"," Zhirnia"],Maharashtra:[" Achalpur"," Aheri"," Ahmednagar"," Ahmedpur"," Ajara"," Akkalkot"," Akola"," Akole"," Akot"," Alibagh"," Amagaon"," Amalner"," Ambad"," Ambejogai"," Amravati"," Arjuni Merogaon"," Arvi"," Ashti"," Atpadi"," Aurangabad"," Ausa"," Babhulgaon"," Balapur"," Baramati"," Barshi Takli"," Barsi"," Basmatnagar"," Bassein"," Beed"," Bhadrawati"," Bhamregadh"," Bhandara"," Bhir"," Bhiwandi"," Bhiwapur"," Bhokar"," Bhokardan"," Bhoom"," Bhor"," Bhudargad"," Bhusawal"," Billoli"," Brahmapuri"," Buldhana"," Butibori"," Chalisgaon"," Chamorshi"," Chandgad"," Chandrapur"," Chandur"," Chanwad"," Chhikaldara"," Chikhali"," Chinchwad"," Chiplun"," Chopda"," Chumur"," Dahanu"," Dapoli"," Darwaha"," Daryapur"," Daund"," Degloor"," Delhi Tanda"," Deogad"," Deolgaonraja"," Deori"," Desaiganj"," Dhadgaon"," Dhanora"," Dharani"," Dhiwadi"," Dhule"," Dhulia"," Digras"," Dindori"," Edalabad"," Erandul"," Etapalli"," Gadhchiroli"," Gadhinglaj"," Gaganbavada"," Gangakhed"," Gangapur"," Gevrai"," Ghatanji"," Golegaon"," Gondia"," Gondpipri"," Goregaon"," Guhagar"," Hadgaon"," Hatkangale"," Hinganghat"," Hingoli"," Hingua"," Igatpuri"," Indapur"," Islampur"," Jalgaon"," Jalna"," Jamkhed","Jamner"," Jath"," Jawahar"," Jintdor"," Junnar"," Kagal"," Kaij"," Kalamb"," Kalamnuri"," Kallam"," Kalmeshwar"," Kalwan"," Kalyan"," Kamptee"," Kandhar"," Kankavali","Kannad"," Karad"," Karjat","Karmala"," Katol"," Kavathemankal"," Kedgaon"," Khadakwasala"," Khamgaon"," Khed","Khopoli"," Khultabad"," Kinwat"," Kolhapur"," Kopargaon"," Koregaon"," Kudal"," Kuhi"," Kurkheda"," Kusumba"," Lakhandur"," Langa"," Latur","Lonar"," Lonavala"," Madangad"," Madha"," Mahabaleshwar"," Mahad"," Mahagaon"," Mahasala"," Mahaswad"," Malegaon"," Malgaon"," Malgund"," Malkapur"," Malsuras"," Malwan"," Mancher"," Mangalwedha"," Mangaon"," Mangrulpur"," Manjalegaon"," Manmad"," Maregaon"," Mehda"," Mekhar"," Mohadi"," Mohol"," Mokhada"," Morshi"," Mouda"," Mukhed"," Mul"," Mumbai"," Murbad"," Murtizapur"," Murud"," Nagbhir"," Nagpur"," Nahavara"," Nanded"," Nandgaon"," Nandnva"," Nandurbar"," Narkhed"," Nashik"," Navapur"," Ner"," Newasa"," Nilanga"," Niphad"," Omerga"," Osmanabad"," Pachora"," Paithan"," Palghar"," Pali"," Pandharkawada"," Pandharpur"," Panhala"," Paranda"," Parbhani"," Parner"," Parola"," Parseoni"," Partur"," Patan"," Pathardi"," Pathari"," Patoda"," Pauni"," Peint"," Pen"," Phaltan"," Pimpalner"," Pirangut"," Poladpur"," Pune"," Pusad"," Pusegaon"," Radhanagar"," Rahuri"," Raigad"," Rajapur"," Rajgurunagar"," Rajura"," Ralegaon"," Ramtek"," Ratnagiri"," Raver"," Risod"," Roha"," Sakarwadi"," Sakoli"," Sakri"," Salekasa"," Samudrapur"," Sangamner"," Sanganeshwar"," Sangli"," Sangola"," Sanguem"," Saoner"," Saswad"," Satana"," Satara"," Sawantwadi"," Seloo"," Shahada"," Shahapur"," Shahuwadi"," Shevgaon"," Shirala"," Shirol"," Shirpur"," Shirur"," Shirwal"," Sholapur"," Shri Rampur"," Shrigonda"," Shrivardhan"," Sillod"," Sinderwahi"," Sindhudurg"," Sindkheda"," Sindkhedaraja"," Sinnar"," Sironcha"," Soyegaon"," Surgena"," Talasari"," Talegaon SJi Pant"," Taloda"," Tasgaon"," Thane"," Tirora"," Tiwasa"," Trimbak"," Tuljapur"," Tumsar"," Udgir"," Umarkhed"," Umrane"," Umrer"," Urlikanchan"," Vaduj"," Velhe"," Vengurla"," Vijapur"," Vita"," Wada"," Wai"," Walchandnagar"," Wani"," Wardha"," Warlydwarud"," Warora"," Washim"," Wathar"," Yavatmal"," Yawal"," Yeola"," Yeotmal"],
 
 Manipur:[" Bishnupur"," Chakpikarong"," Chandel"," Chattrik"," Churachandpur"," Imphal"," Jiribam"," Kakching"," Kalapahar"," Mao"," Mulam"," Parbung"," Sadarhills"," Saibom"," Sempang"," Senapati"," Sochumer"," Taloulong"," Tamenglong"," Thinghat"," Thoubal"," Ukhrul"],
 
 Meghalaya:[" Amlaren"," Baghmara"," Cherrapunjee"," Dadengiri"," Garo Hills"," Jaintia Hills"," Jowai"," Khasi Hills"," Khliehriat"," Mariang"," Mawkyrwat"," Nongpoh"," Nongstoin"," Resubelpara"," Ri Bhoi","Shillong"," Tura"," Williamnagar"],
 
 Mizoram:[" Aizawl"," Champhai"," Demagiri"," Kolasib"," Lawngtlai"," Lunglei"," Mamit"," Saiha"," Serchhip"],
 
 Nagaland:[" Dimapur"," Jalukie"," Kiphire"," Kohima"," Mokokchung"," Mon"," Phek"," Tuensang"," Wokha"," Zunheboto"],"Odisha (Orissa)":[" Anandapur"," Angul"," Anugul"," Aska"," Athgarh"," Athmallik"," Attabira"," Bagdihi"," Balangir"," Balasore"," Baleswar"," Baliguda"," Balugaon"," Banaigarh"," Bangiriposi"," Barbil"," Bargarh"," Baripada"," Barkot"," Basta"," Berhampur"," Betanati"," Bhadrak"," Bhanjanagar"," Bhawanipatna"," Bhubaneswar"," Birmaharajpur"," Bisam Cuttack"," Boriguma"," Boudh"," Buguda"," Chandbali"," Chhatrapur"," Chhendipada"," Cuttack"," Daringbadi"," Daspalla"," Deodgarh"," Deogarh"," Dhanmandal"," Dharamgarh"," Dhenkanal"," Digapahandi"," Dunguripali"," G Udayagiri"," Gajapati"," Ganjam"," Ghatgaon"," Gudari"," Gunupur"," Hemgiri"," Hindol"," Jagatsinghapur"," Jajpur"," Jamankira"," Jashipur"," Jayapatna"," Jeypur"," Jharigan"," Jharsuguda"," Jujumura"," Kalahandi"," Kalimela"," Kamakhyanagar"," Kandhamal"," Kantabhanji"," Kantamal"," Karanjia"," Kashipur"," Kendrapara"," Kendujhar"," Keonjhar"," Khalikote"," Khordha"," Khurda"," Komana"," Koraput"," Kotagarh"," Kuchinda"," Lahunipara"," Laxmipur"," M Rampur"," Malkangiri"," Mathili"," Mayurbhanj"," Mohana"," Motu"," Nabarangapur"," Naktideul"," Nandapur"," Narlaroad"," Narsinghpur"," Nayagarh"," Nimapara"," Nowparatan"," Nowrangapur"," Nuapada"," Padampur"," Paikamal"," Palla Hara"," Papadhandi"," Parajang"," Pardip"," Parlakhemundi"," Patnagarh"," Pattamundai"," Phiringia"," Phulbani"," Puri"," Puruna Katak"," R Udayigiri"," Rairakhol"," Rairangpur"," Rajgangpur"," Rajkhariar"," Rayagada"," Rourkela"," Sambalpur"," Sohela"," Sonapur"," Soro"," Subarnapur"," Sunabeda"," Sundergarh"," Surada"," T Rampur"," Talcher"," Telkoi"," Titlagarh"," Tumudibandha"," Udala"," Umerkote"],"Puducherry (Pondicherry)":[" Bahur"," Karaikal"," Mahe"," Pondicherry"," Purnankuppam"," Valudavur"," Villianur"," Yanam"],Punjab:[" Abohar"," Ajnala"," Amritsar"," Balachaur"," Barnala"," Batala"," Bathinda"," Chandigarh"," Dasua"," Dinanagar"," Faridkot"," Fatehgarh Sahib"," Fazilka"," Ferozepur"," Garhashanker"," Goindwal"," Gurdaspur"," Guruharsahai"," Hoshiarpur"," Jagraon"," Jalandhar"," Jugial"," Kapurthala"," Kharar"," Kotkapura"," Ludhiana"," Malaut"," Malerkotla"," Mansa"," Moga"," Muktasar"," Nabha"," Nakodar"," Nangal"," Nawanshahar"," Nawanshahr"," Pathankot"," Patiala"," Patti"," Phagwara"," Phillaur"," Phulmandi"," Quadian"," Rajpura"," Raman"," Rayya"," Ropar"," Rupnagar"," Samana"," Samrala"," Sangrur"," Sardulgarh"," Sarhind"," SAS Nagar"," Sultanpur Lodhi"," Sunam"," Tanda Urmar"," Taran Taran"," Zira"],
 
 Rajasthan:[" Abu Road"," Ahore"," Ajmer"," Aklera"," Alwar"," Amber"," Amet"," Anupgarh"," Asind"," Aspur"," Atru"," Bagidora"," Bali"," Bamanwas"," Banera"," Bansur"," Banswara"," Baran"," Bari"," Barisadri"," Barmer"," Baseri"," Bassi"," Baswa"," Bayana"," Beawar"," Begun"," Behror"," Bhadra"," Bharatpur"," Bhilwara"," Bhim"," Bhinmal"," Bikaner"," Bilara"," Bundi"," Chhabra"," Chhipaborad"," Chirawa"," Chittorgarh"," Chohtan"," Churu"," Dantaramgarh"," Dausa"," Deedwana"," Deeg"," Degana"," Deogarh"," Deoli"," Desuri"," Dhariawad"," Dholpur"," Digod"," Dudu"," Dungarpur"," Dungla"," Fatehpur"," Gangapur"," Gangdhar"," Gerhi"," Ghatol"," Girwa"," Gogunda"," Hanumangarh"," Hindaun"," Hindoli"," Hurda"," Jahazpur"," Jaipur"," Jaisalmer"," Jalore"," Jhalawar"," Jhunjhunu"," Jodhpur"," Kaman"," Kapasan"," Karauli"," Kekri"," Keshoraipatan"," Khandar"," Kherwara"," Khetri"," Kishanganj"," Kishangarh"," Kishangarhbas"," Kolayat"," Kota"," Kotputli"," Kotra"," Kotri"," Kumbalgarh"," Kushalgarh"," Ladnun"," Ladpura"," Lalsot"," Laxmangarh"," Lunkaransar"," Mahuwa"," Malpura"," Malvi"," Mandal"," Mandalgarh"," Mandawar"," Mangrol"," Marwar-Jn"," Merta"," Nadbai"," Nagaur"," Nainwa"," Nasirabad"," Nathdwara"," Nawa"," Neem Ka Thana"," Newai"," Nimbahera"," Nohar"," Nokha"," Onli"," Osian"," Pachpadara"," Pachpahar"," Padampur"," Pali"," Parbatsar"," Phagi"," Phalodi"," Pilani"," Pindwara"," Pipalda"," Pirawa"," Pokaran"," Pratapgarh"," Raipur"," Raisinghnagar"," Rajgarh"," Rajsamand"," Ramganj Mandi"," Ramgarh"," Rashmi"," Ratangarh"," Reodar"," Rupbas"," Sadulshahar"," Sagwara"," Sahabad"," Salumber"," Sanchore"," Sangaria"," Sangod"," Sapotra"," Sarada"," Sardarshahar"," Sarwar"," Sawai Madhopur"," Shahapura"," Sheo"," Sheoganj"," Shergarh"," Sikar"," Sirohi"," Siwana"," Sojat"," Sri Dungargarh"," Sri Ganganagar"," Sri Karanpur"," Sri Madhopur"," Sujangarh"," Taranagar"," Thanaghazi"," Tibbi"," Tijara"," Todaraisingh"," Tonk"," Udaipur"," Udaipurwati"," Uniayara"," Vallabhnagar"," Viratnagar"],
 
 Sikkim:[" Barmiak"," Be"," Bhurtuk"," Chhubakha"," Chidam"," Chubha"," Chumikteng"," Dentam"," Dikchu"," Dzongri"," Gangtok"," Gauzing"," Gyalshing"," Hema"," Kerung"," Lachen"," Lachung"," Lema"," Lingtam"," Lungthu"," Mangan"," Namchi"," Namthang"," Nanga"," Nantang"," Naya Bazar"," Padamachen"," Pakhyong"," Pemayangtse"," Phensang"," Rangli"," Rinchingpong"," Sakyong"," Samdong"," Singtam"," Siniolchu"," Sombari"," Soreng"," Sosing"," Tekhug"," Temi"," Tsetang"," Tsomgo"," Tumlong"," Yangang"," Yumtang"],"Tamil Nadu":[" Ambasamudram"," Anamali"," Arakandanallur"," Arantangi"," Aravakurichi"," Ariyalur"," Arkonam"," Arni"," Aruppukottai"," Attur"," Avanashi"," Batlagundu"," Bhavani"," Chengalpattu"," Chengam"," Chennai"," Chidambaram"," Chingleput"," Coimbatore"," Courtallam"," Cuddalore"," Cumbum"," Denkanikoitah"," Devakottai"," Dharampuram"," Dharmapuri"," Dindigul"," Erode"," Gingee"," Gobichettipalayam"," Gudalur"," Gudiyatham"," Harur"," Hosur"," Jayamkondan"," Kallkurichi"," Kanchipuram"," Kangayam"," Kanyakumari"," Karaikal"," Karaikudi"," Karur"," Keeranur"," Kodaikanal"," Kodumudi"," Kotagiri"," Kovilpatti"," Krishnagiri"," Kulithalai"," Kumbakonam"," Kuzhithurai"," Madurai"," Madurantgam"," Manamadurai"," Manaparai"," Mannargudi"," Mayiladuthurai"," Mayiladutjurai"," Mettupalayam"," Metturdam"," Mudukulathur"," Mulanur"," Musiri"," Nagapattinam"," Nagarcoil"," Namakkal"," Nanguneri"," Natham"," Neyveli"," Nilgiris"," Oddanchatram"," Omalpur"," Ootacamund"," Ooty"," Orathanad"," Palacode"," Palani"," Palladum"," Papanasam"," Paramakudi"," Pattukottai"," Perambalur"," Perundurai"," Pollachi"," Polur"," Pondicherry"," Ponnamaravathi"," Ponneri"," Pudukkottai"," Rajapalayam"," Ramanathapuram"," Rameshwaram"," Ranipet"," Rasipuram"," Salem"," Sankagiri"," Sankaran"," Sathiyamangalam"," Sivaganga"," Sivakasi"," Sriperumpudur"," Srivaikundam"," Tenkasi"," Thanjavur"," Theni"," Thirumanglam"," Thiruraipoondi"," Thoothukudi"," Thuraiyure"," Tindivanam"," Tiruchendur"," Tiruchengode"," Tiruchirappalli"," Tirunelvelli"," Tirupathur"," Tirupur"," Tiruttani"," Tiruvallur"," Tiruvannamalai"," Tiruvarur"," Tiruvellore"," Tiruvettipuram"," Trichy"," Tuticorin"," Udumalpet"," Ulundurpet"," Usiliampatti"," Uthangarai"," Valapady"," Valliyoor"," Vaniyambadi"," Vedasandur"," Vellore"," Velur"," Vilathikulam"," Villupuram"," Virudhachalam"," Virudhunagar"," Wandiwash"," Yercaud"],Tripura:[" Agartala"," Ambasa"," Bampurbari"," Belonia"," Dhalai"," Dharam Nagar"," Kailashahar"," Kamal Krishnabari"," Khopaiyapara"," Khowai"," Phuldungsei"," Radha Kishore Pur"," Tripura"],"Uttar Pradesh":[" Achhnera"," Agra"," Akbarpur"," Aliganj"," Aligarh"," Allahabad"," Ambedkar Nagar"," Amethi"," Amiliya"," Amroha"," Anola"," Atrauli"," Auraiya"," Azamgarh"," Baberu"," Badaun"," Baghpat"," Bagpat"," Baheri"," Bahraich"," Ballia"," Balrampur"," Banda"," Bansdeeh"," Bansgaon"," Bansi"," Barabanki"," Bareilly"," Basti"," Bhadohi"," Bharthana"," Bharwari"," Bhogaon"," Bhognipur"," Bidhuna"," Bijnore"," Bikapur"," Bilari"," Bilgram"," Bilhaur"," Bindki"," Bisalpur"," Bisauli"," Biswan"," Budaun"," Budhana"," Bulandshahar"," Bulandshahr"," Capianganj"," Chakia"," Chandauli"," Charkhari"," Chhata"," Chhibramau"," Chirgaon"," Chitrakoot"," Chunur"," Dadri"," Dalmau"," Dataganj"," Debai"," Deoband"," Deoria"," Derapur"," Dhampur"," Domariyaganj"," Dudhi"," Etah"," Etawah"," Faizabad"," Farrukhabad"," Fatehpur"," Firozabad"," Garauth"," Garhmukteshwar"," Gautam Buddha Nagar"," Ghatampur"," Ghaziabad"," Ghazipur"," Ghosi"," Gonda"," Gorakhpur"," Gunnaur"," Haidergarh"," Hamirpur"," Hapur"," Hardoi"," Harraiya"," Hasanganj"," Hasanpur"," Hathras"," Jalalabad"," Jalaun"," Jalesar"," Jansath"," Jarar"," Jasrana"," Jaunpur"," Jhansi"," Jyotiba Phule Nagar"," Kadipur"," Kaimganj"," Kairana"," Kaisarganj"," Kalpi"," Kannauj"," Kanpur"," Karchhana"," Karhal"," Karvi"," Kasganj"," Kaushambi"," Kerakat"," Khaga"," Khair"," Khalilabad"," Kheri"," Konch"," Kumaon"," Kunda"," Kushinagar"," Lalganj"," Lalitpur"," Lucknow"," Machlishahar"," Maharajganj"," Mahoba"," Mainpuri"," Malihabad"," Mariyahu"," Math"," Mathura"," Mau"," Maudaha"," Maunathbhanjan"," Mauranipur"," Mawana"," Meerut"," Mehraun"," Meja"," Mirzapur"," Misrikh"," Modinagar"," Mohamdabad"," Mohamdi"," Moradabad"," Musafirkhana"," Muzaffarnagar"," Nagina"," Najibabad"," Nakur"," Nanpara"," Naraini"," Naugarh"," Nawabganj"," Nighasan"," Noida"," Orai"," Padrauna"," Pahasu"," Patti"," Pharenda"," Phoolpur"," Phulpur"," Pilibhit"," Pitamberpur"," Powayan"," Pratapgarh"," Puranpur"," Purwa"," Raibareli"," Rampur"," Ramsanehi Ghat"," Rasara"," Rath"," Robertsganj"," Sadabad"," Safipur"," Sagri"," Saharanpur"," Sahaswan"," Sahjahanpur"," Saidpur"," Salempur"," Salon"," Sambhal"," Sandila"," Sant Kabir Nagar"," Sant Ravidas Nagar"," Sardhana"," Shahabad"," Shahganj"," Shahjahanpur"," Shikohabad"," Shravasti"," Siddharthnagar"," Sidhauli"," Sikandra Rao"," Sikandrabad"," Sitapur"," Siyana"," Sonbhadra"," Soraon"," Sultanpur"," Tanda"," Tarabganj"," Tilhar"," Unnao"," Utraula"," Varanasi"," Zamania"],
Uttaranchal:["Almora"," Bageshwar"," Bhatwari"," Chakrata"," Chamoli"," Champawat"," Dehradun"," Deoprayag"," Dharchula"," Dunda"," Haldwani"," Haridwar"," Joshimath"," Karan Prayag"," Kashipur"," Khatima"," Kichha"," Lansdown"," Munsiari"," Mussoorie"," Nainital"," Pantnagar"," Partapnagar"," Pauri Garhwal"," Pithoragarh"," Purola"," Rajgarh"," Ranikhet"," Roorkee"," Rudraprayag"," Tehri Garhwal"," Udham Singh Nagar"," Ukhimath"," Uttarkashi"],"West Bengal":["Adra"," Alipurduar"," Amlagora"," Arambagh"," Asansol"," Balurghat"," Bankura"," Bardhaman"," Basirhat"," Berhampur"," Bethuadahari"," Birbhum"," Birpara"," Bishanpur"," Bolpur"," Bongoan"," Bulbulchandi"," Burdwan"," Calcutta"," Canning"," Champadanga"," Contai"," Cooch Behar"," Daimond Harbour"," Dalkhola"," Dantan"," Darjeeling"," Dhaniakhali"," Dhuliyan"," Dinajpur"," Dinhata"," Durgapur"," Gangajalghati"," Gangarampur"," Ghatal"," Guskara"," Habra"," Haldia"," Harirampur"," Harishchandrapur"," Hooghly"," Howrah"," Islampur"," Jagatballavpur"," Jalpaiguri"," Jhalda"," Jhargram"," Kakdwip"," Kalchini"," Kalimpong"," Kalna"," Kandi"," Karimpur"," Katwa"," Kharagpur"," Khatra"," Krishnanagar"," Mal Bazar"," Malda"," Manbazar"," Mathabhanga"," Medinipur"," Mekhliganj"," Mirzapur"," Murshidabad"," Nadia"," Nagarakata"," Nalhati"," Nayagarh"," Parganas"," Purulia"," Raiganj"," Rampur Hat"," Ranaghat"," Seharabazar"," Siliguri"," Suri"," Takipur"," Tamluk"]},

USA:{Alabama:["Montgomery","Birmingham"],California:["Sacramento","Fremont"],Illinois:["Springfield","Chicago"]},

Australia:{"New South Wales":["Sydney"],Victoria:["Melbourne"]},
Nepal:{
Bagmati:["Banepa", "Bhaktapur","Bidur","Bishalter","Dhulikhel", "Kathmandu","Kirtipur","Lalitpur","Madhyapur Thimi","Panauti","Tribuvannagar"],
Bheri:["Birendranagar","Gulariya","Narayan","Nepalganj","Surkhet"],
Dhawalagiri:["Baglung","Weni"],
Gandaki:["Byas","Leknath","Pokhara","Prithivinarayan","Putalibazar","Waling"],
Janakpur:["Bhimeshwar","Jaleshwar","Janakpur","Kamalamai","Malangwa","Sinduli Marhi"],
Karnali:["Jumla"],
Kosi:["Biratnagar","Dhankuta","Dharan","Inaruwa","Itahari","Khandbari"],
Lumbini:["Butwal","Kapilwastu","Ramgram","Sidharthanagar","Tansen","Wahadurganj"],
Mahakali:["Amargadhi","Dashrathchand","Mahendranagar"],
Mechi:["Bhadrapur","Damak","Ilam","Mechinagar"],
Narayani:["Bharatpur","Birganj","Chitwan","Gaur","Hetauda","Kalaiya","Ratnanagar"],
Rapti:["Salyan","Tulsipur"],
Sagarmatha:["Lahan","Rajbiraj","Siraha","Triyuga"],
Seti:["Dhangadi","Dipayal","Tikapur"]
}
};


/* $http.get('js/json_data/ship_select_dropdown_data.json').then(function(ship) {
           $scope.countries = ship.data;
         });*/


$scope.GetSelectedCountry = function () {
$scope.strCountry = document.getElementById("country").value;
};
$scope.GetSelectedState = function () {
$scope.strState = document.getElementById("state").value;
};


    $scope.dataArray = [{
        src: 'images/slider/banner-4-750x400.jpg'
    }, {
        src: 'images/slider/banner-1-750x400.jpg'
    }, {
        src: 'images/slider/banner-2-750x400.jpg'
    }, {
        src: 'images/slider/banner-3-750x400.jpg'
    }];




    /* $http.get('home_slider.json').success(function(data) {
           $scope.product_slide_a1 = data;
    console.log($scope.product_slide_a1);
         });*/



$http.get('js/json_data/product_1.json').then(function(product) {
           $scope.product_slide_a1 = product.data;
    console.log($scope.product_slide_a1);
         });


/*    $scope.product_slide_a1 = [{
        "title": "Seductive by Guess For Women - Eau De Toilette, 75ml",
        "thum_img": "images/product/img1.jpg",
        "price": "Rs.25,000",
        "alt_val": "i phone"
    }, {
        "title": "Beauty by Calvin Klein For Women - Eau De Parfum 100ml",
        "thum_img": "images/product/img2.jpg",
        "price": "Rs.13,000",
        "alt_val": "i phone"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000",
        "alt_val": "i phone"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000",
        "alt_val": "i phone"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000",
        "alt_val": "i phone"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000"
    }, {
        "title": "Cool Water by Davidoff For Men - Eau De Toilette, 125ml ",
        "thum_img": "images/product/img5.jpg",
        "price": "Rs.3,000"
    }]*/


    /*--------- popular product*/
    $scope.po_product_slide_a1 = [{
            title: 'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',
            thum_img: 'images/product/img1a.jpg',
            price: 'Rs.25,000'
        }, {
            title: 'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',
            thum_img: 'images/product/img2a.jpg',
            price: 'Rs.13,000'
        }, {
            title: 'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',
            thum_img: 'images/product/img3a.jpg',
            price: 'Rs.7,000'
        }, {
            title: 'VR Box VRO Virtual Reality 3D Glasses with Bluetooth',
            thum_img: 'images/product/img4a.jpg',
            price: 'Rs.42,000'
        }, {
            title: 'Sonashi Simply Straight Hair Brush Straightener',
            thum_img: 'images/product/img5a.jpg',
            price: 'Rs.3,000'
        }, {
            title: 'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',
            thum_img: 'images/product/img1a.jpg',
            price: 'Rs.25,000'
        }, {
            title: 'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',
            thum_img: 'images/product/img2a.jpg',
            price: 'Rs.13,000'
        }, {
            title: 'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',
            thum_img: 'images/product/img3a.jpg',
            price: 'Rs.7,000'
        }

    ];

    /*--------- popular product electronics part 1 */

    $scope.e_product_slide_a_lap = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }

    ];
    /*--------- popular product electronics part 2 */
    $scope.e_product_slide_a_desk = [

        {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }
    ];
    /*--------- popular product electronics part 3 */
    $scope.e_product_slide_a_came = [

        {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }
    ];
    /*--------- popular product electronics part 4 */
    $scope.e_product_slide_a_phon = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }
    ];
	
	   $scope.e_product_slide_a_phons = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
		}
    ];
    /*--------- popular product electronics part 5 */
    $scope.e_product_slide_a_tv = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }
    ];
    /*--------- popular product electronics part 6 */
    $scope.e_product_slide_a_mp3 = [

        {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }
    ];

    /*-------- product Health and beauty part 6 */

    $scope.e_product_slide_a_health1 = [

        {
            title: 'Hair Care Cream for Men',
            thum_img: 'images/product/iphone_6-200x200.jpg',
            price: 'Rs.134.00'
        }
    ];
    $scope.e_product_slide_a_health2 = [

        {
            title: 'Hair Care Products',
            thum_img: 'images/product/nikon_d300_5-200x200.jpg',
            price: 'Rs.66.80',
            d_price: 'Rs.90.80',
            off_p: '-27%'
        }
    ];
    $scope.e_product_slide_a_health3 = [

        {
            title: 'Bed Head Foxy Curls Contour Cream',
            thum_img: 'images/product/nikon_d300_4-200x200.jpg',
            price: 'Rs.88.00'
        }
    ];
    $scope.e_product_slide_a_health4 = [

        {
            title: 'Shower Gel Perfume for Women',
            thum_img: 'images/product/macbook_5-200x200.jpg',
            price: 'Rs.95.00',
            d_price: 'Rs.99.00',
            off_p: '-4%'
        }
    ];
    $scope.e_product_slide_a_health5 = [

        {
            title: 'Perfumes for Women',
            thum_img: 'images/product/macbook_4-200x200.jpg',
            price: '$85.00'
        }
    ];
    $scope.e_product_slide_a_health6 = [

        {
            title: 'Make Up for Naturally Beautiful Better',
            thum_img: 'images/product/macbook_3-200x200.jpg',
            price: '$123.00'
        }
    ];
    $scope.e_product_slide_a_health7 = [

        {
            title: 'Pnina Tornai Perfume',
            thum_img: 'images/product/macbook_2-200x200.jpg',
            price: 'Rs.110.00'
        }
    ];



    /*-----------------------------------------------------------------------------------------------------------------*/




    /* Product category start*/


    $scope.shop_by_cat = [{
            title: 'Television',
            prdct_img: 'images/product/telivision.jpg'
        },

        {
            title: 'Camera',
            prdct_img: 'images/product/camera.jpg'
        },

        {
            title: 'Home Audio',
            prdct_img: 'images/product/audio.jpg'
        },

        {
            title: 'HeadPhones',
            prdct_img: 'images/product/headphone.jpg'
        }
    ];

    $scope.shop_by_cat2 = [{
            title: 'Projectors',
            prdct_img2: 'images/product/projector.jpg'
        },

        {
            title: 'Speakers',
            prdct_img2: 'images/product/speaker.jpg'
        },

        {
            title: 'Data Storage',
            prdct_img2: 'images/product/data_storage.jpg'
        },

        {
            title: 'Sequerty Equipments',
            prdct_img2: 'images/product/security.jpg'
        }
    ];



    $scope.shop_by_brand = [{
            brnd_img: 'images/brand/samsung.jpg'
        },

        {
            brnd_img: 'images/brand/sony.jpg'
        },

        {
            brnd_img: 'images/brand/lg.jpg'
        },

        {
            brnd_img: 'images/brand/apple.jpg'
        },

        {
            brnd_img: 'images/brand/chrome.jpg'
        },

        {
            brnd_img: 'images/brand/bose.jpg'
        }
    ];

    $scope.shop_by_brand2 = [

        {
            brnd_img2: 'images/brand/braun.jpg'
        },

        {
            brnd_img2: 'images/brand/canon.jpg'
        },

        {
            brnd_img2: 'images/brand/gopro.jpg'
        },

        {
            brnd_img2: 'images/brand/hisense.jpg'
        },

        {
            brnd_img2: 'images/brand/jbl.jpg'
        },

        {
            brnd_img2: 'images/brand/samsung.jpg'
        }
    ];


    /*product category json end*/

    /*product subcategory json start*/
    $scope.sub_cat_offer = [

        {
            labl_dscnt: 'Special Offer',
            labl_cnt: '40'
        }, {
            labl_dscnt: 'Bulk Discount',
            labl_cnt: '25'
        }, {
            labl_dscnt: 'Bulk Discount',
            labl_cnt: '25'
        }, {
            labl_dscnt: 'Store Discount',
            labl_cnt: '85'
        }

    ];

    $scope.sub_cat_brand = [

        {
            sub_brand: 'Alonsa',
            sub_cnt: '1'
        }, {
            sub_brand: 'Bmsatellite',
            sub_cnt: '1'
        }, {
            sub_brand: 'Changhong',
            sub_cnt: '1'
        }, {
            sub_brand: 'Disney',
            sub_cnt: '7'
        }, {
            sub_brand: 'Elekta',
            sub_cnt: '1'
        }, {
            sub_brand: 'Eurostar',
            sub_cnt: '6'
        }, {
            sub_brand: 'Geevox',
            sub_cnt: '1'
        }, {
            sub_brand: 'General Gold',
            sub_cnt: '1'
        }, {
            sub_brand: 'Haier',
            sub_cnt: '1'
        }

    ];

    $scope.sub_cat_screen = [

        {
            sub_screen: '7',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.0',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.5',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '13.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '14Inch',
            sub_screen_inchs: '3'
        }, {
            sub_screen: '15.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '17 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '19 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '20',
            sub_screen_inchs: '3'
        }

    ];

    $scope.sub_cat_color = [

        {
            sub_color: 'Black',
            sub_color_cnt: '268'
        }, {
            sub_color: 'Blue',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Gold',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Grey',
            sub_color_cnt: '2'
        }, {
            sub_color: 'Pink',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Red',
            sub_color_cnt: '3'
        }, {
            sub_color: 'Silver',
            sub_color_cnt: '15'
        }, {
            sub_color: 'White',
            sub_color_cnt: '1'
        }

    ];

    $scope.sub_cat_typ = [

        {
            sub_typ: 'Android Tv',
            sub_typ_cnt: '9'
        }, {
            sub_typ: 'HD',
            sub_typ_cnt: '1'
        }, {
            sub_typ: 'Smart',
            sub_typ_cnt: '2'
        }, {
            sub_typ: 'Smart3D TV',
            sub_typ_cnt: '3'
        }, {
            sub_typ: 'SmartTv',
            sub_typ_cnt: '41'
        }, {
            sub_typ: 'StandardTv',
            sub_typ_cnt: '32'
        }, {
            sub_typ: '3D Tv',
            sub_typ_cnt: '5'
        }, {
            sub_typ: '4K Uhd',
            sub_typ_cnt: '1'
        }

    ];

    $scope.sub_cat_res = [

        {
            sub_res: '1920X1080',
            sub_res_cnt: '22'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '19'
        }, {
            sub_res: '1366X768',
            sub_res_cnt: '15'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '9'
        }, {
            sub_res: '1920X180',
            sub_res_cnt: '4'
        }, {
            sub_res: '1280X720',
            sub_res_cnt: '3'
        }, {
            sub_res: '720X576',
            sub_res_cnt: '2'
        }, {
            sub_res: '1024X768',
            sub_res_cnt: '1'
        }, {
            sub_res: '1920X1080(full Hd)',
            sub_res_cnt: '1'
        }

    ];
	    $scope.sub_cat_con = [

        {
            sub_res: 'New',
            sub_res_cnt: '610'
        }, {
            sub_res: 'Used',
            sub_res_cnt: '05'
        }

    ];
	

    $scope.sub_cat_price = [

        {
            sub_price: 'Less than Rs.10,000'
        }, {
            sub_price: 'Rs.10,000 - Rs.30,000'
        }, {
            sub_price: 'Rs.30,000 - Rs.50,000'
        }, {
            sub_price: 'Rs.50,000 - Rs.70,000'
        }, {
            sub_price: 'More Than  Rs.70,000'
        }

    ];

    $scope.sub_cat_prd_th = [

        {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }



    ];

    $scope.sub_cat_prd_top = [

        {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }

    ];

    $scope.sub_cat_prd_newnes = [

        {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }


    ];

    $scope.sub_cat_prd_newness2 = [

        {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }

    ];


    /*product subcategory json end*/

    /*product subcategory compare json start*/


    $scope.sub_cat_compbrand = [

        {
            sub_brand: 'Alonsa',
            sub_cnt: '1'
        }, {
            sub_brand: 'Bmsatellite',
            sub_cnt: '1'
        }, {
            sub_brand: 'Changhong',
            sub_cnt: '1'
        }, {
            sub_brand: 'Disney',
            sub_cnt: '7'
        }, {
            sub_brand: 'Elekta',
            sub_cnt: '1'
        }, {
            sub_brand: 'Eurostar',
            sub_cnt: '6'
        }, {
            sub_brand: 'Geevox',
            sub_cnt: '1'
        }, {
            sub_brand: 'General Gold',
            sub_cnt: '1'
        }, {
            sub_brand: 'Haier',
            sub_cnt: '1'
        }

    ];

    $scope.sub_cat_compscreen = [

        {
            sub_screen: '7',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.0',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.5',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '13.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '14Inch',
            sub_screen_inchs: '3'
        }, {
            sub_screen: '15.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '17 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '19 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '20',
            sub_screen_inchs: '3'
        }

    ];

    $scope.sub_cat_compcolor = [

        {
            sub_color: 'Black',
            sub_color_cnt: '268'
        }, {
            sub_color: 'Blue',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Gold',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Grey',
            sub_color_cnt: '2'
        }, {
            sub_color: 'Pink',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Red',
            sub_color_cnt: '3'
        }, {
            sub_color: 'Silver',
            sub_color_cnt: '15'
        }, {
            sub_color: 'White',
            sub_color_cnt: '1'
        }

    ];

    $scope.sub_cat_comptyp = [

        {
            sub_typ: 'Android Tv',
            sub_typ_cnt: '9'
        }, {
            sub_typ: 'HD',
            sub_typ_cnt: '1'
        }, {
            sub_typ: 'Smart',
            sub_typ_cnt: '2'
        }, {
            sub_typ: 'Smart3D TV',
            sub_typ_cnt: '3'
        }, {
            sub_typ: 'SmartTv',
            sub_typ_cnt: '41'
        }, {
            sub_typ: 'StandardTv',
            sub_typ_cnt: '32'
        }, {
            sub_typ: '3D Tv',
            sub_typ_cnt: '5'
        }, {
            sub_typ: '4K Uhd',
            sub_typ_cnt: '1'
        }

    ];

    $scope.sub_cat_compres = [

        {
            sub_res: '1920X1080',
            sub_res_cnt: '22'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '19'
        }, {
            sub_res: '1366X768',
            sub_res_cnt: '15'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '9'
        }, {
            sub_res: '1920X180',
            sub_res_cnt: '4'
        }, {
            sub_res: '1280X720',
            sub_res_cnt: '3'
        }, {
            sub_res: '720X576',
            sub_res_cnt: '2'
        }, {
            sub_res: '1024X768',
            sub_res_cnt: '1'
        }, {
            sub_res: '1920X1080(full Hd)',
            sub_res_cnt: '1'
        }

    ];

    $scope.sub_cat_compprice = [

        {
            sub_price: 'Less than Rs.10,000'
        }, {
            sub_price: 'Rs.10,000 - Rs.30,000'
        }, {
            sub_price: 'Rs.30,000 - Rs.50,000'
        }, {
            sub_price: 'Rs.50,000 - Rs.70,000'
        }, {
            sub_price: 'More Than  Rs.70,000'
        }

    ];

    $scope.sub_cat_prd_th1 = [

        {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }

    ];

    $scope.sub_cat_prd_top1 = [

        {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }

    ];



    $scope.sub_cat_prd_newnes1 = [

        {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }


    ];


    $scope.sub_cat_prd_newness22 = [

        {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }

    ];


    /*product subcategory compare json end*/

/*product detail json start*/
	
	$scope.discript_h3='Obi Worldphone SJ5.1 Dual Sim 16 GB Smartphone';
	$scope.discript_review='105';
	$scope.discript_alreadysold='160 already sold';
	$scope.discript_price='Price:';
	$scope.discript_price_old='Rs.1,202.00';
	$scope.discript_pric='Rs.1,142.00';
	$scope.discript_off='3% Off';
	$scope.discript_Ship='Shiping:';
	$scope.discript_lbl='Rs 150 to';
	$scope.discript_lbl1='Kathmandu Inside Ring Road via SID Standard Delivery';
	$scope.discript_p1='Estimated Delivery Time: 1-3 days (ships out within 3 business days)';
	$scope.discript_buy='Buy Now';
	$scope.discript_add='Add to Favourite';
	$scope.discript_comp='Compare';
	$scope.discript_coupan='COUPON';
	$scope.discript_gt='Get';
	$scope.discript_dsc='5% discount';
	$scope.discript_sellinf='Seller Information';
	$scope.discript_sellimg='images/product/mic.png';
	$scope.discript_ob='obiw';
	$scope.discript_obtitle='Selling for 2 years';
	$scope.discript_cnt='(10)';
	$scope.discript_crctimg='images/checkd.png';
	$scope.discript_dscrpt='Description:';
	$scope.discript_dscrption='Easy multitasking with faster SJ1.5s Quad-core MediaTek processor, Stay connected, always ready with 3,000 mAh battery,  SJ1.5 comes with 16GB of internal storage and a MicroSD™ tray, Dual SIM, Know your position with an A-GPS sensor that helps navigate';
	
	$scope.discript_fetre = [
        		
		{title:'Designed for living',decrip:'Obi Worldphone SJ1.5 is built to go with you. The beautifully designed slim body is supercharged with long battery life, screen protection and never fail reliability. SJ1.5 gives you everything you need to be on top of it all.', drcip_mg:'images/mobile/tab_mo1.jpg'}
				
    ];
	
	
	$scope.discript_fetre1 = [
	
	{drcip_mg1:'images/mobile/tab_mo2.jpg',title1:'Distinctive style', decrip1:'You can recognise Obi Worldphone SJ1.5 from across the room. Quality materials, carefully applied splashes of color and extra sharp finishes show off your smart choice. An instantly recognisable shape breaks the mold. With a crisp, squared-off top and a curved bottom that gives it a distinctive look and feel, SJ1.5 is modern fun that never grows old.'}
				
    ];
	
	$scope.discript_fetre2 = [
	
	{title2:'Ahead of the curve',decrip2:'Obi Worldphone SJ1.5 has a vivid curved glass display, built flush with the body for a comfortable feel. The brilliant 5" high-definition screen is made for multimedia. Enjoy video, images and games in excellent clarity everywhere you go protected by scratch-resistant Corning® Gorilla® Glass 3. 5"High-Definition(1280 x 720 pixels) IPSIn-plane switching -accurate color at any angle. red-off top and a curved bottom that gives it a distinctive look and feel, SJ1.5 is modern fun that never grows old.',drcip_mg2:'images/mobile/tab_mo3.jpg'}
				
    ];
	
	
	
	$scope.discript_fetcntr='Sharp design. Sharper photos';
	
	
	$scope.discript_fetreprodu = [
        		
		{title:'8MP camera with LED flash ',produ_tx:'An OmniVision sensor delivers best-in-class pixel performance while using less power.'},
		{title:'5MP front-facing camera ',produ_tx:'For crystal clear video chat and better Selfies'}
		
		
					
    ];
	$scope.discript_mo4mg='images/mobile/tab_mo4.jpg';
	
	
	$scope.discript_color = [
        		
		{avil_color:'Black'},
		{avil_color:'Red'},
		{avil_color:'Blue'}
					
    ];
	$scope.discript_size = [
        		
		{avil_size:'S'},
		{avil_size:'M'},
		{avil_size:'L'},
		{avil_size:'XL'},
		{avil_size:'XXL'}
					
    ];
	
	$scope.shipin = [
        		
		{rs:'S',ttle:'Kathmandu Inside Ring Road via SID Standard Delivery',est:'Estimated Delivery Time: 1-3 days (ships out within 3 business days)'}
			
    ];
	$scope.copon = [
        		
		{ttle:'COUPON',gt:'Get',dsc:'5% discount',perrupee:'per Rs. 1500'}
			
    ];
	$scope.sellerinfo = [
        		
		{ttle:'Seller Information',sell_img:'images/product/mic.png',title2:'Selling for 2 years',cnt:'10', check_img:'images/checkd.png',verif:'Verified by SID [?]'}
			
    ];
	$scope.visit_sto = [
        		
		{stor_img1:'images/store.png',title:'Visit Store'},
		{stor_img1:'images/user_ plus.png',title:' Follow Seller'},
		{stor_img1:'images/chart.png',title:'Chat with Seller'},
    ];
	
	$scope.user = [
        	
				
		{stor_img:'images/user_ico/user1.jpg'},
		{stor_img:'images/user_ico/user2.jpg'},
		{stor_img:'images/user_ico/user3.jpg'},
		{stor_img:'images/user_ico/user4.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/user6.jpg'},
		{stor_img:'images/user_ico/user7.jpg'},
		{stor_img:'images/user_ico/user8.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/userN.jpg'},
		{stor_img:'images/user_ico/userH.jpg'},
		{stor_img:'images/user_ico/user9.jpg'},
		{stor_img:'images/user_ico/user10.jpg'},
		{stor_img:'images/user_ico/user11.jpg'},
		{stor_img:'images/user_ico/user12.jpg'},
		{stor_img:'images/user_ico/user13.jpg'},
		{stor_img:'images/user_ico/user14.jpg'},
		{stor_img:'images/user_ico/user15.jpg'},
		{stor_img:'images/user_ico/user16.jpg'},
		{stor_img:'images/user_ico/user17.jpg'},
		{stor_img:'images/user_ico/user18.jpg'},
		{stor_img:'images/user_ico/user19.jpg'},
		{stor_img:'images/user_ico/user3.jpg'},
		{stor_img:'images/user_ico/user20.jpg'},
		{stor_img:'images/user_ico/user21.jpg'},
		{stor_img:'images/user_ico/user22.jpg'},
		{stor_img:'images/user_ico/user23.jpg'},
		{stor_img:'images/user_ico/user8.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/user22.jpg'}
	
    ];
	
	$scope.visit_sto1 = [
        		
		{crs_img:'images/product/samsung_tab_1-200x200.jpg',title:'Aspire Ultrabook Laptop',price_new:'$241.99',price_old:'$230.00',save:'-5%',btntxt:'Add to Cart'},
		{crs_img:'images/product/macbook_pro_1-200x200.jpg',title:'Strategies for Acquiring Your Own Laptop',price_new:'$1,400.00',price_old:'$1,900.00',save:'26%',btntxt:'Add to Cart'},
		{crs_img:'images/product/macbook_1-200x200.jpg',title:'Ideapad Yoga 13-59341124 Laptop',pric:'$2.00',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_shuffle_1-200x200.jpg',title:'Hp Pavilion G6 2314ax Notebok Laptop',pric:'$122.00',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_touch_1-200x200.jpg',title:'Samsung Galaxy S4',price_new:'$62.00',price_old:'$122.00',save:'-50%',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_shuffle_1-200x200.jpg',title:'Hp Pavilion G6 2314ax Notebok Laptop',pric:'$122.00',btntxt:'Add to Cart'},
    ];
	
	
	$scope.prod_detl = [
        		
		{title:'Memory',tex1:'test 1',tex2:'8gb'},
		{title:'Processor',tex1:'No. of Cores',tex2:'1'},
		
    ];
	
	
	$scope.prod_review = [
        		
		{title:'harvey',tex_dte:'20/01/2016',tex2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
				
		{title:'Andrson',tex_dte:'20/01/2016',tex2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
		
    ];
	
	
	$scope.discript_yorev='Write a review';
	$scope.discript_yornm='Your Name';
	$scope.discript_yorevw='Your Review';
	$scope.discript_notee='Note:';
	$scope.discript_btncnt='Continue';
	
	
	/*product detail json end*/


    /*------------------------------------------------Json Data----------------------------------------------------------------------*/


 $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

});

// Image Zoom Controller In Angular
app.controller('EZPlusCtrl', function ($scope, $location) {
        $scope.imagesForGallery = [];
        $scope.setApproot = function(appRoot) {
            //only change when needed.
            if ($scope.approot && appRoot === $scope.approot) {
                return;
            }
            $scope.approot = appRoot;
            $scope.imagesForGallery = [
                {
                    thumb: appRoot + 'images/mobile/mo_th1.png',
                    small: appRoot + 'images/mobile/mo_img_sm1.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg1.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th2.png',
                    small: appRoot + 'images/mobile/mo_img_sm2.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg2.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th3.png',
                    small: appRoot + 'images/mobile/mo_img_sm3.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg3.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th4.png',
                    small: appRoot + 'images/mobile/mo_img_sm4.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg4.jpg'
                }
                
            ];

            $scope.zoomModel1 = $scope.imagesForGallery[0];
            //$scope.zoomModel2 = $scope.imagesForGallery[1];

            $scope.zoomModelGallery01 = $scope.imagesForGallery[0];
            //$scope.zoomModelGallery04 = $scope.imagesForGallery[1];
        };

        //default
        $scope.setApproot('');

        $scope.zoomOptions = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small'
        };

        $scope.zoomOptionsGallery01 = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small',

            gallery: 'gallery_01',
            cursor: 'crosshair',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: false
        };

       /* $scope.zoomOptionsGallery04 = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small',

            gallery: 'gallery_04',
            cursor: 'pointer',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: false
        };*/

        $scope.zoomModel1 = $scope.imagesForGallery[0];
        //$scope.zoomModel2 = $scope.imagesForGallery[1];

        $scope.zoomModelGallery01 = $scope.imagesForGallery[1];
        //$scope.zoomModelGallery04 = $scope.imagesForGallery[1];
        $scope.setActiveImageInGallery = function (prop, img) {
            $scope[prop] = img;
        };
    });





// I lazily load Directive the images, when they come into view.

app.directive(
    "bnLazySrc",
    function($window, $document) {
        // I manage all the images that are currently being
        // monitored on the page for lazy loading.
        var lazyLoader = (function() {
            // I maintain a list of images that lazy-loading
            // and have yet to be rendered.
            var images = [];
            // I define the render timer for the lazy loading
            // images to that the DOM-querying (for offsets)
            // is chunked in groups.
            var renderTimer = null;
            var renderDelay = 1000;
            // I cache the window element as a jQuery reference.
            var win = $($window);
            // I cache the document document height so that 
            // we can respond to changes in the height due to
            // dynamic content.
            var doc = $document;
            var documentHeight = doc.height();
            var documentTimer = null;
            var documentDelay = 1000;
            // I determine if the window dimension events 
            // (ie. resize, scroll) are currenlty being 
            // monitored for changes.
            var isWatchingWindow = false;
            // I start monitoring the given image for visibility
            // and then render it when necessary.
            function addImage(image) {
                images.push(image);
                if (!renderTimer) {
                    startRenderTimer();
                }
                if (!isWatchingWindow) {
                    startWatchingWindow();
                }
            }
            // I remove the given image from the render queue.
            function removeImage(image) {
                // Remove the given image from the render queue.
                for (var i = 0; i < images.length; i++) {
                    if (images[i] === image) {
                        images.splice(i, 1);
                        break;
                    }
                }
                // If removing the given image has cleared the
                // render queue, then we can stop monitoring 
                // the window and the image queue.
                if (!images.length) {
                    clearRenderTimer();
                    stopWatchingWindow();
                }
            }
            // I check the document height to see if it's changed.
            function checkDocumentHeight() {
                // If the render time is currently active, then 
                // don't bother getting the document height - 
                // it won't actually do anything.
                if (renderTimer) {
                    return;
                }
                var currentDocumentHeight = doc.height();
                // If the height has not changed, then ignore - 
                // no more images could have come into view.
                if (currentDocumentHeight === documentHeight) {
                    return;
                }
                // Cache the new document height.
                documentHeight = currentDocumentHeight;
                startRenderTimer();
            }
            // I check the lazy-load images that have yet to 
            // be rendered. 
            function checkImages() {
                // Log here so we can see how often this 
                // gets called during page activity.
                console.log("Checking for visible images...");
                var visible = [];
                var hidden = [];

                // Determine the window dimensions.
                var windowHeight = win.height();
                var scrollTop = win.scrollTop();

                // Calculate the viewport offsets.
                var topFoldOffset = scrollTop;
                var bottomFoldOffset = (topFoldOffset + windowHeight);
                // Query the DOM for layout and seperate the
                // images into two different categories: those
                // that are now in the viewport and those that
                // still remain hidden.
                for (var i = 0; i < images.length; i++) {

                    var image = images[i];
                    if (image.isVisible(topFoldOffset, bottomFoldOffset)) {
                        visible.push(image);
                    } else {
                        hidden.push(image);
                    }
                }
                // Update the DOM with new image source values.
                for (var i = 0; i < visible.length; i++) {
                    visible[i].render();
                }
                // Keep the still-hidden images as the new 
                // image queue to be monitored.
                images = hidden;
                // Clear the render timer so that it can be set
                // again in response to window changes.
                clearRenderTimer();
                // If we've rendered all the images, then stop
                // monitoring the window for changes.
                if (!images.length) {

                    stopWatchingWindow();
                }
            }
            // I clear the render timer so that we can easily 
            // check to see if the timer is running.
            function clearRenderTimer() {
                clearTimeout(renderTimer);
                renderTimer = null;
            }
            // I start the render time, allowing more images to
            // be added to the images queue before the render 
            // action is executed.
            function startRenderTimer() {
                renderTimer = setTimeout(checkImages, renderDelay);
            }
            // I start watching the window for changes in dimension.
            function startWatchingWindow() {
                isWatchingWindow = true;
                // Listen for window changes.
                win.on("resize.bnLazySrc", windowChanged);
                win.on("scroll.bnLazySrc", windowChanged);
                // Set up a timer to watch for document-height changes.
                documentTimer = setInterval(checkDocumentHeight, documentDelay);
            }
            // I stop watching the window for changes in dimension.
            function stopWatchingWindow() {
                isWatchingWindow = false;
                // Stop watching for window changes.
                win.off("resize.bnLazySrc");
                win.off("scroll.bnLazySrc");
                // Stop watching for document changes.
                clearInterval(documentTimer);
            }
            // I start the render time if the window changes.
            function windowChanged() {
                if (!renderTimer) {
                    startRenderTimer();
                }
            }
            // Return the public API.
            return ({
                addImage: addImage,
                removeImage: removeImage
            });
        })();
        // I represent a single lazy-load image.
        function LazyImage(element) {
            // I am the interpolated LAZY SRC attribute of 
            // the image as reported by AngularJS.					
            var source = null;
            // I determine if the image has already been 
            // rendered (ie, that it has been exposed to the
            // viewport and the source had been loaded).
            var isRendered = false;
            // I am the cached height of the element. We are 
            // going to assume that the image doesn't change 
            // height over time.
            var height = null;
            // I determine if the element is above the given 
            // fold of the page.
            function isVisible(topFoldOffset, bottomFoldOffset) {
                // If the element is not visible because it 
                // is hidden, don't bother testing it.
                if (!element.is(":visible")) {
                    return (false);
                }
                // If the height has not yet been calculated, 
                // the cache it for the duration of the page.
                if (height === null) {
                    height = element.height();
                }
                // Update the dimensions of the element.
                var top = element.offset().top;
                var bottom = (top + height);
                // Return true if the element is:
                // 1. The top offset is in view.
                // 2. The bottom offset is in view.
                // 3. The element is overlapping the viewport.
                return (
                    (
                        (top <= bottomFoldOffset) &&
                        (top >= topFoldOffset)
                    ) ||
                    (
                        (bottom <= bottomFoldOffset) &&
                        (bottom >= topFoldOffset)
                    ) ||
                    (
                        (top <= topFoldOffset) &&
                        (bottom >= bottomFoldOffset)
                    )
                );
            }
            // I move the cached source into the live source.
            function render() {
                isRendered = true;
                renderSource();
            }
            // I set the interpolated source value reported
            // by the directive / AngularJS.
            function setSource(newSource) {
                source = newSource;
                if (isRendered) {
                    renderSource();
                }
            }

            // I load the lazy source value into the actual 
            // source value of the image element.
            function renderSource() {
                element[0].src = source;
            }
            // Return the public API.
            return ({
                isVisible: isVisible,
                render: render,
                setSource: setSource
            });
        }
        // I bind the UI events to the scope.
        function link($scope, element, attributes) {
            var lazyImage = new LazyImage(element);
            // Start watching the image for changes in its
            // visibility.
            lazyLoader.addImage(lazyImage);
            // Since the lazy-src will likely need some sort
            // of string interpolation, we don't want to 
            attributes.$observe(
                "bnLazySrc",
                function(newSource) {
                    lazyImage.setSource(newSource);
                }
            );
            // When the scope is destroyed, we need to remove
            // the image from the render queue.
            $scope.$on(
                "$destroy",
                function() {
                    lazyLoader.removeImage(lazyImage);
                }
            );
        }
        // Return the directive configuration.
        return ({
            link: link,
            restrict: "A"
        });

    }
);

// OwlCarousel Directive Settings

app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function(scope) {
            scope.initCarousel = function(element) {
                // provide any default options you want
                var defaultOptions = {
                    /*autoPlay: 5000, 
                    stopOnHover: true,
                    slideSpeed : 300, ;*/
                    paginationSpeed : 400,
                    navigation : true,
                    navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                    lazyLoad : true
					
                };

                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }

                // init carousel
                $(element).owlCarousel(defaultOptions)
                    //Check if already carousel made then destroy

            }

        }
    };
});

app.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
            // wait for the last item in the ng-repeat then call init
            if (scope.$last) {
                scope.initCarousel(element.parent());

            }
        }
    };
}]);

// Template url Config

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/main.html"
        })
        .when("/product_category", {
            templateUrl: "template/product_category.html"
        })
        .when("/product_sub_category", {
            templateUrl: "template/product_sub_category.html"
        })
        .when("/product_sub_category_compare", {
            templateUrl: "template/product_sub_category_compare.html"
        })
        .when("/product_details_page", {
            templateUrl: "template/product_details_page.html"
        });
    /* .otherwise({
      redirectTo: '/'
    });*/

});

// All Modal config with Angular
app.config(function($stateProvider){
  $stateProvider.state("Base", {});

  $stateProvider.state("Modal", {
    views:{
      "modal": {
        templateUrl: "modal.html"
      }
    },
    onEnter: function($state){
      // Hitting the ESC key closes the modal
      $(document).on('keyup', function(e){
        if(e.keyCode == 27){
          $(document).off('keyup')
          $state.go('Base')
        }
      });

      // Clicking outside of the modal closes it
      $(document).on('click', '.Modal-backdrop, .Modal-holder', function() {
        $state.go('Base');
      });

      // Clickin on the modal or it's contents doesn't cause it to close
      $(document).on('click', '.Modal-box, .Modal-box *', function(e) {
        e.stopPropagation();
      });
	  $(document).on('click', '.Modal-box, .close *', function(e) {
       $state.go('Base');
      });
    },
    abstract: true
  });

  $stateProvider.state("Modal.confirmAddToCart", {
    views:{
      "modal": {
        templateUrl: "include/login.html"
      }
    }
  });

  $stateProvider.state("Modal.registration", {
    views:{
      "modal": {
        templateUrl: "include/registration.html"
      }
    }
  });
  
   $stateProvider.state("Modal.productmodel", {
    views:{
      "modal": {
        templateUrl: "include/productmodel.html"
      }
    }
  });
  $stateProvider.state("Modal.forgot", {
    views:{
      "modal": {
        templateUrl: "include/forgotmodel.html"
      }
    }
	
  });
  $stateProvider.state("Modal.shiping", {
    views:{
      "modal": {
        templateUrl: "include/ship_modal.html"
      }
    }
	
  });
})






