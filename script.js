const dino = document.querySelector('.dino');
const background = document.querySelector('.plano');
//constante não pode ser reescrita
//console.log(dino);

var isJumping = false;
 var position = 0;
//Keycode.info demonstra as teclas do teclado
function handlekeyUp(event) {
   if (event.keyCode === 32){
      if(!isJumping){
      jump();
      //console.log('Pressionou espaço!');
      }
   }
}
//setInterval serve para executar a ação varias vezes com o tempo designado
function jump() {
  
   isJumping = true;

   var upInterval = setInterval(() => {
      if( position >= 150){
         clearInterval(upInterval);
         //descendo
         var downInterval = setInterval(() => {
            if(position<= 0){
               clearInterval(downInterval);
               isJumping = false;
            }else{
            position -= 20;
            dino.style.bottom = position + 'px';
            }
         }, 20);
      }else{
      //subindo
      position += 20;

      dino.style.bottom = position + 'px';
      }
   }, 20);
   
}

function createCactus() {
   const cactus = document.createElement('div');
   var cactusPosition = 1000;
   var randomTime = Math.random() * 6000;

   cactus.classList.add('cactus');
   cactus.style.left = 1000 + 'px';
   background.appendChild(cactus);
   
   var leftInterval = setInterval(() => {
     if(cactusPosition < -60) {
         clearInterval(leftInterval);
         background.removeChild(cactus);
 } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
    // game over

    clearInterval(leftInterval);
    document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
 }else{
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
      }    
 }, 20);
  setTimeout(createCactus, randomTime);
  //função se auto chamando
}

createCactus();
document.addEventListener('keyup', handlekeyUp);
//keyup verificar o clique no teclado
