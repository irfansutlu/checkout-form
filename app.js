const incr1= document.getElementById('incr1');
const decr1=document.getElementById('decr1');
const counter1=document.getElementById('counter1');

let totalCount1=0;

incr1.addEventListener('click', ()=>{
    totalCount1++;
    uptadeCounter1();
});

decr1.addEventListener('click', ()=>{
    if(totalCount1 >0){
      totalCount1--;
    uptadeCounter1();  
    }  
});
function uptadeCounter1(){
    counter1.innerHTML = totalCount1;
};

const incr2= document.getElementById('incr2');
const decr2=document.getElementById('decr2');
const counter2=document.getElementById('counter2');

let totalCount2=0;

incr2.addEventListener('click', ()=>{
    totalCount2++;
    uptadeCounter2();
});

decr2.addEventListener('click', ()=>{
    if(totalCount2 >0){
      totalCount2--;
    uptadeCounter2();  
    }  
});
function uptadeCounter2(){
    counter2.innerHTML = totalCount2;
};

