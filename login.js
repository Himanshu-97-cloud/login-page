const toggleView = document.querySelectorAll('.changeView, .changeView1')

toggleView.forEach(e => {
    e.addEventListener('click', () => {
        const input = e.previousElementSibling
        if (input.type === 'password') {
            input.type = 'text'
            e.src = './images/eye.png'
        } else {
            input.type = 'password'
            e.src = './images/hidden.png'
        }
    });
});

const login = document.querySelector('#login')
const register = document.querySelector('#register')
const showRegister = document.querySelector('#show-register')
const showLogin = document.querySelector('#show-login')

showRegister.addEventListener('click', () => {
    login.style.display = 'none'
    register.style.display = 'block'
});

showLogin.addEventListener('click', () => {
    register.style.display = 'none'
    login.style.display = 'block'
});

const formL = document.querySelector('#loginForm')
formL.addEventListener('submit', ()=>[
    alert("Login Successfull ✅")
])

const pass1 = document.querySelector('#password1')
const pass2 = document.querySelector('#password2')
const formR = document.querySelector('#registerForm')
const passCheck = document.querySelector('.passError')

formR.addEventListener('submit' , (e)=>{
    e.preventDefault()
    if(pass1.value !== pass2.value){
        passCheck.style.display = 'block'
    }
    else{
        passCheck.style.display = 'none'
        alert("Registration Successfull ✅")
    }
    
})