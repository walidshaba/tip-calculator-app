let billInput = document.getElementById('bill-input'); /* Get bill niput*/
// Get default tips value
let tipsPercent = document.getElementsByName('tip-radio');
let customValue = document.getElementById('custom-tip');
// Number of People
let numberOfPeople = document.getElementById('Number-of-people');

function calculateTips(bill, tipsPercentage, numOfPeople) {
  bill = billInput.value;
  tipsPercentage = tipsPercent.value;
  numOfPeople = numberOfPeople.value;
  tipsPercent = bill * (tipsPercent / 100);
  return tipsPercent;
}

console.log(calculateTips());
