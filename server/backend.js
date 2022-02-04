const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require('bcrypt');
const saltRound = 10;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:8081"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

app.get("/", (req, res) => {
    var config = {
        server: 'localhost',
        database: 'profilesDB',
        trustServerCertificate: true
    };
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from dbo.ProfilesTB', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});


app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email
    const password = req.body.password;

    bcrypt.hash(password, saltRound, (err, hash) => {

        if (err) {
            console.log(err)
        }

        var users = {
            "Name": username,
            "Email": email,
            "Password": hash
        }
        db.query('INSERT INTO ProfilesDB.dbo.ProfilesTB SET ?', users, function (error, results, fields) {
            if (error) {
                console.log(error)
            } else {
                console.log(
                    "success - user registered sucessfully"
                );
            }
        });
        
    })
});
app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.execute(
        "SELECT * FROM ProfilesDB.dbo.ProfilesTB WHERE username = ?;",
        [username],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username/ password comination!" });
                    }
                });
            } else {
                res.send({ message: "User doesn't exists" });
            }
        }
    );
});

app.listen(3306, () => {
    console.log("running server");
});