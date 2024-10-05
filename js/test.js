// kelipatan 30  -->   1 sapi umur 1 tahun
// kelipata n 40 -->   1 sapi umur 2 tahun

// prieritas kelipatan 30

let hasil = 0;
let sapi = 240;
let kelipatan = 30;

while (sapi >= kelipatan) {
  sapi -= kelipatan;
  hasil += 1;
}

console.log("sapi yang harus dizakati adalah ", hasil);
console.log("sisa sapi =  ", sapi);

// prieritas kelipatan 40

hasil = 0;
sapi = 240;
kelipatan = 40;

while (sapi >= kelipatan) {
  sapi -= kelipatan;
  hasil += 1;
}

console.log("sapi yang harus dizakati adalah ", hasil);
console.log("sisa sapi =  ", sapi);

// prioritas randam

const final = [];
sapi = 240;

let spi = sapi;
while (spi >= 30) {
  spi -= 30;
  hasil += 1;
}
final.push({
  info: "sapi kelipatan ke 30",
  hasil,
  spi,
});

spi = sapi;
while (spi >= 40) {
  spi -= 40;
  hasil += 1;
}
final.push({
  info: "sapi kelipatan ke 40",
  hasil,
  spi,
});

// kelipatan 30, 40, 30 ,40................
spi = sapi;
let isThirdteen = true;
hasil = 0;

while (true) {
  if (isThirdteen) {
    spi -= 30;
    hasil += 1;
  } else {
    spi -= 40;
    hasil += 1;
  }
  isThirdteen = !isThirdteen;
  if (spi < 30) {
    break;
  }
}
final.push({
  info: "sapi kelipatan 30, 40, 30 dan seterusnya",
  hasil,
  spi,
});

console.log(final);
