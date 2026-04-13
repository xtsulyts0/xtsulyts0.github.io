const API_URL = 'https://xtsulyts.pythonanywhere.com/';

const app = Vue.createApp({
    data() {
        return {
            burgers: [],
            carrito: [],
            mostrarCarrito: false
        };
    },
    created() {
        this.cargarProductos();
    },
    methods: {
        cargarProductos() {
            fetch(API_URL + 'burgers')
                .then(function (res) { return res.json(); })
                .then((data) => { this.burgers = data; })
                .catch(function () { alert('Error al obtener los productos.'); });
        },
        agregarAlCarrito(producto) {
            fetch(API_URL + 'carrito', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ codigo: producto.codigo, cantidad: 1 })
            })
            .then(function (res) { return res.json(); })
            .then(function (data) { alert(data.message); })
            .catch(function () { alert('Error al agregar al carrito.'); });
        },
        restarDelCarrito(producto) {
            fetch(API_URL + 'carrito', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ codigo: producto.codigo, cantidad: 1 })
            })
            .then(function (res) { return res.json(); })
            .then(function (data) { alert(data.message); })
            .catch(function () { alert('Error al restar del carrito.'); });
        },
        verCarrito() {
            fetch(API_URL + 'carrito')
                .then(function (res) { return res.json(); })
                .then((data) => {
                    this.carrito = data;
                    this.mostrarCarrito = true;
                })
                .catch(function () { alert('Error al obtener el carrito.'); });
        },
        actualizarStock() {
            this.cargarProductos();
        }
    }
});

app.mount('#app');
