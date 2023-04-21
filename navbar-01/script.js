const d = document;

//Ejecutar al cargar el documento
d.addEventListener("DOMContentLoaded", (e) => {
});

d.addEventListener('click', e => {
  if(e.target.matches('.menu a') || e.target.matches('.navbar-burger')){
    d.querySelector('body').classList.toggle('change');
  }
})
