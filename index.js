function dwarfRollCall(dwarves) {
  var addDwarves = [];

 for (let i=0; i < dwarves.length; i++) {

   addDwarves.push(`${i + 1}. ${dwarves[i]} `)
} 

 return addDwarves.join("") 
  
} 

function summonCaptainPlanet(planeteerCalls) {
 var callsArray = [];
for (let i=0; i < planeteerCalls.length; i++) {
  callsArray.push(planeteerCalls[i].toUpperCase + "!");
  
} 
return callsArray 

}


function longPlaneteerCalls(words) {
 for (let i=0; i < words.length; i++) {
  if (words[i].length > 4) { 
    return true 
}
else {
    return false
  }
}}

function findTheCheese (foods) {
}
