
const bloqueMancha = document.getElementById('manchaOculta');
const btnMancha = document.getElementById('btnMancha');


btnMancha.addEventListener('click', function handleClick() {
  if (bloqueMancha.style.visibility === 'hidden') {
    bloqueMancha.style.visibility = 'visible';
  } else {
    bloqueMancha.style.visibility = 'hidden';
  }
});



