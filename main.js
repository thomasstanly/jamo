let wrapper = document.querySelector(".wrapper");
let arrowprev = document.querySelector(".arrow.prev");
let arrownext = document.querySelector(".arrow.next");
let currScroll =0

let widthOfTheDiv = wrapper.children[0].offsetWidth

arrowprev.onclick = function(){
    wrapper.scrollLeft-=widthOfTheDiv
    
}

arrownext.onclick = function(){
    wrapper.scrollLeft+=widthOfTheDiv
}


window.addEventListener('scroll',function(){
    const scrollPosition =window.scrollY
    const bottomimage1 = document.getElementById("bottom-image1");
    const bottomimage2 = document.getElementById("bottom-image2");
    if (bottomimage1) {
        const elementOffset = bottomimage1.getBoundingClientRect();
        const bottomimagetop = elementOffset.top;
        
        if (scrollPosition > bottomimagetop) {
            // console.log("vaue from top tpo element"+bottomimagetop)
            bottomimage2.style.animationName ='scrollUp';
            bottomimage2.style.animationDuration = "4s"
            bottomimage2.style.animationDelay='2s';
        }
    }
})
