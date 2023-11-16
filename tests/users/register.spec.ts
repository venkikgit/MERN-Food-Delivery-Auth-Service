import app from '../../src/app';
import request from 'supertest';
describe('POST /auth/register', () => {
    describe('Given All fields', () => {
        it(' should return the 201 status code', async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: 'Rakesh',
                lastName: 'K',
                email: 'rakesh.k@gmail.com',
                password: '123456',
            };
            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            // Assert
            expect(response.status).toBe(201);
        });
        it('should return valid json response', async () => {
            const userData = {
                firstName: 'Rakesh',
                lastName: 'K',
                email: 'rakesh.k@gmail.com',
                password: '123456',
            };
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            expect(
                (response.headers as Record<string, string>)['Content-Type'],
            ).toEqual(expect.stringContaining('json'));
        });
        it('Should persist the user in the database', async () => {
            //Arragne
            // const userData = {
            //     firstName: 'Rakesh',
            //     lastName: 'K',
            //     email: 'rakesh.k@gmail.com',
            //     password: '123456',
            // };
            //Act
            // const response = await request(app)
            //     .post('/auth/register')
            //     .send(userData);
            // Assert
        });
    });

    describe('Fields are missing', () => {});
});
