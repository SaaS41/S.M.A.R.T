const cadastro = document.querySelector('.cadastro');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnVoltar = document.getElementById("login-btn-voltar")

loginBtnVoltar.addEventListener('click', ()=> {
    window.location.href = "../index.html";
});

registerLink.addEventListener('click', ()=> {
    cadastro.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    cadastro.classList.remove('active');
});