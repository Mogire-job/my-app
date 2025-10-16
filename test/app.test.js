const request = require('supertest');

// Import the app without starting the server
const app = require('../src/index.js');

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
    expect(res.body.message).toContain('Hello from Kubernetes');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const res = await request(app)
      .get('/health')
      .expect(200);
    expect(res.body.status).toBe('OK');
  });
});