describe('countAllPaarl tests...', function() {
    it('..should return registration number "CJ"', function() {
        var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true

        var fromBellville = isFrom('CJ 98912', 'CY'); //returns false
    
    });
});