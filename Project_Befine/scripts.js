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
