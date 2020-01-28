const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Data
const songsData = {
  songs: [
    {
      name: 'Don\'t Stop Believing',
      artist: 'Journey'
    },
    {
      name: 'Hey Soul Sister',
      artist: 'Train'
    }
  ]
}

// Routes
app.get('/', (req, res) => {
  res.render('songs', { songs: songsData.songs })
});

app.get('/double/:num', (req, res) => {
  const doubledNum = parseInt(req.params.num) * 2;
  res.render('double', { num: req.params.num, doubled: doubledNum });
});

app.get('/favecolor', (req, res) => {
  const color = req.query.color;
  console.log(color);
  res.render('favecolor', { color })
})

app.listen(3000);