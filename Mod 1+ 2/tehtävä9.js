let luku = Number(prompt("Anna kokonaisluku:"));

let alkuluku = true;

if (luku <= 1) {
    alkuluku = false;
}

for (let i = 2; i < luku; i++) {
    if (luku % i == 0) {
        alkuluku = false;
    }
}

if (alkuluku == true) {
    document.write(luku + " on alkuluku.");
} else {
    document.write(luku + " ei ole alkuluku.");
}