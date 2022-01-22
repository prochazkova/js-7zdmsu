//toto je komentar

/*viceradkovy
komentar*/

//cisla se pisou bez uvozovek

/* PRVNI UKOL
1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg, měřím 1.67m a moje BMI je 23,2.".*/

let jmeno = 'Petr';
let věk = '36 let';
let váha = '89';
let výška = '1.87';
let bmi = váha / (výška * výška);

console.log(bmi);

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    věk +
    ', měřím ' +
    výška +
    'm' +
    ', a vážím ' +
    váha +
    'kg' +
    ' a moje BMI je ' +
    bmi
);
