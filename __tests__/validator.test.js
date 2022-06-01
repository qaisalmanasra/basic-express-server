'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('API Server', () => {
    it('200 if the name is in the query string', async () => {
        const response = await request.get('/person?name=qais');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('qais');
    })
    
});

