let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < array.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "ucan", 33, true];
let susan = ["susan", "ucan", 17, true];
let joseph = ["joseph", "ucan", 18, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift()
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice("john");
console.log(john.join(" - "));

//concat()
let nama = john.concat(susan,joseph);
console.log(nama);

//slice()
let susan= ["susan", "ucan", 18, true];
let regina= ["regina", "ucan", 19, true];
let joseph = ["joseph", "ucan", 17, true];

console.log(regina);
console.log(joseph);

//sort()
let susan = ["susan", "ucan", 18, true];
susan.sort();

console.log(susan);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let susan = ["susan", "ucan", 18, true];

susan.reverse();

console.log(susan);