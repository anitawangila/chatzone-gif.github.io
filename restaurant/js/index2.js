


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mynav").style.top = "0";
  } else {
    document.getElementById("mynav").style.top = "-50px";
  }
}

/*----------------animated scroll---------------*/
window.addEventListener("load",function(){
  AOS.init();
})

/*...sticky header..*/
/*window.addEventListener("scroll",function(){
if(this.pageYOffset > 60)
document.querySelector(".header").classList.add("sticky");
else{
document.querySelector(".header").classList.add("sticky");
}
})*/

/*-----------------menu tab starts-------------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e) {
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.innerHTML;
        console.log(target);
      menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
       menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
       /* menuSection.querySelector("target").classList.add("active");*/
    }
}
);




/*...toggle navbar starts...
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click",navToggle);

function navToggle(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}
/*...toggle navbar starts...*/

/*...sticky header ends...*/

  /*
$(".row owl-carousel").owlcarousel({
    margin:10,
})
const container = document.querySelector(".ratings");
const items = container.querySelectorAll(".rating.items")
container.onClick = e => {
    const elclass = e.target.classList;
    if(!elclass.contains("active")) {
        items.forEach(
          item => item.classList.remove("active")  
        );
        console.log(e.target.getAtrribute(""));
        elclass.add("active");
    }
}*/