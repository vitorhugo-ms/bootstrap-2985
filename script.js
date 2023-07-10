const ipuntCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

ipuntCheck.addEventListener('click', () =>{
    const modo = ipuntCheck.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})