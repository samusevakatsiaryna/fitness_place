const supertest = require('supertest');
const request = supertest('https://myfitnessplace.perfectgym.pl');

const expect = require('chai').expect;
let chai = require('chai');
chai.use(require('chai-json-schema'));
const { Given, When, Then } = require('@cucumber/cucumber');

const userAuthData = require('../src/creds.json');
const classByTrainer = require('../src/classParams.json');
const jsonSchema = require('../src/jsonSchema.json');

let classesByTrainerResponse;

Then("I get 499 error on submit incorrect password", async () => {
    const response = await request
        .post('/ClientPortal2/Auth/Login')
        .set('x-requested-with', 'XMLHttpRequest')
        .set('content-type', 'application/json;charset=UTF-8')
        .send(userAuthData)
    expect(response.statusCode).to.be.equal(499);
})

Then("I get 401 error", async () => {
    const response = await request
        .post('/ClientPortal2/Classes/ClassCalendar/BookClass')
        .set('x-requested-with', 'XMLHttpRequest')
        .set('content-type', 'application/json;charset=UTF-8')
        .send('{"classId":21995}')
    expect(response.statusCode).to.be.equal(401);
})


Then("I get Classes by Trainer ID", async () => {
    const response = await request
        .post('/ClientPortal2/Classes/ClassCalendar/WeeklyClasses')
        .set('x-requested-with', 'XMLHttpRequest')
        .set('content-type', 'application/json;charset=UTF-8')
        .send(classByTrainer)
    classesByTrainerResponse = response.body;
    expect(response.statusCode).to.be.equal(200);
    expect(response.body).to.be.not.null;
})

Then("Json Schema is valid", async () => {
    expect(classesByTrainerResponse).to.be.jsonSchema(jsonSchema);
} )



