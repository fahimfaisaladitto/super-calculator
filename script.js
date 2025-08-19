// --- DOM Element References ---
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('result');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorInput = document.getElementById('operator');
const num1Up = document.getElementById('num1-up');
const num1Down = document.getElementById('num1-down');
const num2Up = document.getElementById('num2-up');
const num2Down = document.getElementById('num2-down');
const opUp = document.getElementById('op-up');
const opDown = document.getElementById('op-down');

// --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const toggleBall = document.getElementById('toggleBall');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

function setTheme(isDark) {
    if (isDark) {
        htmlElement.classList.add('dark');
        toggleBall.style.transform = 'translateX(24px)';
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        toggleBall.style.transform = 'translateX(0)';
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    }
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
const initialThemeIsDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
setTheme(initialThemeIsDark);
darkModeToggle.checked = initialThemeIsDark;
darkModeToggle.addEventListener('change', () => setTheme(darkModeToggle.checked));

// --- Calculator Logic ---
const operators = ['+', '−', '×', '÷'];
let operatorIndex = 0;

num1Up.addEventListener('click', () => { num1Input.value = parseInt(num1Input.value) + 1; });
num1Down.addEventListener('click', () => { num1Input.value = parseInt(num1Input.value) - 1; });
num2Up.addEventListener('click', () => { num2Input.value = parseInt(num2Input.value) + 1; });
num2Down.addEventListener('click', () => { num2Input.value = parseInt(num2Input.value) - 1; });

opUp.addEventListener('click', () => {
    operatorIndex = (operatorIndex - 1 + operators.length) % operators.length;
    operatorInput.value = operators[operatorIndex];
});
opDown.addEventListener('click', () => {
    operatorIndex = (operatorIndex + 1) % operators.length;
    operatorInput.value = operators[operatorIndex];
});


// --- Button Actions ---
clearBtn.addEventListener('click', () => {
    num1Input.value = 0;
    num2Input.value = 0;
    operatorIndex = 0;
    operatorInput.value = operators[operatorIndex];
    resultDiv.classList.add('hidden');
    resultDiv.classList.remove('result-in');
});

calculateBtn.addEventListener('click', () => {
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('result-in');
});
