let flag=0

function controller(x){
flag=flag+x
slideshow(flag);
}

slideshow(flag);

function slideshow(index){
    let current_slide=document.getElementsByClassName("container");

    if(index==current_slide.length){
        flag=0
        index=0
    }
    if(index<0){
        flag=current_slide.length-1
        index=current_slide.length-1
    }

    for(let y of current_slide){
        y.style.display="none"
    }
    console.log(index)
    current_slide[index].style.display="block";
}