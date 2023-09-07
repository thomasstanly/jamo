function shift(id,textid,buttonid){
    let image = document.getElementById(id);
    let text = document.getElementById(textid);
    let button = document.getElementById(buttonid)
    
    if(getComputedStyle(button).backgroundImage.includes('http://127.0.0.1:5500/images/blue-switch.jpeg')){
        console.log("success1")
        image.src='images/imageblue1.webp'
        text.textContent='Blue'
    }else{
        image.src='images/imagewhite1.webp'
        text.textContent='Grey'
    }
}

function shift2(id,textid,buttonid){
    let image = document.getElementById(id);
    let text = document.getElementById(textid);
    let button = document.getElementById(buttonid)
    
    if(getComputedStyle(button).backgroundImage.includes('http://127.0.0.1:5500/images/blue-switch.jpeg')){
        console.log("success2")
        image.src='images/imageblue2.webp'
        text.textContent='Blue'
    }else{
        image.src='images/imageswhite2.webp'
        text.textContent='Grey'
    }
}

function shift3(id,textid,buttonid){
    let image = document.getElementById(id);
    let text = document.getElementById(textid);
    let button = document.getElementById(buttonid)
    
    if(getComputedStyle(button).backgroundImage.includes('http://127.0.0.1:5500/images/blue-switch.jpeg')){
        console.log("success3")
        image.src='images/imageblue3.webp'
        text.textContent='Blue'
    }else{
        image.src='images/imagewhite3.webp'
        text.textContent='Grey'
    }
}

function shift4(id,textid,buttonid){
    let image = document.getElementById(id);
    let text = document.getElementById(textid);
    let button = document.getElementById(buttonid)
    
    if(getComputedStyle(button).backgroundImage.includes('http://127.0.0.1:5500/images/blue-switch.jpeg')){
        console.log("success4")
        image.src='images/imageblue4.webp'
        text.textContent='Blue'
    }else{
        image.src='images/imagewhite4.webp'
        text.textContent='Grey'
    }
}