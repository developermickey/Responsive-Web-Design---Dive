function toggleMneu(){
    var menu = document.getElementById("mobile-menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else {
        menu.style.display = "block"
    }
}

document.getElementById("menu-icon").addEventListener("click", function(){
    toggleMneu()
})

document.getElementById("close").addEventListener("click", function(){
    toggleMneu()
})