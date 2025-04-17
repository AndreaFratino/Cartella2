
const prompt = require("prompt-sync")(); // Modulo per input da terminale

let spesa = [];

let scelta;

let i = 0;

let esci = false;

function creaOggetto() {
    return {
        nome: prompt("Inserisci il nome del prodotto:    "),
        marca: prompt("Inserisci la marca:   "),
        costo: Number(prompt("Inserisci il costo in euro:    "))
    };
}


function stampa(spesa) {
    console.log("------------------------------------")
    console.log("Nome prodotto:     " + spesa[i].nome)
    console.log("Marca prodotto:     " + spesa[i].marca)
    console.log("Costo prodotto:     " + spesa[i].costo)
    console.log("------------------------------------")
}

function filtra()
{
    console.log("\nfiltra per:\n1)nome prodotto\n2)marca\n3)costo")
    let z,name,cost,marc,vet;
    do {
        scelta = Number(prompt("Scelta: "));
    } while (isNaN(scelta));
    switch(scelta)
    {
        case 1:
            name=prompt("Inserisci nome:    ")
            vet=spesa.filter(x=>x.nome==name)
            for(let i=0;i<vet.length;i++)
                {
                    stampa(vet)
                }
            break;
        case 2:
            marc=prompt("Inserisci marca:    ")
            vet=spesa.filter(x=>x.marca==marc)
            for(let i=0;i<vet.length;i++)
                {
                    stampa(vet)
                }
            break;
        case 3:
            do{
            cost=Number(prompt("Inserisci costo:    "));
            }while(isNaN(cost))
            vet=spesa.filter(x=>x.costo==cost)
            for(let i=0;i<vet.length;i++)
            {
                stampa(vet)
            }
            break;
        
    }
}


let x = false;


function main() {
    while (esci == false) {

        console.log("Scegli: \n1) Inserisci prodotto nella lista \n2) Visualizza lista completa \n3) Stop");
        
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
                break;

            case 2:
                
                while (i != spesa.length) {
                    stampa(spesa);
                    i++;
                }
                i = 0;
                break;

            case 3:
                
               filtra();
                break;
        }
    }
}

main(); 
