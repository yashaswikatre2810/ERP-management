document.addEventListener('DOMContentLoaded', () => {
    const invoiceForm = document.getElementById('invoice-form');
    const invoiceList = document.getElementById('invoice-list');

    invoiceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('client-name').value;
        const amount = document.getElementById('amount').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Client: ${clientName}, Amount: $${amount}`;
        invoiceList.appendChild(listItem);

        invoiceForm.reset();
    });
});
