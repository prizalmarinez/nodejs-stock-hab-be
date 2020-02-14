const express = require('express');
const path = require('path')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.status(200).json({
        message: 'it works'
    })
})

// serve static in prod
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);