const hamburgerButton=document.getElementById('hamburger');
const navList=document.getElementById('nav-list');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

function toggleButton(){
    navList.classList.toggle('show')
}


hamburgerButton.addEventListener('click', toggleButton);



const appearOptions ={
    threshold:0,
    rootMargin:"0px 0px -250px 0px "
};

const appearOnScroll=new IntersectionObserver(function(entries,appearOnScroll){
entries.forEach(entry=>{
    if(!entry.isIntersecting){
        return;
    }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
})
},appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
});

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
});