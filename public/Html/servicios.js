const { createApp, ref } = Vue
// let ID = 0;
createApp({
    delimiters: ['${', '}'],
    data() {
        return {
            servicio: [],
            testimonios: [],
            moreImage: '',
            idServices: '',
        }
    },
    mounted() {
        fetch('http://localhost:3000/servicios')
            .then(response => response.json())
            .then(data => {
                this.servicio = data.filter(item => item.url == window.location.pathname)[0]
                let countImage = this.servicio.image.length - 4;
                this.moreImage = countImage == 1 ? '+ 1 imagen' : `+ ${countImage} Imágenes`;
                this.idServices = this.servicio.id;
            });


        fetch('http://localhost:3000/testimonios')
            .then(response => response.json())
            .then(data => {
                this.testimonios = data.filter(item => item.servicio == this.idServices)
            });
    },
}).mount('#content-services');

createApp({
    delimiters: ['${', '}'],
    data() {
        return {
            form: {
                name: '',
                last_name: '',
                phone: '',
                service: 0
            },
            registros: []
        }
    },
    methods: {
        async sendForm() {
            let URL = 'http://localhost:3000/registros_servicios';
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.form),
            });
        }
    },
    mounted() {
        fetch('http://localhost:3000/registros_servicios')
            .then(response => response.json())
            .then(data => {
                this.registros = data;
            });
    },
}).mount('#servicios');