function OpenPopUp(){
    document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});
}

function ClosePopUp(){
    document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});
}

document.getElementsByClassName("popup")[0].classList.add("active");