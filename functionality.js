

 function otp(){

    let pin=generatePin();

    let pinString=pin +'';

    if( pinString.length === 4){

        return pinString;
    }


    else {

        // console.log('3 digit pin')
        return otp();

    }
     


 }


function generatePin(){


    let pin=Math.round(Math.random()*10000)
    return pin;


}


document.getElementById('generate-pin').addEventListener('click',function(){

    let pin =otp();

    let display=document.getElementById('display')
    display.value=pin;

    

})


// calculator


document.getElementById('calculator').addEventListener('click', function (event) {

    let value = event.target.innerText;


    let calculator_display = document.getElementById('calculator-display');



    if (isNaN(value)) {

       if(value == 'C'){

           calculator_display.value='';

       }


       else {

            let all_number=calculator_display.value;
            let remaining= all_number.substring(0,all_number.length-1);
            calculator_display.value=remaining;

       }

    }

    else {

    
    
        let pre_value=calculator_display.value;
        let all_value=pre_value+value;

        calculator_display.value = all_value;

    }



})



// submit button
let count=0;
document.getElementById('submit-button').addEventListener('click',function(){


    let display=document.getElementById('display').value;
    
    let calculator_display = document.getElementById('calculator-display').value;

    let right=document.getElementById('pin-right');
    let worng=document.getElementById('pin-worng');

    

   if(display == calculator_display){

      right.style.display='block';
      worng.style.display='none';

      calculator_display='';
      document.getElementById('calculator-display').value=calculator_display;

      display='';
      document.getElementById('display').value=display;

      let life=document.getElementById('life')
      life.innerText=3;
      count=0;

   }

   else {

     count++;
      worng.style.display='block';
      right.style.display='none';

      calculator_display='';
      document.getElementById('calculator-display').value=calculator_display;
      
      if(count===3){

        
        display='';
        document.getElementById('display').value=display;
        count=0;


      }
      
      let life=document.getElementById('life')
      life.innerText=3-count;

      

   }


})

