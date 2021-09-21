// IIFE ------------------------------------------------------------------------------------------------------------

// (function () {
//   var privatnaVarijabla = true;
//   // …
// })();
// console.log(privatnaVarijabla); //ReferenceError

// IIFE ------------------------------------------------------------------------------------------------------------ END

//Const/Let - Scope -------------------------------------------------------------------------------------------------

// {
//   let privatnaLetVarijabla = true;
//   const privatnaConstVarijabla = true;
//   // …
// }
// console.log(privatnaLetVarijabla); //ReferenceError
// console.log(privatnaConstVarijabla); //ReferenceError

// Mutable / Unmutable ----------------------
// {
//   let mutirajucaVarijabla = true;
//   const neMutirajucaVarijabla = true;

//   mutirajucaVarijabla = false;
//   console.log(mutirajucaVarijabla); // false

//   neMutirajucaVarijabla = false; // TypeError
//   console.log(neMutirajucaVarijabla);
// }

//Const/Let - Scope ------------------------------------------------------------------------------------------------- END

// Arrow function ----------------------------------------------------------------------------------------------------

// {
//   const niz = [1, 2, 3];
//   const primjerArrFun = niz.map((broj) => broj + 1);
//   console.log(primjerArrFun);

//   const primjerFun = niz.map(function (broj) {
//     return broj + 2;
//   });
//   console.log(primjerFun);
// }
// {
//   const btnFunRef = document.getElementById("btnFun");
//   btnFunRef.addEventListener("click", function () {
//     console.log(this);
//   });

//   const btnArrRef = document.getElementById("btnArrFun");
//   btnArrRef.addEventListener("click", () => {
//     console.log(this);
//   });

//   let objekt = {
//     vrijednost: 404,
//     arrowFun: () => console.log(this.vrijednost, this),
//     fun: function () {
//       console.log(this.vrijednost, this);
//     },
//   };

//   objekt.arrowFun(); // undefined, [object Window]
//   objekt.fun(); // 404,  {vrijednost: 404, arrowFun: f, fun: f}
// }

// Arrow function ---------------------------------------------------------------------------------------------------- END

// Manipulacija teksta -----------------------------------------------------------------------------------------------

// {
//   const podatci = {
//     ime: "John",
//     prezime: "Doe",
//     br_godina: 23,
//     studij: "FOI",
//   };

//   const ES5tekst =
//     "Osoba" +
//     podatci.ime +
//     " " +
//     podatci.prezime +
//     "ima " +
//     podatci.br_godina +
//     " godina.\nStudira na " +
//     podatci.studij +
//     ".";
//   console.log(ES5tekst);

//   const ES6tekst = `Osoba ${podatci.ime} ${podatci.prezime} ima ${podatci.br_godina} godina.
// Studira na ${podatci.studij}.`;
//   console.log(ES6tekst);
// }

// Manipulacija teksta ---------------------------------------------------------------------------------------------- END

// Spred/Rest -------------------------------------------------------------------------------------------------------

// {
//   const niz = [1, 2, 3, 4, 5];
//   const kopiraniNiz = [...niz];
//   console.log(kopiraniNiz === niz, kopiraniNiz);

//   const objekt = {
//     ime: "John",
//     prezime: "Doe",
//     br_godina: 23,
//     studij: "FOI",
//   };
//   const kopiraniObjekt = { ...objekt };
//   console.log(kopiraniObjekt === objekt);

//   const spojeno = [...niz, { ...objekt }];
//   console.log(spojeno);
// }

// {
//   const restFun = (prvo, drugo, ...ostalo) => {
//     console.log(prvo, drugo);
//     console.log(ostalo);
//   };
//   restFun("jedan", "dva", 3, "cetiri", { pet: 5 });
// }

// Spred/Rest -------------------------------------------------------------------------------------------------------- END

// Class  ------------------------------------------------------------------------------------------------------------

// {
//   class Osoba {
//     constructor(ime, prezime) {
//       this.ime = ime;
//       this.prezime = prezime;
//     }

//     ispisiOsobu() {
//       console.log(`${this.ime} ${this.prezime}`);
//     }
//   }
//   const Petar = new Osoba("Petar", "Peric");
//   Petar.ispisiOsobu();
//   console.log(Petar);

//   class Inzinjer extends Osoba {
//     constructor(ime, prezime, mjStudiranja) {
//       super(ime, prezime);
//       this.studij = mjStudiranja;
//     }
//     ispisiStudij() {
//       super.ispisiOsobu();
//       console.log(`${this.studij}`);
//     }
//   }
//   const Ivan = new Inzinjer("Ivan", "Ivic", "FOI");
//   Ivan.ispisiStudij();
// }
// {
//   function Osoba(ime, prezime) {
//     this.ime = ime;
//     this.prezime = prezime;
//   }

//   Osoba.prototype.ispisiOsobu = function () {
//     console.log(`${this.ime} ${this.prezime}`);
//   };

//   const Petar = new Osoba("Petar", "Peric");
//   Petar.ispisiOsobu();
//   console.log(Petar);
// }

// Class  ------------------------------------------------------------------------------------------------------------ END

// Asinkrono programiranje -------------------------------------------------------------------------------------------

// Callback -----------------------------
// {
//   console.log("Prije!");
//   setTimeout(() => {
//     console.log("Dohvat podataka!");
//   }, 2000);
//   console.log("Poslje!");
// }
// {
//   const korisnici = [
//     { id: 1, ime: "Matej", rod: 2 },
//     { id: 2, ime: "Petar", rod: 1 },
//   ];

//   const dohvatiKorisnika = (id, callback) => {
//     setTimeout(() => {
//       console.log("Dohvat podataka!");
//       const pronadjeniKorisnik = korisnici.find(
//         (korisnik) => korisnik.id === id
//       );
//       callback(pronadjeniKorisnik);
//     }, 2000);
//   };

//   dohvatiKorisnika(1, (korisnik) => {
//     console.log(korisnik);
//     dohvatiKorisnika(korisnik.rod, (korisnik) => {
//       console.log(korisnik);
//     });
//   });
// }

// Promise ----------------------------
// {
//   const korisnici = [
//     { id: 1, ime: "Matej", rod: 2 },
//     { id: 2, ime: "Petar", rod: null },
//   ];

//   const dohvatiKorisnika = (id) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const pronadjeniKorisnik = korisnici.find(
//           (korisnik) => korisnik.id === id
//         );
//         console.log(pronadjeniKorisnik);
//         if (!pronadjeniKorisnik) reject(new Error("Pogreska"));
//         resolve(pronadjeniKorisnik);
//       }, 2000);
//     });
//   };

//   dohvatiKorisnika(1)
//     .then((korisnik) => {
//       return korisnik;
//     })
//     .then((korisnik) => dohvatiKorisnika(korisnik.rod))
//     .catch((pogreska) => console.log(pogreska.message));
// }

// Async await ------------------------
// {
//   const korisnici = [
//     { id: 1, ime: "Matej", rod: 2 },
//     { id: 2, ime: "Petar", rod: null },
//   ];

//   const dohvatiKorisnika = (id) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const pronadjeniKorisnik = korisnici.find(
//           (korisnik) => korisnik.id === id
//         );
//         console.log(pronadjeniKorisnik);
//         if (!pronadjeniKorisnik) reject(new Error("Pogreska"));
//         resolve(pronadjeniKorisnik);
//       }, 2000);
//     });
//   };

//   const obradiPodatke = async () => {
//     try {
//       const korisnik = await dohvatiKorisnika(1);
//       const rod = await dohvatiKorisnika(korisnik.rod);
//     } catch (pogreska) {
//       console.log(pogreska);
//     }
//   };

//   obradiPodatke();
// }

// Asinkrono programiranje --------------------------------------------------------------------------------------------- END

// Destrukturiranje niz/objekt -----------------------------------------------------------------------------------------

// const niz = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = niz;
// console.log(b, a, rest); // 2,1,3,4,5

// const objekt = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// const { a, b, ...rest } = objekt;
// console.log(a, b, rest); // 1, 2, {c: 3, d: 4, e: 5 }

// Destrukturiranje niz/objekt ------------------------------------------------------------------------------------------ END

// Operacije nad nizovima --------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------
// {
//   const niz = [1, 2, 3, 4, 5];

//   const noviNiz = niz.map((element) => element + 1);
//   console.log(noviNiz); // [2,3,4,5,6]
// }

// {
//   const niz = [1, 2, 3, 4, 5];

//   const noviNiz2 = niz.map((element) => {
//     return { br: element + 2 };
//   });
//   console.log(noviNiz2); // [{br: 3}{br: 4}{br: 5}, ...]
// }

// ------------------------------------------------------------------------------------------------------------

// {
// const podatci = [
//   { ime: "josip", br_godina: 32 },
//   { ime: "petar", br_godina: 16 },
//   { ime: "ivan", br_godina: 12 },
//   { ime: "matija", br_godina: 41 },
//   { ime: "petar", br_godina: 5 },
// ];
// // const pronadjiIme = podatci.find((element) => element.ime === "petar");
// // console.log(pronadjiIme);
// // const mladjiOd15 = podatci.find((element) => element.br_godina < 15);
// // console.log(mladjiOd15);
// const filtrirajIme = podatci.filter((element) => element.ime === "petar");
// console.log(filtrirajIme);
// const filtrirajMladjiOd15 = podatci.filter(
//   (element) => element.br_godina < 15
// );
// console.log(filtrirajMladjiOd15);
// }

// ------------------------------------------------------------------------------------------------------------
// {
//   const podatci = [
//     { ime: "josip", br_godina: 32 },
//     { ime: "petar", br_godina: 16 },
//     { ime: "ivan", br_godina: 12 },
//     { ime: "matija", br_godina: 41 },
//     { ime: "petar", br_godina: 5 },
//   ];

//   const daliSuSviStarijiOd15 = podatci.every(
//     (element) => element.br_godina > 15
//   );
//   console.log(daliSuSviStarijiOd15); // flase
// }
// ------------------------------------------------------------------------------------------------------------
// {
//   const podatci = [
//     { ime: "josip", br_godina: 32 },
//     { ime: "petar", br_godina: 16 },
//     { ime: "ivan", br_godina: 12 },
//     { ime: "matija", br_godina: 41 },
//     { ime: "petar", br_godina: 5 },
//   ];

//   const daliSuNekiStarijiOd15 = podatci.some(
//     (element) => element.br_godina > 15
//   );
//   console.log(daliSuNekiStarijiOd15); // true
// }
// ------------------------------------------------------------------------------------------------------------
// {
//   const niz = [1, 2, 3, 4, 5];

//   const ukupno = niz.reduce((akumulacija, element) => {
//     console.log(element, akumulacija);
//     // element | akumulacija
//     //    1     +     0
//     //    2     +     1
//     //    3     +     3
//     //    4     +     6
//     //    5     +     10
//     return akumulacija + element;
//   }, 0);
//   console.log(ukupno); // 15
// }
