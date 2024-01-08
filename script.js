document.addEventListener("DOMContentLoaded", (event) => {
    // Script To Load Automatically Once Website Loads
});

const mHome = document.getElementById('mHome');
const mButtons = document.getElementById('mButtons');
const mInputs = document.getElementById('mInputs');
const mNothing = document.getElementById('mNothing');

mHome.addEventListener('click', () => { sendUser("index", "Home Page Button"); });
mButtons.addEventListener('click', () => { sendUser("buttons", "Buttons Page Button") });
mInputs.addEventListener('click', () => { sendUser("inputs", "Inputs Page Button"); });
mNothing.addEventListener('click', () => { sendUser("nothing", "Nothing Page Button"); });

function sendUser(location, log){
    window.location.href = './' + location + '.html';
    console.log(log + ' clicked!');
}