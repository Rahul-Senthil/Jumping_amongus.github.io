var blue = document.getElementById("demo1");
var red = document.getElementById("demo2");
var cancel = document.getElementById("haha");

var ptn=document.getElementById("point");



function jump(){
    cancel.innerText=" ";
    
    if(!blue.classList.contains("animated"))
   { blue.classList.add("animated");
    setTimeout(function(){
        blue.classList.remove("animated");

    },500);
}

}
document.addEventListener('keypress' , ()=>{
    
    jump();
}) 

function myStart(){
    red.classList.add("move");
    $(document).ready(function(){
        $("button").click(function(){
            $(this).hide();
        });
    });

setInterval(()=>{
    ptn.innerText++;
    const blueTop = blue.offsetTop;
    console.log(blueTop);
    const redLeft= red.offsetLeft;
    console.log(redLeft);
    if(redLeft>0 && redLeft<90 && blueTop>300)
    {
        alert("LOSE..!!");
        location.reload();
        
    }


},50)
}
