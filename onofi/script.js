document.querySelector('.apertar').addEventListener('click', (e)=>{
    e.target.classList.toggle('apertar-move');
    document.body.classList.toggle('dark');
});

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
  const titulo = document.querySelector('h1');
  typeWriter(titulo);