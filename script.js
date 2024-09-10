document.getElementById('formulario').addEventListener('submit', function(event) {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const regexNombre = /^\S([a-]+\s){2,50}$/gi;  
    const errorNombre = document.getElementById('error-nombre');
    const reGexEmail = /^[a-zA-Z0-9]+\@(gmail|hotmail|outlook|usco)\.(com|net|org|edu.co)$/; 
    const errorEmail = document.getElementById('error-email');
    
    if (!regexNombre.test(nombre)) {
        errorNombre.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        errorNombre.style.display = 'none'; 
    }
   
    if (!reGexEmail.test(email)) {  
        errorEmail.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        errorEmail.style.display = 'none'; 
    }
});