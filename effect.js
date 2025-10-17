let symbol=document.querySelectorAll(".symbol");
let bar=document.querySelectorAll(".bar");
let newBox=document.querySelectorAll(".newBox");
let mode="closed";

for(let i=0;i<3;i++){
    bar[i].addEventListener('click',()=>{
        if(mode==="closed"){
            mode="open";
            symbol[i].innerText="x";
            newBox[i].classList.remove("hidden");
            symbol[i].style.fontWeight=400;
            bar[i].style.marginBottom="0px";
        }else{
            mode="closed";
            symbol[i].innerText="+";
            newBox[i].classList.add("hidden");
            symbol[i].style.fontWeight=900;
            bar[i].style.marginBottom="20px";
        }
    });
}


