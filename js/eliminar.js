const API_URL = 'https://xtsulyts.pythonanywhere.com/';

const app = Vue.createApp({
    data() {
        return { productos: [] };
    },
    methods: {
        cargarProductos() {
            fetch(API_URL + 'burgers')
                .then(function (res) {
                    if (!res.ok) throw new Error();
                    return res.json();
                })
                .then((data) => {
                    this.productos = data;
                })
                .catch(function () {
                    alert('Error al obtener los productos.');
                });
        },
        eliminarProducto(codigo) {
            if (!confirm('¿Eliminar el producto ' + codigo + '?')) return;
            fetch(API_URL + 'burgers/' + codigo, { method: 'DELETE' })
                .then((res) => {
                    if (!res.ok) throw new Error();
                    this.productos = this.productos.filter(function (p) {
                        return p.codigo !== codigo;
                    });
                })
                .catch(function () {
                    alert('Error al eliminar el producto.');
                });
        }
    },
    mounted() {
        this.cargarProductos();
    }
});

app.mount('#app');
