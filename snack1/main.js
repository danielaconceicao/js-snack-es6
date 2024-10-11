/* 
Stampare a schermo la bici con peso minore. */

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

let menorPeso = 0;
for (let i = 0; i < bicycles.length; i++) {
    const bici = bicycles[i];
    //console.log(bici);
     if (menorPeso > bici) {

    } 
    console.log(bici.peso);
}