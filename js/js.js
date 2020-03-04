/* Alternar entre añadir y quitar la clase "responsive" al topnav cuando el usuario hace clic en el icono */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}