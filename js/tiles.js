document.getElementById("tile1").style.backgroundImage="url('imgs/Graphic.jpg')";
document.getElementById("tile2").style.backgroundImage="url('imgs/Website.jpg')";
var t1=document.getElementById("tile1")
t1.style.position="relative";
var t2=document.getElementById("tile2")
t2.style.position="relative";
var i=parseInt(`-${window.innerWidth/2}`);
t1.style.left=`${i}px`;
var start=setInterval(() => {
    t1.style.left=`${i}px`;
    i+=1;
    if(i>0)
        clearInterval(start);
}, 0.25)
var j=parseInt(`${window.innerWidth/2}`);
t2.style.left=`${j}px`;
var start2=setInterval(() => {
    t2.style.left=`${j}px`;
    j-=1;
    if(j<0)
        clearInterval(start2);
}, 0.25)
    