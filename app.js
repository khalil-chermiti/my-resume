/*let texts = ["Meet Khalil"];
let word = " ";
let currentletter = " ";
let index = 0;
let counter = 0;

(function typing() {

  // selecting the node 
  var txt = document.querySelector(".typewriter");
  
  // reset counter after reaching the last element
  if (counter === texts.length) counter = 0;
  
  // word to be written
  word = texts[counter];
  
  // increasing the sliced part and print it 
  currentletter = word.slice(0, index++);
  
  txt.textContent = currentletter;
  
  // if word is fully written we reset index and increase counter
  if (currentletter.length === word.length) {
    counter++;
    index = 0;
  }

  setTimeout(typing, 400);
})();
*/
/////////////////////////
 
const anchor = document.querySelector('#anchor') ;
const nav = document.querySelector('nav') ;
const logo = document.querySelector('.name') ;


document.addEventListener('scroll' , ()=>{

  const Ydifference = anchor.getBoundingClientRect().y - window.pageYOffset ;

  if (Ydifference < 200) {
    nav.classList.add('bg-green') ;
    logo.classList.add('color-white') ;
  } else {
    nav.classList.remove('bg-green') ;
    logo.classList.remove('color-white') ;
  }
})