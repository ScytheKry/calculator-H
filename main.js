let display = document.getElementById('display');
let current = '';

function press(key) {
  if (current === 'Error') current = '';
  current += key;
  updateDisplay();
}

function pressNegate() {
  if (current) {
    try {
      current = (parseFloat(current) * -1).toString();
    } catch {
      current = 'Error';
    }
    updateDisplay();
  }
}

function pressPercent() {
  if (current) {
    try {
      current = (parseFloat(current) / 100).toString();
    } catch {
      current = 'Error';
    }
    updateDisplay();
  }
}

function calculate() {
  try {
    current = Function('"use strict";return (' + current + ')')().toString();
  } catch {
    current = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = current || '0';
}

function pressClear() {
  current = '';
  updateDisplay();
}

document.querySelectorAll('button').forEach(btn => {
  if (btn.textContent === 'C') {
    btn.addEventListener('click', pressClear);
  }
});
