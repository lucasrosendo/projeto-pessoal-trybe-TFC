import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('All Teams', () => {
  it('Verifica se o end point retorna status 200', async () => { 
    const response = await chai.request(app).get('/teams');

    expect(response).to.status(200);
  });
  it('Verifica o corpo da resposta com os teams', async () => {
    const response = await chai.request(app).get('/teams');
    expect(response.body).to.have.length(16);
  });
});

