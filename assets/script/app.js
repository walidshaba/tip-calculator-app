const billValue = document.getElementById('bill-input');

function getTips() {
  let tip = document.getElementsByName('tip-radio');
  for (i = 0; i < tip.length; i++) {
    if (tip[i].checked) {
      document.getElementById('tip-amt').innerHTML = tip[i].value;
    }
  }
}
getElementsByName.addEventListener('input', getTips);
