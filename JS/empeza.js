
const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  if (box.style.visibility === 'hidden') {
    box.style.visibility = 'visible';
  } else {
    box.style.visibility = 'hidden';
  }
});