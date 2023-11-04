const lengthInput = document.getElementById('length');
const passwordInput = document.querySelector('.password');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');

function getRandomChar(type) {
    let chars = '';

    if (type === 'lower') {
        chars = 'abcdefghijklmnopqrstuvwxyz';
    } else if (type === 'upper') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (type === 'numeric') {
        chars = '0123456789';
    } else if (type === 'special') {
        chars = '!@#$%^&*()-_=+[]{};:\'",.<>?/|`~';
    }

    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}

function generatePassword() {
    const length = lengthInput.value;
    let password = '';

    for (let i = 0; i < length; i++) {
        const type = ['lower', 'upper', 'numeric', 'special'][Math.floor(Math.random() * 4)];
        password += getRandomChar(type);
    }

    passwordInput.textContent = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordInput.textContent);
});
