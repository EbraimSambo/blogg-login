const olho = document.querySelector('.fa-eye-slash')
const campo = document.querySelector('#password')

olho.addEventListener('click', () => {

    if (campo.type === "password") {
        campo.type = "text"
        olho.classList.toggle('fa-eye')
    }else{
        campo.type= "password"
        olho.classList.toggle('fa-eye')
    }
})