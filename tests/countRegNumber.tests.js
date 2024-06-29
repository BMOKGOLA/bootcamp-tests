describe('countRegNumber tests...', function() {
    it('..should return  that can check if a registration number is for GP, L, EC, MP registration plates', function() {
        (regCheck('DC 55 YU GP', 'GP'), true);
        (regCheck('DC 55 YU GP', 'EC'), false);
        (regCheck('5566 L', 'L'), true);
        (regCheck('5566 L', 'M'), false);
        (regCheck('ERT 123 EC', 'EC'), true);
        (regCheck('ERT 123 EC', 'GP'), false);
        (regCheck('FGT 123 MP', 'MP'), true);
        (regCheck('FGT 123 MM', 'MP'), false);
    });
});