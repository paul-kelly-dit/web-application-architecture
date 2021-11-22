const app = require('../books');
const bookService = require('../bookService.js');
const request = require('supertest');

const testApi = () => {
    it('It should capitalize the first letter of all books and respond with status 200', async () => {
        const bookServiceSpy = jest.spyOn(bookService, 'getAll');
        bookServiceSpy.mockReturnValue(['georges marvelous medicine', 'jumanji']);

        await request(app)
    		.get("/books")
	    	.expect(200)
		    .then((response) => {
                // Check the response type and length
                expect(Array.isArray(response.body)).toBeTruthy()
			    expect(response.body).toEqual(['Georges marvelous medicine', 'Jumanji']);
		})    
    });

};

module.exports = testApi