const signupForm = document.querySelector('#registro');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const pais = document.querySelector('#pais').value
    const ciudad = document.querySelector('#ciudad').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const cpassword = document.querySelector('#cpassword').value

    if (password !== cpassword) {
        return alert('Las contraseñas no coinciden.');
    }
    if (password.length < 8) {
        return alert('La contraseña debe tener al menos 8 dígitos.');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({nombre: nombre, apellido: apellido, pais: pais, ciudad: ciudad, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'

})