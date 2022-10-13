app.component('product-display', {
    props:{
        premium:{
            type: Boolean,
            required: true,
        }
    },
    
    template: 
    /* html*/
    `<div class="product-display">
        <div class="product-container">
            <div
                class="product-image"
                :class="{'out-of-stock-img':!inStock}"
            >
                <img :src="image" alt="" />
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inventory>10">In Stock</p>
                <p v-else-if="inventory => 10 && inventory > 0">
                    Almost sold out!
                </p>
                <p v-else>Out of Stock</p>
                <p v-if="onSale">{{textOnSale}}</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div
                    v-for="(variant, index) of variants"
                    :key="variant.id"
                    class="color-circle"
                    :style="{backgroundColor: variant.color}"
                    @mouseover="UpdateVariant(index)"
                ></div>
                <button
                    class="button"
                    @click="AddToCart"
                    :class="{disabledButton: !inStock}"
                    :disabled="!inStock"
                >
                    Add to Cart
                </button>
                <button class="button" @click="cleanCart">
                    Clean Cart
                </button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
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
            reviews: []
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
        },
        shipping(){
            if (this.premium) return 'Free'
            return 2.99;
        }    },
    methods: {
        AddToCart(){
            this.$emit('add-to-cart');
        },
        cleanCart(){
            this.$emit('clean-cart');
        },
        UpdateVariant(index){
            this.selectedVariant = index;
            this.onSale = this.variants[this.selectedVariant].quantity > 10;
            console.log(index)
        },
        addReview(review){
            this.reviews.push(review);
        }
    }
})