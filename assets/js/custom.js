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
/************************************
            toast
************************************/
$(document).ready(function(){
    $.toast({ 
        heading: "Welcome to Elite admin",
        text: "Use the predefined ones, or specify a custom position object.",
        bgColor: "#1FC0C7",
        position: "top-right",
        loader: true,
        loaderBg: '#ff6849',
        hideAfter: 3000,
        icon:'info',
        allowToastClose: true
    });
})