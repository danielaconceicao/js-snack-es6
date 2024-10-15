//Creare un array di oggetti
const bicycles = [
    //Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    {
        nome: 'Specialized S-Works Tarmac SL8',
        peso: 7,
    },

    {
        nome: 'Pinarello Dogma F',
        peso: 4,
    },

    {
        nome: 'Canyon Ultimate CF SLX',
        peso: 8,
    },

    {
        nome: 'Scott Addict RC',
        peso: 10,
    },

    {
        nome: 'Trek Madone SLR',
        peso: 5,
    },

];



let lighterBike = bicycles[0];
for (let i = 1; i < bicycles.length; i++) {
    const bici = bicycles[i];
    if (bici.peso < lighterBike.peso) {
        lighterBike = bici;
    }
}
console.log(lighterBike);

/* Stampare a schermo la bici con peso minore. */
document.writeln(lighterBike.nome);


/* 
bici[0] < bici[1] = 7 < 4 false
bici[1] < bici[2] = 4 < 8 true
bici[1] < bici[3] = 4 < 10 true
bici[1] < bici[4] = 4 < 5 true
o mior numero é 4

*/