let maara = Number(prompt("Kuinka monta kertaa heitetään noppaa?"));

let summa = 0;

for (let i = 0; i < maara; i++) {
    let heitto = Math.floor(Math.random() * 6) + 1;
    summa = summa + heitto;
}

document.write("Noppien summa on: " + summa);