// script.js
document.getElementById('addEntryForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const entryName = document.getElementById('entryName').value;
    const entryValue = parseFloat(document.getElementById('entryValue').value);

    const response = await fetch('/add-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: entryName, value: entryValue })
    });
    const result = await response.json();
    console.log(result.items);
    updateProbabilityBag(result.items);
});

document.getElementById('calculateProduct').addEventListener('click', async () => {
    const response = await fetch('/calculate');
    const result = await response.json();
    document.getElementById('productResult').innerText = `Product: ${result.product}`;
});


///TODO: Figure out how to extract the data from `items`
function updateProbabilityBag(items) {
    
    const tbody = document.getElementById('statusSetTBody');
    const newTR = document.createElement('tr');
    
    const bag = document.getElementById('probabilityBag');
    bag.innerText = JSON.stringify(items, null, 2);
    const parsedItems = JSON.parse(bag.innerText);
    
    parsedItems.forEach(item => {
        const newTH = document.createElement('th');
        const newTD = document.createElement('td');
        newTH.setAttribute("scope","row");
        
        newTH.innerHTML = `${item.name}`;
        newTD.innerHTML = `${item.value}`;

        newTR.appendChild(newTH);
        newTR.appendChild(newTD);
    });

    tbody.appendChild(newTR);
    
    /*             
    <tr>
        <th scope="row"></th>
        <td id="name">0</td>
    </tr> 
    */
}

// Fetch and display the initial probability bag
async function fetchProbabilityBag() {
    const response = await fetch('/calculate'); // This can be any endpoint that returns the items
    const result = await response.json();
    updateProbabilityBag(result.items || {});
}

fetchProbabilityBag();
