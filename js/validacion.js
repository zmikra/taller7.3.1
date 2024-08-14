document.getElementById('regBtn').addEventListener('click', function() {
    
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return;
    }

    if (password1.length < 6) {
        showAlertError();
        return;
    }

    if (password1 !== password2) {
        showAlertError();
        return;
    }

    if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();

});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

