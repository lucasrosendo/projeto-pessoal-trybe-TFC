import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';

import { Response } from 'superagent';
import { equal } from 'assert';

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


  describe('Verefica a requisição PATCH', () => {
    let chaiHttpResponse: Response;
    describe('Chamada sendo feita em /matches/:id/finish', () => {
      let chaiHttpResponse: Response;
  
      it('Retorna status 200', async () => {
        chaiHttpResponse = await chai.request(app).patch('/matches/1/finish');
  
        expect(chaiHttpResponse).to.have.status(200);
      });
      it('Verifica o corpo', () => {
        expect(chaiHttpResponse.body).to.be.an('object');
      });
      it('Retorna menssagem correta "Finished"', () => {
        expect(chaiHttpResponse.body).to.have.key('message');
        expect(chaiHttpResponse.body.message).to.be.equal('Finished');
      });
    });

    
  });

  