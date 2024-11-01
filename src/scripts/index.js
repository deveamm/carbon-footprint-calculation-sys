document.addEventListener('DOMContentLoaded', function() {
    
    const botonPerson = document.getElementById('btn-person');
    const botonOrg = document.getElementById('btn-organization');
    
    botonPerson.addEventListener('click', function() {
        window.location.href = './views/personal.html';
    });

    botonOrg.addEventListener('click', function() {
        window.location.href = './views/organizacion.html';
    });
});