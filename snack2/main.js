//Creare un array di oggetti di squadre di calcio.
const soccerTeam = [
    //Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    //Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    {
        nome: 'Botafogo', 
        //Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
        puntiFatti: Math.floor(Math.random() * 10) + 1, 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Flamengo', 
        //Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
        puntiFatti: Math.floor(Math.random() * 10) + 1, 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Vitoria', 
        //Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
        puntiFatti: Math.floor(Math.random() * 10) + 1, 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Fluminense', 
        //Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
        puntiFatti: Math.floor(Math.random() * 10) + 1, 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Santos', 
        //Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
        puntiFatti: Math.floor(Math.random() * 10) + 1, 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
  
];

for (let i = 0; i < soccerTeam.length; i++) {
    const team = soccerTeam[i];
    console.log(team);
}

//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const soccerTeam2 = [
    {
        nome: 'Corinthians', 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Palmeiras', 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
    {
        nome: 'Bahia', 
        falliSubiti: Math.floor(Math.random() * 10) + 1,
    },
];

for (let i = 0; i < soccerTeam2.length; i++) {
    const team = soccerTeam2[i];
    console.log(team);
}