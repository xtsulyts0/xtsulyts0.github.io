const API_URL = 'https://xtsulyts.pythonanywhere.com/';

document.getElementById('form-agregar').addEventListener('submit', function (e) {
    e.preventDefault();

    const producto = {
        codigo:      document.getElementById('codigo').value.trim(),
        descripcion: document.getElementById('descripcion').value.trim(),
        cantidad:    document.getElementById('cantidad').value,
        precio:      document.getElementById('precio').value
    };

    fetch(API_URL + 'burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
    .then(function (res) {
        if (!res.ok) throw new Error('Error al agregar el producto.');
        return res.json();
    })
    .then(function () {
        alert('Producto agregado correctamente.');
        document.getElementById('form-agregar').reset();
    })
    .catch(function () {
        alert('Error al agregar el producto.');
    });
});
