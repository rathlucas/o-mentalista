const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

let numeroGerado = Math.round(Math.random() * 10);
let tentativa = 3;
let gameState = true;

function Chutar() {
  let chuteField = document.getElementById("valor");
  let chuteNumber = parseInt(chuteField.value);

  if (chuteNumber === numeroGerado) {
    resultado.textContent = `Parabéns, você acertou! O número que a máquina pensou foi ${numeroGerado}`;

    gameState = false;

    btn2.style.opacity = "100";
    btn2.style.cursor = "pointer";

    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.disabled = true;

    return chuteField;
  } else if (chuteNumber < numeroGerado) {
    tentativa -= 1;
    resultado.textContent = `O número que eu pensei é maior! Tentativas restantes: ${tentativa}`;
  } else if (chuteNumber > numeroGerado) {
    tentativa -= 1;
    resultado.textContent = `O número que eu pensei é menor! Tentativas restantes: ${tentativa}`;
  }

  if (tentativa === 0) {
    gameState = false;

    btn2.style.opacity = "100";
    btn2.style.cursor = "pointer";

    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.disabled = true;

    resultado.textContent = `Que pena, você errou! O número que eu pensei foi ${numeroGerado}`;
  }

  return chuteField;
}

function JogarNovamente(callback) {
  let chuteField = callback();

  if (gameState === false) {
    resultado.textContent = "";
    chuteField.value = "";

    btn2.style.opacity = "0.6";
    btn2.style.cursor = "not-allowed";

    btn.style.opacity = "100";
    btn.style.cursor = "pointer";
    btn.disabled = false;

    tentativa = 3;

    numeroGerado = Math.round(Math.random() * 10);
  }
}