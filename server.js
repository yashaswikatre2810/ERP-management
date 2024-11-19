// server.js
const express = require('express');
const sequelize = require('./database/db_config');
const app = express();

app.use(express.json());
app.use(express.static('modules'));

// Import routes for each module
const hrmRoutes = require('./modules/HRM/hrm.js');
const salesRoutes = require('./modules/sales/sales.js');
const accountingRoutes = require('./modules/accounting/accounting.js');
const inventoryRoutes = require('./modules/inventory/inventory.js');
const invoicingRoutes = require('./modules/invoicing/invoicing.js');
const manufacturingRoutes = require('./modules/manufacturing/manufacturing.js');
const purchaseRoutes = require('./modules/purchase/purchase.js');
// Add similar imports for other modules...

app.use('/hrm', hrmRoutes);
app.use('/sales', salesRoutes);
app.use('/accounting', accountingRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/invoicing', invoicingRoutes);
app.use('/manufacturing', manufacturingRoutes);
app.use('/purchase', purchaseRoutes);
// Add similar app.use calls for other modules...

sequelize.authenticate().then(() => {
    console.log('Database connected...');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}).catch(err => console.log('Error: ' + err));
