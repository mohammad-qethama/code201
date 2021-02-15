'use strict';
let  catsLove = prompt('do i like cats ? (answer with yes/y or no/n only )');
catsLove = catsLove.toLowerCase();

while (!( catsLove == 'yes' || catsLove == 'y'||  catsLove == 'no' || catsLove == 'n' ))
{
  catsLove = prompt('do i like cats ? (answer with yes/y or no/n only )');
  catsLove = catsLove.toLowerCase();


}
console.log(catsLove)

if (catsLove == 'yes' || catsLove == 'y' )
{

  alert('Correct! , Of course i do !') ;
  

}
else
{
  alert('Sadly you answered wrong , i am not a monster :D') ; 

}

let myStrength = prompt('Am i a patient man ? ');
myStrength = myStrength.toLowerCase();

while (!( myStrength == 'yes' || myStrength == 'y'||  myStrength == 'no' || myStrength == 'n' ))
{

  myStrength = prompt('Am i a patient man ? ');
  myStrength = myStrength.toLowerCase();

}
console.log(myStrength);

if ( myStrength== 'yes' || myStrength== 'y' )
{

  alert('True , at least i like to thik so') ;

}
else
{
  alert('i would like to think that you are wrong') ;


}
let foodPref= prompt('Do i like sugar ? ');
foodPref = foodPref.toLowerCase();

while (!( foodPref == 'yes' || foodPref == 'y'||  foodPref == 'no' || foodPref == 'n' ))
{

  foodPref = prompt('Do i like sugar ? ');
  foodPref = foodPref.toLowerCase();

}
console.log(foodPref);

if ( foodPref == 'yes' || foodPref == 'y' )
{

  alert('Wrong ,i prefer not having sugar in my food ') ;

}
else
{
  alert('True ,i dont like added sugar at all') ;


}
let readingPref= prompt('am i intrested in Comparative religion? ');
readingPref = readingPref.toLowerCase();

while (!( readingPref == 'yes' || readingPref == 'y'||  readingPref == 'no' || readingPref == 'n' ))
{

  readingPref = prompt('am i intrested in Comparative religion? ');
  readingPref = readingPref.toLowerCase();

}
console.log(readingPref);

if ( readingPref == 'yes' || readingPref == 'y' )
{

  alert('Yes, i do ') ;

}
else
{
  alert('was a hard question in it ? people tend to hide those intrests now adays but not me.') ;


}
let langPref= prompt('do you find arabic language superior to other languages ? ');
langPref = langPref.toLowerCase();

while (!( langPref == 'yes' || langPref == 'y'||  langPref == 'no' || langPref == 'n' ))
{

  langPref = prompt('do you find arabic language superior to other languages ? ');
  langPref = langPref.toLowerCase();

}
console.log(langPref);

if ( langPref== 'yes' || langPref== 'y' )
{

  alert('Yes, i do and it is  also the most beautifull one. ') ;

}
else
{
  alert('wrong you are extremly wrong.') ;


}

let hisNAME = prompt('What is your name ? ');
console.log('his Name is '+ hisNAME);

document.getElementById('Welcome').innerHTML = 'Welcome ' +hisNAME +' <i class="fas fa-atom"></i>';


