console.log("Js is here");
const { createApp } = Vue

createApp({

    data() {

        return {
            placeholderData: `placeholder`
        }
    },

    methods: {
        placeholderMethod() {
            console.log(this.placeholderData);
        }
    }
}).mount('#vueApp');