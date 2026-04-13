const API_URL = 'https://xtsulyts.pythonanywhere.com/';

fetch(API_URL + 'burgers')
    .then(function (res) {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(function (data) {
        var tbody = document.getElementById('tabla-productos');
        data.forEach(function (p) {
            var tr = document.createElement('tr');
            tr.innerHTML =
                '<td>' + p.codigo + '</td>' +
                '<td>' + p.descripcion + '</td>' +
                '<td class="text-right">' + p.cantidad + '</td>' +
                '<td class="text-right">$' + p.precio + '</td>';
            tbody.appendChild(tr);
        });
    })
    .catch(function () {
        alert('Error al obtener los productos.');
    });
