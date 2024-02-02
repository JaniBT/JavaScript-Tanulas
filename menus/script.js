function navBar() {
    const y = document.querySelector("nav");
    y.classList.toggle("closed");

    const isClosed = y.classList.contains('closed');
    localStorage.setItem('navbarClosed', isClosed.toString());
}

const isNavbarClosed = localStorage.getItem('navbarClosed');

if (isNavbarClosed === 'true') {
    document.querySelector('nav').classList.add('closed');
} else if (isNavbarClosed === 'false') {
    document.querySelector('nav').classList.remove('closed');
}



let van_e_user_name = localStorage.getItem('username');
const p_username = document.getElementById('username');
console.log(van_e_user_name);
if (van_e_user_name === 'null') {
    const user_name = prompt("Enter your name: ");
    localStorage.setItem('username', user_name);
}
if (van_e_user_name) {
    window.onload = function() {
        let user_name = localStorage.getItem('username');
        p_username.innerText = "A Neved: " + user_name;
    }
}