// LINKS DE ZOOM
const linkLu1 = "http://google.com",
  LinkLu2 = "http://facebook.com",
  LinkLu3 = "http://google.com",
  LinkLu4 = "http://google.com";

// TIEMPOS DE ESPERA

const tarjeta1Time = "Oct 22 2021 15:38:10 GMT-05:00",
  tarjeta2Time = "Oct 22 2021 15:38:10 GMT-05:00",
  tarjeta3Time = "Oct 22 2021 15:38:50 GMT-05:00",
  tarjeta4Time = "Oct 22 2021 15:39:10 GMT-05:00";


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

// document.getElementById("TSem1").style.display = "none";
// document.getElementById("TSem3").style.display = "none";
// document.getElementById("TSem5").style.display = "none";
// document.getElementById("TSem7").style.display = "none";

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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
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
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
}

// TIMER Y COUNTDOWN

// Reloj y conversiones para el formato actual
const getRemainingTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime,
  };
};

// COUNTDOWNS DE CADA TALLER

const btnStateLu1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      // clearInterval(timerUpdate);
      // el.innerHTML = finalMessage;
      //   el.innerHTML = `<a href="http://itsm.edu.mx" target="_blank"><div>
      //   <p>Ingresar</p></div>
      // </a>`;
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkLu1}" target="_blank">
      <div><img src="img/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -5.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu1").style.display = "none";
        document.getElementById("gruposLiveLu1").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu1").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu1").style.cursor = "no-drop";
        document.getElementById("btnAccionLu1").innerHTML = ` <div>
        <img class="btn-action-img" src="img/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu1"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu1").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateLu1(tarjeta1Time, "btnStateLu1", "Ingresar");

const btnStateLu2 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      // clearInterval(timerUpdate);
      // el.innerHTML = finalMessage;
      //   el.innerHTML = `<a href="http://itsm.edu.mx" target="_blank">
      //   <p>Ingresar</p>
      // </a>`;
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu2").style.display = "flex";
      document.getElementById("gruposLiveLu2").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu2"
      ).innerHTML = `<a href="${LinkLu2}" target="_blank">
    <div><img src="img/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateLu2"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu2").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu2").style.display = "none";
        document.getElementById("gruposLiveLu2").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu2").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu2").style.cursor = "no-drop";
        document.getElementById("btnAccionLu2").innerHTML = ` <div>
        <img class="btn-action-img" src="img/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu2"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu2").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};

// btnStateLu2("Nov 15 2021 15:50:20 GMT-05:00", "btnStateLu2", "Ingresar");
btnStateLu2(tarjeta2Time, "btnStateLu2", "Ingresar");

const btnStateLu3 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;

    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      // clearInterval(timerUpdate);
      // el.innerHTML = finalMessage;
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu3").style.display = "flex";
      document.getElementById("gruposLiveLu3").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu3"
      ).innerHTML = `<a href="${linkLu1}" target="_blank">
      <div><img src="img/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu3"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu3").style.backgroundColor = "#3EE45F";
      if (t.remainTime <= -5.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu3").style.display = "none";
        document.getElementById("gruposLiveLu3").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu3").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu3").style.cursor = "no-drop";
        document.getElementById("btnAccionLu3").innerHTML = ` <div>
        <img class="btn-action-img" src="img/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu3"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu3").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};

// btnStateLu3("Nov 15 2021 16:50:20 GMT-05:00", "btnStateLu3", "Ingresar");
btnStateLu3(tarjeta3Time, "btnStateLu3", "Ingresar");

const btnStateLu4 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      // clearInterval(timerUpdate);
      // el.innerHTML = finalMessage;
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu4").style.display = "flex";
      document.getElementById("gruposLiveLu4").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu4"
      ).innerHTML = `<a href="${linkLu1}" target="_blank">
      <div><img src="img/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu4"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu4").style.backgroundColor = "#3EE45F";
      // FINALIZADO
      if (t.remainTime <= -5.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu4").style.display = "none";
        document.getElementById("gruposLiveLu4").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu4").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu4").style.cursor = "no-drop";
        document.getElementById("btnAccionLu4").innerHTML = ` <div>
        <img class="btn-action-img" src="img/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu4"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu4").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};

// btnStateLu4("Nov 15 2021 17:50:20 GMT-05:00", "btnStateLu4", "Ingresar");
btnStateLu4(tarjeta4Time, "btnStateLu4", "Ingresar");

// ------------------------------SECCION MODAL------------------------------
// modal
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
const closeEls = document.querySelectorAll("[data-close]");
// const isVisible = "is-visible";

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
// const isVisible = "is-visible";

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
// const isVisible = "is-visible";

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
