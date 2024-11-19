document.addEventListener('DOMContentLoaded', () => {
    const customerForm = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-list');

    customerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('customer-name').value;
        const contact = document.getElementById('customer-contact').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${contact}`;
        customerList.appendChild(listItem);

        customerForm.reset();
    });
});
