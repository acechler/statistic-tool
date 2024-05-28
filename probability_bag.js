const probability_bag = {
    name: "probability bag",
    items: [],
    addEntry(name, value) {
        this.items.push({ name, value });
    },
    calc() {
        let product = 1;
        this.items.forEach((item) => {
            product *= item.value;
        });
        return product;
    }
};

module.exports = probability_bag;
