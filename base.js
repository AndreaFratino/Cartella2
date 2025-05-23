/**
 * @file Gestione di una lista della spesa tramite input utente.
 * Permette di inserire prodotti, visualizzare la lista e uscire dal programma.
 * Utilizza prompt-sync per l'interazione con l'utente via terminale.
 * @author Fratino Andrea
 * 
 */

const prompt = require("prompt-sync")(); // Modulo per input da terminale

/** @type {Array<Object>} Lista della spesa */
let spesa = [];

/** @type {number} Scelta del menu */
let scelta;

/** @type {number} Indice per la stampa */
let i = 0;

/** @type {boolean} Flag per uscita dal programma */
let esci = false;

/**
 * Crea un oggetto prodotto da aggiungere alla lista della spesa.
 * @returns {{nome: string, marca: string, costo: number}} Oggetto prodotto
 */
function creaOggetto() {
    return {
        nome: prompt("Inserisci il nome del prodotto:    "),
        marca: prompt("Inserisci la marca:   "),
        costo: Number(prompt("Inserisci il costo in euro:    "))
    };
}

/**
 * Stampa i dati del prodotto corrente nella lista (usando indice `i` globale)
 */
function stampa() {
    console.log("------------------------------------")
    console.log("Nome prodotto:     " + spesa[i].nome)
    console.log("Marca prodotto:     " + spesa[i].marca)
    console.log("Costo prodotto:     " + spesa[i].costo)
    console.log("------------------------------------")
}

/** @type {boolean} Flag per validazione del costo */
let x = false;

/**
 * Funzione principale che gestisce il menu e l'interazione con l'utente.
 */
function main() {
    while (esci == false) {

        console.log("Scegli: \n1) Inserisci prodotto nella lista \n2) Visualizza lista completa \n3) Stop");
        
        do {
            scelta = Number(prompt("Scelta: "));
        } while (isNaN(scelta));

        switch (scelta) {
            case 1:
                // Inserimento prodotto con validazione del costo
                do {
                    x = false;
                    spesa.push(creaOggetto());
                    if (isNaN(spesa[spesa.length - 1].costo)) {
                        x = true;
                        spesa.pop();
                        console.log("Il costo non è valido. Riprova.");
                    }
                } while (x == true);
                break;

            case 2:
                // Visualizzazione lista
                while (i != spesa.length) {
                    stampa();
                    i++;
                }
                i = 0;
                break;

            case 3:
                // Uscita
                esci = true;
                break;
        }
    }
}

main(); // Avvio del programma
