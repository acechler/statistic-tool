
const probability_bag = {
    
    name : "probability bag",
    items : {},
    addEntry(name, value) {
        this.items[name] = value;
    },
    calc(){
        let product = 1;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key) && typeof this.items[key] === 'number'){
                product *= this.items[key];
            }
        }
        return product;
    }

};


module.exports = probability_bag;

