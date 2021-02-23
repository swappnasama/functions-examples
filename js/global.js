

const language=document.querySelector('#language');
const result=document.querySelector("p");
language.addEventListener('change',function(){
 const lang=language.value;
 const name=document.querySelector("#name").value;
 greet(lang,name);
});

const greet=function(language,name) {
  if (language === 'en') {

   result.innerHTML=`Hi ${name}` ;
  } else if (language === 'es') {
    result.innerHTML=`Hola! ${name}` ;

  } else {

    result.innerHTML='language not found';

  }
}