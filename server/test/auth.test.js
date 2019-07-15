 /**
import chai from 'chai'
import chaiHttp from 'chai-http'
import { it, describe } from 'mocha'
import app from '../../server'


chai.use(chaiHttp)
chai.should()

let request;
beforeEach(() => {
    request = chai.request(app)
});

describe('POST auth/signup', () => {
    it('SHOULD NOT register the user if email is omitted', async () => {
        const newUser = {
            firstname: 'bruno',
            lastname: 'austin',
            password: 'password',
        };
        const res = await request.post('/api/vi/auth/sigup').send(newUser);
        res.should.have.status(404);
        res.body.should.have.property('error');
        res.body.should.have.property('status').eql(404);
    });
    it('SHOULD NOT register the user if firstname is omitted', async () => {
        const newUser = {
            email: 'bruno@gmail.com',
            lastname: 'austin',
            password: 'password',
        };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(404);
    res.body.should.have.property('error');
    res.body.should.have.property('error').eql(404);
  });
});
 
  it('SHOULD NOT register the user if lastname is omitted', async () => {
    const newUser = {
      email: 'bruno@gmail.com',
      firstname: 'bruno',
      password: 'password',
    };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(400);
    res.body.should.have.property('error');
    res.body.should.have.property('status').eql(400);
  });
  it('SHOULD NOT register the user if password is omitted', async () => {
    const newUser = {
      email: 'bruno@gmail.com',
      firstname: 'bruno',
      lastname: 'austin',
    };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(400);
    res.body.should.have.property('error');
    res.body.should.have.property('status').eql(400);
  });
  it('SHOULD NOT register the user if password is less than 6 characters', async () => {
    const newUser = {
      email: 'bruno@gmail.com',
      firstname: 'bruno',
      lastname: 'austin',
      password: 'password',
    };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(400);
    res.body.should.have.property('error');
    res.body.should.have.property('status').eql(400);
  });

  it('SHOULD register the user if user doesn\'t exist', async () => {
    const newUser = {
        email: 'jane@gmail.com',
        firstname: 'jane',
        lastname: 'doe',
        password: 'password',
    };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(201);
    res.body.should.have.property('status').eql(201);
    res.body.should.be.a('object');
    res.body.data.should.be.a('object');
    res.body.data.should.have.property('token');
  }); 
  it('SHOULD NOT register the user if user already exists', async () => {
    const newUser = {
        email: 'jane@gmail.com',
        firstname: 'jane',
        lastname: 'doe',
        password: 'password',
    };
    const res = await request.post('/api/v1/auth/signup').send(newUser);
    res.should.have.status(400);
    res.body.should.have.property('error');
    res.body.should.have.property('status').eql(400);
  });
}) 

describe('POST auth/login', () => {
    it('SHOULD NOT login the user if user is not found', async () => {
        const loginDetails = {
          email: 'bob@gmail.com',
          password: 'boblash',
        };
        const res = await request.post('/api/v1/auth/login').send(loginDetails);
    res.should.have.status(400);
    res.body.should.have.property('error');
    res.body.should.have.property('status').eql(400);
  });
  it('SHOULD NOT login the user if email is omitted', async () => {
    const loginDetails = {
      password: 'boblash',
    };
    const res = await request.post('/api/v1/auth/login').send(loginDetails);
    res.should.have.status(400);
    res.body.should.be.a('object');
    res.body.should.have.property('error');
  });
  it('SHOULD NOT login the user if password field is omitted', async () => {
    const loginDetails = {
      email: 'bob@gmail.com',
    };
    const res = await request.post('/api/v1/auth/login').send(loginDetails);
    res.should.have.status(400);
    res.body.should.be.a('object');
    res.body.should.have.property('error');
  });
  it('SHOULD NOT login the user if password is wrong', async () => {
    const loginDetails = {
      email: 'bob@gmail.com',
      password: 'boblas',
    };
    const res = await request.post('/api/v1/auth/login').send(loginDetails);
    res.should.have.status(400);
    res.body.should.be.a('object');
    res.body.should.have.property('error');
  });
  it('SHOULD login the user if user is found', async () => {
    const loginDetails = {
        email: 'bob@gmail.com',
        password: 'boblash',
    };
    const res = await request.post('/api/v1/auth/login').send(loginDetails);
    res.should.have.status(200);
    res.body.should.have.property('status').eql(200);
    res.body.should.be.a('object');
    res.body.data.should.be.a('object');
    res.body.data.should.have.property('token');
  });
})
 */