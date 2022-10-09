function telephoneCheck(str) {
    let rgx1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/
    let rgx2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/
  
    if(rgx1.test(str)) return true;
    else return rgx2.test(str) ? true : false;
}
  
// telephoneCheck("555-555-5555");