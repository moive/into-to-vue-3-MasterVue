const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            brand: "Moive",
            selectedVariant: 0,
            inventory: 8,
            onSale: true,
            details: ['50% cotton','30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0},
            ],
            cart: 0,
        }
    },
    computed: {
        title(){
            return `${this.brand} ${this.product}`
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        textOnSale(){
            return `${this.title} is on sale`
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
        UpdateVariant(index){
            this.selectedVariant = index;
            this.onSale = this.variants[this.selectedVariant].quantity > 10;
            console.log(index)
        }
    }
});