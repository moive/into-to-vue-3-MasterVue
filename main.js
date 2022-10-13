const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            onSale: true,
            details: ['50% cotton','30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            cart: 0,
            inStock: false,
        }
    },
    methods: {
        AddToCart(){
            this.cart += 1;
        },
        DecrementItemCart(){
            if(this.cart == 0) return;
            this.cart -= 1;
        },
        UpdateImage(image){
            if(image == null) return;
            this.image = image;
        }
    }
});