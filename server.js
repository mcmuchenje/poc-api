const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

db.sequelize
    .sync()
    .then(() => {
        console.log('Synced db.');
        // initial();
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message);
    });

app.use(cors());

function initial() {
    db.role.create({
        id: 1,
        name: 'user',
    });

    db.role.create({
        id: 2,
        name: 'moderator',
    });

    db.role.create({
        id: 3,
        name: 'admin',
    });
}

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to bezkoder application.' });
});

require('./routes/radcheck.routes')(app);
require('./routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
