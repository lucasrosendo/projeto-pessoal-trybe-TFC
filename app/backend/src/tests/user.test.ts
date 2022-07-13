import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('User Login', () => {
  it('Verifica se após o login incorreto o status retornado é 401', async () => { 
    const response = await chai.request(app).post('/login').send({
      email: "user@example.com",
      password: "password"
    })

    expect(response).to.status(401);
  });
});
