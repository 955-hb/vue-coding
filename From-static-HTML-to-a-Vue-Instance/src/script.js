//Hello Hannes

const app = Vue.createApp({
    data(){
        return {
            userName: 'Hannes B.',
            time: new Date().toLocaleString()
        }
    },
    mounted() {
        this.updateTime()
    },
    methods: {
        updateTime() {
            setInterval(() => {
                this.time = new Date().toLocaleString('en-us');
            }, 1000);
        }
    }
}).mount('#card')