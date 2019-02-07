/*
const request = require('supertest');
const app = require('../server/app.js');
describe('Express server should route appropriately', () => {
  test('404 everything else', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404)
      .end(() => done());
  });
});
*/
describe('Test CircleCi', () => {
  test('Test CircleCI', () => {
    expect(1 + 2).toBe(3);
  });
});
