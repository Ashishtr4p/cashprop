require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require('cors');
//const morgan = require("morgan");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",'GET,PUT,DELETE,POST');
    next();
});

app.get("/properties", async (req,res) =>{
    try {
        const result = await db.query("select * from properties");
    console.log(result);
    res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
    
});
app.get("/propertiess", async (req,res) =>{
    try {
        const result = await db.query("select image from propertiess");
    console.log(result);
    res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
    
});
app.get("/properties/:propertyid",async (req,res) =>{
    
    console.log(req.params.propertyid);
    try {
        const result = await db.query("select * from properties where id = $1", [req.params.propertyid]);
    console.log(result.rows[0]);
    res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

app.post("/properties", (req,res) => {
    console.log(req.body);
    try {
                const result =  db.query("INSERT INTO properties(id ,name, location, price, cashback, bhk, on_sale) VALUES ($1, $2, $3 , $4, $5, $6,$7)",[
                    req.body.id,
                    req.body.name,
                    req.body.location,
                    req.body.price,
                    req.body.cashback,
                    req.body.bhk,
                    req.body.on_sale
                ]);
                console.log(result);
                res.json({
                    status: "success",
                    data: {
                        property: result.rows,
                    },
                    
                });
            } catch (error) {
                console.log(error);
            }
    res.end();
});
app.put("/properties/:propertyid",async (req,res) => {
    try {
        const result = await db.query("UPDATE properties SET name = $1, location = $2, price = $3, cashback = $4, bhk = $5, on_sale = $6 where id = $7 returning *" ,[
            req.body.name,
            req.body.location,
            req.body.price,
            req.body.cashback,
            req.body.bhk,
            req.body.on_sale,
            req.params.propertyid
        ]);
        console.log(result);
        res.json({
            status: "success",
            data: { 
                property: "pan oasis",
            },
            
        });

    } catch (error) {
        console.log(error);
    }
    
    console.log(res);
});

app.get("/properties/:propertyid/reviews",async (req,res) =>{
    
    console.log(req.params.propertyid);
    try {
        const result = await db.query("select * from reviews where property_id = $1", [req.params.propertyid]);
    console.log(result.rows[0]);
    res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`server is up`);
});