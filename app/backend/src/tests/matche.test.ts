import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('All Matches', () => {
  it('Verifica se o end point retorna status 200', async () => { 
    const response = await chai.request(app).get('/matches');

    expect(response).to.status(200);
  });
  it('Verifica o corpo da resposta com os matches', async () => {
    const response = await chai.request(app).get('/matches');
    expect(response.body).to.have.length(48);
  });
});
