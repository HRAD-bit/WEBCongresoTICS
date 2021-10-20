var btn1 = document.getElementById("Sbtn1"),
  btn2 = document.getElementById("Sbtn2"),
  btn3 = document.getElementById("Sbtn3"),
  btn4 = document.getElementById("Sbtn4"),
  cont1 = 0,
  cont2 = 0,
  cont3 = 0,
  cont4 = 0;

document.getElementById("TSem1").style.display = "none";
document.getElementById("TSem3").style.display = "none";
document.getElementById("TSem5").style.display = "none";
document.getElementById("TSem7").style.display = "none";

btn1.addEventListener("click", mostrarS1, true);
btn2.addEventListener("click", mostrarS3, true);
btn3.addEventListener("click", mostrarS5, true);
btn4.addEventListener("click", mostrarS7, true);

function mostrarS1() {
  if (cont1 == 0) {
    btn1ON();
    document.getElementById("TSem1").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont1 = 1;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem1").style.display = "none";
    cont1 = 0;
  }
}
function mostrarS3() {
  if (cont2 == 0) {
    btn3ON();
    document.getElementById("TSem3").style.display = "block";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont2 = 1;
    cont1 = 0;
    cont3 = 0;
    cont4 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem3").style.display = "none";
    cont2 = 0;
  }
}
function mostrarS5() {
  if (cont3 == 0) {
    btn5ON();
    document.getElementById("TSem5").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem7").style.display = "none";
    cont3 = 1;
    cont1 = 0;
    cont2 = 0;
    cont4 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem5").style.display = "none";
    cont3 = 0;
  }
}
function mostrarS7() {
  if (cont4 == 0) {
    btn7ON();
    document.getElementById("TSem7").style.display = "block";
    document.getElementById("TSem3").style.display = "none";
    document.getElementById("TSem1").style.display = "none";
    document.getElementById("TSem5").style.display = "none";
    cont4 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
  } else {
    btnOFF();
    document.getElementById("TSem7").style.display = "none";
    cont4 = 0;
  }
}

function btnOFF() {
  // Btn1
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#858585";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  document.getElementById("OculTSection").style.borderBottomColor = "#3D3A6C";
  // Btn3
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#858585";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Btn5
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#858585";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Btn7
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#858585";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
}

function btn1ON() {
  // Btn1
  document.getElementById("Sbtn1").style.backgroundColor = "#F1F6FA";
  document.getElementById("Sbtn1").style.color = "#222222";
  document.getElementById("Sbtn1").style.borderColor = "#F1F6FA";
  document.getElementById("OculTSection").style.borderBottomColor = "#F1F6FA";
  // Btn3
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#858585";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Btn5
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#858585";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Btn7
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#858585";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
}

function btn3ON() {
  // Btn3
  document.getElementById("Sbtn2").style.backgroundColor = "#F1F6FA";
  document.getElementById("Sbtn2").style.color = "#222222";
  document.getElementById("Sbtn2").style.borderColor = "#F1F6FA";
  document.getElementById("OculTSection").style.borderBottomColor = "#F1F6FA";
  // Btn1
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#858585";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Btn5
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#858585";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Btn7
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#858585";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
}

function btn5ON() {
  // Btn5
  document.getElementById("Sbtn3").style.backgroundColor = "#F1F6FA";
  document.getElementById("Sbtn3").style.color = "#222222";
  document.getElementById("Sbtn3").style.borderColor = "#F1F6FA";
  document.getElementById("OculTSection").style.borderBottomColor = "#F1F6FA";
  // Btn3
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#858585";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Btn1
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#858585";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Btn7
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#858585";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
}

function btn7ON() {
  // Btn7
  document.getElementById("Sbtn4").style.backgroundColor = "#F1F6FA";
  document.getElementById("Sbtn4").style.color = "#222222";
  document.getElementById("Sbtn4").style.borderColor = "#F1F6FA";
  document.getElementById("OculTSection").style.borderBottomColor = "#F1F6FA";
  // Btn3
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#858585";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Btn5
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#858585";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Btn1
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#858585";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
}
