document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("saludar").addEventListener("click", 
    function(event){
        event.preventDefault();
        event.stopPropagation();
        alert("¡Hola!")
    })
})




document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("container").addEventListener("click", 
    function(event){
        event.preventDefault();
        alert("¡Hola! Soy el div.")
    })
})

