function fromWhere(registrationNumber) {
    switch (registrationNumber.substring(0, 2)) {
        case 'CY':
            return 'Bellville';
        case 'CJ':
            return 'Paarl';
        case 'CA':
            return 'Cape Town';
        default:
            return 'Some other place!';
    }
}
