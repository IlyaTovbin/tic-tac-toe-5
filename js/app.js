let nav = document.getElementById('nav-bar');
let navBar = document.getElementById('nav');
let line2 = document.getElementById('line-2');
let line1 = document.getElementById('line-1');
let line3 = document.getElementById('line-3');

let scrollContent = document.getElementById('scroller-list');

function scrollToY(y){
    scrollContent.style.transform = 'translateY(-' + y + 'rem)';
}

nav.addEventListener("click", function(){
    if(navBar.style.height != '17rem'){
        line1.style.top = '1rem';
        line1.style.marginBlockEnd = '0em';
        nav.style.transform = 'rotate(90deg)';
        line1.style.transform = 'rotate(-45deg)';
        line3.style.transform = 'rotate(45deg)';
        line2.style.width = '0rem';
        navBar.style.height = '17rem';
    }else{
        line1.style.top = '0rem';
        line1.style.marginBlockEnd = '0.2em';
        line1.style.transform = 'rotate(0deg)';
        line3.style.transform = 'rotate(0deg)';
        nav.style.transform = 'rotate(0deg)';
        line2.style.width = '2rem';
        navBar.style.height = '0rem';
    }
});

function redirectTo(url){
    window.open(url, "_blank"); 
}