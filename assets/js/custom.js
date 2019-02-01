/************************************
        toggle-left-sidebar
************************************/
function toggleLeftSidebar(){
    const element = document.getElementById("leftSidebar");
    const openBtn = document.getElementById("menuBtn");

    // toggle classname 'ti-menu' on menu icon
    openBtn.classList.toggle("ti-menu");

    // if display 'block' => change to 'none' & inverse 
    if(element.style.display == 'block'){
        element.style.display = 'none';
        
    }else{
        element.style.display = 'block';
        element.style.transition = "all 0.3s ease-in-out";
    }
}


/************************************
        toggle-right-sidebar
************************************/
function openRightSidebar(){
    const openBtn = document.getElementById("rightsidebar");

    openBtn.classList.add("shw-rside");
}
function closeRightSidebar(){
    const closeBtn = document.getElementById("rightsidebar");
    closeBtn.classList.remove("shw-rside");
}


/**************************************************************
            default-theme-checkbox & body-color-change
****************************************************************/
document.addEventListener("DOMContentLoaded", function(event) {     
    // get links from a tag
    const links = document.querySelectorAll("#themecolors a")
    const bodyTag = document.querySelector("body")
    
        // call link that I clicked
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function(){
                aTag = document.querySelectorAll(".working")
                // take all link's list and remove classes 
                aTag.forEach(link => {
                    // remove class 'working
                    link.classList.remove("working");
                    
                    // remove 'skin' certain string class 
                    const prefix = "skin";
                    const regx = new RegExp('\\b' + prefix + '.*?\\b', 'g' )
                    console.log(regx);
                    bodyTag.className = bodyTag.classList.remove(regx);
                    console.log(bodyTag);
                })
                // add class to link what I clicked
                this.classList.add('working');
                    // get data-skin
                // const attr = this.getAttribute('data-skin')
                const dataSkinColor = this.dataset.skin
                    // add data-skin to body's class
                bodyTag.classList.add(dataSkinColor);
                bodyTag.classList.add("fixed-layout", "mini-sidebar");
            }
        }
  });
    

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