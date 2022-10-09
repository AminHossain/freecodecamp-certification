function rot13(str) {
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        if(![' ', ',', '?', '!', '.'].includes(str[i])) {
            let code = str.charCodeAt(i);
            code += 13;
            if(code > 90) code = (code - 90) + 64;
            ans += String.fromCharCode(code);
      } else {
        ans += str[i];
      }
    }

    return ans;
}
  
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");