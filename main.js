const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            premium: true,
        }
    },
    methods: {
        updateCart(){
            this.cart += 1;
        },
        cleanCart(){
            this.cart = 0;
        }
    }
});