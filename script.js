const password = document.getElementById("password")
const conf_pass = document.getElementById("conf_pass")
const check = document.getElementById("check")
const err = document.querySelector('.error')

check.addEventListener('click', () => {
    if(password.value !== conf_pass.value){
        password.style.border = "1px solid red"
        conf_pass.style.border = "1px solid red"
        err.innerText = 'Passwords do not match!'
    }else{
        password.style.border = ""
        conf_pass.style.border = ""
    }
})
