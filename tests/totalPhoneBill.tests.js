describe('totalPhoneBill function tests...', function() {
    it('..should return string R7.45', function() {
        ('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        ('R3.40', totalPhoneBill('call, sms'));
        ('R1.30', totalPhoneBill('sms, sms'));
    });
});

describe('totalPhoneBill function tests...', function() {
    it('..should return string R3.40', function() {
        ('R3.40', totalPhoneBill('call, sms'));
    });
});