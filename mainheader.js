let lgseries = document.getElementById("lgseries");
let lgserieslink = document.getElementById("lgserieslink");

let lgspeakers = document.getElementById("lgspeakers");
let lgspeakerslink = document.getElementById("lgspeakerslink");

let lgsupport = document.getElementById("lgsupport");
let lgsupportlink = document.getElementById("lgsupportlink");

let extension = document.getElementById("extentions")

lgseries.addEventListener("mouseenter",function(){
    lgserieslink.classList.remove("d-none");
    lgspeakerslink.classList.add("d-none");
    lgsupportlink.classList.add("d-none");
})
lgserieslink.addEventListener("mouseleave",function(){
    lgserieslink.classList.add("d-none");
})

lgspeakers.addEventListener("mouseenter",function(){
    lgspeakerslink.classList.remove("d-none");
    lgserieslink.classList.add("d-none");
    lgsupportlink.classList.add("d-none");
})
lgspeakerslink.addEventListener("mouseleave",function(){
    lgspeakerslink.classList.add("d-none");
})

lgsupport.addEventListener("mouseenter",function(){
    lgsupportlink.classList.remove("d-none");
    lgspeakerslink.classList.add("d-none")
    lgserieslink.classList.add("d-none");
})
lgsupportlink.addEventListener("mouseleave",function(){
    lgsupportlink.classList.add("d-none");
})