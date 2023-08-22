const one=document.querySelector(".one");
const display=document.querySelector(".display");
let text="";



function handlerequal(){
    let ans;
    try{
        ans=eval(display.innerHTML);
    }
    catch(er){
      ans="Wrong Input";
    }
    
   display.innerText=ans;
};


