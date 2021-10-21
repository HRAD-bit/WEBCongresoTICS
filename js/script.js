var btn1 = document.getElementById("Sbtn1"),
  btn2 = document.getElementById("Sbtn2"),
  btn3 = document.getElementById("Sbtn3"),
  btn4 = document.getElementById("Sbtn4"),
  btn5 = document.getElementById("Sbtn5"),
  cont1 = 0,
  cont2 = 0,
  cont3 = 0,
  cont4 = 0,
  cont5 = 0;

document.getElementById("TSem1").style.display = "none";
document.getElementById("TSem3").style.display = "none";
document.getElementById("TSem5").style.display = "none";
document.getElementById("TSem7").style.display = "none";

btn1.addEventListener("click", mostrarLu, true);
btn2.addEventListener("click", mostrarMa, true);
btn3.addEventListener("click", mostrarMi, true);
btn4.addEventListener("click", mostrarJu, true);
btn5.addEventListener("click", mostrarVi, true);

function mostrarLu() {
  if (cont1 == 0) {
    btnLunesON();
    document.getElementById("TSem1").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont1 = 1;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem1").style.display = "none";
    cont1 = 0;
  }
}
function mostrarMa() {
  if (cont2 == 0) {
    btnMartesON();
    document.getElementById("TSem3").style.display = "block";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont2 = 1;
    cont1 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem3").style.display = "none";
    cont2 = 0;
  }
}
function mostrarMi() {
  if (cont3 == 0) {
    btnMiercolesON();
    document.getElementById("TSem5").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont3 = 1;
    cont1 = 0;
    cont2 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem5").style.display = "none";
    cont3 = 0;
  }
}
function mostrarJu() {
  if (cont4 == 0) {
    btnJuevesON();
    document.getElementById("TSem7").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    cont4 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont5 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem7").style.display = "none";
    cont4 = 0;
  }
}

function mostrarVi() {
  if (cont5 == 0) {
    btnViernesON();
    cont5 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont4 = 0;
  } else {
    btnOFF();
    cont5 = 0;
  }
}

function btnOFF() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnLunesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn1").style.color = "#222";
  document.getElementById("Sbtn1").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnMartesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn2").style.color = "#222222";
  document.getElementById("Sbtn2").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnMiercolesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn3").style.color = "#222222";
  document.getElementById("Sbtn3").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnJuevesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn4").style.color = "#222222";
  document.getElementById("Sbtn4").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}
function btnViernesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("Sbtn5").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn5").style.color = "#222222";
  document.getElementById("Sbtn5").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor = "#707070";
}
