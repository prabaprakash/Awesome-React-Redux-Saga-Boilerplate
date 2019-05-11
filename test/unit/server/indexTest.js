import { describe, it, after } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/server';

chai.use(chaiHttp);

describe('Server', () => {
  const request = chai.request(server).keepOpen();
  after(() => request.close());
  describe('get index', () => {
    it('It should get index', function(done) {
      request.get('/')
        .then((res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
//React Router Configured It Won't Work
  // describe('get unknown route', () => {
  //   it('It should throw error for unknown route', function(done) {
  //     request
  //       .get('/unknown')
  //       .then((err) => {
  //         expect(err).to.have.status(404);
  //         done();
  //       });
  //   });
  // });
});
