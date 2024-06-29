function totalPhoneBill (phoneString) {
    const phoneStringList = phoneString.split(', ');
    const call = 2.75;
    const sms = 0.65;
    var total = 0;
    
    for (let i = 0; i < phoneStringList.length; i++) { 
      const item = phoneStringList[i];
      if (item === 'call') {
        total += call;
      } else if (item === 'sms') {
        total += sms;
      }
    }
    
    return 'R' + total.toFixed(2); 
  }
  
  console.log(totalPhoneBill('call, sms, call, sms, sms'));
  