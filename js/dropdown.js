

currentState=1;

function loadTab(){
        console.log("hey");
         if(currentState==0)
            {   currentState=1;
                document.getElementById("projectTabs").style.display="flex";
                document.getElementById("projectTabs").style.left=parseInt(document.getElementById("project").style.left)/4;
            }
        else    
            {currentState=0;
                document.getElementById("projectTabs").style.display="none";}
}