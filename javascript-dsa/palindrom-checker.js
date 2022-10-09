function palindrome(str) {
    let ok = true;
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase();

    let i = 0;
    let j = str.length - 1;
  
    while(i < j) {
        if(str[i] != str[j]) ok = false;
        i++, j--;
    }
  
    return ok;
}
  
// palindrome("A man, a plan, a canal. Panama")