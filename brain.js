let op=""
let num1,num2
let flagfornum=0
let flagforop=0
let flagfordot=0
let flageq=0;
let res=""
   const display = document.getElementById("disp");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click',()=> {
        const buttontyped = button.innerText.trim();
        if(button.className == "nums"){
            flagfornum++;
            
        display.innerHTML+=buttontyped
        }
        if(button.className == "dot"){
            if(flagfordot == 0)
            {
                flagfordot++;
                flagfornum++;
                display.innerHTML += "."
            }
        }
        else if(button.className == "func" && flagfornum>0)
        {
            if(buttontyped == "AC")
              {
                display.innerHTML=""
                num1=0;
                num2=0;
                flagfornum=0;
                flagforop=0;
                flagfordot=0;
                flageq=0;
              }
              else if(buttontyped == "C")
              {
                flagfornum--;
                let lastchar=display.innerHTML[display.innerHTML.length - 1];
                if(lastchar === ".")
                {
                  flagfordot--;
                }
                display.innerHTML = display.innerHTML.slice(0, -1);
              }
             else if(buttontyped == "=" && flagforop == 1 && flageq==0)
              {
                num2=parseFloat(display.innerHTML)
                res = calculate(num1,num2,op)
                display.innerHTML=res
                flageq=1;
              } 
        }
        else if(button.className == "operators" && flagforop == 0)
        {
            
            num1=parseFloat(display.innerHTML)
            op=buttontyped
            display.innerHTML="";
            flagforop++;
        }
    })
    
    
    
});
 


function calculate(num1, num2, op)
 {
   if(op === "+")
     {
        return num1+num2;
     }
    else if(op === "-")
    {
        return num1-num2;
    }
    else if(op === "*")
    {
        return num1*num2;
    }
    else if(op === "/" )
    {
        if(num2 ===0)return "invalid" ;
       
        return num1/num2;
    }
    else if(op === "%")
    {
        return num1%num2;
    } 
 }
 