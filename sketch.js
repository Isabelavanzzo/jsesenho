function setup() {
    createCanvas(900, 900);
  }
  
  function draw() {
  background("black");
  fill("blue");
  textSize(90);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  let palavra = "vitor feio";
  // o número é  responsavel por deixar ao menos um caractere na
    
  // tela mesmo com a posiçao do mouse em 0
    
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
    
  // passando todos os caractere da posiçao 0 até a passada pelo map
    
  let parcial = palavra.substring(0, quantidade)
  text(parcial, 450, 450)
  }