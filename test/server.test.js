var request = require('supertest');
var app = require('../server/app.js')

describe('Express server should route appropriately', () => {

  test('404 everything else', (done) => {
    request(app)
    .get('/foo/bar')
    .expect(404)
    .end(() => done());
  });

});
