const loginForm = document.querySelector('#login')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.nombre} ${validUser.apellido}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../admin/admin.html'   

})

const defaultUser = {
    nombre: 'Admin',
    apellido: 'istrador',
    email: 'admin@admin.com',
    password: 'admin123'
};

// Función para inicializar el usuario predeterminado
function initializeDefaultUser() {
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isDefaultUserRegistered = Users.find(user => user.email === defaultUser.email);
    if (!isDefaultUserRegistered) {
        Users.push(defaultUser);
        localStorage.setItem('users', JSON.stringify(Users));
    }
}

// Llamar a la función al cargar la aplicación
initializeDefaultUser();