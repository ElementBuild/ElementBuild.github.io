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
// mNothing.addEventListener('click', () => { sendUser("nothing", "Nothing Page Button"); });
mNothing.addEventListener('click', () => { document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIFTc5h-Shyc7HTDy8I20Wyb1YtpCn7v_yo6H4NSSPQ&s)" ;});

function sendUser(location, log){
    window.location.href = './' + location + '.html';
    console.log(log + ' clicked!');
}


// 
const live = document.getElementById("live");
const makecolor = document.querySelector(".xC");
// const makered = document.querySelector(".xB");
const maketext = document.querySelector(".xT");
const makebradius = document.querySelector(".xR");

/* makered.addEventListener('click', () => { 
    live.style.backgroundColor = "red";
    makecolor.value = "#ff0000";
}); */

makecolor.addEventListener('input', () => { 
    live.style.backgroundColor = makecolor.value;
});

maketext.addEventListener('input', () => { 
    live.innerText = maketext.value;
});

makebradius.addEventListener('input', () => { 
    live.style.borderRadius = makebradius.value + "px";
});