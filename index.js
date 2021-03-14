// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//for (let i = 0; i < gifts.length; i++) {
  //console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   debugger;
  //}

// return gifts;
//}
//wrapGifts(gifts);
/*
const name = ["Ada", "Brendan", "Ali"];
const event = "birthday";
function writeCards(name, event){
    for (let i = 0; i < name.length; i++){
     console.log (`Thank you,${writeCards[i]} , for the wonderful ${[event]} gift!`);
}
return name,event;
}
writeCards();  */
//writeCards(["Lisa", "Kaitlin", "Jan"],"surprise");
//const name = ["Lisa", "Kaitlin", "Jan"]
//const event = "surprise";
 /* cont a = [];
function  writeCards (name, event) {
   for (let i = 0; i < name.length; i++) {
     console.log ( `Thank you, ${name[i]}, for the wonderful ${event} gift!`);
   }
  //return name;
  return 
 }
//writeCards (name,event);  
writeCards(["Ada", "Brendan", "Ali"], "birthday");*/

const name = ["Ada", "Brendan", "Ali"]
const event = "birthday";
const arrayPrint = [];

function  writeCards (name, event) {
for (let i = 0; i < name.length; i++) {

arrayPrint[i] =  `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
}
return arrayPrint;
}
writeCards (name,event);  



//count down experiment 
//const number =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1,0];
/*function countDown(number){
  let i = 0;
  while (i < number.length){
    console.log ( `${number[i]}` + 1);
    i++;
  }
 // return countNumber;
}
countDown(10);*/

function countDown(number){
  let i = number;
  while (i >= 0){
    console.log (i);
    i--;
  }
}
countDown(10);



