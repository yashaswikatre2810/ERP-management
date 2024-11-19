document.addEventListener('DOMContentLoaded', () => {
    const bomForm = document.getElementById('bom-form');
    const bomList = document.getElementById('bom-list');
    const productionForm = document.getElementById('production-form');
    const productionSchedule = document.getElementById('production-schedule');

    bomForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const materialsList = document.getElementById('materials-list').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - Materials: ${materialsList}`;
        bomList.appendChild(listItem);

        bomForm.reset();
    });

    productionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const product = document.getElementById('schedule-product').value;
        const date = document.getElementById('production-date').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${product}, Date: ${date}`;
        productionSchedule.appendChild(listItem);

        productionForm.reset();
    });
});
