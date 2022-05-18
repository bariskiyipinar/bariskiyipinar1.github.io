<script>
 
var app = angular
.module("persModul", [])
.controller("persController", function ($scope) {
 
var personeller=[
{ "isim": "Yezdan","soyisim": "Erdurak","cinsiyet": "Erkek","maas": "3569" },
{ "isim": "Elfiye","soyisim": "Şencin","cinsiyet": "Erkek","maas": "4143" },
{ "isim": "Ezfer","soyisim": "Ovacık","cinsiyet": "Erkek","maas": "2705" },
{ "isim": "Teberhun","soyisim": "Karadağ sazak","cinsiyet": "Kız","maas": "2337" },
{ "isim": "Çağar","soyisim": "Alkan","cinsiyet": "Kız","maas": "1883" },
{ "isim": "Mükafi","soyisim": "Düşer","cinsiyet": "Kız","maas": "3869" },
{ "isim": "Süreha","soyisim": "Karakaya","cinsiyet": "Erkek","maas": "1796" },
{ "isim": "Taberi","soyisim": "Abacılı","cinsiyet": "Kız","maas": "4054" },
{ "isim": "Bala","soyisim": "Merkan","cinsiyet": "Erkek","maas": "2703" },
{ "isim": "Nil","soyisim": "Aksaç","cinsiyet": "Erkek","maas": "3510" },
{ "isim": "Ulualp","soyisim": "Seziş","cinsiyet": "Erkek","maas": "2688" },
{ "isim": "Çağlar","soyisim": "Selçuk atay","cinsiyet": "Erkek","maas": "3524" },
{ "isim": "Berkem","soyisim": "Erdoğan","cinsiyet": "Kız","maas": "2290" },
{ "isim": "Özgünel","soyisim": "Demirtaş","cinsiyet": "Erkek","maas": "3193" },
{ "isim": "Mübelliğ","soyisim": "Ölçer","cinsiyet": "Kız","maas": "3603" },
{ "isim": "Teberhun","soyisim": "Karadağ sazak","cinsiyet": "Kız","maas": "2337" },
{ "isim": "Çağar","soyisim": "Bakar","cinsiyet": "Kız","maas": "1883" },
{ "isim": "Mükafi","soyisim": "Düşkün","cinsiyet": "Kız","maas": "3869" }
 
];
$scope.personeller = personeller;
 
$scope.arama = function (item) {
if ($scope.araMetin == undefined) {
return true;
}
else {
if (item.isim.toLowerCase()
.indexOf($scope.araMetin.toLowerCase()) != -1 ||
item.soyisim.toLowerCase()
.indexOf($scope.araMetin.toLowerCase()) != -1) {
return true;
}
}
 
return false;
};
 
});
 
</script>
