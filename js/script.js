document.addEventListener("DOMContentLoaded", function () {
    function cambiarImagenSegunPantalla() {
        var imagenFondoGrande = document.getElementById("imagenFondoGrande");
        var imagenFondoPequena = document.getElementById("imagenFondoPequena");
        var imagenFondoGrandeDos = document.getElementById("imagenFondoGrandeDos");
        var imagenFondoPequenaDos = document.getElementById("imagenFondoPequenaDos");
        var imagenFondoGrandeTres = document.getElementById("imagenFondoGrandeTres");
        var imagenFondoPequenaTres = document.getElementById("imagenFondoPequenaTres");
        var imagenFondoGrandeCuatro = document.getElementById("imagenFondoGrandeCuatro");
        var imagenFondoPequenaCuatro = document.getElementById("imagenFondoPequenaCuatro");

        if (window.innerWidth <= 768) {
            imagenFondoGrande.style.display = "none";
            imagenFondoPequena.style.display = "flex";
            imagenFondoGrandeDos.style.display = "none";
            imagenFondoPequenaDos.style.display = "flex";
            imagenFondoGrandeTres.style.display = "none";
            imagenFondoPequenaTres.style.display = "flex";
            imagenFondoGrandeCuatro.style.display = "none";
            imagenFondoPequenaCuatro.style.display = "flex";
        } else {
            imagenFondoGrande.style.display = "flex";
            imagenFondoPequena.style.display = "none";
            imagenFondoGrandeDos.style.display = "flex";
            imagenFondoPequenaDos.style.display = "none";
            imagenFondoGrandeTres.style.display = "flex";
            imagenFondoPequenaTres.style.display = "none";
            imagenFondoGrandeCuatro.style.display = "flex";
            imagenFondoPequenaCuatro.style.display = "none";
        }
    }

    cambiarImagenSegunPantalla();
    window.addEventListener("resize", cambiarImagenSegunPantalla);
});


