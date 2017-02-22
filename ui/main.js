var counter=0;
var button=document.getElementById('counte');

button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('val');
    span.innerHTML=counter.toString();
    
};
