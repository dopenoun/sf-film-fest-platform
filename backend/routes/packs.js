const express = require('express');
const router = express.Router();

router.get('/api/packs/2025', (req, res) => {
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

module.exports = router; // ✅ MOVE THIS TO THE BOTTOM
