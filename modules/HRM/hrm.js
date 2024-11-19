document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const employeeList = document.getElementById('employee-list');

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('employee-name').value;
        const role = document.getElementById('employee-role').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${role}`;
        employeeList.appendChild(listItem);

        employeeForm.reset();
    });
});
