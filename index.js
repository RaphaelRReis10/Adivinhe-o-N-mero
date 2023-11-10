let computerNumber;
let userNumbers = [];
let tentativas = 0;
let maxTentativas = 10;
let tentativasRestantes = 10;

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
  document.getElementById("tentativasRestantes").innerHTML =
    tentativasRestantes;
}

function newGame() {
  window.location.reload();
}

function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("sugestao").innerHTML = userNumbers;

  if (userNumber > 100) {
    alert("Por favor, insira um número de 1 a 100.");
    window.location.reload();
  }
  if (tentativas < maxTentativas) {
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "O número que você tentou foi maior";
      document.getElementById("inputBox").value = "";
      tentativas++;
      document.getElementById("tentativas").innerHTML = tentativas;
      tentativasRestantes--;
      document.getElementById("tentativasRestantes").innerHTML =
        tentativasRestantes;
      console.log(tentativasRestantes);
      console.log(tentativas);
    }
    if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "O número que você tentou foi  menor";
      document.getElementById("inputBox").value = "";
      tentativas++;
      document.getElementById("tentativas").innerHTML = tentativas;
      tentativasRestantes--;
      document.getElementById("tentativasRestantes").innerHTML =
        tentativasRestantes;
      console.log(tentativasRestantes);
      console.log(tentativas);
    }
    if (userNumber == computerNumber) {
      document.getElementById("textOutput").innerHTML = "VOCÊ ACERTOU!";
      document.getElementById("textOutput").className = "output correct";
      tentativas++;
      document.getElementById("tentativas").innerHTML = tentativas;
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      "GAME OVER <br> O número era: " + computerNumber;
    document.getElementById("textOutput").className = "output incorrect";
    document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    document.getElementById("inputBox").value = "";
  }
}
