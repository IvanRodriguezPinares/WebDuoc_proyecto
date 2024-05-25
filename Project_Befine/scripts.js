$(document).ready(function() {
    // Mostrar/ocultar la contraseña
    $("#togglePassword").click(function() {
        var passwordField = $("#exampleFormControlInputPassword");
        var type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);
        $(this).text(type === "password" ? "Mostrar Contraseña" : "Ocultar Contraseña");
    });

    // Permitir solo números en el campo de teléfono
    $("#exampleFormControlInput3").on("input", function() {
        var value = $(this).val();
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
