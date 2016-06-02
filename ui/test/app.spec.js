let app = require('../src/app');

describe('ok', () => {
    it('should ok', () => {
        expect(app.f()).toEqual('ok');
    });
});
