sliderPosition=3;
slides=[
    {name:"slider1.jpg",
    heading:"LOGO DESIGNING",
    content:"We create minimal and meaningful logo that helps in branding and making people remember you.",
    backgroundColor:"#ed001f"},
    {name:"slider2.jpg",
    heading:"MOTION GRAPHICS",
    content:"Motion Graphics are the new trend . Add it to your videos , ads to make people stay .",
    backgroundColor:"#007bb5"},
    {name:"slider3.jpg",
    heading:"WEBSITE DESIGNING",
    content:"Websites are essential part of any organization , get one that serves your needs",
    backgroundColor:"#ed001f"},
];
function loadData(){
    document.getElementById("sliderData").innerHTML=`<h1>${slides[sliderPosition-1].heading}</h1><h5>${slides[sliderPosition-1].content}</h5>`;
    document.getElementById("sliderData").style.backgroundColor=slides[sliderPosition-1].backgroundColor;
};

function slideRight(){
    sliderPosition=sliderPosition+1;
    if(sliderPosition>3)
    sliderPosition=1;
    document.getElementById("slider").style.backgroundImage="url('css/slider"+sliderPosition+".jpg')";
    loadData();
};
function slideLeft(){
    sliderPosition=sliderPosition-1;
    if(sliderPosition<1)
    sliderPosition=3;
    document.getElementById("slider").style.backgroundImage="url('css/slider"+sliderPosition+".jpg')";
    loadData();
};
 function loadSlide() { 
 document.getElementById("slider").style.backgroundImage=`url(css/slider${sliderPosition}.jpg)`;
 loadData();
};
setInterval(()=>{
 document.getElementById("slider").style.backgroundImage=`url(css/slider${sliderPosition}.jpg)`;
 loadData();
 sliderPosition=sliderPosition+1;
 if(sliderPosition>3)
    sliderPosition=1;
},4000);
