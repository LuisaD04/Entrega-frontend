const signupForm = document.querySelector('#contacto');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const servicio = document.querySelector('#servicio').value
    const telefono = document.querySelector('#telefono').value
    const email = document.querySelector('#email').value


    const Users = JSON.parse(localStorage.getItem('cliente')) || []


    Users.push({nombre: nombre, apellido: apellido, servicio: servicio, telefono: telefono, email: email})
    localStorage.setItem('cliente', JSON.stringify(Users))
    alert('Registro Exitoso!')

})