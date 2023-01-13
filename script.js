const canvas = document.getElementById('myCanvas')// Introduction du canvas 


let ctx;
if (canvas.getContext) {

  ctx = canvas.getContext('2d');

  ctx.beginPath()
  const lingrad = ctx.createLinearGradient(960, 0, 500, 960);// dégrader de couleur
  lingrad.addColorStop(0, 'rgba(84, 109, 229,1.0)');
  lingrad.addColorStop(1, 'rgba(61, 193, 211,1.0)');
  ctx.fillStyle = lingrad
  ctx.fillRect(0, 0, 1920, 970);// retangle de font
  ctx.closePath()

 
 
  ctx.beginPath()
  ctx.shadowColor = 'gray';//ombre des pages
  ctx.shadowBlur = 5;
  ctx.sadowOffsetX = 4;
  ctx.sadowOffsetY = 4;
  ctx.fillStyle = 'rgba(236, 240, 241,1.0)' //page de gauche
  ctx.fillRect(30, 15, 940, 940)
  ctx.fillStyle = 'white'//page de droite
  ctx.fillRect(950, 15, 940, 940)
  ctx.closePath()

  
  ctx.beginPath()
  ctx.shadowColor = 'white';
  ctx.fillStyle = 'red'
  ctx.fillRect(400, 600, 200, 150)//réctangle gauche 
  ctx.fillRect(1300, 600, 200, 150) //réctangle droite
  ctx.closePath()
  

  ctx.beginPath()
  ctx.fillStyle = "black"
  ctx.font = '30px Segoe UI'
  ctx.fillText('CURRENT', 440, 650);
  ctx.fillText('CURRENT', 1340, 650);

  ctx.fillText('ROLL DICE', 910, 650);
  
  ctx.fillText('HOLD', 930, 730);
  ctx.fillText('NEW GAME', 900, 100);


  ctx.font = '50px Sergoe UI'
  ctx.fillText('PLAYER 1', 400, 200);
  ctx.fillText('PLAYER 2', 1300, 200);
  
  ctx.closePath()
  

} else {
  'Votre aurdinateur ne contien pas canvas'
}