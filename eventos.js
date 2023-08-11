document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("container").addEventListener("click", 
    function(event){
        event.preventDefault();
        alert("¡Hola! Soy el div.")
    })
})

