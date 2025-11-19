class Cart {
    constructor() {
        this.items = [];
        this.coupon = null;
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    applyCoupon(code) {
        const pattern = /^(SAVE|DISC)\d{2}$/;
        if (pattern.test(code)) {
            this.coupon = Number(code.match(/\d+/)[0]);
        } else {
            console.log("Invalid coupon");
        }
    }

    getTotal() {
        let total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if (this.coupon) {
            total = total - (total * this.coupon / 100);
        }
        return total;
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Shoes", 1500, 2);
cart.applyCoupon("SAVE20");

console.log("Final Total:", cart.getTotal());
