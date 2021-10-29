const iconMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#navbar"),
  botonesMenu = document.querySelector(".nav-link"),
  botonesMenu2 = document.querySelector(".emp"),
  botonesMenu3 = document.querySelector(".btn-descarga-responsivo");

iconMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  botonesMenu.addEventListener("click", (e) => {
    menu.classList.add("active");
  });
  botonesMenu2.addEventListener("click", (e) => {
    menu.classList.add("active");
  });
  botonesMenu3.addEventListener("click", (e) => {
    menu.classList.add("active");
  });
});
// -----efecto de tamaño scroll---
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (header.classList.toggle("abajo", window.scrollY > 0)) {
    document.getElementById("btnDesc-menu").style.backgroundColor = "#20faddb4";
  } else {
    document.getElementById("btnDesc-menu").style.backgroundColor = "#EB8005";
  }
});

const header = document.querySelector(".con");
const sectionOne = document.querySelector("#portada");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// -----------------------INFORMACIÓN DE TALLERISTAS--------------------

// LINKS DE ZOOM
const linkLu1 = "http://google.com",
  LinkLu2 = "http://facebook.com",
  LinkLu3 = "http://google.com",
  LinkLu4 = "http://google.com";

// ------------------------------TIEMPOS DE ESPERA-----------------

// ---------------VARIABLES DE TIEMPO-----------
// Lunes
const tarjeta1TimeLu = "Nov 15 2021 10:00:00 GMT-05:00",
  tarjeta2TimeLu = "Nov 15 2021 16:00:00 GMT-05:00",
  tarjeta3TimeLu = "Nov 15 2021 17:00:00 GMT-05:00",
  tarjeta4TimeLu = "Nov 15 2021 18:00:00 GMT-05:00",
  // MARTES
  tarjeta1TimeMa = "Nov 16 2021 10:00:00 GMT-05:00",
  tarjeta2TimeMa = "Nov 16 2021 16:00:00 GMT-05:00",
  tarjeta3TimeMa = "Nov 16 2021 17:00:00 GMT-05:00",
  tarjeta4TimeMa = "Nov 16 2021 18:00:00 GMT-05:00",
  // MIERCOLES
  tarjeta1TimeMi = "Nov 17 2021 10:00:00 GMT-05:00",
  tarjeta2TimeMi = "Nov 17 2021 11:00:00 GMT-05:00",
  tarjeta3TimeMi = "Nov 17 2021 15:00:00 GMT-05:00",
  tarjeta4TimeMi = "Nov 17 2021 16:00:00 GMT-05:00",
  tarjeta5TimeMi = "Nov 17 2021 19:00:00 GMT-05:00",
  // JUEVES
  tarjeta1TimeJu = "Nov 18 2021 15:00:00 GMT-05:00",
  tarjeta2TimeJu = "Nov 18 2021 16:00:00 GMT-05:00",
  // VIERNES
  tarjeta1TimeVi = "Nov 19 2021 13:00:00 GMT-05:00",
  tarjeta2TimeVi = "Nov 19 2021 15:00:00 GMT-05:00",
  tarjeta3TimeVi = "Nov 19 2021 16:00:00 GMT-05:00";

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
// LUNES
const btnStateLu1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkLu1}" target="_blank">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -50.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
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
btnStateLu1(tarjeta1TimeLu, "btnStateLu1", "Ingresar");

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
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
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
btnStateLu2(tarjeta2TimeLu, "btnStateLu2", "Ingresar");

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
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
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
btnStateLu3(tarjeta3TimeLu, "btnStateLu3", "Ingresar");

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
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
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
btnStateLu4(tarjeta4TimeLu, "btnStateLu4", "Ingresar");

// MARTES
const btnStateMa1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkMa1}" target="_blank">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -50.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa1"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu1").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMa1(tarjeta1TimeMa, "btnStateMa1", "Ingresar");

const btnStateMa2 = (deadline, elem, finalMessage) => {
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
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa2"><p>Acceder</p></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa2"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu2").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMa2(tarjeta2TimeMa, "btnStateMa2", "Ingresar");

const btnStateMa3 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu3").style.display = "flex";
      document.getElementById("gruposLiveLu3").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu3"
      ).innerHTML = `<a href="${LinkMa3}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa3"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu3").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa3"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu3").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMa3(tarjeta3TimeMa, "btnStateMa3", "Ingresar");

const btnStateMa4 = (deadline, elem, finalMessage) => {
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
      document.getElementById("liveIDLu4").style.display = "flex";
      document.getElementById("gruposLiveLu4").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu4"
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa4"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu4").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu4").style.display = "none";
        document.getElementById("gruposLiveLu4").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu4").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu4").style.cursor = "no-drop";
        document.getElementById("btnAccionLu2").innerHTML = ` <div>
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa4"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu4").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMa4(tarjeta4TimeMa, "btnStateMa4", "Ingresar");

// MIERCOLES
const btnStateMi1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkMa1}" target="_blank">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -50.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi1"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu1").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMi1(tarjeta1TimeMi, "btnStateMi1", "Ingresar");

const btnStateMi2 = (deadline, elem, finalMessage) => {
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
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi2"><p>Acceder</p></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi2"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu2").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMi2(tarjeta2TimeMi, "btnStateMi2", "Ingresar");

const btnStateMi3 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu3").style.display = "flex";
      document.getElementById("gruposLiveLu3").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu3"
      ).innerHTML = `<a href="${LinkMa3}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi3"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu3").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi3"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu3").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMi3(tarjeta3TimeMi, "btnStateMi3", "Ingresar");

const btnStateMi4 = (deadline, elem, finalMessage) => {
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
      document.getElementById("liveIDLu4").style.display = "flex";
      document.getElementById("gruposLiveLu4").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu4"
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi4"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu4").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu4").style.display = "none";
        document.getElementById("gruposLiveLu4").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu4").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu4").style.cursor = "no-drop";
        document.getElementById("btnAccionLu2").innerHTML = ` <div>
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi4"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu4").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMi4(tarjeta4TimeMi, "btnStateMi4", "Ingresar");

const btnStateMi5 = (deadline, elem, finalMessage) => {
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
      document.getElementById("liveIDLu5").style.display = "flex";
      document.getElementById("gruposLiveLu5").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu5"
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi5"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu5").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        el.innerHTML = "FINALIZADO";
        document.getElementById("liveIDLu5").style.display = "none";
        document.getElementById("gruposLiveLu5").style.justifyContent =
          "space-around";
        document.getElementById("btnAccionLu5").style.backgroundColor =
          "#858585";
        document.getElementById("btnAccionLu5").style.cursor = "no-drop";
        document.getElementById("btnAccionLu2").innerHTML = ` <div>
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi5"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu5").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateMi5(tarjeta5TimeMi, "btnStateMi5", "Ingresar");

// JUEVES
const btnStateJu1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkMa1}" target="_blank">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateJu1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -50.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateJu1"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu1").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateJu1(tarjeta1TimeJu, "btnStateJu1", "Ingresar");

const btnStateJu2 = (deadline, elem, finalMessage) => {
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
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateJu2"><p>Acceder</p></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateJu2"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu2").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateJu2(tarjeta2TimeJu, "btnStateJu2", "Ingresar");

// VIERNES
const btnStateVi1 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu1").style.display = "flex";
      document.getElementById("gruposLiveLu1").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkMa1}" target="_blank">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi1"><p>Acceder</p></div>
      </div>
    </a>`;
      document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -50.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi1"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu1").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateVi1(tarjeta1TimeVi, "btnStateVi1", "Ingresar");

const btnStateVi2 = (deadline, elem, finalMessage) => {
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
      ).innerHTML = `<a href="${LinkMa2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateVi2"><p>Acceder</p></div>
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi2"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu2").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateVi2(tarjeta2TimeVi, "btnStateVi2", "Ingresar");

const btnStateVi3 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      el.innerHTML = `<p> Acceder <p>`;
      document.getElementById("liveIDLu3").style.display = "flex";
      document.getElementById("gruposLiveLu3").style.justifyContent =
        "space-between";
      document.getElementById(
        "btnAccionLu3"
      ).innerHTML = `<a href="${LinkMa3}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateVi3"><p>Acceder</p></div>
    </div>
  </a>`;
      document.getElementById("btnAccionLu3").style.backgroundColor = "#3EE45F";

      // FINALIZADO
      if (t.remainTime <= -15.0) {
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
        <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
      </div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi3"><p>Finalizado</p></div>
      </div>`;
        document.getElementById("contenedorInfoLu3").className +=
          " contenedor-informacion-off";
      }
    }
  }, 1000);
};
btnStateVi3(tarjeta3TimeVi, "btnStateVi3", "Ingresar");

// DECLARACION DE VARIABLES PARA LAS TARJETAS
var tipoTaller1 = "",
  nombreTallerista1 = "",
  empresaTallerista1 = "",
  gruposAsignados1 = "",
  tituloTaller1 = "",
  horasTaller1 = "",
  imagenTaller1 = "",
  bioTallerista1 = "",
  tipoTaller2 = "",
  nombreTallerista2 = "",
  empresaTallerista2 = "",
  gruposAsignados2 = "",
  tituloTaller2 = "",
  horasTaller2 = "",
  imagenTaller2 = "",
  bioTallerista2 = "",
  tipoTaller3 = "",
  nombreTallerista3 = "",
  empresaTallerista3 = "",
  gruposAsignados3 = "",
  tituloTaller3 = "",
  horasTaller3 = "",
  imagenTaller3 = "",
  bioTallerista3 = "",
  tipoTaller4 = "",
  nombreTallerista4 = "",
  empresaTallerista4 = "",
  gruposAsignados4 = "",
  tituloTaller4 = "",
  imagenTaller4 = "",
  horasTaller4 = "",
  bioTallerista4 = "",
  tipoTaller5 = "",
  nombreTallerista5 = "",
  empresaTallerista5 = "",
  gruposAsignados5 = "",
  tituloTaller5 = "",
  imagenTaller5 = "",
  horasTaller5 = "",
  bioTallerista5 = "";

// MOSTRAR Y OCULTAR TARJETAS DIVS
// TARJETAS MOSTRADAS DETERMINADO
function MostrarTarjetasPredeterminado() {
  document.getElementById("contenedorPrimerTarjetas").style.display = "flex";
  document.getElementById("contenedorSegundoTarjetas").style.display = "flex";
  document.getElementById("contenedorTerceroTarjetas").style.display = "none";
  document.getElementById("contenedorTarjeta4").style.display = "flex";
}
function OcultarSeccion2Completa() {
  document.getElementById("contenedorPrimerTarjetas").style.display = "flex";
  document.getElementById("contenedorSegundoTarjetas").style.display = "none";
  document.getElementById("contenedorTerceroTarjetas").style.display = "none";
  document.getElementById("contenedorTarjeta4").style.display = "flex";
}
function OcultarTarjeta4() {
  document.getElementById("contenedorPrimerTarjetas").style.display = "flex";
  document.getElementById("contenedorSegundoTarjetas").style.display = "flex";
  document.getElementById("contenedorTerceroTarjetas").style.display = "none";
  document.getElementById("contenedorTarjeta4").style.display = "none";
}
function MostrarTodasTarjetas() {
  document.getElementById("contenedorPrimerTarjetas").style.display = "flex";
  document.getElementById("contenedorSegundoTarjetas").style.display = "flex";
  document.getElementById("contenedorTerceroTarjetas").style.display = "flex";
  document.getElementById("contenedorTarjeta4").style.display = "flex";
}
// --------------------------LUNES--------------------
function informacionLunes() {
  // TARJETA 1 LUNES
  (tipoTaller1 = "Taller"),
    (nombreTallerista1 = " MRT. José Juan Reyes Torres "),
    (empresaTallerista1 = "ITS Misantla"),
    (gruposAsignados1 = "107 & 307"),
    (tituloTaller1 = '"CONFIGURACIÓN Y ADMINISTRACIÓN DE HOSTING"'),
    (horasTaller1 = "10:00 - 14:00"),
    (imagenTaller1 = "img/talleristas/JoseJuan.png"),
    (bioTallerista1 =
      "Licenciado en Informática con 17 años de trayectoria en docencia, impartiendo materias y cursos; Experiencia como encargado del área de servidores, administración y seguridad de redes. Encargado de la dirección de informática del H. ayuntamiento de Misantla en la administración de 2014 - 2017. Especialista en el área de redes y telecomunicaciones, seguridad informática, sistemas operativos, servicios de red y ruteo, switcheo, Licenciado en informática con maestría en redes y telecomunicaciones en la universidad Cristobal Colón.");

  // TARJETAS 2 LUNES

  (tipoTaller2 = "Conferencia"),
    (nombreTallerista2 = " ING. José Riojas "),
    (empresaTallerista2 = "Drone Collision<br>Center"),
    (gruposAsignados2 = "Todos los Semestres"),
    (tituloTaller2 = '"LA IA EN LOS DRONES Y LOS SECTORES PRODUCTIVOS"'),
    (horasTaller2 = "16:00 - 17:00"),
    (imagenTaller2 = "img/talleristas/JoseRiojas.png"),
    (bioTallerista2 =
      "Ingeniero en sistemas, actualmente cursando un MD en Inteligencia Artificial en el Tecmilenio apasionado de la electrónica y la tecnología, fundador de 2 empresas relacionadas al mercado de los sistemas no tripulados, ha participado en diferentes foros tanto nacionales como internacionales, impartido talleres y capacitaciones a empresas civiles y de gobierno. Fundador de Drone SAR México una ONG de apoyo social en situaciones de desastre y personas extraviadas. Actualmente trabajando en varios proyectos que integran los sistemas no tripulados y la IA en diversos sectores comercial y sociales");

  // TARJETAS 3 LUNES

  (tipoTaller3 = "Mesa Redonda"),
    (nombreTallerista3 = "Academia de Ing. en TICS"),
    (empresaTallerista3 = "ITS Misantla"),
    (gruposAsignados3 = "Todos los Semestres"),
    (tituloTaller3 = '"INDUSTRIA INSITU: PEGA SYSTEMS Y HUAWEI TECHNOLOGIES"'),
    (horasTaller3 = "17:00 - 18:00"),
    (imagenTaller3 = "img/talleristas/pega-huawei.png"),
    (bioTallerista3 = "MUY PRONTO!");

  // TARJETAS 4 LUNES

  (tipoTaller4 = "Taller"),
    (nombreTallerista4 = " ING. Uriel Pérez Amador "),
    (empresaTallerista4 = "Mobiik Development"),
    (gruposAsignados4 = "507 & 707"),
    (tituloTaller4 = '"CONCEPTOS BÁSICOS DE IONIC"'),
    (horasTaller4 = "18:00 - 21:00"),
    (imagenTaller4 = "img/talleristas/UrielPerez.png"),
    (bioTallerista4 = "MUY PRONTO!");
  MostrarTarjetasPredeterminado();
}
// ------------------------MARTES-------------------------
function informacionMartes() {
  // TARJETA 1 MARTES
  (tipoTaller1 = "Taller"),
    (nombreTallerista1 = " MRT. José Juan Reyes Torres "),
    (empresaTallerista1 = "ITS Misantla"),
    (gruposAsignados1 = "107 & 307"),
    (tituloTaller1 = '"CONFIGURACIÓN Y ADMINISTRACIÓN DE HOSTING"'),
    (horasTaller1 = "10:00 - 14:00"),
    (imagenTaller1 = "img/talleristas/JoseJuan.png"),
    (bioTallerista1 =
      "Licenciado en Informática con 17 años de trayectoria en docencia, impartiendo materias y cursos; Experiencia como encargado del área de servidores, administración y seguridad de redes. Encargado de la dirección de informática del H. ayuntamiento de Misantla en la administración de 2014 - 2017. Especialista en el área de redes y telecomunicaciones, seguridad informática, sistemas operativos, servicios de red y ruteo, switcheo, Licenciado en informática con maestría en redes y telecomunicaciones en la universidad Cristobal Colón.");

  // TARJETAS 2 MARTES

  (tipoTaller2 = "Conferencia"),
    (nombreTallerista2 = " ING. Gustavo Carballo Arroyo "),
    (empresaTallerista2 = "Volkswagen México"),
    (gruposAsignados2 = "Por Confirmar"),
    (tituloTaller2 = '"5G EN EL SECTOR AUTOMOTRÍZ"'),
    (horasTaller2 = "16:00 - 17:00"),
    (imagenTaller2 = "img/talleristas/Hombre.png"),
    (bioTallerista2 = "MUY PRONTO!");

  // TARJETAS 3 MARTES

  (tipoTaller3 = "Conferencia"),
    (nombreTallerista3 = "MTI. Laura May Salazar"),
    (empresaTallerista3 = "IT de Campeche"),
    (gruposAsignados3 = "Todos los Semestres"),
    (tituloTaller3 =
      '"LA IMPORTANCIA DE SCRUM COMO METODOLOGÍA ÁGIL PARA LA GESTIÓN DE PROYECTOS DE TI"'),
    (horasTaller3 = "17:00 - 18:00"),
    (imagenTaller3 = "img/talleristas/LauraMaySalazar.png"),
    (bioTallerista3 =
      "Catedrática de Sistemas y Computación en el TecNM Campus Campeche y de Posgrado en la Maestría en Tecnologías de la Información y la Comunicación en UNID Mérida. Maestra en Gestión de Tecnologías de Información por la Universidad Anáhuac-Mayab. Scrum Máster certificada por CertiProf®. Administrador de Proyectos de TI por el Centro de Inclusión Digital. Diplomado en Sistemas de Gestión de Información ISO 27000 Seguridad de la Información por la Anáhuac-Mayab. Con 13 años de experiencia como consultora y auditora líder implementando Sistemas de Gestión basados en ISO 9000, 14000 y 50001, NMX 025-SCFI para 160 Institutos Tecnológicos del TecNM, así como liderando proyectos de consultoría en ISO 27000 para CSI y en la LFPDPPP para Toyota.");

  // TARJETAS 4 MARTES

  (tipoTaller4 = "Taller"),
    (nombreTallerista4 = " ING. Uriel Pérez Amador "),
    (empresaTallerista4 = "Mobiik Development"),
    (gruposAsignados4 = "507 & 707"),
    (tituloTaller4 = '"CONCEPTOS BÁSICOS DE IONIC"'),
    (horasTaller4 = "18:00 - 21:00"),
    (imagenTaller4 = "img/talleristas/UrielPerez.png"),
    (bioTallerista4 = "MUY PRONTO!");

  MostrarTarjetasPredeterminado();
}

// ------------------------MIERCOLES-------------------------
function informacionMiercoles() {
  // TARJETA 1 MIERCOLES
  (tipoTaller1 = "Conferencia"),
    (nombreTallerista1 = " IDS Comercial "),
    (empresaTallerista1 = "IDS Comercial"),
    (tituloTaller1 = '"AGILE O MINDSET, ¿QUÉ VA PRIMERO?"'),
    (gruposAsignados1 = "Todos los semestres"),
    (horasTaller1 = "10:00 - 11:00"),
    (imagenTaller1 = "img/talleristas/ids-taller.png"),
    (bioTallerista1 = "MUY PRONTO!");

  // TARJETA 2 MIERCOLES
  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "ING. Juan Diego Aquino<br>Barrios"),
    (empresaTallerista2 = "AmCoder"),
    (tituloTaller2 =
      '"WEB APLICATION WITH CODEMONO: INSPIRAR PARA CREAR, CREAR PARA INSPIRAR"'),
    (gruposAsignados2 = "707"),
    (horasTaller2 = "11:00 - 14:00"),
    (imagenTaller2 = "img/talleristas/amcoder.png"),
    (bioTallerista2 = "MUY PRONTO!");

  // TARJETAS 3 MIERCOLES

  (tipoTaller3 = "Taller"),
    (nombreTallerista3 = "MCCyT. Keila Elena Ocaña"),
    (empresaTallerista3 = "ITS de Martínez<br>de la Torre"),
    (gruposAsignados3 = "707"),
    (tituloTaller3 = '"ADMINISTRACIÓN DE MÁQUINAS LINUX CON WEBMIN"'),
    (horasTaller3 = "15:00 - 18:00"),
    (imagenTaller3 = "img/talleristas/KeilaElena.png"),
    (bioTallerista3 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETAS 4 MIERCOLES

  (tipoTaller4 = "Taller"),
    (nombreTallerista4 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista4 = "ITS de Misantla"),
    (gruposAsignados4 = "107, 307 & 507"),
    (tituloTaller4 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller4 = "16:00 - 18:00"),
    (imagenTaller4 = "img/talleristas/Fernando.png"),
    (bioTallerista4 =
      "MSC Fernando Alberto Hernández Guevara realizó la Maestría en Sistemas Computacionales en el Instituto Tecnológico Superior de Misantla, es egresado de la carrera de Licenciatura en Informática por el Instituto Tecnológico Superior de Misantla. Actualmente jefe del departamento de sistematización, donde realiza funciones de network engineer, DB manager, Server Administrator, Linux system administration, Domain Name Service administration y gestión de cuentas de correos en la plataforma de Gsuite education y Microsoft 365 for faculty, gestión de plataformas de educación a distancia moodle, es líder de proyectos de desarrollo de sotfware como Sistema del portal de pago en línea, sistema del congreso internacional de ingenierías, gestión de pagos en caja, sistema de inventarios institucional, actualmente se está llevando a cabo el desarrollo de sistema de control de proceso de la revista ingeniantes, la migración de las tecnologías del ISP a fibra óptica, interconexión entre edificios por medio de fibra óptica . Desde la dupla educación y sistemas computacionales ha trabajado como docente de tiempo parcial en el sistema semiescolarizado impartiendo asignaturas enfocadas a las redes de computadoras, conmutación y enrutamiento de redes de datos, administración de redes, administración de bases de datos, entre otras.");

  // TARJETAS 5 MIERCOLES

  (tipoTaller5 = "Conferencia"),
    (nombreTallerista5 = " ING. Aleida Pérez "),
    (empresaTallerista5 = "IKIGAI Consultoría Informática"),
    (gruposAsignados5 = "Todos los Semestres"),
    (tituloTaller5 = '"TÉCNICAS DE PENTEST"'),
    (horasTaller5 = "19:00 - 20:00"),
    (imagenTaller5 = "img/talleristas/AleidaPerez.png"),
    (bioTallerista5 =
      "Cuenta con 9 años de experiencia dentro del área de seguridad informática. Impartiendo a nivel internacional cursos, talleres y conferencias relacionados a la auditoría, explotación, análisis de vulnerabilidades y diseño de soluciones en hardening, además de asesoría en desarrollo de código seguro e Inteligencia Artificial integrada al mHealth & eHealth. Actualmente es CEO de Ikigai Consultoría Informática, empresa consultora en ciberseguridad y tecnologías de la información.");

  MostrarTodasTarjetas();
}

// ------------------------JUEVES-------------------------
function informacionJueves() {
  // TARJETA 1 JUEVES
  (tipoTaller1 = "Taller"),
    (nombreTallerista1 = "MCCyT. Keila Elena Ocaña"),
    (empresaTallerista1 = "ITS de Martínez<br>de la Torre"),
    (gruposAsignados1 = "707"),
    (tituloTaller1 = '"ADMINISTRACIÓN DE MÁQUINAS LINUX CON WEBMIN"'),
    (horasTaller1 = "15:00 - 18:00"),
    (imagenTaller1 = "img/talleristas/KeilaElena.png"),
    (bioTallerista1 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETA 2 JUEVES

  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista2 = "ITS de Misantla"),
    (gruposAsignados2 = "107, 307 & 507"),
    (tituloTaller2 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller2 = "16:00 - 18:00"),
    (imagenTaller2 = "img/talleristas/Fernando.png"),
    (bioTallerista2 =
      "MSC Fernando Alberto Hernández Guevara realizó la Maestría en Sistemas Computacionales en el Instituto Tecnológico Superior de Misantla, es egresado de la carrera de Licenciatura en Informática por el Instituto Tecnológico Superior de Misantla. Actualmente jefe del departamento de sistematización, donde realiza funciones de network engineer, DB manager, Server Administrator, Linux system administration, Domain Name Service administration y gestión de cuentas de correos en la plataforma de Gsuite education y Microsoft 365 for faculty, gestión de plataformas de educación a distancia moodle, es líder de proyectos de desarrollo de sotfware como Sistema del portal de pago en línea, sistema del congreso internacional de ingenierías, gestión de pagos en caja, sistema de inventarios institucional, actualmente se está llevando a cabo el desarrollo de sistema de control de proceso de la revista ingeniantes, la migración de las tecnologías del ISP a fibra óptica, interconexión entre edificios por medio de fibra óptica . Desde la dupla educación y sistemas computacionales ha trabajado como docente de tiempo parcial en el sistema semiescolarizado impartiendo asignaturas enfocadas a las redes de computadoras, conmutación y enrutamiento de redes de datos, administración de redes, administración de bases de datos, entre otras.");

  OcultarSeccion2Completa();
}

// ------------------------VIERNES-------------------------
function informacionViernes() {
  // TARJETA 1 VIERNES
  (tipoTaller1 = "Conferencia"),
    (nombreTallerista1 = "IDS Comercial"),
    (empresaTallerista1 = "IDS Comercial"),
    (tituloTaller1 = '"¿CÓMO SER UN GRAN DESARROLLADOR DE APLICACIONES?"'),
    (gruposAsignados1 = "Todos los Semestres"),
    (horasTaller1 = "13:00 - 15:00"),
    (imagenTaller1 = "img/talleristas/ids-taller.png"),
    (bioTallerista1 = "MUY PRONTO!");

  // TARJETA 2 VIERNES
  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "MCCyT. Keila Elena Ocaña"),
    (empresaTallerista2 = "ITS de Martínez<br>de la Torre"),
    (gruposAsignados2 = "707"),
    (tituloTaller2 = '"ADMINISTRACIÓN DE MÁQUINAS LINUX CON WEBMIN"'),
    (horasTaller2 = "15:00 - 18:00"),
    (imagenTaller2 = "img/talleristas/KeilaElena.png"),
    (bioTallerista2 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETA 3 VIERNES

  (tipoTaller3 = "Taller"),
    (nombreTallerista3 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista3 = "ITS de Misantla"),
    (gruposAsignados3 = "107, 307 & 507"),
    (tituloTaller3 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller3 = "16:00 - 18:00"),
    (imagenTaller3 = "img/talleristas/Fernando.png"),
    (bioTallerista3 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  OcultarTarjeta4();
}

// -------------------FIN INFORMACIÓN DE TALLERISTAS-------------------------

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
informacionLunes();
btnLunesON();

btn1.addEventListener("click", mostrarLu, true);
btn2.addEventListener("click", mostrarMa, true);
btn3.addEventListener("click", mostrarMi, true);
btn4.addEventListener("click", mostrarJu, true);
btn5.addEventListener("click", mostrarVi, true);

function mostrarLu() {
  if (cont1 == 0) {
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionLunes();
      btnLunesON();
    }, 400);

    console.log("Lunes seleccionado");
    cont1 = 1;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    // btnOFF();
    // console.log("LUNES DESELECCIONADO");
    // // document.getElementById("TSem1").style.display = "none";
    cont1 = 0;
  }
}
function mostrarMa() {
  if (cont2 == 0) {
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionMartes();
      btnMartesON();
    }, 400);

    cont2 = 1;
    cont1 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    // btnOFF();
    cont2 = 0;
  }
}
function mostrarMi() {
  if (cont3 == 0) {
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionMiercoles();
      btnMiercolesON();
    }, 400);
    cont3 = 1;
    cont1 = 0;
    cont2 = 0;
    cont4 = 0;
    cont5 = 0;
  } else {
    // btnOFF();
    cont3 = 0;
  }
}
function mostrarJu() {
  if (cont4 == 0) {
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionJueves();
      btnJuevesON();
    }, 400);
    cont4 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont5 = 0;
  } else {
    // btnOFF();
    cont4 = 0;
  }
}

function mostrarVi() {
  if (cont5 == 0) {
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionViernes();
      btnViernesON();
    }, 400);
    cont5 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont4 = 0;
  } else {
    // btnOFF();
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
  // btnStateLu1(tarjeta1Time, "btnStateLu1", "Ingresar");
  setTimeout(function () {
    tallerSection.classList.remove("tallerSectionAnimacion");
    tallerSection.style.opacity = 1;
  }, 100);
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn1").style.color = "#222";
  document.getElementById("Sbtn1").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";
  document.getElementById("btnStateLu1").style.display = "block";
  document.getElementById("btnStateLu2").style.display = "block";
  document.getElementById("btnStateLu3").style.display = "block";
  document.getElementById("btnStateLu4").style.display = "block";

  // INFORMACION TALLERISTAS LUNES
  // TARJETA 1
  document.getElementById("tipoTaller1").innerHTML = `<p>${tipoTaller1}</p>`;
  document.getElementById(
    "imagenTallerista1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista1"
  ).innerHTML = `${nombreTallerista1}`;
  document.getElementById("empresaTallerista1").innerHTML = `<p>
  <b>${empresaTallerista1}</b>
  </p>`;
  document.getElementById("gruposLu1").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados1}</p>`;
  document.getElementById(
    "temaTaller1"
  ).innerHTML = `<h4>${tituloTaller1}</h4>`;
  document.getElementById("horaTaller1").innerHTML = ` <p>${horasTaller1}</p>`;
  document.getElementById("imagenBio1").innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio1").innerHTML = `<h3>${nombreTallerista1}</h3>
  <h4>${empresaTallerista1}</h4>`;
  document.getElementById("trayectoriaBio1").innerText = `${bioTallerista1}`;

  // TARJETA 2
  document.getElementById("tipoTaller2").innerHTML = `<p>${tipoTaller2}</p>`;
  document.getElementById(
    "imagenTallerista2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista2"
  ).innerHTML = `${nombreTallerista2}`;
  document.getElementById("empresaTallerista2").innerHTML = `<p>
  <b>${empresaTallerista2}</b>
  </p>`;
  document.getElementById("gruposLu2").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados2}</p>`;
  document.getElementById(
    "temaTaller2"
  ).innerHTML = `<h4>${tituloTaller2}</h4>`;
  document.getElementById("horaTaller2").innerHTML = ` <p>${horasTaller2}</p>`;
  document.getElementById("imagenBio2").innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio2").innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // TARJETA 3
  document.getElementById("tipoTaller3").innerHTML = `<p>${tipoTaller3}</p>`;
  document.getElementById(
    "imagenTallerista3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista3"
  ).innerHTML = `${nombreTallerista3}`;
  document.getElementById("empresaTallerista3").innerHTML = `<p>
  <b>${empresaTallerista3}</b>
  </p>`;
  document.getElementById("gruposLu3").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados3}</p>`;
  document.getElementById(
    "temaTaller3"
  ).innerHTML = `<h4>${tituloTaller3}</h4>`;
  document.getElementById("horaTaller3").innerHTML = ` <p>${horasTaller3}</p>`;
  document.getElementById("imagenBio3").innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio3").innerHTML = `<h3>${nombreTallerista3}</h3>
  <h4>${empresaTallerista3}</h4>`;
  document.getElementById("trayectoriaBio3").innerText = `${bioTallerista3}`;

  // TARJETA 4
  document.getElementById("tipoTaller4").innerHTML = `<p>${tipoTaller4}</p>`;
  document.getElementById(
    "imagenTallerista4"
  ).innerHTML = ` <img src="${imagenTaller4}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista4"
  ).innerHTML = `${nombreTallerista4}`;
  document.getElementById("empresaTallerista4").innerHTML = `<p>
  <b>${empresaTallerista4}</b>
  </p>`;
  document.getElementById("gruposLu4").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados4}</p>`;
  document.getElementById(
    "temaTaller4"
  ).innerHTML = `<h4>${tituloTaller4}</h4>`;
  document.getElementById("horaTaller4").innerHTML = ` <p>${horasTaller4}</p>`;
  document.getElementById("imagenBio4").innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio4").innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;

  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  document.getElementById("btnStateMa1").style.display = "none";
  document.getElementById("btnStateMa2").style.display = "none";
  document.getElementById("btnStateMa3").style.display = "none";
  document.getElementById("btnStateMa4").style.display = "none";
  // Miercoles 17
  document.getElementById("btnStateMi1").style.display = "none";
  document.getElementById("btnStateMi2").style.display = "none";
  document.getElementById("btnStateMi3").style.display = "none";
  document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("btnStateJu1").style.display = "none";
  document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  document.getElementById("btnStateJu1").style.display = "none";
  // Viernes 19
  document.getElementById("btnStateVi1").style.display = "none";
  document.getElementById("btnStateVi2").style.display = "none";
  document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
  document.getElementById("btnStateVi1").style.display = "none";
}

function btnMartesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  document.getElementById("btnStateLu1").style.display = "none";
  document.getElementById("btnStateLu2").style.display = "none";
  document.getElementById("btnStateLu3").style.display = "none";
  document.getElementById("btnStateLu4").style.display = "none";
  // Martes 16
  document.getElementById("btnStateMa1").style.display = "block";
  document.getElementById("btnStateMa2").style.display = "block";
  document.getElementById("btnStateMa3").style.display = "block";
  document.getElementById("btnStateMa4").style.display = "block";
  document.getElementById("Sbtn2").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn2").style.color = "#222222";
  document.getElementById("Sbtn2").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";

  // INFORMACION TALLERISTAS MARTES
  // TARJETA 1
  document.getElementById("tipoTaller1").innerHTML = `<p>${tipoTaller1}</p>`;
  document.getElementById(
    "imagenTallerista1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista1"
  ).innerHTML = `${nombreTallerista1}`;
  document.getElementById("empresaTallerista1").innerHTML = `<p>
  <b>${empresaTallerista1}</b>
  </p>`;
  document.getElementById("gruposLu1").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados1}</p>`;
  document.getElementById(
    "temaTaller1"
  ).innerHTML = `<h4>${tituloTaller1}</h4>`;
  document.getElementById("horaTaller1").innerHTML = ` <p>${horasTaller1}</p>`;
  document.getElementById("imagenBio1").innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio1").innerHTML = `<h3>${nombreTallerista1}</h3>
  <h4>${empresaTallerista1}</h4>`;
  document.getElementById("trayectoriaBio1").innerText = `${bioTallerista1}`;

  // TARJETA 2
  document.getElementById("tipoTaller2").innerHTML = `<p>${tipoTaller2}</p>`;
  document.getElementById(
    "imagenTallerista2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista2"
  ).innerHTML = `${nombreTallerista2}`;
  document.getElementById("empresaTallerista2").innerHTML = `<p>
  <b>${empresaTallerista2}</b>
  </p>`;
  document.getElementById("gruposLu2").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados2}</p>`;
  document.getElementById(
    "temaTaller2"
  ).innerHTML = `<h4>${tituloTaller2}</h4>`;
  document.getElementById("horaTaller2").innerHTML = ` <p>${horasTaller2}</p>`;
  document.getElementById("imagenBio2").innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio2").innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // TARJETA 3
  document.getElementById("tipoTaller3").innerHTML = `<p>${tipoTaller3}</p>`;
  document.getElementById(
    "imagenTallerista3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista3"
  ).innerHTML = `${nombreTallerista3}`;
  document.getElementById("empresaTallerista3").innerHTML = `<p>
  <b>${empresaTallerista3}</b>
  </p>`;
  document.getElementById("gruposLu3").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados3}</p>`;
  document.getElementById(
    "temaTaller3"
  ).innerHTML = `<h4>${tituloTaller3}</h4>`;
  document.getElementById("horaTaller3").innerHTML = ` <p>${horasTaller3}</p>`;
  document.getElementById("imagenBio3").innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio3").innerHTML = `<h3>${nombreTallerista3}</h3>
  <h4>${empresaTallerista3}</h4>`;
  document.getElementById("trayectoriaBio3").innerText = `${bioTallerista3}`;

  // TARJETA 4
  document.getElementById("tipoTaller4").innerHTML = `<p>${tipoTaller4}</p>`;
  document.getElementById(
    "imagenTallerista4"
  ).innerHTML = ` <img src="${imagenTaller4}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista4"
  ).innerHTML = `${nombreTallerista4}`;
  document.getElementById("empresaTallerista4").innerHTML = `<p>
  <b>${empresaTallerista4}</b>
  </p>`;
  document.getElementById("gruposLu4").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados4}</p>`;
  document.getElementById(
    "temaTaller4"
  ).innerHTML = `<h4>${tituloTaller4}</h4>`;
  document.getElementById("horaTaller4").innerHTML = ` <p>${horasTaller4}</p>`;
  document.getElementById("imagenBio4").innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio4").innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;

  // Miercoles 17
  document.getElementById("btnStateMi1").style.display = "none";
  document.getElementById("btnStateMi2").style.display = "none";
  document.getElementById("btnStateMi3").style.display = "none";
  document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("btnStateJu1").style.display = "none";
  document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("btnStateVi1").style.display = "none";
  document.getElementById("btnStateVi2").style.display = "none";
  document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnMiercolesON() {
  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  document.getElementById("btnStateLu1").style.display = "none";
  document.getElementById("btnStateLu2").style.display = "none";
  document.getElementById("btnStateLu3").style.display = "none";
  document.getElementById("btnStateLu4").style.display = "none";
  // Martes 16
  document.getElementById("btnStateMa1").style.display = "none";
  document.getElementById("btnStateMa2").style.display = "none";
  document.getElementById("btnStateMa3").style.display = "none";
  document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("btnStateMi1").style.display = "block";
  document.getElementById("btnStateMi2").style.display = "block";
  document.getElementById("btnStateMi3").style.display = "block";
  document.getElementById("btnStateMi4").style.display = "block";
  document.getElementById("Sbtn3").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn3").style.color = "#222222";
  document.getElementById("Sbtn3").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";

  // INFORMACION TALLERISTAS MIERCOLES
  // TARJETA 1
  document.getElementById("tipoTaller1").innerHTML = `<p>${tipoTaller1}</p>`;
  document.getElementById(
    "imagenTallerista1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista1"
  ).innerHTML = `${nombreTallerista1}`;
  document.getElementById("empresaTallerista1").innerHTML = `<p>
  <b>${empresaTallerista1}</b>
  </p>`;
  document.getElementById("gruposLu1").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados1}</p>`;
  document.getElementById(
    "temaTaller1"
  ).innerHTML = `<h4>${tituloTaller1}</h4>`;
  document.getElementById("horaTaller1").innerHTML = ` <p>${horasTaller1}</p>`;
  document.getElementById("imagenBio1").innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio1").innerHTML = `<h3>${nombreTallerista1}</h3>
  <h4>${empresaTallerista1}</h4>`;
  document.getElementById("trayectoriaBio1").innerText = `${bioTallerista1}`;

  // TARJETA 2
  document.getElementById("tipoTaller2").innerHTML = `<p>${tipoTaller2}</p>`;
  document.getElementById(
    "imagenTallerista2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista2"
  ).innerHTML = `${nombreTallerista2}`;
  document.getElementById("empresaTallerista2").innerHTML = `<p>
  <b>${empresaTallerista2}</b>
  </p>`;
  document.getElementById("gruposLu2").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados2}</p>`;
  document.getElementById(
    "temaTaller2"
  ).innerHTML = `<h4>${tituloTaller2}</h4>`;
  document.getElementById("horaTaller2").innerHTML = ` <p>${horasTaller2}</p>`;
  document.getElementById("imagenBio2").innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio2").innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // TARJETA 3
  document.getElementById("tipoTaller3").innerHTML = `<p>${tipoTaller3}</p>`;
  document.getElementById(
    "imagenTallerista3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista3"
  ).innerHTML = `${nombreTallerista3}`;
  document.getElementById("empresaTallerista3").innerHTML = `<p>
  <b>${empresaTallerista3}</b>
  </p>`;
  document.getElementById("gruposLu3").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados3}</p>`;
  document.getElementById(
    "temaTaller3"
  ).innerHTML = `<h4>${tituloTaller3}</h4>`;
  document.getElementById("horaTaller3").innerHTML = ` <p>${horasTaller3}</p>`;
  document.getElementById("imagenBio3").innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio3").innerHTML = `<h3>${nombreTallerista3}</h3>
  <h4>${empresaTallerista3}</h4>`;
  document.getElementById("trayectoriaBio3").innerText = `${bioTallerista3}`;

  // TARJETA 4
  document.getElementById("tipoTaller4").innerHTML = `<p>${tipoTaller4}</p>`;
  document.getElementById(
    "imagenTallerista4"
  ).innerHTML = ` <img src="${imagenTaller4}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista4"
  ).innerHTML = `${nombreTallerista4}`;
  document.getElementById("empresaTallerista4").innerHTML = `<p>
  <b>${empresaTallerista4}</b>
  </p>`;
  document.getElementById("gruposLu4").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados4}</p>`;
  document.getElementById(
    "temaTaller4"
  ).innerHTML = `<h4>${tituloTaller4}</h4>`;
  document.getElementById("horaTaller4").innerHTML = ` <p>${horasTaller4}</p>`;
  document.getElementById("imagenBio4").innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio4").innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;

  // TARJETA 5
  document.getElementById("tipoTaller5").innerHTML = `<p>${tipoTaller5}</p>`;
  document.getElementById(
    "imagenTallerista5"
  ).innerHTML = ` <img src="${imagenTaller5}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista5"
  ).innerHTML = `${nombreTallerista5}`;
  document.getElementById("empresaTallerista5").innerHTML = `<p>
  <b>${empresaTallerista5}</b>
  </p>`;
  document.getElementById("gruposLu5").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados5}</p>`;
  document.getElementById(
    "temaTaller5"
  ).innerHTML = `<h4>${tituloTaller5}</h4>`;
  document.getElementById("horaTaller5").innerHTML = ` <p>${horasTaller5}</p>`;
  document.getElementById("imagenBio5").innerHTML = `<img src="${imagenTaller5}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio5").innerHTML = `<h3>${nombreTallerista5}</h3>
  <h4>${empresaTallerista5}</h4>`;
  document.getElementById("trayectoriaBio5").innerText = `${bioTallerista5}`;
  // Jueves 18
  document.getElementById("btnStateJu1").style.display = "none";
  document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("btnStateVi1").style.display = "none";
  document.getElementById("btnStateVi2").style.display = "none";
  document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnJuevesON() {
  // Lunes 15
  document.getElementById("btnStateLu1").style.display = "none";
  document.getElementById("btnStateLu2").style.display = "none";
  document.getElementById("btnStateLu3").style.display = "none";
  document.getElementById("btnStateLu4").style.display = "none";
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("btnStateMa1").style.display = "none";
  document.getElementById("btnStateMa2").style.display = "none";
  document.getElementById("btnStateMa3").style.display = "none";
  document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("btnStateMi1").style.display = "none";
  document.getElementById("btnStateMi2").style.display = "none";
  document.getElementById("btnStateMi3").style.display = "none";
  document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("btnStateJu1").style.display = "block";
  document.getElementById("btnStateJu2").style.display = "block";
  document.getElementById("Sbtn4").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn4").style.color = "#222222";
  document.getElementById("Sbtn4").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";

  // INFORMACION TALLERISTAS JUEVES
  // TARJETA 1
  document.getElementById("tipoTaller1").innerHTML = `<p>${tipoTaller1}</p>`;
  document.getElementById(
    "imagenTallerista1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista1"
  ).innerHTML = `${nombreTallerista1}`;
  document.getElementById("empresaTallerista1").innerHTML = `<p>
  <b>${empresaTallerista1}</b>
  </p>`;
  document.getElementById("gruposLu1").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados1}</p>`;
  document.getElementById(
    "temaTaller1"
  ).innerHTML = `<h4>${tituloTaller1}</h4>`;
  document.getElementById("horaTaller1").innerHTML = ` <p>${horasTaller1}</p>`;
  document.getElementById("imagenBio1").innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio1").innerHTML = `<h3>${nombreTallerista1}</h3>
  <h4>${empresaTallerista1}</h4>`;
  document.getElementById("trayectoriaBio1").innerText = `${bioTallerista1}`;

  // TARJETA 2
  document.getElementById("tipoTaller2").innerHTML = `<p>${tipoTaller2}</p>`;
  document.getElementById(
    "imagenTallerista2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista2"
  ).innerHTML = `${nombreTallerista2}`;
  document.getElementById("empresaTallerista2").innerHTML = `<p>
  <b>${empresaTallerista2}</b>
  </p>`;
  document.getElementById("gruposLu2").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados2}</p>`;
  document.getElementById(
    "temaTaller2"
  ).innerHTML = `<h4>${tituloTaller2}</h4>`;
  document.getElementById("horaTaller2").innerHTML = ` <p>${horasTaller2}</p>`;
  document.getElementById("imagenBio2").innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio2").innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // TARJETA 3
  document.getElementById("tipoTaller3").innerHTML = `<p>${tipoTaller3}</p>`;
  document.getElementById(
    "imagenTallerista3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista3"
  ).innerHTML = `${nombreTallerista3}`;
  document.getElementById("empresaTallerista3").innerHTML = `<p>
  <b>${empresaTallerista3}</b>
  </p>`;
  document.getElementById("gruposLu3").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados3}</p>`;
  document.getElementById(
    "temaTaller3"
  ).innerHTML = `<h4>${tituloTaller3}</h4>`;
  document.getElementById("horaTaller3").innerHTML = ` <p>${horasTaller3}</p>`;
  document.getElementById("imagenBio3").innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio3").innerHTML = `<h3>${nombreTallerista3}</h3>
  <h4>${empresaTallerista3}</h4>`;
  document.getElementById("trayectoriaBio3").innerText = `${bioTallerista3}`;

  // TARJETA 4
  document.getElementById("tipoTaller4").innerHTML = `<p>${tipoTaller4}</p>`;
  document.getElementById(
    "imagenTallerista4"
  ).innerHTML = ` <img src="${imagenTaller4}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista4"
  ).innerHTML = `${nombreTallerista4}`;
  document.getElementById("empresaTallerista4").innerHTML = `<p>
  <b>${empresaTallerista4}</b>
  </p>`;
  document.getElementById("gruposLu4").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados4}</p>`;
  document.getElementById(
    "temaTaller4"
  ).innerHTML = `<h4>${tituloTaller4}</h4>`;
  document.getElementById("horaTaller4").innerHTML = ` <p>${horasTaller4}</p>`;
  document.getElementById("imagenBio4").innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio4").innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;
  // Viernes 19
  document.getElementById("btnStateVi1").style.display = "none";
  document.getElementById("btnStateVi2").style.display = "none";
  document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}
function btnViernesON() {
  // Lunes 15
  document.getElementById("btnStateLu1").style.display = "none";
  document.getElementById("btnStateLu2").style.display = "none";
  document.getElementById("btnStateLu3").style.display = "none";
  document.getElementById("btnStateLu4").style.display = "none";
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  document.getElementById("btnStateMa1").style.display = "none";
  document.getElementById("btnStateMa2").style.display = "none";
  document.getElementById("btnStateMa3").style.display = "none";
  document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  document.getElementById("btnStateMi1").style.display = "none";
  document.getElementById("btnStateMi2").style.display = "none";
  document.getElementById("btnStateMi3").style.display = "none";
  document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  document.getElementById("btnStateJu1").style.display = "none";
  document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  document.getElementById("btnStateVi1").style.display = "block";
  document.getElementById("btnStateVi2").style.display = "block";
  document.getElementById("btnStateVi3").style.display = "block";
  document.getElementById("Sbtn5").style.backgroundColor = "#F0F6FA";
  document.getElementById("Sbtn5").style.color = "#222222";
  document.getElementById("Sbtn5").style.borderColor = "#F0F6FA";
  document.getElementById("contenedorBtnSemestre").style.borderBottomColor =
    "#707070";

  // INFORMACION TALLERISTAS VIERNES
  // TARJETA 1
  document.getElementById("tipoTaller1").innerHTML = `<p>${tipoTaller1}</p>`;
  document.getElementById(
    "imagenTallerista1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista1"
  ).innerHTML = `${nombreTallerista1}`;
  document.getElementById("empresaTallerista1").innerHTML = `<p>
  <b>${empresaTallerista1}</b>
  </p>`;
  document.getElementById("gruposLu1").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados1}</p>`;
  document.getElementById(
    "temaTaller1"
  ).innerHTML = `<h4>${tituloTaller1}</h4>`;
  document.getElementById("horaTaller1").innerHTML = ` <p>${horasTaller1}</p>`;
  document.getElementById("imagenBio1").innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio1").innerHTML = `<h3>${nombreTallerista1}</h3>
  <h4>${empresaTallerista1}</h4>`;
  document.getElementById("trayectoriaBio1").innerText = `${bioTallerista1}`;

  // TARJETA 2
  document.getElementById("tipoTaller2").innerHTML = `<p>${tipoTaller2}</p>`;
  document.getElementById(
    "imagenTallerista2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista2"
  ).innerHTML = `${nombreTallerista2}`;
  document.getElementById("empresaTallerista2").innerHTML = `<p>
  <b>${empresaTallerista2}</b>
  </p>`;
  document.getElementById("gruposLu2").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados2}</p>`;
  document.getElementById(
    "temaTaller2"
  ).innerHTML = `<h4>${tituloTaller2}</h4>`;
  document.getElementById("horaTaller2").innerHTML = ` <p>${horasTaller2}</p>`;
  document.getElementById("imagenBio2").innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio2").innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // TARJETA 3
  document.getElementById("tipoTaller3").innerHTML = `<p>${tipoTaller3}</p>`;
  document.getElementById(
    "imagenTallerista3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona" />`;
  document.getElementById(
    "nombreTallerista3"
  ).innerHTML = `${nombreTallerista3}`;
  document.getElementById("empresaTallerista3").innerHTML = `<p>
  <b>${empresaTallerista3}</b>
  </p>`;
  document.getElementById("gruposLu3").innerHTML = `<p>Grupos</p>
  <p>${gruposAsignados3}</p>`;
  document.getElementById(
    "temaTaller3"
  ).innerHTML = `<h4>${tituloTaller3}</h4>`;
  document.getElementById("horaTaller3").innerHTML = ` <p>${horasTaller3}</p>`;
  document.getElementById("imagenBio3").innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById("nombreBio3").innerHTML = `<h3>${nombreTallerista3}</h3>
  <h4>${empresaTallerista3}</h4>`;
  document.getElementById("trayectoriaBio3").innerText = `${bioTallerista3}`;
}

// ------------------------------SECCION MODAL------------------------------
// modal
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    console.log("Se hizo visible.");
  });
}
const closeEls = document.querySelectorAll("[data-close]");
// const isVisible = "is-visible";

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    console.log("Se hizo invisible.");
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
// ---------------Empresas------------
// ----------Carrusel de imagenes----
const carrusel = document.querySelector(".carusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * (-1);
    } else if (carrusel.scrollLeft === 0) {
      step = step * (-1);
    }
  }, 10);
};
const stop = () => {
  clearInterval(intervalo);
};
carrusel.addEventListener('mouseover', () => {
  stop();
})
carrusel.addEventListener('mouseout', () => {
  start();
})

start();