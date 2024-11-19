document.addEventListener('DOMContentLoaded', () => {
    const stockForm = document.getElementById('stock-form');
    const stockList = document.getElementById('stock-list');

    stockForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const quantity = document.getElementById('product-quantity').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - Quantity: ${quantity}`;
        stockList.appendChild(listItem);

        stockForm.reset();
    });
});
