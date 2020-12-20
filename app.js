const image = document.querySelector('img');

function moveBird() {
  
    let x = Math.random() * 60;
    let y = Math.random() * 80;
  
    image.style.top = x + 'vh';
    image.style.left = y + 'vw';
}

function foundBird() {
    alert("Congrats, you found the bird!");
    moveBird();
}


image.addEventListener('mouseover', foundBird);