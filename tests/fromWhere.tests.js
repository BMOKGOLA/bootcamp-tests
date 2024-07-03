describe('fromWhere tests...', function() {
    it('..should return fromWhere', function() {
        (fromWhere('CY 567489'), 'Bellville'); 
        (fromWhere('CJ 343502'), 'Paarl');
        (fromWhere('CA 987504'), 'Cape Town');
        (fromWhere('ZN 568593'), 'Some other place!');

    });
});

describe('fromWhere tests...', function() {
    it('..should return Some other place!', function() {
        (fromWhere('ZN 568593'), 'Some other place!');

    });
});