describe('yearsAgo function tests...', function() {
    it('..It should return the getFullYear string"', function() {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});