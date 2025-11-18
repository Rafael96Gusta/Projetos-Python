const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Cálculo 
function calculate() {
  try {
    const expr = display.value
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/\^/g, "**")
      .replace(/pi/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/sqrt/g, "Math.sqrt")
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log");
    display.value = eval(expr);
  } catch {
    display.value = "Erro";
  }
}

// fatorial
function factorial() {
  const n = parseInt(display.value);
  if (isNaN(n) || n < 0) {
    display.value = "Erro";
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  display.value = result;
}

function gcd() {
  const nums = display.value.split(/[^0-9]+/).map(Number).filter(Boolean);
  if (nums.length < 2) return (display.value = "Erro");
  const gcdTwo = (a, b) => (b === 0 ? a : gcdTwo(b, a % b));
  display.value = nums.reduce((a, b) => gcdTwo(a, b));
}

function lcm() {
  const nums = display.value.split(/[^0-9]+/).map(Number).filter(Boolean);
  if (nums.length < 2) return (display.value = "Erro");
  const gcdTwo = (a, b) => (b === 0 ? a : gcdTwo(b, a % b));
  const lcmTwo = (a, b) => Math.abs(a * b) / gcdTwo(a, b);
  display.value = nums.reduce((a, b) => lcmTwo(a, b));
}

// teclado
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9+\-*/().]/.test(key)) append(key);
  else if (key === "Enter") calculate();
  else if (key === "Backspace") deleteLast();
  else if (key === "Escape") clearDisplay();
});
