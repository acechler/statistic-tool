# Probability Bag

This object calculates the probability of an event occuring after a sequence of events have occured.

## Example

You are at work and there is a chance that there is 6 sided dice on the counter.
If the dice are on the counter you will roll the dice and hope to roll a 3.

There is a 50% chance of the dice being on the table.
There is roughly a 16% percent chance of rolling a desired outcome with 6 sided dice.

I have created this object that can add more events to influence the outcome.

```js


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

```