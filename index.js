
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

let chance_on_counter = 1/2;
let chance_on_rolling_6 = 1/6;

probability_bag.addEntry("chance of dice being on counter", chance_on_counter);
probability_bag.addEntry("chance of rolling six sided dice", chance_on_rolling_6);

console.log(probability_bag);

console.log(probability_bag.calc());