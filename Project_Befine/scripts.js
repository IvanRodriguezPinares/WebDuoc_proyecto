$(document).ready(function() {
    // Mostrar/ocultar la contraseña
    $("#togglePassword").click(function() {
        var passwordField = $("#exampleFormControlInputPassword");
        var type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);
        $(this).text(type === "password" ? "Mostrar Contraseña" : "Ocultar Contraseña");
    });

 // Permitir solo números en el campo de teléfono y mostrar mensaje si se ingresan letras
 $("#exampleFormControlInput3").on("input", function() {
    var value = $(this).val();
    if (/[^0-9]/.test(value)) {
        alert("Escribe números");
    }
    $(this).val(value.replace(/[^0-9]/g, ''));
});

    // Validación de formularios
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    // Validación de formulario GMAIL
    var form = document.getElementById('subscriptionForm');
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        if (form.checkValidity() === true) {
            showWelcomeMessage();
        }
    }, false);
});

// Función de negocio 1: Mostrar mensaje de bienvenida al registrar
function showWelcomeMessage() {
    alert('¡Gracias por registrarte! Pronto recibirás noticias nuestras.');
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    // estilo inicial
    cards.forEach(card => {
        card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
    });

    // Clase visible
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 200); // delay card animacion
    });

    //Acerca
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-20px)';
            card.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.2)';
        });
        //Aleja
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        link.style.transition = 'opacity 0.5s';
        link.style.opacity = '0';

        setTimeout(() => {
            link.style.opacity = '1';
        }, index * 200); // Delay link animacion
    });
});


//funcion fondo
$(document).ready(function(){
    for (let i = 0; i < 20; i++) {
        let size = Math.random() * 50 + 10; // Tamaño entre 10px y 60px
        let bubble = $('<div class="bubble"></div>').css({
            width: size,
            height: size
        });
        $('body').append(bubble);
        animateBubble(bubble);
    }

    function animateBubble(bubble) {
        let duration = Math.random() * 5000 + 3000; // Duración entre 3000ms y 8000ms
        bubble.css({
            left: Math.random() * $(window).width(),
            top: Math.random() * $(window).height()
        });
        bubble.animate({
            top: Math.random() * $(window).height(),
            left: Math.random() * $(window).width()
        }, duration, function(){
            animateBubble(bubble);
        });
    }
});

//fondo 2
$(document).ready(function(){
    let colors = [
        "#003366", // Azul Oscuro
        "#002147", // Azul Marino
        "#191970", // Azul Medianoche
        "#4682B4", // Azul Acero
        "#4169E1", // Azul Real
        "#00BFFF", // Azul Celeste
        "#00FFFF", // Cian
        "#00CED1", // Turquesa Oscuro
        "#7FFFD4", // Aguamarina
        "#ADD8E6"  // Azul Claro
    ];
    let index = 0;

    function changeBackground() {
        $("body").css("background-color", colors[index]);
        index = (index + 1) % colors.length;
        setTimeout(changeBackground, 3000);
    }

    changeBackground();
});

/* API */


  document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-33.3704419, -70.6141635], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.3704419, -70.6141635]).addTo(map)
        .bindPopup('Estamos ubicados en Huechuraba!')
        .openPopup();
});

  