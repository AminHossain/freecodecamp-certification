function convertToRoman(num) {
    let ans = "";
    let data = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = { 1000 : 'M', 900 : 'CM', 500 : 'D', 400 : 'CD', 100 : 'C', 90 : 'XC', 50 : 'L', 40 : 'XL', 10 : 'X', 9 : 'IX', 5 : 'V', 4 : 'IV', 1 : 'I' }
  
    for(let id in data) {
        if(num >= data[id]) {
            let x = Math.floor(num/data[id]);
            for(let i = 0; i < x; i++) 
                ans += roman[data[id]];
            num %= data[id]
        }
    }
    return ans;
}
  
// convertToRoman(1004);