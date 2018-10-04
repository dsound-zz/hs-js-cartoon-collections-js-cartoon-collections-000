function dwarfRollCall(dwarves) {
  var numDwarves = [];
 for (let i=0; i < dwarves.length; i++) {
  numDwarves.push(`${i+1}. ${dwarves[i]} `)
}
return numDwarves.join("") 
}

function summonCaptainPlanet(planeteerCall) {
  var newArr = [];
 for (let i=0; i < planeteerCall.length; i++) {
   newArr.push(planeteerCall[0].toUpperCase() + "! ")
   }
  return newArr;

}

function longPlaneteerCalls(words) {
  var str;
  for (let i=0; i < words.length; i++) {
    str = words[i].toString().length }
      if (str <= 4) { return false }
     
      return true;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (let i=0; i < foods.length; i++) {
    if (foods.includes(cheese[i])) {
     
     return (`${cheese[i]}`) }
     
     else {
             
       return "no cheese!" }
}}

