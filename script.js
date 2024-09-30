document.addEventListener("DOMContentLoaded", ()=>{
   const counterValue= document.getElementById("count-value");
   const increaseBtn=document.getElementById("incre-butt");
   const decreaseBtn=document.getElementById("decre-butt");
   const resetBtn=document.getElementById("reset-butt");
   
   let count=0;
   increaseBtn.addEventListener("click", ()=>{
    count++;
    counterValue.textContent=count;

   });
   decreaseBtn.addEventListener("click", ()=>{
    count--;
    counterValue.textContent=count;
   });
   resetBtn.addEventListener("click",()=>{
    count=0;
    counterValue.textContent=count;
   })
    
})
