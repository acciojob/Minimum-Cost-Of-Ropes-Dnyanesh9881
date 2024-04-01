function calculateMinCost(prev, element) {
    return Number(prev) + Number(element);
}

// Function to handle the button click event
function calculateMinCostAndUpdate() {
    // Retrieve the input rope lengths from the text input
    const ropeLengths = document.getElementById('rope-lengths').value;

    // Convert the comma-separated string to an array of rope lengths
    const ropes = ropeLengths.split(',').map(Number);

    // Initialize total cost
    let totalCost = 0;

    // Iterate through the sorted rope lengths and accumulate the total cost
    while (ropes.length > 1) {
        // Extract the two smallest ropes
        const min1 = ropes.shift();
        const min2 = ropes.shift();

        // Calculate the cost of merging the two ropes
        const cost = calculateMinCost(min1, min2);

        // Add the cost to the total
        totalCost += cost;

        // Insert the merged rope back into the array
        ropes.push(cost);
    }

    // Display the minimum cost in the result div
    document.getElementById('result').innerText = totalCost;
}
