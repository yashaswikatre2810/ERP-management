document.addEventListener('DOMContentLoaded', () => {
    const supplierForm = document.getElementById('supplier-form');
    const supplierList = document.getElementById('supplier-list');
    const purchaseOrderForm = document.getElementById('purchase-order-form');
    const purchaseOrders = document.getElementById('purchase-orders');

    supplierForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('supplier-name').value;
        const contact = document.getElementById('supplier-contact').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - Contact: ${contact}`;
        supplierList.appendChild(listItem);

        supplierForm.reset();
    });

    purchaseOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const product = document.getElementById('po-product').value;
        const quantity = document.getElementById('po-quantity').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${product}, Quantity: ${quantity}`;
        purchaseOrders.appendChild(listItem);

        purchaseOrderForm.reset();
    });
});
