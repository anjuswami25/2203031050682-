const express = require('express');
const cors = require('cors');
const urlRoutes = require('./routes/urlroutes.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', urlRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
