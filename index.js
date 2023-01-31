const express = require("express");
const app = express();
require("dotenv").config();






const PORT = 5000 || process.env.PORT;




app.listen(5000, () => {
    console.log(`server is listening on port number ${PORT}`);
})