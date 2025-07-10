
const request = require('supertest');
const app = require('../server');

describe('Express Server', () => {
  it('should handle POST /login', async () => {
    const res = await request(app).post('/login');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Login successful');
  });

  it('should handle POST /mint', async () => {
    const res = await request(app).post('/mint');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'NFT pass minted successfully');
  });

  it('should handle GET /stream/:year/:filmId', async () => {
    const res = await request(app).get('/stream/2024/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Streaming video for film 123 from 2024');
    expect(res.body).toHaveProperty('videoUrl');
  });

  it('should handle GET /community/:year', async () => {
    const res = await request(app).get('/community/2024');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Discussion threads for 2024');
    expect(res.body).toHaveProperty('threads');
  });

  it('should handle GET /api/packs/2025', async () => {
    const res = await request(app).get('/api/packs/2025');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('title');
    expect(res.body[0]).toHaveProperty('slug');
    expect(res.body[0]).toHaveProperty('thumbnailUrl');
  });
});
