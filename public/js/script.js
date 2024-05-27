document.getElementById('addEntryForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const entryName = document.getElementById('entryName').value;
    const entryValue = parseFloat(document.getElementById('entryValue').value);

    const response = await fetch('/add-entry',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:entryName, value: entryValue})
    });
    const result = await response.json();
    updateProbabilityBag(result.items);
});

document.getElementById('calculateProduct').addEventListener('click', async () => {
    const response = await fetch('/calculate');
    const result = await response.json();
    document.getElementById('productResult').innerHTML =  `Product: ${result.product}`;

});

function updateProbabilityBag(items){
    document.getElementById('probabilityBag').innerHTML = JSON.stringify(items, null, 2);
}

// Fetch and display the initial probability bag

async function fetchProbabilityBag(){
    const response = await fetch('calculate'); // This can be any endpoint that returns the items
    const result = await response.json();
    updateProbabilityBag(result.items || {});
}
fetchProbabilityBag();