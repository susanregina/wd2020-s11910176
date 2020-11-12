//Variabel

//let & const
// let _umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = true;
// let $nama = "Susan Joseph";
// console.log(_umur);
// console.log($nama);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);

//Operator

//Aritmetic Operator (+,-,*,/)

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1 + angka2);

// let umur=30;
// let namaDepan = "Susan";
// let namaBelakang = "Joseph";
// console.log("Nama Saya " + namaDepan + " " + namaBelakang + ". Umur saya adalah" + umur + "tahun"
// );

//Operator perbandingan

// let angka1 =10;
// let angka2 =9;

// console.log(angka1 <= angka2);


//ternary operator
// let hasil = 5;
// let hasil = angka <= 0 ? "Negatif" : "Positif";
// console.log(hasil);


// //Operator Logika
// let kondisi1 = true;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);

// console.log(!kondisi1);

// let angka = promp("Masukan angka : ")
// console.log("angka yang dimasukan adalah" + angka);

//Exercise 7

let berat = prompt("masukan Berat badan anda = kg");
let tinggi = prompt("masukan Tinggi = cm");
let bni = berat / (tinggi*tinggi);
console.log("BMI = " + bni);

function bmiCalculator () {
    let berat = prompt("Masukkan Berat Badan (kg) : ");
    console.log("Berat badan yang dimasukkan adalah " + berat);
    let tinggi = prompt("Masukkan Tinggi Badan (m) : ");
    console.log("Tinggi badan yang anda masukkan adalah " + tinggi);
    let hasil = berat / (tinggi * tinggi);
    console.log("BMI = " + hasil);

    if (hasil < 18.5) {
        console.log ("Underweight");
    } else if (hasil >= 18.5 && hasil < 24.9) {
        console.log("Normal Range");
    } else if (hasil >= 25.0 && hasil < 29.9) {
        console.log("Overweight (preobese)");
    } else if (hasil >= 30.0) {
        console.log ("Obese");
    } else if (hasil > 30.0 && hasil < 34.9) {
        console.log ("Class I");
    } else if (hasil > 35.0 && hasil < 39.9) {
        console.log ("Class II");
    } else if (hasil >= 40.00) {
        console.log ("Class III");
    }
}
bmiCalculator();
