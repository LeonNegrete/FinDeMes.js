const express = require('express');
const app = express();
const path = require('path');
const routes = require('./router/mainRouter')

const PORT = 3030;
app.set("view engine", "ejs");
app.use(express())
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes)


app.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})
