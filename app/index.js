
const express = require('express')
const mysql = require('mysql')
const cors = require("cors");

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());


const CONFIG = require('./config')
app.listen(PORT, () => {
    console.log('server starting')
})

function dbConnection (table) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(CONFIG)
        connection.connect()

        const allList = `SELECT * FROM ${table}`
        connection.query(allList, function(error, result) {
            if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            connection.end()
        })
    })
}

app.get('/pizza', (req, res) => {
    dbConnection('pizzalist')
    .then(pizzas => {
        res.json(pizzas)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

app.get('/burgers', (req, res) => {
    dbConnection('burgerlist')
    .then(burgers => {
        res.json(burgers)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

app.get('/rolls', (req, res) => {
    dbConnection('rollslist')
    .then(rolls => {
        res.json(rolls)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

app.get('/sets', (req, res) => {
    dbConnection('setlist')
    .then(sets => {
        res.json(sets)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

app.get('/sushi', (req, res) => {
    dbConnection('sushilist')
    .then(sushi => {
        res.json(sushi)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

app.get('/promo', (req, res) => {
    dbConnection('promotion')
    .then(promo => {
        res.json(promo)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})