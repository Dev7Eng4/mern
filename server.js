const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('API'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
