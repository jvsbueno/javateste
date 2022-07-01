// variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadeBolinhax = 4;
let velocidadeBolinhay = 4;
let raio = diametro/2;

// variáveis minha raquete
let xRaq1 = 5;
let yRaq1 = 160;
let expessuraRaq1 = 10;
let alturaRaq1 = 80;

//variáveis raquete do oponente
let xRaq2 = 585;
let yRaq2 = 160;
let velocidadeYOponente;

// variáveis colisão da bolinha
let colide = false;

//variáveis placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('black');
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaq1,yRaq1);
  movimentaRaquete();
  colisaoRaquete(xRaq1,yRaq1);
  mostraRaquete(xRaq2,yRaq2);
  movimentaRaqueteOponente();
  colisaoRaquete(xRaq2,yRaq2);
  placar();
  pontos();
 
  
  /*
  // criando e programando a bolinha
 // circle(xBolinha, yBolinha, diametro);
 // xBolinha = xBolinha + velocidadeBolinhax;
 // yBolinha = yBolinha + velocidadeBolinhay;
  
  //if(xBolinha + raio > width || xBolinha - raio < 0)
    //velocidadeBolinhax = velocidadeBolinhax * -1;
  //if(yBolinha + raio > height || yBolinha - raio < 0)
    //velocidadeBolinhay = velocidadeBolinhay * -1;
  
// criando e programando a minha raquete

  
  //if(xBolinha - raio < xRaq1 + expessuraRaq1 && yBolinha + raio > yRaq1 && yBolinha - raio < yRaq1 + alturaRaq1 )
      // velocidadeBolinhax = velocidadeBolinhax * -1;
*/

}

function mostraBolinha(){
    fill('red')
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha = xBolinha + velocidadeBolinhax;
  yBolinha = yBolinha + velocidadeBolinhay;
  }

function colisaoBorda (){
  if(xBolinha + raio > width || xBolinha - raio < 0)
    velocidadeBolinhax = velocidadeBolinhax * -1;
  if(yBolinha + raio > height || yBolinha - raio < 0)
    velocidadeBolinhay = velocidadeBolinhay * -1;
}

function mostraRaquete(x,y){
  fill('green');
  rect(x, y, expessuraRaq1, alturaRaq1);
}

function movimentaRaquete(){
  if (keyIsDown('87')) 
    yRaq1 = yRaq1 - 5;

  if (keyIsDown('83')) 
    yRaq1 = yRaq1 + 5;
 }

function colisaoRaquete(x,y){
  colide = collideRectCircle(x, y, expessuraRaq1, alturaRaq1,xBolinha, yBolinha, diametro);
  if(colide)
    velocidadeBolinhax = velocidadeBolinhax * -1;
}
function colisaoRaqueteOponente(){
  colide = collideRectCircle(xRaq2, yRaq2, expessuraRaq1, alturaRaq1,xBolinha, yBolinha, diametro);
  if(colide)
    velocidadeBolinhax = velocidadeBolinhax * -1;
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaq2 - alturaRaq1 / 2 - 60;
  yRaq2 += velocidadeYOponente;
}


function placar() {
  fill(255);
  textSize(30);
  text(meusPontos, 100, 30);
  text(pontosOponente, 500, 30);
}
function pontos(){
  if(xBolinha-raio<0){pontosOponente=pontosOponente+1}
  if(xBolinha+raio>600){meusPontos=meusPontos+1}
}