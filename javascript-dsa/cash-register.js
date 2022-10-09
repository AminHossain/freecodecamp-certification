function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNTS = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
  
    let totalCash = 0;
    for(let i in cid) 
        totalCash += cid[i][1];

    totalCash = totalCash.toFixed(2)
  
    let changeBack = cash - price;
    let changes = [];
  
    if(changeBack > totalCash) {
        return {status : "INSUFFICIENT_FUNDS", change : changes};
    } else if(changeBack == totalCash) {
        return {status : "CLOSED", change : cid};
    } else {
      cid = cid.reverse();
  
        for(let idx of cid) {
        let temp = [idx[0], 0];

        while(changeBack >= UNIT_AMOUNTS[idx[0]] && idx[1] > 0) {
            temp[1] += UNIT_AMOUNTS[idx[0]];
            idx[1] -= UNIT_AMOUNTS[idx[0]];
            changeBack -= UNIT_AMOUNTS[idx[0]];
            changeBack = changeBack.toFixed(2);
        }

        if(temp[1] > 0) 
            changes.push(temp)
        }

        if(changeBack > 0)
        return {status : "INSUFFICIENT_FUNDS", change : []};

        return {status : "OPEN", change : changes};
    }
}
  
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);