/************************************
        toggle-sidebar
************************************/
function toggleSidebar(){
    const element = document.getElementById("leftSidebar");
    const openBtn = document.getElementById("menuBtn");

    openBtn.classList.toggle("ti-menu");
        
    if(element.style.display == 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
}