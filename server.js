const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// const htmlRoutes = require('./app/routing/htmlRoutes')
// htmlRoutes(app)

app.use(express.urlencoded({extended: true}))

const htmlRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require("./app/routing/apiRoutes")

app.use("/api", apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
