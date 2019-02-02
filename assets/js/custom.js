/************************************
        toggle-left-sidebar
************************************/
const toggleLeftSidebar = document.getElementById("openNav")
console.log(toggleLeftSidebar);

toggleLeftSidebar.addEventListener("click", function toggleLeftSidebar(){
    const element = document.getElementById("leftSidebar");
    const openBtn =  document.getElementById("menuBtn");

    // toggle classname 'ti-menu' on menu icon
    openBtn.classList.toggle("ti-menu");

    // if display 'block' => change to 'none' & inverse 
    if(element.style.display == 'block'){
        element.style.display = 'none';
        
    }else{
        element.style.display = 'block';
        element.style.transition = "all 0.3s ease-in-out";
    }
})


/************************************
        toggle-right-sidebar
************************************/
// open
const openRightSidebar = document.getElementById("openRightSidebar");
openRightSidebar.addEventListener("click", function openRightSidebar(){
    
    const openBtn = document.getElementById("rightsidebar");
    openBtn.classList.add("shw-rside");

})
// close
const closeRightSidebar = document.getElementById("closeRightSidebar");
closeRightSidebar.addEventListener("click", function closeRightSidebar(){
    
    const closeBtn = document.getElementById("rightsidebar");
    closeBtn.classList.remove("shw-rside");
})


/**************************************************************
        default-theme-logo & checkbox & body-color change
****************************************************************/
document.addEventListener("DOMContentLoaded", function(event) {     
    // get links from a tag
    const links = document.querySelectorAll("#themecolors a")
    const bodyTag = document.querySelector("body")
    const lightLogo = document.querySelector('.light-logo')
    const darkLogo = document.querySelectorAll('.dark-logo')
    
        // call link what I clicked
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
                const dataSkinColor = this.dataset.skin
                    // add data-skin to body's class
                bodyTag.classList.add(dataSkinColor);
                bodyTag.classList.add("fixed-layout", "mini-sidebar");
                
            }
            
        }
  });
    

  document.addEventListener("DOMContentLoaded", function(event) {     
    // get links from a tag
    const links = document.querySelectorAll("#themecolors a")
    const bodyTag = document.querySelector("body")
    const lightLogo1 = document.getElementById('light-logo1')
    const darkLogo1 = document.getElementById('dark-logo1')
    const red = document.getElementById('red-dark-theme')
    console.log(red)
    console.log(lightLogo1)
    console.log(darkLogo1);
    red.onclick = function(){
        lightLogo1.style.display="none";
        darkLogo1.style.display="none";
        alert("hi");
    }
    
        // call link what I clicked
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