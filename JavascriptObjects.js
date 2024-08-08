// Task 1: Creating an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Writing a function to display the product information on the webpage dynamically.

function displayProducts() {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h1>${product.name}</h1>
            <p><b>Price:</b> $${product.price}</p>
            <p><b>Description:</b> ${product.description}</p>
        `;
        container.appendChild(productDiv);
    });
}

// Task 3: Implementing an event listener to trigger the display of products when the page loads.

window.addEventListener('load', displayProducts);