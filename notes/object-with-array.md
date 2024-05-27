# Object with Array

This is how you use an object with an array

```js

const probability_bag = {
    
    name : "probability bag",
    items : [],
    loop(){
        this.items.forEach((item)=>{
            console.log(item);
        });
    },

    calc(){
        let accumulator = 0;
        this.items.forEach((item) =>{
            console.log(accumulator);
            item *= accumulator;
        });
        return accumulator;
    }

};

let chance_on_counter = 1/2;
let chance_on_rolling_6 = 1/6;
//console.log(chance_on_counter * chance_on_rolling_6);


probability_bag.items.push(chance_on_counter);
probability_bag.items.push(chance_on_rolling_6);

console.log(probability_bag.calc());

```