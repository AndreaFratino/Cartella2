/**
 * @file Gestione di una lista della spesa tramite input utente.
 * Permette di inserire prodotti, visualizzare la lista,filtrare la lista,n ricercare un elemento e uscire dal programma.
 * Utilizza prompt-sync per l'interazione con l'utente via terminale.
 * @author Fratino Andrea
 * 
 */
const prompt = require("prompt-sync")(); // Modulo per input da terminale

/** @type {Array<{nome: string, marca: string, costo: number}>} */
let spesa = [];

let esci = false;

/**
 * Crea un oggetto prodotto con nome, marca e costo richiesti all'utente.
 * @returns {{nome: string, marca: string, costo: number}} Oggetto prodotto.
 */
function creaOggetto() {
    return {
        nome: prompt("Inserisci il nome del prodotto: "),
        marca: prompt("Inserisci la marca: "),
        costo: Number(prompt("Inserisci il costo in euro: "))
    };
}

/**
 * Stampa le informazioni di un prodotto contenuto nella lista.
 * @param {Array<{nome: string, marca: string, costo: number}>} spesa - Lista dei prodotti.
 * @param {number} i - Indice del prodotto da stampare.
 */
function stampa(spesa, i) {
    console.log("------------------------------------");
    console.log("Nome prodotto:  " + spesa[i].nome);
    console.log("Marca prodotto: " + spesa[i].marca);
    console.log("Costo prodotto: " + spesa[i].costo);
    console.log("------------------------------------");
}

/**
 * Filtra la lista in base al nome, marca o costo e stampa i risultati.
 */
function filtra() {
    console.log("\nFiltra per:\n1) Nome prodotto\n2) Marca\n3) Costo");
    let z, name, cost, marc, vet;

    do {
        z = Number(prompt("Scelta: "));
    } while (isNaN(z));

    switch (z) {
        case 1:
            name = prompt("Inserisci nome: ");
            vet = spesa.filter(x => x.nome == name);
            break;
        case 2:
            marc = prompt("Inserisci marca: ");
            vet = spesa.filter(x => x.marca == marc);
            break;
        case 3:
            do {
                cost = Number(prompt("Inserisci costo: "));
            } while (isNaN(cost));
            vet = spesa.filter(x => x.costo == cost);
            break;
        default:
            console.log("Scelta non valida.");
            return;
    }

    if (vet.length === 0) {
        console.log("Nessun prodotto trovato.");
    } else {
        for (let i = 0; i < vet.length; i++) {
            stampa(vet, i);
        }
    }
}

/**
 * Cerca un prodotto specifico nella lista confrontando nome, marca e costo.
 * Se trovato, ne stampa le informazioni.
 */
function cerca() {
    let tr = false, y, name, cost, marc;

    do {
        name = prompt("Inserisci nome: ");
        marc = prompt("Inserisci marca: ");
        cost = Number(prompt("Inserisci costo: "));
    } while (isNaN(cost));

    for (let i = 0; i < spesa.length; i++) {
        if (spesa[i].nome == name && spesa[i].marca == marc && spesa[i].costo == cost) {
            tr = true;
            y = i;
            break;
        }
    }

    if (tr) {
        console.log("Oggetto trovato in posizione " + (y + 1));
        stampa(spesa, y);
    } else {
        console.log("Oggetto non trovato.");
    }
}

/**
 * Funzione principale che gestisce il menu e l'esecuzione del programma.
 */
function main() {
    let scelta;
    while (!esci) {
        console.log("\nScegli:\n1) Inserisci prodotto\n2) Visualizza lista completa\n3) Filtra\n4) Ricerca\n5) Esci");

        do {
            scelta = Number(prompt("Scelta: "));
        } while (isNaN(scelta));

        switch (scelta) {
            case 1:
                let nuovo;
                do {
                    nuovo = creaOggetto();
                    if (isNaN(nuovo.costo)) {
                        console.log("Il costo non è valido. Riprova.");
                    }
                } while (isNaN(nuovo.costo));
                spesa.push(nuovo);
                break;

            case 2:
                if (spesa.length === 0) {
                    console.log("La lista è vuota.");
                } else {
                    for (let i = 0; i < spesa.length; i++) {
                        stampa(spesa, i);
                    }
                }
                break;

            case 3:
                filtra();
                break;

            case 4:
                cerca();
                break;

            case 5:
                esci = true;
                break;
        }
    }
}

main();
