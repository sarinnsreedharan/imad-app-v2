var counter=0;
var button=document.getElementById("counter");

button.onclick=function(){
    counter=countet+1;
    var span=document.getElementById("val");
    span.innerHTML=counter.toString();
    
}
