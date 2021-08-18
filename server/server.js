const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

window.onload = (event) => {
    event.preventDefault()
    var hello = document.createElement('h1')
    var create = document.createTextNode("Hello")
    hello.appendChild(create)
    document.appendChild(hello)
    console.log('page is fully loaded');
  };



app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);

  });