const colors = ['yellow', 'blue', 'red', 'orange'];

let x = 0;
while (x <= 3) {
    console.log(colors[x]);
    x++;
};

for (let y = 0; colors.length > y; y++) {
    console.log(colors[y]);
};

colors.forEach((color) => console.log(color));

colors.forEach((element,index) => console.log('element ' + element + ' heeft index ' + index));

/* Antwoorden op de vragen:
1: while loop gebruikt 5 regels (inclusief let x=0)
   for loop gebruikt 3 regels
2: forEach gebruikt 1 regel
3: je hoeft geen variable te maken, je hoeft geen condition te bedenken/gebruiken, 
   je hoeft geen increment toe te passen op je gemaakte variabele    
   Uiteraard is de forEach method makkelijker leesbaar. De naam zegt het al:
   Van de array 'colors' voorElk element> console.log dit element )
4: Als je toch een object wil console.loggen met een loop, 
   dan kan dit met de for...in loop / statement.
   Je bent dan ook aan het itereren.
   Je bezoekt elke property vh object 1 keer
   Wanneer een property al een keer is bezocht, dan wordt deze overgeslagen.
   Dus de loop stopt wanneer alles is bezocht  

*/

const gegevens = { 
    Naam: 'Koos', 
    Leeftijd: 55, 
    Geslacht: 'Man',
    Geboorteplaats: 'Rotterdam',
    Dienstjaren: 35 
};


for (const eigenschap in gegevens) {
  console.log(`${eigenschap}: ${gegevens[eigenschap]}`);
  console.log(eigenschap);
  console.log(gegevens[eigenschap]);
}

// Dus er komt een variabele 'eigenschap' 
// Elke iteratie wordt een andere property vh object aan de variabele toegekend
// 1e keer: const eigenschap = Naam: 'Koos' > 
// het lijkt alsof eigenschap een property is geworden van gegevens
// verder raak ik de draad kwijt, ik zie alleen dat:
// console.log(eigenschap); geeft alleen de naam vd property
// console.log(gegevens[eigenschap]) geeft de value van de naam vd property






