const checkCashRegister = (clientBill) => {
  let currentBills = {
    hundred: 0,
    fifty: 0,
    twentyFive: 0,
  };

  for (let i = 0; i < clientBill.length; i++) {
    if (clientBill[i] === 25) {
      currentBills.twentyFive++;
      continue;
    }
    if (clientBill[i] === 50) {
      if (currentBills.twentyFive > 0) {
        currentBills.twentyFive--;
        currentBills.fifty++;
        continue;
      } else {
        return "NO";
      }
    }
    if (clientBill[i] === 100) {
      if (currentBills.fifty > 0 && currentBills.twentyFive > 0) {
        currentBills.fifty--;
        currentBills.twentyFive--;
        currentBills.hundred++;
        continue;
      } else if (currentBills.twentyFive > 0) {
        currentBills.twentyFive -= 3;
        currentBills.hundred++;
      } else {
        return "NO";
      }
    }
    if (currentBills.twentyFive < 0 || currentBills.fifty < 0) return "NO";
  }

  // console.log(currentBills);
  return "YES";
};

console.log(checkCashRegister([25, 25, 50]));
console.log(checkCashRegister([25, 100]));
console.log(checkCashRegister([25, 25, 50, 50, 50]));
console.log(checkCashRegister([50, 25, 50]));
