function romanize() {
  let romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  let i;
  let parag = document.getElementById("output");
  let num = document.getElementById("number").value;
  let number = parseInt(num);
  if (number > 3000) {
    parag.innerHTML = `You entered ${number}. The value outside the allowable range`;
  } else {
    for (i in romans) {
      while (number >= romans[i]) {
        roman += i;
        number -= romans[i];
      }
    }

    parag.innerHTML = `Roman numeral equivalent of : ${roman}`;
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", romanize);
