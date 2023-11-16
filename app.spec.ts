import { describe } from 'node:test';
import calculateDiscount from './src/utils';
import request from 'supertest';
import app from './src/app';
void describe('App', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    it('should work', () => {
        const result = calculateDiscount(100, 10);
        expect(result).toBe(10);
    });

    it('should return 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
