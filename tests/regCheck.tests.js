describe('regCheck function tests...', function() {
    it('..should return true for a registration number starting with "CY"', function() {
        (isFromBellville('CY 123'), true);
        (isFromBellville('CJ 123'), false);
    });
});