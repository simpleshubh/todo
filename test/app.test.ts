import * as app from '../src/index';
import chai, { expect } from 'chai';
import mongoose from 'mongoose';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
chai.should();

console.log(app);

const todo = {
  name: 'Drink Water',
  description: 'Need to drink water',
  date: new Date()
};
describe('Index Test', function () {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

describe('todos', function () {
  after(function (done) {
    mongoose.connection.close(done);
  });

  it('should allow a POST to /todo', (done) => {
    chai.request('http://localhost:3000/v1/')
    .post('todos')
    .send(todo)
    .end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.a('object');
      res.body.should.have.property('todos');
      res.body.should.have.property('message');
      res.body.todos.should.be.a('array');
      done();
    });
  });

  it('should allow a GET to /todos', (done) => {
    chai.request('http://localhost:3000/v1/')
    .get('todos')
    .end((err, res) => {
      console.log(res.body);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('todos');
      res.body.todos.should.be.a('array');
      done();
    });
  });
});