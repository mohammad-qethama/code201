'use strict';
let z = 0 ;
function catsQuestion(){
  let catsLove = prompt('do i like cats ? (answer with yes/y or no/n only )');
  catsLove = catsLove.toLowerCase();

  while (!( catsLove === 'yes' || catsLove === 'y'|| catsLove === 'no' || catsLove === 'n' ))
  {
    catsLove = prompt('do i like cats ? (answer with yes/y or no/n only )');
    catsLove = catsLove.toLowerCase();


  }


  if (catsLove === 'yes' || catsLove === 'y' )
  {

    alert('Correct! , Of course i do !') ;
    z++;


  }
  else
  {
    alert('Sadly you answered wrong , i am not a monster :D') ;

  }
}
catsQuestion();
function patienceQuestion(){
  let myStrength = prompt('Am i a patient man ? ');
  myStrength = myStrength.toLowerCase();

  while (!( myStrength === 'yes' || myStrength === 'y'|| myStrength === 'no' || myStrength === 'n' ))
  {

    myStrength = prompt('Am i a patient man ? ');
    myStrength = myStrength.toLowerCase();

  }


  if ( myStrength=== 'yes' || myStrength=== 'y' )
  {

    alert('True , at least i like to think so') ;
    z++;

  }
  else
  {
    alert('i would like to think that you are wrong') ;


  }
}
patienceQuestion();
function sugarQuestion(){
  let foodPref= prompt('Do i like sugar ? ');
  foodPref = foodPref.toLowerCase();

  while (!( foodPref === 'yes' || foodPref === 'y'|| foodPref === 'no' || foodPref === 'n' ))
  {

    foodPref = prompt('Do i like sugar ? ');
    foodPref = foodPref.toLowerCase();

  }


  if ( foodPref === 'yes' || foodPref === 'y' )
  {

    alert('Wrong ,i prefer not having sugar in my food ') ;

  }
  else
  {
    alert('True ,i do not like added sugar at all') ;
    z++;

  }
}
sugarQuestion();
function bookQuestion(){
  let readingPref= prompt('Am i interested in Comparative religion books? ');
  readingPref = readingPref.toLowerCase();

  while (!( readingPref === 'yes' || readingPref === 'y'|| readingPref === 'no' || readingPref === 'n' ))
  {

    readingPref = prompt('Am I interested in Comparative religion books? ');
    readingPref = readingPref.toLowerCase();

  }


  if ( readingPref === 'yes' || readingPref === 'y' )
  {

    alert('Yes, i do ') ;
    z++;
  }
  else
  {
    alert('was a hard question in it ? people tend to hide those interests now a days but not me.') ;


  }
}
bookQuestion();
function arabicLanguage(){
  let langPref= prompt('do you find arabic language superior to other languages ? ');
  langPref = langPref.toLowerCase();

  while (!( langPref === 'yes' || langPref === 'y'|| langPref === 'no' || langPref === 'n' ))
  {

    langPref = prompt('do you find arabic language superior to other languages ? ');
    langPref = langPref.toLowerCase();

  }


  if ( langPref=== 'yes' || langPref=== 'y' )
  {

    alert('Yes, i do and it is  also the most beautiful one. ') ;
    z++;
  }
  else
  {
    alert('wrong you are extremely wrong.') ;


  }
}
arabicLanguage();

function userName (){
  let userNAME = prompt('What is your name ? ');

  document.getElementById('Welcome').innerHTML = 'Welcome ' +userNAME +' <i class="fas fa-atom"></i>';
}
userName();
function myAge(){
  let x = 4;
  let guessAge = prompt('How old am i ? (you have ' + x + ' iteration to guess ^_^ )');
  guessAge = parseInt(guessAge);

  while(!guessAge) {
    alert('Please Enter a number');
    guessAge = prompt('How old am i ? (you have ' + x + ' iteration to guess ^_^ )');
    guessAge = parseInt(guessAge);
  }

  for (; x > 0; x--) {

    if (guessAge === 26)
    {

      alert('Right!! :D ');
      z++;
      break;


    }
    else if (guessAge < 26 ) {
      alert('Too low');

      guessAge = prompt('How old am i ? (you have ' + (x-1) + ' iteration to guess ^_^ )');
      guessAge = parseInt(guessAge);

      while(!guessAge) {
        alert('Please Enter a number');
        guessAge = prompt('How old am i ? (you have ' + (x-1) + ' iteration to guess ^_^ )');
        guessAge = parseInt(guessAge);
      }

    } else if (guessAge > 26) {
      alert('Too high');

      guessAge = prompt('How old am i ? (you have ' + (x-1) + ' iteration to guess ^_^ )');
      guessAge = parseInt(guessAge);

      while(!guessAge) {
        alert('Please Enter a number');
        guessAge = prompt('How old am i ? (you have ' + (x-1)+ ' iteration to guess ^_^ )');
        guessAge = parseInt(guessAge);
      }

    }


  }
  if (x === 0) {alert(' my age is actually 26 ');}
}
myAge();
function favouriteFood(){
  let flag1 = 0;
  let ittrCount = 6;
  let favFoodFood = prompt('can you guess what food i like? '+ittrCount+' iteration(s) left' ).toLowerCase();
  let favFood = ['burger' , 'shawrma' , 'kabsah', 'mansaf', 'grilles'];
  for (let count= 0 ; count < 6 ; count++ ){
    for (let i =0 ; i < favFood.length; i++ ) {

      if (favFoodFood === favFood[i]){
        alert('Correct!');
        z++;
        flag1 = 1;
        break;}
      if (i === 4) {
        alert('wrong');
        break;

      }

    }
    if (flag1) {break;}
    ittrCount = ittrCount-1;
    favFoodFood = prompt('can you guess what food i like? '+ittrCount+' iterations left' ).toLowerCase();

  }
  if(!ittrCount){alert('my favorite food dishes are (burger ,shawrma , kabsah, mansaf, grilles)' );}
}

favouriteFood();
alert('Your score is '+z+'/7');


