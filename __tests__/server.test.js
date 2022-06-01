'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('API Server', () => {
    test('getting data from home route / >>>  home route is working', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('welcome to heroku server');
    });
    
    it('handle bad request', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);
    });
    
    it('handle bad method 404', async () => {
        const response = await request.post('/');
        expect(response.status).toEqual(404);
    });

    it('handle server internal errors no name', async () => {
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);
    })
});