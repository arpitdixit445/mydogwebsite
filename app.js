var counter = 1;
var limit = 38
var btn = document.querySelector("button");
var img = document.querySelector("img");

btn.addEventListener("click",function(){
    counter += 1
    img.src = "images/img"+counter+".jpg";
    if(counter >= limit){
        counter = 1
    }
})
