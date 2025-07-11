const express = require('express');
const app = express();

const packsRoutes = require('./routes/packs');

app.use(express.json());
app.use(packsRoutes); // Modular route mount here ✅

app.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login successful' });
});

app.post('/mint', (req, res) => {
  res.status(200).json({ message: 'NFT pass minted successfully' });
});

app.get('/stream/:year/:filmId', (req, res) => {
  const { year, filmId } = req.params;
  res.status(200).json({
    message: `Streaming video for film ${filmId} from ${year}`,
    videoUrl: `https://example.com/videos/${year}/${filmId}.mp4`
  });
});

app.get('/community/:year', (req, res) => {
  const { year } = req.params;
  res.status(200).json({
    message: `Discussion threads for ${year}`,
    threads: [
      { id: 1, title: `Discussion about ${year} films`, posts: [] }
    ]
  });
});

module.exports = app;
