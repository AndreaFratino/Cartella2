const prompt = require("prompt-sync")();
let spesa = [];
let scelta, i = 0, esci = false;

function creaOggetto() {
    return {
        nome: prompt("Inserisci il nome del prodotto:    "),
        marca: prompt("Inserisci la marca:   "),
        costo: Number(prompt("Inserisci il costo in euro:    "))
    };
}

let x = false;

function main() {
    while (esci == false) {

        
        console.log("Scegli: \n1) Inserisci prodotto nella lista \n2)Visualizza lista completa \n3)stop");
        
        do {
            scelta = Number(prompt("Scelta: "));
        } while (isNaN(scelta));

        switch (scelta) {
            case 1:
                do {
                    x = false;
                    spesa.push(creaOggetto());
                    if (isNaN(spesa[spesa.length - 1].costo)) {
                        x = true;
                        spesa.pop();
                        console.log("Il costo non è valido. Riprova.");
                    }
                } while (x == true);
                i++;
                break;

            case 2:
                console.log(spesa);
                break;

            case 3:
                esci = true;
                break;
        }
    }
}

main();
