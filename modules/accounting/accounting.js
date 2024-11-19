document.addEventListener('DOMContentLoaded', () => {
    const generateReportButton = document.getElementById('generate-report');
    const reportDisplay = document.getElementById('report-display');

    generateReportButton.addEventListener('click', () => {
        const report = `Financial Report: Income, Expenses, Profit, etc.`;
        reportDisplay.textContent = report;
    });
});
