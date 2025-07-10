
const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/api/packs/2025', (req, res) => {
  res.status(200).json([
    {
      "title": "The Silence of Sunlight",
      "slug": "silence-of-sunlight",
      "thumbnailUrl": "/images/sunlight.jpg"
    },
    {
      "title": "Geometry of Fire",
      "slug": "geometry-of-fire",
      "thumbnailUrl": "/images/fire.jpg"
    }
  ]);
});

module.exports = app;
