document.getElementById('regBtn').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError('Todos los campos son obligatorios.');
        return;
    }

    if (password1.length < 6) {
        showAlertError('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    if (password1 !== password2) {
        showAlertError('Las contraseñas no coinciden.');
        return;
    }

    if (!terminos) {
        showAlertError('Debes aceptar los términos y condiciones.');
        return;
    }

    showAlertSuccess('Datos guardados correctamente.');
});

function showAlertSuccess(message) {
    var alertSuccess = document.getElementById('alert-success');
    alertSuccess.querySelector('p').textContent = message;
    alertSuccess.classList.add('show');
}

function showAlertError(message) {
    var alertDanger = document.getElementById('alert-danger');
    alertDanger.querySelector('p').textContent = message;
    alertDanger.classList.add('show');
}
