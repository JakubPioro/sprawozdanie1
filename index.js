const express = require('express');
var satelize = require('satelize');
var requestIp = require('request-ip');

const PORT = 3000;

const app = express();
app.get('/', (req, res) => {

    let ip = requestIp.getClientIp(req);
    let data = new Date();

    if (ip != "127.0.0.1" && ip != "0.0.0.0" && ip != "::1" && !ip.startsWith("::")) {
        let timezone = satelize.satelize({ ip: ip }, function (err, payload) {
            return payload.timezone;
        });
        data = new Date().toLocaleString("en-US", { timeZone: timezone });
    }

    res.send(`Adres IP: ${ip}<br> Strefa czasowa: ${data}`);
    console.log(`Adres IP: ${ip}\nStrefa czasowa: ${data}`);
});

app.listen(PORT);
console.log(`Port TCP: ${PORT} \nAutor: Jakub Pióro`);