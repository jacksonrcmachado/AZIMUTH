const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from backend!'));

test('GET / retorna mensagem esperada', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello from backend!');
});
