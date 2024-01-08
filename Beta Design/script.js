document.addEventListener("DOMContentLoaded", (event) => {
    // Script To Load Automatically Once Website Loads
});

const mHome = document.getElementById('mHome');
const mButtons = document.getElementById('mButtons');
const mInputs = document.getElementById('mInputs');
const mNothing = document.getElementById('mNothing');

mHome.addEventListener('click', function () {
    window.location.href = './index.html';
    console.log('Button clicked!');
});

mButtons.addEventListener('click', function () {
    window.location.href = './buttons.html';
    console.log('Button clicked!');
});

mInputs.addEventListener('click', function () {
    window.location.href = './inputs.html';
    console.log('Button clicked!');
});

mNothing.addEventListener('click', function () {
    window.location.href = './nothing.html';
    console.log('Button clicked!');
});