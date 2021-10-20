var seleccion = 0;

btnSemestre1.addEventListener("click", () => {
  seleccion = 1;
  seleccionar();
  console.log(seleccion);
});
btnSemestre3.addEventListener("click", () => {
  seleccion = 3;
  seleccionar();
  console.log(seleccion);
});
btnSemestre5.addEventListener("click", () => {
  seleccion = 5;
  seleccionar();
});
btnSemestre7.addEventListener("click", () => {
  seleccion = 7 ;
  seleccionar();
})

function seleccionar() {
  switch (seleccion) {
    case 0:
      predeterminado();
      break;

    case 1:
      btn1ON();
      break;

    case 3:
      btn3ON();

      break;

    case 5:
      btn5ON();
      break;

    case 7:
      btn7ON();
      break;
    default:
      predeterminado();
      break;
  }
}

function predeterminado() {
  // Btn1
  document.getElementById("btnSemestre1").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre1").style.color = "#858585";
  document.getElementById("btnSemestre1").style.borderColor = "#fff";
  document.getElementById("talleristas-primer").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
  //   btn3
  document.getElementById("btnSemestre3").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre3").style.color = "#858585";
  document.getElementById("btnSemestre3").style.borderColor = "#fff";
  document.getElementById("talleristas-tercer").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //  Btn5
  document.getElementById("btnSemestre5").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre5").style.color = "#858585";
  document.getElementById("btnSemestre5").style.borderColor = "#fff";
  document.getElementById("talleristas-quinto").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //  Btn7
  //   document.getElementById("btnSemestre7").style.backgroundColor = "#fff";
  //   document.getElementById("btnSemestre7").style.color = "#858585";
  //   document.getElementById("btnSemestre7").style.borderColor = "#fff";
  //   document.getElementById("talleristas-septimo").style.display = "none";
  //   document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
}

function btn1ON() {
  // Btn1 ON
  document.getElementById("btnSemestre1").style.backgroundColor = "#F1F6FA";
  document.getElementById("btnSemestre1").style.color = "#222222";
  document.getElementById("btnSemestre1").style.borderColor = "#F1F6FA";
  document.getElementById("talleristas-primer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";
  document.getElementById("talleristas-primer").style.transition = "2s";
  //   btn3
  document.getElementById("btnSemestre3").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre3").style.color = "#858585";
  document.getElementById("btnSemestre3").style.borderColor = "#fff";
  // document.getElementById("talleristas-tercer").style.display = "none";
  // document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
  document.getElementById("talleristas-tercer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";

  //    Btn5
  document.getElementById("btnSemestre5").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre5").style.color = "#858585";
  document.getElementById("btnSemestre5").style.borderColor = "#fff";
  document.getElementById("talleristas-quinto").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //   //  Btn7
    document.getElementById("btnSemestre7").style.backgroundColor = "#fff";
    document.getElementById("btnSemestre7").style.color = "#858585";
    document.getElementById("btnSemestre7").style.borderColor = "#fff";
    document.getElementById("talleristas-septimo").style.display = "none";
    document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
}

function btn3ON() {
  // Btn3 ON
  document.getElementById("btnSemestre3").style.backgroundColor = "#F1F6FA";
  document.getElementById("btnSemestre3").style.color = "#222222";
  document.getElementById("btnSemestre3").style.borderColor = "#F1F6FA";
  document.getElementById("talleristas-tercer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";
  //   btn1
  document.getElementById("btnSemestre1").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre1").style.color = "#858585";
  document.getElementById("btnSemestre1").style.borderColor = "#fff";
  document.getElementById("talleristas-primer").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //  Btn5
  document.getElementById("btnSemestre5").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre5").style.color = "#858585";
  document.getElementById("btnSemestre5").style.borderColor = "#fff";
  document.getElementById("talleristas-quinto").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //   //  Btn7
  //   document.getElementById("btnSemestre7").style.backgroundColor = "#fff";
  //   document.getElementById("btnSemestre7").style.color = "#858585";
  //   document.getElementById("btnSemestre7").style.borderColor = "#fff";
  //   document.getElementById("talleristas-septimo").style.display = "none";
  //   document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
}

function btn5ON() {
  // Btn5 ON
  document.getElementById("btnSemestre5").style.backgroundColor = "#F1F6FA";
  document.getElementById("btnSemestre5").style.color = "#222222";
  document.getElementById("btnSemestre5").style.borderColor = "#F1F6FA";
  document.getElementById("talleristas-primer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";
  //   btn3
  document.getElementById("btnSemestre3").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre3").style.color = "#858585";
  document.getElementById("btnSemestre3").style.borderColor = "#fff";
  document.getElementById("talleristas-tercer").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //  Btn1
  document.getElementById("btnSemestre1").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre1").style.color = "#858585";
  document.getElementById("btnSemestre1").style.borderColor = "#fff";
  document.getElementById("talleristas-quinto").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //   //  Btn7
    document.getElementById("btnSemestre7").style.backgroundColor = "#fff";
    document.getElementById("btnSemestre7").style.color = "#858585";
    document.getElementById("btnSemestre7").style.borderColor = "#fff";
    document.getElementById("talleristas-septimo").style.display = "none";
    document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
}


function btn7ON() {
  // Btn1 ON
  document.getElementById("btnSemestre7").style.backgroundColor = "#F1F6FA";
  document.getElementById("btnSemestre7").style.color = "#222222";
  document.getElementById("btnSemestre7").style.borderColor = "#F1F6FA";
  document.getElementById("talleristas-primer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";
  document.getElementById("talleristas-primer").style.transition = "2s";
  //   btn3
  document.getElementById("btnSemestre3").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre3").style.color = "#858585";
  document.getElementById("btnSemestre3").style.borderColor = "#fff";
  // document.getElementById("talleristas-tercer").style.display = "none";
  // document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
  document.getElementById("talleristas-tercer").style.display = "flex";
  document.getElementById("btn-se").style.borderBottomColor = "#F1F6FA";

  //    Btn5
  document.getElementById("btnSemestre5").style.backgroundColor = "#fff";
  document.getElementById("btnSemestre5").style.color = "#858585";
  document.getElementById("btnSemestre5").style.borderColor = "#fff";
  document.getElementById("talleristas-quinto").style.display = "none";
  document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";

  //   //  Btn7
    document.getElementById("btnSemestre1").style.backgroundColor = "#fff";
    document.getElementById("btnSemestre1").style.color = "#858585";
    document.getElementById("btnSemestre1").style.borderColor = "#fff";
    document.getElementById("talleristas-septimo").style.display = "none";
    document.getElementById("btn-se").style.borderBottomColor = "#3D3A6C";
}
