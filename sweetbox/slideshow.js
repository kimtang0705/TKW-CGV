
let k=0;
const max=document.getElementsByClassName("slides").length;
hienThiSlide(0);
//tu dong chay slide
    setInterval(hienThiSlideKeTiep,2500);
    
 

function hienThiSlide(k){
    let e=document.getElementsByClassName("slides");
    e[k].style.display="block";
    
}

function anSlideSau(k){
    let e=document.getElementsByClassName("slides");
    let b=k-1;
    e[b].style.display="none";
}

function anSlidetruoc(k){
    let e=document.getElementsByClassName("slides");
    let b=k+1;
    e[b].style.display="none";
}


function hienThiSlideKeTiep() {

    k++;
    anSlideSau(k);
    if (k==max)
    {
        k=0;
    }
    hienThiSlide(k);

}

function hienThiSlideTruocDo(){
    k--;
    anSlidetruoc(k);
    if(k<0)
    {
        k=max-1;
    }
    hienThiSlide(k);
    
}
