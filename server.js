const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/register", (req, res) => {

    const {
        name,
        age,
        gender,
        email,
        course,
        phone,
        address
    } = req.body;


    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
        </head>
        <body>

            <h1>Output</h1>

            <h2>Student Details</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>

            <br>

            <a href="/index.html">Register Another Student</a>

        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});