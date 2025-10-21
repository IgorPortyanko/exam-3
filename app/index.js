import express from "express";
import cors from "cors";
import { pizzas } from "./mockData/pizzas.js";
import { burgers } from "./mockData/burgers.js";
import { rolls } from "./mockData/rolls.js";
import { promotions } from "./mockData/promotions.js";
import { sets } from "./mockData/sets.js";
import { sushis } from "./mockData/sushis.js"
//const express = require('express')
//const mysql = require('mysql')
//const cors = require("cors");

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());
app.use(express.json());

// const CONFIG = require('./config')
// app.listen(PORT, () => {
//     console.log('server starting')
// })

app.listen(PORT, () => {
  console.log(`Fake API server running on port ${PORT}`);
});

app.get("/pizza", (req, res) => res.json(pizzas));
app.get("/burgers", (req, res) => res.json(burgers));
app.get("/rolls", (req, res) => res.json(rolls));
app.get("/promo", (req, res) => res.json(promotions));
app.get("/sets", (req, res) => res.json(sets)); 
app.get("/sushi", (req, res) => res.json(sushis));

// function dbConnection (table) {
//     return new Promise((resolve, reject) => {
//         const connection = mysql.createConnection(CONFIG)
//         connection.connect()

//         const allList = `SELECT * FROM ${table}`
//         connection.query(allList, function(error, result) {
//             if (error) {
//                 reject(error);
//               } else {
//                 resolve(result);
//               }
//             connection.end()
//         })
//     })
// }

// app.get('/pizza', (req, res) => {
//     dbConnection('pizzalist')
//     .then(pizzas => {
//         res.json(pizzas)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })

// app.get('/burgers', (req, res) => {
//     dbConnection('burgerlist')
//     .then(burgers => {
//         res.json(burgers)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })

// app.get('/rolls', (req, res) => {
//     dbConnection('rollslist')
//     .then(rolls => {
//         res.json(rolls)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })

// app.get('/sets', (req, res) => {
//     dbConnection('setlist')
//     .then(sets => {
//         res.json(sets)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })

// app.get('/sushi', (req, res) => {
//     dbConnection('sushilist')
//     .then(sushi => {
//         res.json(sushi)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })

// app.get('/promo', (req, res) => {
//     dbConnection('promotion')
//     .then(promo => {
//         res.json(promo)
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
// })