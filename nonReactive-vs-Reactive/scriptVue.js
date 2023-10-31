//Hello Hannes

import { createApp } from 'vue@3.1.2/dist/vue.esm-browser.js';

const App = {
    data() {
        return {
            fruits: [
                'Banana',
                'Apple'
            ],
        };
    },
    methods: {
        addFruit (event) {
            console.log(event);
            const formData = new FormData(event.target);
            const formProps = Object.fromEntries(formData);

            this.fruits = [
                ...this.fruits,
                formProps.fruit_name
            ]

            event.target.reset()
        }
    },
};

createApp(App).mount('#app');