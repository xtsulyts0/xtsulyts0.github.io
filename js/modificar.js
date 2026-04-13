const API_URL = 'https://xtsulyts.pythonanywhere.com/';

var formBuscar     = document.getElementById('form-buscar');
var formModificar  = document.getElementById('form-modificar');
var seccionBuscar  = document.getElementById('seccion-buscar');
var seccionEditar  = document.getElementById('seccion-editar');

formBuscar.addEventListener('submit', function (e) {
    e.preventDefault();
    var codigo = document.getElementById('codigo').value.trim();

    fetch(API_URL + 'burgers/' + codigo)
        .then(function (res) {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(function (data) {
            document.getElementById('descripcion-mod').value = data.descripcion;
            document.getElementById('cantidad-mod').value    = data.cantidad;
            document.getElementById('precio-mod').value      = data.precio;
            seccionBuscar.style.display = 'none';
            seccionEditar.style.display = 'block';
        })
        .catch(function () {
            alert('Producto no encontrado.');
        });
});

formModificar.addEventListener('submit', function (e) {
    e.preventDefault();
    var codigo = document.getElementById('codigo').value.trim();

    var producto = {
        codigo:      codigo,
        descripcion: document.getElementById('descripcion-mod').value.trim(),
        cantidad:    document.getElementById('cantidad-mod').value,
        precio:      document.getElementById('precio-mod').value
    };

    fetch(API_URL + 'burgers/' + codigo, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
    .then(function (res) {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(function () {
        alert('Cambios guardados correctamente.');
        location.reload();
    })
    .catch(function () {
        alert('Error al guardar los cambios.');
    });
});
