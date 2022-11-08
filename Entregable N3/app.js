let mainMenu =  document.querySelector('.mainMenu');
let gameScreen =  document.querySelector('.gameScreen');
let rightArrow = document.querySelector('#rightArrow');
let leftArrow = document.querySelector('#leftArrow');
let nombreTurno = document.querySelector('.nombreTurno');
const startTimer = 60; 
let sec = startTimer;
let n;
let nRows = n + 1;



function startGame(){
  let numberToWin = document.querySelector('#numberToWin').value;

  let player1Name = document.querySelector('#player1Name').value;
  let skinPlayer1 = document.querySelector('#player1Skin').value;
  
  let player2Name = document.querySelector('#player2Name').value;
  let skinPlayer2 = document.querySelector('#player2Skin').value;

  if(skinAreDifferent(skinPlayer1, skinPlayer2)){
    mainMenu.style.display = 'none';
    gameScreen.style.display = 'block';
    console.log(numberToWin);
    loadGame(player1Name, skinPlayer1, player2Name, skinPlayer2, numberToWin);
  }else{
    alert('Las fichas deben ser diferentes');
  }
}

function skinAreDifferent(skinPlayer1, skinPlayer2){
  return skinPlayer1 != skinPlayer2;
}


function loadGame(player1Name, skinPlayer1, player2Name, skinPlayer2, numberToWin) {
  let canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  let boardW, boardH, boardArray, squareSize, color, canvasSize, playerTurn, countTurn, endGame, jugando, imgDrag;

  let tablero = 'imagenes/tablero1.png';
  let fichaAmarilla = 'imagenes/fichaAmarilla.png';
  let fichaRoja = 'imagenes/fichaRoja.png';
  let fichaAzul = 'imagenes/fichaAzul.png';
  let fichaVerde = 'imagenes/fichaVerde.png';
  let fichaVioleta = 'imagenes/fichaVioleta.png';
  let fichaCookie = 'imagenes/fichaCookie.png';
  let fichaFutbol =  'imagenes/fichaFutbol.png';
  let fichaHalloween = 'imagenes/fichaHalloween.png';
  let fichaSanta = 'imagenes/fichaSanta.png';

  let fichaSkinJugador1;
  let fichaSkinJugador2;

  if(skinPlayer1 == "yellow1"){
    fichaSkinJugador1 = fichaAmarilla;
  }else if(skinPlayer1 == "red1"){
    fichaSkinJugador1 = fichaRoja;
  }else if(skinPlayer1 == "blue1"){
    fichaSkinJugador1 = fichaAzul;
  }else if(skinPlayer1 == "green1"){
    fichaSkinJugador1 = fichaVerde;
  }else if(skinPlayer1 == "violet1"){
    fichaSkinJugador1 = fichaVioleta;
  }else if(skinPlayer1 == "cookie1"){
    fichaSkinJugador1 = fichaCookie;
  }else if(skinPlayer1 == "football1"){
    fichaSkinJugador1 = fichaFutbol;
  }else if(skinPlayer1 == "halloween1"){
    fichaSkinJugador1 = fichaHalloween;
  }else{
    fichaSkinJugador1 = fichaSanta;
  }

  if(skinPlayer2 == "yellow2"){
    fichaSkinJugador2 = fichaAmarilla;
  }else if(skinPlayer2 == "red2"){
    fichaSkinJugador2 = fichaRoja;
  }else if(skinPlayer2 == "blue2"){
    fichaSkinJugador2 = fichaAzul;
  }else if(skinPlayer2 == "green2"){
    fichaSkinJugador2 = fichaVerde;
  }else if(skinPlayer2 == "violet2"){
    fichaSkinJugador2 = fichaVioleta;
  }else if(skinPlayer2 == "cookie2"){
    fichaSkinJugador2 = fichaCookie;
  }else if(skinPlayer2 == "football2"){
    fichaSkinJugador2 = fichaFutbol;
  }else if(skinPlayer2 == "halloween2"){
    fichaSkinJugador2 = fichaHalloween;
  }else{
    fichaSkinJugador2 = fichaSanta;
  }
 

  let timer = document.querySelector('#timer');

  //Inicio de juego
  sec = startTimer;
  cntDown();
  setUp();
  draw();
  eventosJugador();



  //FUNCTIONS

  //Configuarcion general de datos
  function setUp() {
      canvasSize = 700;
      if(numberToWin == 4){
        inRow = 4;
        n = inRow - 1;
        boardW = 7;
        boardH = 6;
      }
      if(numberToWin == 5){
        inRow = 5;
        n = inRow - 1;
        boardW = 8;
        boardH = 7;
      }
      if(numberToWin == 6){
        inRow = 6;
        n = inRow - 1;
        boardW = 9;
        boardH = 8;
      }
      color = {
          "player": {
              0: "white"
          }
      };
      jugando = false
      playerTurn = 1;
      countTurn = 0;
      endGame = false;
      setUpTablero();
      setUpCanvas();
      topText();
      nombreTurno.innerHTML = 'Turno de ' + player1Name;

  }

  //Configura el tablero y la matriz
  function setUpTablero() {
      let image = new Image();
      image.src = tablero;
      image.onload = function () {
          img = this;
          ctx.drawImage(this, 100, 0 + squareSize, boardW * squareSize, boardH * squareSize);
          draw();
      }

      boardArray = [];
      for (y = 0; y < boardH; y++) {
          let row = [];
          for (x = 0; x < boardW; x++) {
              row.push(0);
          }
          boardArray.push(row);
      }

  }

  //Configura el canvas
  function setUpCanvas() {
      if (boardH + 1 > boardW) {
          canvas.height = canvasSize;
          squareSize = canvasSize / (boardH + 1);
          canvas.width = boardW * squareSize;
      } else {
          canvas.width = canvasSize + 200;

          squareSize = canvasSize / boardW;
          canvas.height = (boardH + 1) * squareSize;
      }

  }

  //Dibuja las fichas en la matriz el valor 0 es el fondo blanco
  function draw() {
      for (y = 0; y < boardH; y++) {
          for (x = 0; x < boardW; x++) {
              dibujarFicha(x, y + 1, boardArray[y][x]);
          }
      }
      let imageFicha = new Image();
      imageFicha.src = fichaSkinJugador1;
      imageFicha.height = 75;
      imageFicha.width = 75;
      imageFicha.onload = function () {

          ctx.drawImage(this, 0, 625, this.width, this.height);

          imageFicha.src = fichaSkinJugador2;
          imageFicha.onload = function () {

              ctx.drawImage(this, 825, 625, this.width, this.height);
              imgDrag = ctx.getImageData(0, 0, 900, 700);
          }

      }
  }

  //Dibuja la ficha
  function dibujarFicha(x, y, tileColor) {
      let img = new Image();
      img.height = 75;
      img.width = 75;
      let centerX = (x * squareSize) + (squareSize / 2);
      let centerY = (y * squareSize) + (squareSize / 2);

      if ((jugando) && tileColor != 0) {
          if (tileColor == 1) {
              img.src = fichaSkinJugador1;
          } else if (tileColor == 2) {
              img.src = fichaSkinJugador2;
          }
          img.onload = function () {
              ctx.drawImage(this, centerX + 62, centerY - 37, this.width, this.height);
          }
      }
      if (tileColor == 0) {

          let tileSize = (squareSize * 0.8) / 2;
          ctx.fillStyle = color.player[tileColor];
          ctx.beginPath();
          ctx.arc(centerX + 100, centerY, tileSize, 0, 2 * Math.PI);
          ctx.fill();
      }



  }

  //Controla los movimientos del usuario
  function eventosJugador() {
      canvas.addEventListener("mousemove", (e) => {
          if (jugando) {
              let imgFicha = new Image();
              imgFicha.height = 75;
              imgFicha.width = 75;
              if (playerTurn == 1) {
                  imgFicha.src = fichaSkinJugador1;
              } else if (playerTurn == 2) {
                  imgFicha.src = fichaSkinJugador2;
              }
              let x = e.offsetX - 36;
              let y = e.offsetY - 36;

              imgFicha.onload = function () {
                  ctx.putImageData(imgDrag, 0, 0);
                  ctx.drawImage(this, x, y, this.width, this.height);
              }
          }
                          
          
      })

      canvas.addEventListener("mousedown", (e) => {
          let x = e.offsetX;
          let y = e.offsetY;
          if ((playerTurn == 1) && (x >= 0) && (x <= 75) && (y >= 625) && (y <= 700)) {
              jugando = true;

          } else if ((playerTurn == 2) && (x >= 825) && (x <= 900) && (y >= 625) && (y <= 700)) {
              jugando = true;

          }
      })

      canvas.addEventListener("mouseup", (e) => {
          ctx.putImageData(imgDrag, 0, 0);
          if ((jugando) && (e.offsetX > 100) && (e.offsetX < 798) && (e.offsetY > 100) && (e.offsetY < 198)) {
              let clickX = Math.floor((e.clientX - (canvas.offsetLeft + 100)) / squareSize)

              if (!endGame) {
                  for (y = boardH - 1; y >= 0; y--) {
                      if (boardArray[y][clickX] == 0) {
                          playMove(clickX, y);
                          break;
                      }
                  }
              }

          }
          jugando = false;

      })
  }

  //Controla los turnos y si el juego termina en victoria o empate
  function playMove(x, y) {
      countTurn++
      boardArray[y][x] = playerTurn;
      if (checkWin()) {
          topText("win")
      } else if (checkTie()) {
          topText("tie")
      } else {
          cambiarJugador();
          clearTopRow();
      }
      draw();
  }
  //El squareSize es el rectangulo que esta entre el titulo y el tablero, maneja el ancho del tablero y el alto que es la division entre el tamanio del canvas(900) y la cantidad de columnas (7)
  function clearTopRow() {
      ctx.clearRect(0, 0, canvas.width, squareSize);
  }

  //Checkea victoria
  function checkWin() {
      if (winDirections()) {
          endGame = true
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'none';
          reiniciar();
          cntDown();
          return true;  
      }
  }
  //Checkea empate
  function checkTie() {
      if (countTurn == boardW * boardH) {
          endGame = true;
          return true;
      }
  }

  //Cambia el jugador
  function cambiarJugador() {
      if (playerTurn == 1) {
          rightArrow.style.display = 'inline';
          leftArrow.style.display = 'none';
          nombreTurno.innerHTML = 'Turno de ' + player2Name;
          playerTurn = 2;
      } else {
        rightArrow.style.display = 'none';
        leftArrow.style.display = 'inline';
        nombreTurno.innerHTML = 'Turno de ' + player1Name;
          playerTurn = 1;
      }
  }

  //Titulo del juego
  let titulo = document.querySelector('#titulo');
  function topText(text) {
    let winner;
    if(playerTurn==1){
        winner = player1Name;
    }else{
        winner = player2Name;
    }
      clearTopRow();
      switch (text) {
          case "win": titulo.innerHTML = 'El jugador ' + winner + ' gana!'; break;
          case "tie": titulo.innerHTML = 'Empate!'; break;
      };
  }

  //Checkeos de que forma gano
  function winDirections() {
      for (y = 0; y < boardH; y++) { //horizontal
          for (x = 0; x < boardW - n; x++) {
              if (boardArray[y][x] == playerTurn && boardArray[y][x + 1] == playerTurn && boardArray[y][x + 2] == playerTurn && boardArray[y][x + 3] == playerTurn) return true;
          }
      }
      for (y = 0; y < boardH - n; y++) { //vertical
          for (x = 0; x < boardW; x++) {
              if (boardArray[y][x] == playerTurn && boardArray[y + 1][x] == playerTurn && boardArray[y + 2][x] == playerTurn && boardArray[y + 3][x] == playerTurn) return true;
          }
      }
      for (y = 0; y < boardH - n; y++) { //diagonal1
          for (x = 0; x < boardW - n; x++) {
              if (boardArray[y][x] == playerTurn && boardArray[y + 1][x + 1] == playerTurn && boardArray[y + 2][x + 2] == playerTurn && boardArray[y + 3][x + 3] == playerTurn) return true;

          }
      }
      for (y = n; y < boardH; y++) { //diagonal2
          for (x = 0; x < boardW - n; x++) {
              if (boardArray[y][x] == playerTurn && boardArray[y - 1][x + 1] == playerTurn && boardArray[y - 2][x + 2] == playerTurn && boardArray[y - 3][x + 3] == playerTurn) return true;
          }
      }
      return false
  }

  function cntDown() {
	const el = document.getElementById("timer");
	const timer = setInterval(() => {
		el.innerHTML = sec--;
		if (sec < 0) clearInterval(timer);
        if (sec < 0) {
            alert('Se acabó el tiempo. Reiniciando juego');
            cntDown();
            reiniciar();
        }
	}, 1000);
}

  let btnReset = document.querySelector('#btn-reset');
  function reiniciar() {
    rightArrow.style.display = 'none';
    leftArrow.style.display = 'inline';
      setUp();
      draw();
      sec = startTimer;
      titulo.innerHTML = 'Comienza el juego';
  }
  btnReset.addEventListener('click', reiniciar);

}