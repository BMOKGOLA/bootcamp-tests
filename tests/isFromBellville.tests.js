describe('isFromBellville function tests...', function() {
    it('..should return true for a registration number starting with "CY"', function() {
        (regCheck('DC 56 YU ', 'CY'), true);
        
    });
});

describe('isFromBellville function tests...', function() {
    it('..should return true for a registration number starting with "CA"', function() {
        (regCheck('DC 55 YU CA', 'CA'), true);   
    });
});