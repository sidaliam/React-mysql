const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userdb",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "INSERT INTO user_table (user_name,user_password) VALUES (?,?)",
    [username, password],
    function (err, result) {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM  user_table WHERE user_name = ? AND user_password = ?",
    [username, password],
    function (err, result) {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else ({ message: "Wrong username/password combination" });
    }
  );
});

app.get("/userinformation", (req, res) => {
  const sqlget = "SELECT * FROM user_table ;";
  db.query(sqlget, (err, result) => {
    res.send(result);
  });
});

app.post("/addclient", (req, res) => {
  const nom_client = req.body.nom_client;
  const prénom_client = req.body.prénom_client;
  const phone_client = req.body.phone_client;
  const phone2_client = req.body.phone2_client;
  const email_client = req.body.email_client;
  const ville_client = req.body.ville_client;
  const adresse_client = req.body.adresse_client;

  db.query(
    "INSERT INTO client_table  (nom_client, prenom_client,phone_cleint, phone2_client,email_client, ville_client, adresse_client ) VALUES (?,?,?,?,?,?,?);",
    [
      nom_client,
      prénom_client,
      phone_client,
      phone2_client,
      email_client,
      ville_client,
      adresse_client,
    ],
    function (err, result) {
      res.send(result);
      console.log(err);
    }
  );
});

app.get("/Clientinformation", (req, res) => {
  const sqlget = "SELECT * FROM client_table ;";
  db.query(sqlget, (err, result) => {
    res.send(result);
  });
});



app.listen(3003, () => {
  console.log("run on server 3003");
});
