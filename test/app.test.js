const request = require('supertest');
const express = require('express');
const app = require('../src/index.js');

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
    expect(res.body.message).toContain('Hello from Kubernetes');
  });
});