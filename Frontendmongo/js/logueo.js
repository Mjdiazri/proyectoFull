const formLogin = document.querySelector('#form-login')
formLogin.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#input-correo').value
    const password = document.querySelector('#input-password').value
    const users = JSON.parse(localStorage.getItem('users')) || []

    const validarUser = users.find(user => user.email === email && user.password === password)

    if(!validarUser){
        return alert('Usuario o contrasena incorrecta')
    }

    alert(`Bienvenido ${validarUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validarUser))
    window.location.href = 'index.html'
})