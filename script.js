function calculateMinCostAndUpdate() {
            // Retrieve the input rope lengths from the text input
            const ropeLengths = document.getElementById('rope-lengths').value;

            // Convert the comma-separated string to an array of rope lengths
            const ropes = ropeLengths.split(',').map(Number);

            // Sort the rope lengths in ascending order
            ropes.sort((a, b) => a - b);

            // Initialize total cost
            let totalCost = 0;

            // Iterate through the sorted rope lengths and accumulate the total cost
            while (ropes.length > 1) {
                // Extract the two smallest ropes
                const min1 = ropes.shift();
                const min2 = ropes.shift();

                // Calculate the cost of merging the two ropes
                const cost = min1 + min2;

                // Add the cost to the total
                totalCost += cost;

                // Insert the merged rope back into the sorted array
                ropes.push(cost);

                // Re-sort the array
                ropes.sort((a, b) => a - b);
            }

            // Display the minimum cost in the result div
            document.getElementById('result').innerText = `Minimum cost: ${totalCost}`;

