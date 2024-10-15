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

//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newSoccerTeam = [];
for (let i = 0; i< soccerTeam.length; i++) {
    const team = soccerTeam[i];
    newSoccerTeam.push({
        nome: team.nome,
        falliSubiti: team.falliSubiti
    });
}

console.log(soccerTeam, newSoccerTeam);