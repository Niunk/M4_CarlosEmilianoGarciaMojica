let barra = false;
window.addEventListener('load',()=>{
    let hamb = document.getElementById("hamburguesa");
    let opc = document.getElementsByClassName("barraN");
    let nav = document.getElementsByClassName("navbar");

    hamb.addEventListener('click', ()=>{
        if(barra === false){
            nav[0].style.height = "300px";
            for(let i = 0; i < 4; i++){
                opc[i].style.display = "block";           
            }
            barra = true;
        }
        else{
            nav[0].style.height = "50px";
            for(let i = 0; i < 4; i++){
                opc[i].style.display = "none";
            }
            barra = false;
        }
    });
});