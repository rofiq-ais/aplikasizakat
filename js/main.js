function progres() {
  alert(
    `Mohon maaf, fitur ini belum bisa diakses. \n Sedang dalam tahap pengerjaan`
  );
}

//

//

// ZAKAT EMAS
function cekEmas(berat, karat) {
  return (berat * karat) / 24;
}
const emas = {
  resultEmas: document.getElementById("hasilEmas"),
  inputBeratEmas: document.getElementById("beratEmas"),
  inputKaratEmas: document.getElementById("karatEmas"),
  nishobEmas: 85,
  tblEmas: document.querySelector("#emas"),
};
// emas.tblEmas.addEventListener("click", function () {
function applyEmas() {
  const bEmas = emas.inputBeratEmas.value;
  const kEmas = emas.inputKaratEmas.value;
  if (bEmas != "" && kEmas != "" && kEmas <= 24) {
    const emasMurni = cekEmas(bEmas, kEmas);
    if (emasMurni >= emas.nishobEmas) {
      emas.resultEmas.style.color = "black";
      emas.resultEmas.innerHTML = `Emas murni anda adalah <br> ${emasMurni} gram.<br>Maka anda telah berkewajiban membayar zakat sebesar ${
        (emasMurni * 2.5) / 100
      } gram`;
    } else {
      emas.resultEmas.style.color = "black";
      emas.resultEmas.innerHTML = `Emas muni anda adalah ${emasMurni} gram. <br> Anda belum berkewajiban membayar zakat`;
    }
  } else if (kEmas > 24) {
    emas.resultEmas.style.color = "red";
    emas.resultEmas.innerHTML = `Tidak ada emas yang lebih dari 24 karat!`;
  } else {
    emas.resultEmas.style.color = "red";
    emas.resultEmas.innerHTML = `Lengkapi data terlebih dahulu!`;
  }
}

// const freshEmas = document.getElementById("freshEmas");
// });
// freshEmas.addEventListener("click", function () {
function hapusEmas() {
  emas.inputBeratEmas.value = null;
  emas.inputKaratEmas.value = null;
  emas.resultEmas.innerHTML = "";
}
// });
//
//
//
//
//
//
// ZAKAT PERAK
const perak = {
  nishobPerak: 595,
  inputBeratPerak: document.getElementById("beratPerak"),
  resultPerak: document.getElementById("hasilPerak"),
  tblPerak: document.getElementById("perak"),
};

// perak.tblPerak.addEventListener("click", function () {
function applyPerak() {
  const bPerak = perak.inputBeratPerak.value;
  perak.resultPerak.style.color = "black";
  if (bPerak) {
    perak.resultPerak.style.color = "black";
    if (bPerak >= perak.nishobPerak) {
      perak.resultPerak.innerHTML = `Nishob perak adalah ${
        perak.nishobPerak
      }. <br> Anda berkewajiban membayar zakat perak sebesar ${
        (bPerak * 2.5) / 100
      } gram`;
    } else {
      perak.resultPerak.innerHTML = `Nishob perak adalah ${perak.nishobPerak}. <br> Anda belum berkewajiban membayar zakat`;
    }
  } else {
    perak.resultPerak.style.color = "red";
    perak.resultPerak.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }
}
// });

function hapusPerak() {
  perak.inputBeratPerak.value = null;
  perak.resultPerak.innerHTML = "";
}
//
//
//
//
//
//
// ZAKAT UANG
const uang = {
  cariNishobUang: function (hPerak) {
    return hPerak * perak.nishobPerak;
  },
  inputHargaPerak: document.getElementById("hargaPerak"),
  inputNominalUang: document.getElementById("nominalUang"),
  resultUang: document.getElementById("hasilUang"),
  tblUang: document.getElementById("uang"),
};

// perak.tblPerak.addEventListener("click", function () {
function applyUang() {
  const hPerak = uang.inputHargaPerak.value;
  const nominalUang = uang.inputNominalUang.value;
  const nishobUang = uang.cariNishobUang(hPerak);
  console.log(nishobUang);
  uang.resultUang.style.color = "black";
  if (hPerak != "" && nominalUang != "") {
    uang.resultUang.style.color = "black";
    if (nominalUang >= nishobUang) {
      uang.resultUang.innerHTML = `Nishob mata uang saat ini adalah Rp. ${nishobUang}<br>Anda berkewajiban membayar zakat uang sebesar Rp. ${
        (nominalUang * 2.5) / 100
      }`;
    } else {
      uang.resultUang.innerHTML = `Nishob mata uang saat ini adalah Rp. ${nishobUang} <br> Anda belum berkewajiban membayar zakat`;
    }
  } else {
    uang.resultUang.style.color = "red";
    uang.resultUang.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }
}
// });

function hapusUang() {
  uang.inputHargaPerak.value = null;
  uang.inputNominalUang.value = null;
  uang.resultUang.innerHTML = "";
}

//

//

//

// ZAKAT KAMBING
const kambing = {
  nishobKambing: 40,
  inputJumlahKambing: document.getElementById("jumlahKambing"),
  resultKambing: document.getElementById("hasilKambing"),
  tblKambing: document.getElementById("kambing"),
};

// kambing.tblKambing.addEventListener('click',function(){
function applyKambing() {
  const jKambing = kambing.inputJumlahKambing.value;
  let hitungKambing = jKambing;
  let finalKambing = 0;
  kambing.resultKambing.style.color = "black";
  if (jKambing) {
    if (hitungKambing >= kambing.nishobKambing && hitungKambing <= 120) {
      kambing.resultKambing.innerHTML = `Anda berkewajiban mengeluarkan zakat sebanyak 1 ekor kambing`;
    } else if (hitungKambing >= 121 && hitungKambing <= 200) {
      kambing.resultKambing.innerHTML = `Anda berkewajiban mengeluarkan zakat sebanyak 2 ekor kambing`;
    }else if(hitungKambing>200){
      hitungKambing -=200;
      finalKambing +=2;
      while(hitungKambing>=100){
        hitungKambing -=100;
        finalKambing +=1;
      }
      if(hitungKambing > 0){
        finalKambing+=1
      }
      kambing.resultKambing.innerHTML = `Anda berkewajiban mengeluarkan zakat sebanyak ${finalKambing} ekor kambing.`;

    }
    else {
      kambing.resultKambing.innerHTML = `Anda belum berkewajiban mengeluarkan zakat.`;
    }
  } else {
    kambing.resultKambing.style.color = "red";
    kambing.resultKambing.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }
}
// });

function hapusKambing() {
  kambing.inputJumlahKambing.value = null;
  kambing.resultKambing.innerHTML = "";
}

//

//
// ZAKAT UNTA
const unta = {
  nishobUnta: 5,
  nishobUnta1: 25,
  nishobUnta2: 36,
  nishobUnta3: 46,
  nishobUnta4: 61,
  nishobUnta5: 76,
  nishobUnta6: 91,
  nishobUntaAkhir: 120,

  inputJumlahUnta: document.getElementById("jumlahUnta"),
  resultUnta: document.getElementById("hasilUnta"),
  tblUnta: document.getElementById("unta"),
};

// unta.tblUnta.addEventListener('click',function(){
function applyUnta() {
  const jUnta = unta.inputJumlahUnta.value;
  let hitungUnta = jUnta;
  let kelipatanUnta1 = 5;
  let hasilUnta = 0;
  unta.resultUnta.style.color = "black";
  if (jUnta) {
    if (hitungUnta >= unta.nishobUnta && hitungUnta < unta.nishobUnta1) {
      while (hitungUnta >= kelipatanUnta1) {
        hitungUnta -= kelipatanUnta1;
        hasilUnta += 1;
      }
      console.log(hasilUnta);
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan ${hasilUnta} kambing`;
    } else if (
      hitungUnta >= unta.nishobUnta1 &&
      hitungUnta < unta.nishobUnta2
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>1 unta betina usia 1 tahun <br>atau 1 unta jantan usia 2 tahun`;
    } else if (
      hitungUnta >= unta.nishobUnta2 &&
      hitungUnta < unta.nishobUnta3
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>1 unta betina usia 2 tahun`;
    } else if (
      hitungUnta >= unta.nishobUnta3 &&
      hitungUnta < unta.nishobUnta4
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>1 unta  usia 3 tahun`;
    } else if (
      hitungUnta >= unta.nishobUnta4 &&
      hitungUnta < unta.nishobUnta5
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>1 unta  usia 4 tahun`;
    } else if (
      hitungUnta >= unta.nishobUnta5 &&
      hitungUnta < unta.nishobUnta6
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 2 tahun`;
    } else if (
      hitungUnta >= unta.nishobUnta6 &&
      hitungUnta < unta.nishobUntaAkhir
    ) {
      unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 3 tahun`;
    } else if (hitungUnta > unta.nishobUntaAkhir) {
      let sisaUnta = hitungUnta - unta.nishobUntaAkhir;
      let finalUnta = 0;
      if (sisaUnta < 50) {
        unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 3 tahun dan 1 unta 2 tahun`;
      } else if (hitungUnta >= 50) {
        while (sisaUnta >= 50) {
          sisaUnta -= 50;
          finalUnta += 1;
        }
        if (sisaUnta >= 40) {
          unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 3 tahun <br> dan ${
            finalUnta + 1
          } unta usia 2 tahun`;
        } else {
          unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 3 tahun <br> dan ${finalUnta} unta usia 2 tahun`;
        }
      } else {
        unta.resultUnta.innerHTML = `Anda berkewajiban untuk mengeluarkan <br>2 unta  usia 3 tahun`;
      }
    } else {
      unta.resultUnta.innerHTML = "Anda belum berkewajiban membayar zakat.";
    }
  } else {
    unta.resultUnta.style.color = "red";
    unta.resultUnta.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }
}
// });

function hapusUnta() {
  unta.inputJumlahUnta.value = null;
  unta.resultUnta.innerHTML = "";
}

//

//

//

// ZAKAT SAPI
const sapi = {
  nishobSapi: 30,
  inputJumlahSapi: document.getElementById("jumlahSapi"),
  resultSapi: document.getElementById("hasilSapi"),
  tblSapi: document.getElementById("sapi"),
};

// sapi.tblSapi.addEventListener('click',function(){
function applySapi() {
  let jSapi = sapi.inputJumlahSapi.value;
  let hitungSapi = jSapi;
  let sisaSapi = 0;
  const kelipatan1 = 30;
  const kelipatan2 = 40;
  let final = [0, 0];
  sapi.resultSapi.style.color = "black";
  if (jSapi) {
    if (jSapi >= kelipatan2) {
      // // Prioritas kelipatan 40
      while (hitungSapi >= kelipatan2) {
        hitungSapi -= kelipatan2;
        final[1] += 1;
      }
      console.log(final[1]);
      console.log(hitungSapi);
      sisaSapi = hitungSapi;
      if (sisaSapi >= kelipatan1) {
        sapi.resultSapi.innerHTML = `Anda wajib mengeluarkan zakat <br> ${final[1]} sapi usia 2 tahun dan 1 sapi usia 1 tahun.`;
      } else {
        sapi.resultSapi.innerHTML = `Anda wajib mengeluarkan zakat ${final[1]} sapi usia 2 tahun.`;
      }
    } else if (jSapi >= kelipatan1) {
      sapi.resultSapi.innerHTML = `Anda wajib mengeluarkan zakat 1 sapi usia 1 tahun.`;
    } else {
      sapi.resultSapi.innerHTML = `Anda belum berkewajiban mengeluarkan zakat.`;
    }
  } else {
    sapi.resultSapi.style.color = "red";
    sapi.resultSapi.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }

  sisaSapi = 0;
}
// });

function hapusSapi() {
  sapi.inputJumlahSapi.value = null;
  sapi.resultSapi.innerHTML = "";
}

//
//

//

// ZAKAT TANAMAN
const tanaman = {
  nishobTanaman: 750,
  inputBeratPanen: document.getElementById("beratPanen"),
  resultTanaman: document.getElementById("hasilTanaman"),
  pengairan: document.getElementById("siram"),
  tblTanaman: document.getElementById("tanaman"),
};

// sapi.tblSapi.addEventListener('click',function(){
function applyTanaman() {
  const bTanaman = tanaman.inputBeratPanen.value;
  const siram = tanaman.pengairan.value;
  console.log(siram);
  tanaman.resultTanaman.style.color = "black";
  if (bTanaman) {
    if (bTanaman >= tanaman.nishobTanaman) {
      if (siram == "alami") {
        tanaman.resultTanaman.innerHTML = ` Anda berkewajiban membayar zakat sebesar ${
          bTanaman / 10
        } kg`;
      } else {
        tanaman.resultTanaman.innerHTML = ` Anda berkewajiban membayar zakat sebesar ${
          bTanaman / 20
        } kg`;
      }
    } else {
      tanaman.resultTanaman.innerHTML = `Anda belum berkewajiban mengeluarkan zakat.`;
    }
  } else {
    tanaman.resultTanaman.style.color = "red";
    tanaman.resultTanaman.innerHTML = `Harap lengakpi data terlebih dahulu!`;
  }
}
// });

function hapusTanaman() {
  tanaman.inputBeratPanen.value = null;
  tanaman.resultTanaman.innerHTML = "";
}

// kambing.resultKambing.innerHTML = `Anda berkewajiban mengeluarkan zakat sebanyak 1 kambing`;
//
