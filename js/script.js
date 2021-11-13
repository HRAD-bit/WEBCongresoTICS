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
// ------SELECCIONDE POR SECCION----
const sectionPR = document.querySelector("#portada");

const sectionPROptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionPRObserver = new IntersectionObserver(function (
  entriesPR,
  sectionPRObserver
) {
  entriesPR.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      header.classList.remove("nav-scrolled");
      headerU.classList.remove("nav-scrolled");
    }
  });
},
  sectionPROptions);

sectionPRObserver.observe(sectionPR);
// ------------
const header = document.querySelector(".con");
const sectionOne = document.querySelector("#ancla-eje");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      // headerU.classList.remove("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// --------------------------
const headerU = document.querySelector(".contwo");
const sectionTwo = document.querySelector("#Colab-uno");

const sectionTwoOptions = {
  rootMargin: "100px 0px 0px 0px",
};

const sectionTwoObserver = new IntersectionObserver(function (
  entries2,
  sectionTwoObserver
) {
  entries2.forEach((entry2) => {
    if (entry2.isIntersecting) {
      headerU.classList.add("nav-scrolled");
      header.classList.remove("nav-scrolled");
    } else {
      headerU.classList.remove("nav-scrolled");
      header.classList.add("nav-scrolled");
    }
  });
},
  sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);
// --------------------------------------------
const headerD = document.querySelector(".emp");
const sectionD = document.querySelector("#separador");

const sectionDOptions = {
  rootMargin: "100px 0px 0px 0px",
};

const sectionDObserver = new IntersectionObserver(function (
  entries3,
  sectionDObserver
) {
  entries3.forEach((entry3) => {
    if (entry3.isIntersecting) {
      headerD.classList.add("nav-scrolled");
      headerU.classList.remove("nav-scrolled");
    } else {
      headerD.classList.remove("nav-scrolled");
      headerU.classList.add("nav-scrolled");
    }
  });
},
  sectionDOptions);

sectionDObserver.observe(sectionD);

//// VARIABLES DE ESTADO DE TARJETAS EN DIAS
var stateActLu1 = 0,
  stateActMa1 = 0,
  stateActMi1 = 0,
  stateActJu1 = 0,
  stateActVi1 = 0,
  stateActLu2 = 0,
  stateActMa2 = 0,
  stateActMi2 = 0,
  stateActJu2 = 0,
  stateActVi2 = 0,
  stateActLu3 = 0,
  stateActMa3 = 0,
  stateActMi3 = 0,
  stateActJu3 = 0,
  stateActVi3 = 0,
  stateActLu4 = 0,
  stateActMa4 = 0,
  stateActMi4 = 0,
  stateActJu4 = 0,
  stateActVi4 = 0,
  stateActLu5 = 0,
  stateActMa5 = 0,
  stateActMi5 = 0,
  stateActJu5 = 0,
  stateActVi5 = 0;

function verifyStateCards() {
  ////////// TARJETAS DEL LUNEEEEEEEEEEEES
  /// CONDICIONALES PARA LA PRIMERA TARJETA DEL LUNES
  if (stateActLu1 == 1 && cont1 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActLu1 == 2 && cont1 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu1").style.display = "flex";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionLu1").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActLu1 == 3 && cont1 == 1) {
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionLu1").style.backgroundColor = "#858585";
    document.getElementById("btnAccionLu1").style.cursor = "no-drop";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion contenedor-informacion-off";
    document.getElementById("btnStateLu1").style.display = "block";
  }

  /// CONDICIONALES PARA LA SEGUNDA TARJETA DEL LUNES
  console.log(stateActLu2 + " Lunes: " + cont1)
  if (stateActLu2 == 1 && cont1 == 1) {
    // console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActLu2 == 2 && cont1 == 1) {
    // console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu2").style.display = "flex";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionLu2").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActLu2 == 3 && cont1 == 1) {
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionLu2").style.backgroundColor = "#858585";
    document.getElementById("btnAccionLu2").style.cursor = "no-drop";
    document.getElementById("btnStateLu2").style.display = "block";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion contenedor-informacion-off";
  }
  ///////////////MARTEEEEEEEEEEEEEES SON 4 TARJETAS
  ///CONDICIONALES PARA LA PRIMERA TARJETA DEL MARTES
  if (stateActMa1 == 1 && cont2 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActMa1 == 2 && cont2 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu1").style.display = "flex";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMa1").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActMa1 == 3 && cont2 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMa1").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMa1").style.cursor = "no-drop";
    document.getElementById("btnStateMa1").style.display = "block";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  ///CONDICIONALES PARA LA SEGUNDA TARJETA DEL MARTES
  if (stateActMa2 == 1 && cont2 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActMa2 == 2 && cont2 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu2").style.display = "flex";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMa2").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActMa2 == 3 && cont2 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMa2").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMa2").style.cursor = "no-drop";
    document.getElementById("btnStateMa2").style.display = "block";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  ///CONDICIONALES PARA LA TERCERA TARJETA DEL MARTES
  if (stateActMa3 == 1 && cont2 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActMa3 == 2 && cont2 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu3").style.display = "flex";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMa3").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActMa3 == 3 && cont2 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMa3").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMa3").style.cursor = "no-drop";
    document.getElementById("btnStateMa3").style.display = "block";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  ///CONDICIONALES PARA LA CUARTA TARJETA DEL MARTES
  if (stateActMa4 == 1 && cont2 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMa4 == 2 && cont2 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu4").style.display = "flex";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMa4").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMa4 == 3 && cont2 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMa4").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMa4").style.cursor = "no-drop";
    document.getElementById("btnStateMa4").style.display = "block";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  ///CONDICIONALES PARA LA CUARTA TARJETA DEL MARTES
  if (stateActMa4 == 1 && cont2 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMa4 == 2 && cont2 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu4").style.display = "flex";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMa4").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMa4 == 3 && cont2 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMa4").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMa4").style.cursor = "no-drop";
    document.getElementById("btnStateMa4").style.display = "block";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  console.log(
    "contMiercoles: " + cont1 + " Estado de Miercoles: " + stateActMi1
  );
  /////////////////MIERCOLEEEEEEES SON 5 TARJETAS
  /// CONDICIONALES PARA LA PRIMERA TARJETA DEL MIERCOLES
  if (stateActMi1 == 1 && cont3 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActMi1 == 2 && cont3 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu1").style.display = "flex";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMi1").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActMi1 == 3 && cont3 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMi1").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMi1").style.cursor = "no-drop";
    document.getElementById("btnStateMi1").style.display = "block";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA SEGUNDA TARJETA DEL MIERCOLES
  if (stateActMi2 == 1 && cont3 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActMi2 == 2 && cont3 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu2").style.display = "flex";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMi2").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActMi2 == 3 && cont3 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMi2").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMi2").style.cursor = "no-drop";
    document.getElementById("btnStateMi2").style.display = "block";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA TERCERA TARJETA DEL MIERCOLES
  if (stateActMi3 == 1 && cont3 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActMi3 == 2 && cont3 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu3").style.display = "flex";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMi3").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActMi3 == 3 && cont3 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMi3").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMi3").style.cursor = "no-drop";
    document.getElementById("btnStateMi3").style.display = "block";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA CUARTA TARJETA DEL MIERCOLES
  if (stateActMi4 == 1 && cont3 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMi4 == 2 && cont3 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu4").style.display = "flex";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMi4").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion";
  } else if (stateActMi4 == 3 && cont3 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu4").style.display = "none";
    document.getElementById("gruposLiveLu4").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMi4").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMi4").style.cursor = "no-drop";
    document.getElementById("btnStateMi4").style.display = "block";
    document.getElementById("contenedorInfoLu4").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA QUINTA TARJETA DEL MIERCOLES
  if (stateActMi5 == 1 && cont3 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu5").style.display = "none";
    document.getElementById("gruposLiveLu5").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu5").className =
      "contenedor-informacion";
  } else if (stateActMi5 == 2 && cont3 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu5").style.display = "flex";
    document.getElementById("gruposLiveLu5").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionMi5").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu5").className =
      "contenedor-informacion";
  } else if (stateActMi5 == 3 && cont3 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu5").style.display = "none";
    document.getElementById("gruposLiveLu5").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionMi5").style.backgroundColor = "#858585";
    document.getElementById("btnAccionMi5").style.cursor = "no-drop";
    document.getElementById("btnStateMi5").style.display = "block";
    document.getElementById("contenedorInfoLu5").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  ////////////////JUEEEEEVEEEEEEEEEEEEES SON DOS TARJETAS
  /// CONDICIONALES PARA LA PRIMERA TARJETA DEL JUEVES
  if (stateActJu1 == 1 && cont4 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActJu1 == 2 && cont4 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu1").style.display = "flex";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionJu1").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActJu1 == 3 && cont4 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionJu1").style.backgroundColor = "#858585";
    document.getElementById("btnAccionJu1").style.cursor = "no-drop";
    document.getElementById("btnStateJu1").style.display = "block";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion contenedor-informacion-off";
  }
  /// CONDICIONALES PARA LA SEGUNDA TARJETA DEL JUEVES
  if (stateActJu2 == 1 && cont4 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActJu2 == 2 && cont4 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu2").style.display = "flex";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionJu2").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActJu2 == 3 && cont4 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionJu2").style.backgroundColor = "#858585";
    document.getElementById("btnAccionJu2").style.cursor = "no-drop";
    document.getElementById("btnStateJu2").style.display = "block";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion contenedor-informacion-off";
  }
  /////////////////VIERNEEEEEEEEEES SON 3 TARJETAS
  /// CONDICIONALES PARA LA PRIMERA TARJETA DEL VIERNES
  if (stateActVi1 == 1 && cont5 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActVi1 == 2 && cont5 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu1").style.display = "flex";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionJu1").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion";
  } else if (stateActVi1 == 3 && cont5 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu1").style.display = "none";
    document.getElementById("gruposLiveLu1").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionVi1").style.backgroundColor = "#858585";
    document.getElementById("btnAccionVi1").style.cursor = "no-drop";
    document.getElementById("btnStateVi1").style.display = "block";
    document.getElementById("contenedorInfoLu1").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA SEGUNDA TARJETA DEL VIERNES
  if (stateActVi2 == 1 && cont5 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActVi2 == 2 && cont5 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu2").style.display = "flex";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionVi2").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion";
  } else if (stateActVi2 == 3 && cont5 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu2").style.display = "none";
    document.getElementById("gruposLiveLu2").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionVi2").style.backgroundColor = "#858585";
    document.getElementById("btnAccionVi2").style.cursor = "no-drop";
    document.getElementById("btnStateVi2").style.display = "block";
    document.getElementById("contenedorInfoLu2").className =
      "contenedor-informacion contenedor-informacion-off";
  }

  /// CONDICIONALES PARA LA TERCERA TARJETA DEL VIERNES
  if (stateActVi3 == 1 && cont5 == 1) {
    console.log("Se muestra que esta en espera");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent = "center";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActVi3 == 2 && cont5 == 1) {
    console.log("Se muestra que esta en vivo");
    document.getElementById("liveIDLu3").style.display = "flex";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-between";
    document.getElementById("btnAccionVi3").style.backgroundColor = "#3EE45F";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion";
  } else if (stateActVi3 == 3 && cont5 == 1) {
    console.log("se muestra que se termino");
    document.getElementById("liveIDLu3").style.display = "none";
    document.getElementById("gruposLiveLu3").style.justifyContent =
      "space-around";
    document.getElementById("btnAccionVi3").style.backgroundColor = "#858585";
    document.getElementById("btnAccionVi3").style.cursor = "no-drop";
    document.getElementById("btnStateVi3").style.display = "block";
    document.getElementById("contenedorInfoLu3").className =
      "contenedor-informacion contenedor-informacion-off";
  }
}

// -----------------------INFORMACIÓN DE TALLERISTAS--------------------

// LINKS DE ZOOM
const linkLu1 = "https://meet.google.com/hwb-dpmp-hpb",
  LinkLu2 = "https://meet.google.com/xvj-rzwv-ung",
  LinkMa1 = "https://meet.google.com/hwb-dpmp-hpb",
  LinkMa2 = "https://meet.google.com/rbk-vsgo-epn",
  LinkMa3 = "https://meet.google.com/vai-nofp-zac",
  LinkMa4 = "https://meet.google.com/xvj-rzwv-ung",
  LinkMi1 = "https://meet.google.com/gic-ioxq-uqf",
  LinkMi2 = "https://meet.google.com/bic-vpgf-uyt",
  LinkMi3 = "https://meet.google.com/qde-owyx-dgo",
  LinkMi4 = "https://meet.google.com/zky-bmpj-xed",
  LinkMi5 = "https://meet.google.com/qwi-bibf-adc",
  LinkJu1 = "https://meet.google.com/zig-fzft-gxz",
  LinkJu2 = "https://meet.google.com/zky-bmpj-xed",
  LinkVi1 = "http://google.com",
  LinkVi2 = "https://meet.google.com/zig-fzft-gxz",
  LinkVi3 = "https://meet.google.com/zky-bmpj-xed";

// ------------------------------TIEMPOS DE ESPERA-----------------

// VARIABLES DE TIEMPO DE HORAS EN SEGNDOS
const unaHora = -4200,
  dosHoras = -7800,
  tresHoras = -11400,
  cuatroHoras = -15000;

// ---------------VARIABLES DE TIEMPO-----------
// Lunes
const tarjeta1TimeLu = "Nov 15 2021 09:50:00 GMT-06:00",
  tarjeta2TimeLu = "Nov 15 2021 17:50:00 GMT-06:00",
  // tarjeta3TimeLu = "Nov 15 2021 17:00:00 GMT-05:00",
  // tarjeta4TimeLu = "Nov 15 2021 18:00:00 GMT-05:00",
  // MARTES
  tarjeta1TimeMa = "Nov 16 2021 09:50:00 GMT-06:00",
  tarjeta2TimeMa = "Nov 16 2021 15:50:00 GMT-06:00",
  tarjeta3TimeMa = "Nov 16 2021 16:50:00 GMT-06:00",
  tarjeta4TimeMa = "Nov 16 2021 17:50:00 GMT-06:00",
  // MIERCOLES
  tarjeta1TimeMi = "Nov 17 2021 09:50:00 GMT-06:00",
  tarjeta2TimeMi = "Nov 17 2021 10:50:00 GMT-06:00",
  tarjeta3TimeMi = "Nov 17 2021 14:50:00 GMT-06:00",
  tarjeta4TimeMi = "Nov 17 2021 15:50:00 GMT-06:00",
  tarjeta5TimeMi = "Nov 17 2021 18:50:00 GMT-06:00",
  // JUEVES
  tarjeta1TimeJu = "Nov 18 2021 14:50:00 GMT-06:00",
  tarjeta2TimeJu = "Nov 18 2021 15:50:00 GMT-06:00",
  // VIERNES
  tarjeta1TimeVi = "Nov 19 2021 12:50:00 GMT-06:00",
  tarjeta2TimeVi = "Nov 19 2021 14:50:00 GMT-06:00",
  tarjeta3TimeVi = "Nov 19 2021 15:50:00 GMT-06:00";

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
    el.style.display = "block";
    if (t.remainTime > 1) {
      stateActLu1 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActLu1 = 2;
      document.getElementById(
        "btnAccionLu1"
      ).innerHTML = `<a href="${linkLu1}" target="_blank" rel="noopener noreferrer">
      <div id="linkAccesoLu1"><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateLu1"><p>Acceder</p></div>          
      </div>
    </a>`;
    }
    // FINALIZADO
    if (t.remainTime <= cuatroHoras && t.remainTime <= 1) {
      stateActLu1 = 3; // COLOCAMOS COMO FINALIZADO PARA EL ESTADO
      clearInterval(timerUpdate);
      document.getElementById("btnStateLu1").innerHTML = `<p>Finalizado</p>`;
      document.getElementById("contenedorInfoLu1").className =
        " contenedor-informacion-off contenedor-informacion";
      document.getElementById("btnAccionLu1").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateLu1"><p>Finalizado</p></div>          
        </div>`;
    }
    // verifyStateCards();
  }, 1000);
};
btnStateLu1(tarjeta1TimeLu, "btnStateLu1", "Ingresar");

const btnStateLu2 = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    if (t.remainTime > 1) {
      stateActLu2 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActLu2 = 2;
      document.getElementById(
        "btnAccionLu2"
      ).innerHTML = `<a href="${LinkLu2}" target="_blank">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateLu2"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActLu2 = 3;
        clearInterval(timerUpdate);
        document.getElementById("btnStateLu2").innerHTML = `<p>Finalizado</p>`;
        document.getElementById("contenedorInfoLu2").className =
          "contenedor-informacion-off contenedor-informacion";
        document.getElementById("btnAccionLu2").innerHTML = `
          <div class="btn-action-estado">
            <div class="btnState" id="btnStateLu2"><p>Finalizado</p></div>          
          </div>`;
      }
    }
  }, 1000);
};
btnStateLu2(tarjeta2TimeLu, "btnStateLu2", "Ingresar");

// const btnStateLu3 = (deadline, elem, finalMessage) => {
//   const el = document.getElementById(elem);

//   const timerUpdate = setInterval(() => {
//     let t = getRemainingTime(deadline);
//     el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;

//     if (t.remainTime <= 1) {
//       console.log(t.remainTime);
//       // clearInterval(timerUpdate);
//       // el.innerHTML = finalMessage;
//       el.innerHTML = `<p> Acceder <p>`;
//       document.getElementById("liveIDLu3").style.display = "flex";
//       document.getElementById("gruposLiveLu3").style.justifyContent =
//         "space-between";
//       document.getElementById(
//         "btnAccionLu3"
//       ).innerHTML = `<a href="${linkLu1}" target="_blank">
//       <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
//       <div class="btn-action-estado">
//         <div class="btnState" id="btnStateLu3"><p>Acceder</p></div>
//       </div>
//     </a>`;
//       document.getElementById("btnAccionLu3").style.backgroundColor = "#3EE45F";
//       if (t.remainTime <= -5.0) {
//         clearInterval(timerUpdate);
//         console.log(t.remainTime);
//         el.innerHTML = "FINALIZADO";
//         document.getElementById("liveIDLu3").style.display = "none";
//         document.getElementById("gruposLiveLu3").style.justifyContent =
//           "space-around";
//         document.getElementById("btnAccionLu3").style.backgroundColor =
//           "#858585";
//         document.getElementById("btnAccionLu3").style.cursor = "no-drop";
//         document.getElementById("btnAccionLu3").innerHTML = ` <div>
//         <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
//       </div>
//       <div class="btn-action-estado">
//         <div class="btnState" id="btnStateLu3"><p>Finalizado</p></div>
//       </div>`;
//         document.getElementById("contenedorInfoLu3").className +=
//           " contenedor-informacion-off";
//       }
//     }
//   }, 1000);
// };
// btnStateLu3(tarjeta3TimeLu, "btnStateLu3", "Ingresar");

// const btnStateLu4 = (deadline, elem, finalMessage) => {
//   const el = document.getElementById(elem);

//   const timerUpdate = setInterval(() => {
//     let t = getRemainingTime(deadline);
//     el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
//     // EN VIVO
//     if (t.remainTime <= 1) {
//       console.log(t.remainTime);
//       // clearInterval(timerUpdate);
//       // el.innerHTML = finalMessage;
//       el.innerHTML = `<p> Acceder <p>`;
//       document.getElementById("liveIDLu4").style.display = "flex";
//       document.getElementById("gruposLiveLu4").style.justifyContent =
//         "space-between";
//       document.getElementById(
//         "btnAccionLu4"
//       ).innerHTML = `<a href="${linkLu1}" target="_blank">
//       <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
//       <div class="btn-action-estado">
//         <div class="btnState" id="btnStateLu4"><p>Acceder</p></div>
//       </div>
//     </a>`;
//       document.getElementById("btnAccionLu4").style.backgroundColor = "#3EE45F";
//       // FINALIZADO
//       if (t.remainTime <= -5.0) {
//         clearInterval(timerUpdate);
//         console.log(t.remainTime);
//         el.innerHTML = "FINALIZADO";
//         document.getElementById("liveIDLu4").style.display = "none";
//         document.getElementById("gruposLiveLu4").style.justifyContent =
//           "space-around";
//         document.getElementById("btnAccionLu4").style.backgroundColor =
//           "#858585";
//         document.getElementById("btnAccionLu4").style.cursor = "no-drop";
//         document.getElementById("btnAccionLu4").innerHTML = ` <div>
//         <img class="btn-action-img" src="img/resources/ingresar.png" alt="" />
//       </div>
//       <div class="btn-action-estado">
//         <div class="btnState" id="btnStateLu4"><p>Finalizado</p></div>
//       </div>`;
//         document.getElementById("contenedorInfoLu4").className +=
//           " contenedor-informacion-off";
//       }
//     }
//   }, 1000);
// };
// btnStateLu4(tarjeta4TimeLu, "btnStateLu4", "Ingresar");

// MARTES
const btnStateMa1 = (deadline, elem, finalMessage) => {
  var el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}d: ${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s `;
    if (t.remainTime > 1) {
      stateActMa1 = 1;
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      // console.log(t.remainTime + " Taller MARTES 1 en VIVO");
      stateActMa1 = 2;
      document.getElementById(
        "btnAccionMa1"
      ).innerHTML = `<a href="${LinkMa1}" target="_blank" rel="noopener noreferrer">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMa1"><p>Acceder</p></div>
      </div>
    </a>`;
      // FINALIZADO
      if (t.remainTime <= cuatroHoras && t.remainTime <= 1) {
        stateActMa1 = 3;
        clearInterval(timerUpdate);
        document.getElementById("btnStateMa1").innerHTML = `<p>Finalizado</p>`;
        document.getElementById("contenedorInfoLu1").className =
          " contenedor-informacion-off contenedor-informacion";
        document.getElementById("btnAccionMa1").innerHTML = `
          <div class="btn-action-estado">
            <div class="btnState" id="btnStateMa1"><p>Finalizado</p></div>          
          </div>`;
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
    if (t.remainTime > 1) {
      stateActMa2 = 1;
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMa2 = 2;
      document.getElementById(
        "btnAccionMa2"
      ).innerHTML = `<a href="${LinkMa2}" target="_blank"  rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa2"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= unaHora) {
        stateActMa2 = 3;
        clearInterval(timerUpdate);
        document.getElementById("btnStateMa2").innerHTML = `<p>Finalizado</p>`;
        document.getElementById("btnAccionMa2").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMa2"><p>Finalizado</p></div>          
        </div>`;
        document.getElementById("contenedorInfoLu2").className =
          "contenedor-informacion contenedor-informacion-off";
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
    if (t.remainTime > 1) {
      stateActMa3 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMa3 = 2;
      document.getElementById(
        "btnAccionMa3"
      ).innerHTML = `<a href="${LinkMa3}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa3"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= unaHora) {
        stateActMa3 = 3; // COLOCAMOS COMO FINALIZADO PARA EL ESTADO
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu3").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMa3").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMa3"><p>Finalizado</p></div>          
        </div>`;
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
    if (t.remainTime > 1) {
      stateActMa4 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMa4 = 2;
      document.getElementById(
        "btnAccionMa4"
      ).innerHTML = `<a href="${LinkMa4}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMa4"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActMa4 = 3; // COLOCAMOS COMO FINALIZADO PARA EL ESTADO
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu4").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMa4").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMa4"><p>Finalizado</p></div>          
        </div>`;
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
    stateActMi1 = 1;
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      stateActMi1 = 2;
      document.getElementById(
        "btnAccionMi1"
      ).innerHTML = `<a href="${LinkMi1}" target="_blank" rel="noopener noreferrer">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateMi1"><p>Acceder</p></div>
      </div>
    </a>`;

      // FINALIZADO
      if (t.remainTime <= unaHora) {
        stateActMi1 = 3;
        clearInterval(timerUpdate);
        console.log(t.remainTime);
        document.getElementById("btnAccionMi1").innerHTML = `
          <div class="btn-action-estado">
            <div class="btnState" id="btnStateMi1"><p>Finalizado</p></div>          
          </div>`;
        document.getElementById("contenedorInfoLu1").className =
          " contenedor-informacion-off contenedor-informacion";
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
    if (t.remainTime > 1) {
      stateActMi2 = 1;
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      console.log(t.remainTime);
      stateActMi2 = 2;
      document.getElementById(
        "btnAccionMi2"
      ).innerHTML = `<a href="${LinkMi2}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi2"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActMi2 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu2").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMi2").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMi2"><p>Finalizado</p></div>          
        </div>`;
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
    if (t.remainTime > 1) {
      stateActMi3 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMi3 = 2;
      document.getElementById(
        "btnAccionMi3"
      ).innerHTML = `<a href="${LinkMi3}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi3"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= cuatroHoras) {
        stateActMi3 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu3").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMi3").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMi3"><p>Finalizado</p></div>          
        </div>`;
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
    if (t.remainTime > 1) {
      stateActMi4 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMi4 = 2;
      document.getElementById(
        "btnAccionMi4"
      ).innerHTML = `<a href="${LinkMi4}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi4"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActMi4 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu4").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMi4").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMi4"><p>Finalizado</p></div>          
        </div>`;
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
    if (t.remainTime > 1) {
      stateActMi5 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActMi5 = 2;
      document.getElementById(
        "btnAccionMi5"
      ).innerHTML = `<a href="${LinkMi5}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateMi5"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= unaHora) {
        stateActMi5 = 3; // COLOCAMOS COMO FINALIZADO PARA EL ESTADO
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu5").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionMi5").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateMi5"><p>Finalizado</p></div>          
        </div>`;
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
    el.style.display = "block";
    if (t.remainTime > 1) {
      stateActJu1 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActJu1 = 2; //
      document.getElementById(
        "btnAccionJu1"
      ).innerHTML = `<a href="${LinkJu1}" target="_blank" rel="noopener noreferrer">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateJu1"><p>Acceder</p></div>
      </div>
    </a>`;
      // FINALIZADO
      if (t.remainTime <= cuatroHoras) {
        clearInterval(timerUpdate);
        stateActJu1 = 3;
        el.innerHTML = "FINALIZADO";
        document.getElementById("btnAccionJu1").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateJu1"><p>Finalizado</p></div>          
        </div>`;
        document.getElementById("contenedorInfoLu1").className =
          "contenedor-informacion contenedor-informacion-off";
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
    if (t.remainTime > 1) {
      stateActJu2 = 1;
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActJu2 = 2;
      document.getElementById(
        "btnAccionJu2"
      ).innerHTML = `<a href="${LinkJu2}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateJu2"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActJu2 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu2").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionJu2").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateJu2"><p>Finalizado</p></div>          
        </div>`;
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
    el.style.display = "block";
    if (t.remainTime > 1) {
      stateActVi1 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActVi1 = 2;
      document.getElementById(
        "btnAccionVi1"
      ).innerHTML = `<a href="${LinkVi1}" target="_blank" rel="noopener noreferrer">
      <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
      <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi1"><p>Acceder</p></div>
      </div>
    </a>`;
      // FINALIZADO
      if (t.remainTime <= unaHora) {
        stateActVi1 = 3;
        clearInterval(timerUpdate);
        document.getElementById("btnAccionVi1").innerHTML = `
        <div class="btn-action-estado">
        <div class="btnState" id="btnStateVi1"><p>Finalizado</p></div>          
        </div>`;
        document.getElementById("contenedorInfoLu1").className =
          "contenedor-informacion contenedor-informacion-off";
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
    if (t.remainTime > 1) {
      stateActVi2 = 1;
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActVi2 = 2;
      document.getElementById(
        "btnAccionVi2"
      ).innerHTML = `<a href="${LinkVi2}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateVi2"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= cuatroHoras) {
        stateActVi2 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu2").className =
          "contenedor-informacion contenedor-informacion-off";

        document.getElementById("btnAccionVi2").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateVi2"><p>Finalizado</p></div>          
        </div>`;
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
    if (t.remainTime > 1) {
      stateActVi3 = 1; // AQUI LE PONES DE ESTADO QUE ESTÁ AUN EN ESPERA EL TALLER
    }
    // EN VIVO
    if (t.remainTime <= 1) {
      stateActVi3 = 2;
      document.getElementById(
        "btnAccionVi3"
      ).innerHTML = `<a href="${LinkVi3}" target="_blank" rel="noopener noreferrer">
    <div><img src="img/resources/ingresar.png" alt="" class="btn-action-img" /></div>
    <div class="btn-action-estado">
      <div class="btnState" id="btnStateVi3"><p>Acceder</p></div>
    </div>
  </a>`;
      // FINALIZADO
      if (t.remainTime <= tresHoras) {
        stateActVi3 = 3;
        clearInterval(timerUpdate);
        document.getElementById("contenedorInfoLu3").className =
          "contenedor-informacion contenedor-informacion-off";
        document.getElementById("btnAccionVi3").innerHTML = `
        <div class="btn-action-estado">
          <div class="btnState" id="btnStateVi3"><p>Finalizado</p></div>          
        </div>`;
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

  // // TARJETAS 2 LUNES

  // (tipoTaller2 = "Conferencia"),
  //   (nombreTallerista2 = " ING. José Riojas "),
  //   (empresaTallerista2 = "Drone Collision<br>Center"),
  //   (gruposAsignados2 = "Todos los Semestres"),
  //   (tituloTaller2 = '"LA IA EN LOS DRONES Y LOS SECTORES PRODUCTIVOS"'),
  //   (horasTaller2 = "16:00 - 17:00"),
  //   (imagenTaller2 = "img/talleristas/JoseRiojas.png"),
  //   (bioTallerista2 =
  //     "Ingeniero en sistemas, actualmente cursando un MD en Inteligencia Artificial en el Tecmilenio apasionado de la electrónica y la tecnología, fundador de 2 empresas relacionadas al mercado de los sistemas no tripulados, ha participado en diferentes foros tanto nacionales como internacionales, impartido talleres y capacitaciones a empresas civiles y de gobierno. Fundador de Drone SAR México una ONG de apoyo social en situaciones de desastre y personas extraviadas. Actualmente trabajando en varios proyectos que integran los sistemas no tripulados y la IA en diversos sectores comercial y sociales");

  // // TARJETAS 3 LUNES

  // (tipoTaller3 = "Mesa Redonda"),
  //   (nombreTallerista3 = "Academia de Ing. en TICS"),
  //   (empresaTallerista3 = "ITS Misantla"),
  //   (gruposAsignados3 = "Todos los Semestres"),
  //   (tituloTaller3 = '"INDUSTRIA INSITU: PEGA SYSTEMS Y HUAWEI TECHNOLOGIES"'),
  //   (horasTaller3 = "17:00 - 18:00"),
  //   (imagenTaller3 = "img/talleristas/pega-huawei.png"),
  //   (bioTallerista3 = "MUY PRONTO!");

  // TARJETAS 2 LUNES

  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = " ING. Uriel Pérez Amador "),
    (empresaTallerista2 = "Mobiik Development"),
    (gruposAsignados2 = "507 & 707"),
    (tituloTaller2 = '"CONCEPTOS BÁSICOS DE IONIC"'),
    (horasTaller2 = "18:00 - 21:00"),
    (imagenTaller2 = "img/talleristas/UrielPerez.png"),
    (bioTallerista2 =
      "Uriel Pérez A. es un Programming & Platform Development Senior con más de 13 años de experiencia en el desarrollo de software, aplicaciones web corporativas, desarrollo de aplicaciones móviles, así como desarrollo de servicios y microservicios para empresas a nivel nacional e internacional. Con su amplia experiencia se ha desarrollado en distintas empresas de renombre, tales como Femsa Comercio (ramo gasolinero), Binbit (aplicaciones móviles comerciales), Flynode (Servicio de SMS), Centro de Control Comando (Supervisor del CCTV), Ganprover (Grupo Ganadero) y muchas otras empresas. Actualmente radica en la ciudad de Xalapa, Veracruz, por cuestiones de contingencia y se encuentra desarrollando servicios y aplicaciones de gobierno mediante contrato privado a la par de microsoft.");
  // MostrarTarjetasPredeterminado();
  OcultarSeccion2Completa();
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
    (nombreTallerista2 = " ING. José Riojas "),
    (empresaTallerista2 = "Drone Collision<br>Center"),
    (gruposAsignados2 = "Todos los Semestres"),
    (tituloTaller2 = '"LA IA EN LOS DRONES Y LOS SECTORES PRODUCTIVOS"'),
    (horasTaller2 = "16:00 - 17:00"),
    (imagenTaller2 = "img/talleristas/JoseRiojas.png"),
    (bioTallerista2 =
      "Ingeniero en sistemas, actualmente cursando un MD en Inteligencia Artificial en el Tecmilenio apasionado de la electrónica y la tecnología, fundador de 2 empresas relacionadas al mercado de los sistemas no tripulados, ha participado en diferentes foros tanto nacionales como internacionales, impartido talleres y capacitaciones a empresas civiles y de gobierno. Fundador de Drone SAR México una ONG de apoyo social en situaciones de desastre y personas extraviadas. Actualmente trabajando en varios proyectos que integran los sistemas no tripulados y la IA en diversos sectores comercial y sociales");

  // (tipoTaller2 = "Conferencia"),
  //   (nombreTallerista2 = " ING. Gustavo Carballo Arroyo "),
  //   (empresaTallerista2 = "Volkswagen México"),
  //   (gruposAsignados2 = "Por Confirmar"),
  //   (tituloTaller2 = '"5G EN EL SECTOR AUTOMOTRÍZ"'),
  //   (horasTaller2 = "16:00 - 17:00"),
  //   (imagenTaller2 = "img/talleristas/Hombre.png"),
  //   (bioTallerista2 = "MUY PRONTO!");

  // TARJETAS 3 MARTES

  (tipoTaller3 = "Conferencia"),
    (nombreTallerista3 = "MGTI. Laura May Salazar"),
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
    (bioTallerista4 =
      "Uriel Pérez A. es un Programming & Platform Development Senior con más de 13 años de experiencia en el desarrollo de software, aplicaciones web corporativas, desarrollo de aplicaciones móviles, así como desarrollo de servicios y microservicios para empresas a nivel nacional e internacional. Con su amplia experiencia se ha desarrollado en distintas empresas de renombre, tales como Femsa Comercio (ramo gasolinero), Binbit (aplicaciones móviles comerciales), Flynode (Servicio de SMS), Centro de Control Comando (Supervisor del CCTV), Ganprover (Grupo Ganadero) y muchas otras empresas. Actualmente radica en la ciudad de Xalapa, Veracruz, por cuestiones de contingencia y se encuentra desarrollando servicios y aplicaciones de gobierno mediante contrato privado a la par de microsoft.");

  MostrarTarjetasPredeterminado();
}

// ------------------------MIERCOLES-------------------------
function informacionMiercoles() {
  // TARJETA 1 MIERCOLES
  (tipoTaller1 = "Conferencia"),
    (nombreTallerista1 = " Luz Adriana Lopez Hernandez "),
    (empresaTallerista1 = "IDS Comercial"),
    (tituloTaller1 = '"AGILE O MINDSET, ¿QUÉ VA PRIMERO?"'),
    (gruposAsignados1 = "Todos los semestres"),
    (horasTaller1 = "10:00 - 11:00"),
    (imagenTaller1 = "img/talleristas/Luz_Adriana.png"),
    (bioTallerista1 = "Subdirectora de Práctica, en ids con más de 12 años de experiencia en Tecnologías de la Información. Ha trabajado con los clientes más importantes de la compañía principalmente de la industria financiera, obtenido excelentes resultados.  Siempre está en constante actualización profesional. Cuenta con certificaciones en PMP, Ititl found, Scrum master, Product owner safe,  Leading  safe por mencionar algunas.");

  // TARJETA 2 MIERCOLES
  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "ING. Juan Diego Aquino<br>Barrios"),
    (empresaTallerista2 = "AmCoder"),
    (tituloTaller2 =
      '"WEB APLICATION WITH CODEMONO: INSPIRAR PARA CREAR, CREAR PARA INSPIRAR"'),
    (gruposAsignados2 = "707"),
    (horasTaller2 = "11:00 - 14:00"),
    (imagenTaller2 = "img/talleristas/Juan_Diego.png"),
    (bioTallerista2 = "Desarrollador web con 6 años de experiencia, pero si algo me gusta aparte de mi profesión es viajar, conocer nuevos lugares e inspirarme a crear proyectos que transmitan esa sensación de emoción y alegría a quien los ve y seguir ese ciclo motivando a más persona a crear, también me gusta tecnología y creo que la parte que más destaca de mí es el humor, aunque también aprecio el trabajo en equipo y valoro el esfuerzo de las personas.");

  // TARJETAS 3 MIERCOLES

  (tipoTaller3 = "Taller"),
    (nombreTallerista3 = "MCCyT. Keila Elena Ocaña"),
    (empresaTallerista3 = "ITS de Martínez<br>de la Torre"),
    (gruposAsignados3 = "707"),
    (tituloTaller3 = '"ADMINISTRACIÓN DE MÁQUINAS LINUX CON WEBMIN"'),
    (horasTaller3 = "15:00 - 19:00"),
    (imagenTaller3 = "img/talleristas/KeilaElena.png"),
    (bioTallerista3 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETAS 4 MIERCOLES

  (tipoTaller4 = "Taller"),
    (nombreTallerista4 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista4 = "ITS de Misantla"),
    (gruposAsignados4 = "107, 307 & 507"),
    (tituloTaller4 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller4 = "16:00 - 19:00"),
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
    (horasTaller1 = "15:00 - 19:00"),
    (imagenTaller1 = "img/talleristas/KeilaElena.png"),
    (bioTallerista1 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETA 2 JUEVES

  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista2 = "ITS de Misantla"),
    (gruposAsignados2 = "107, 307 & 507"),
    (tituloTaller2 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller2 = "16:00 - 19:00"),
    (imagenTaller2 = "img/talleristas/Fernando.png"),
    (bioTallerista2 =
      "MSC Fernando Alberto Hernández Guevara realizó la Maestría en Sistemas Computacionales en el Instituto Tecnológico Superior de Misantla, es egresado de la carrera de Licenciatura en Informática por el Instituto Tecnológico Superior de Misantla. Actualmente jefe del departamento de sistematización, donde realiza funciones de network engineer, DB manager, Server Administrator, Linux system administration, Domain Name Service administration y gestión de cuentas de correos en la plataforma de Gsuite education y Microsoft 365 for faculty, gestión de plataformas de educación a distancia moodle, es líder de proyectos de desarrollo de sotfware como Sistema del portal de pago en línea, sistema del congreso internacional de ingenierías, gestión de pagos en caja, sistema de inventarios institucional, actualmente se está llevando a cabo el desarrollo de sistema de control de proceso de la revista ingeniantes, la migración de las tecnologías del ISP a fibra óptica, interconexión entre edificios por medio de fibra óptica . Desde la dupla educación y sistemas computacionales ha trabajado como docente de tiempo parcial en el sistema semiescolarizado impartiendo asignaturas enfocadas a las redes de computadoras, conmutación y enrutamiento de redes de datos, administración de redes, administración de bases de datos, entre otras.");

  OcultarSeccion2Completa();
}

// ------------------------VIERNES-------------------------
function informacionViernes() {
  // TARJETA 1 VIERNES
  (tipoTaller1 = "Conferencia"),
    (nombreTallerista1 = "Ramiro González Sánchez"),
    (empresaTallerista1 = "IDS Comercial"),
    (tituloTaller1 = '"¿CÓMO SER UN GRAN DESARROLLADOR DE APLICACIONES?"'),
    (gruposAsignados1 = "Todos los Semestres"),
    (horasTaller1 = "13:00 - 14:00"),
    (imagenTaller1 = "img/talleristas/Ramiro_Gonzales.png"),
    (bioTallerista1 = "Subdirector de Arquitectura en ids  con más de 30 años de experiencia desarrollando software para prácticamente todas las plataformas comerciales existentes, desde mainframes hasta dispositivos móviles. Experto en Ingeniería de Software y Bases de Datos, especialista en diagnosticar sistemas deficientes. Ingeniero en Computación por parte de la UNAM y egresado de Maestría en Ciencia e Ingeniería de la Computación del IIMAS. Desde hace 15 años solo programa en powerpoint y cobra por eso. Odia el agilismo flácido.");

  // TARJETA 2 VIERNES
  (tipoTaller2 = "Taller"),
    (nombreTallerista2 = "MCCyT. Keila Elena Ocaña"),
    (empresaTallerista2 = "ITS de Martínez<br>de la Torre"),
    (gruposAsignados2 = "707"),
    (tituloTaller2 = '"ADMINISTRACIÓN DE MÁQUINAS LINUX CON WEBMIN"'),
    (horasTaller2 = "15:00 - 19:00"),
    (imagenTaller2 = "img/talleristas/KeilaElena.png"),
    (bioTallerista2 =
      "Realizó sus estudios de licenciatura en Informática en el Instituto Tecnológico Superior de Teziutlán y sus estudios de Maestría en Ciencias Computacionales y Telecomunicaciones en la Universidad IEU, cuenta con certificaciones por parte del Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) como EC0772, EC0477, EC0366, EC0217 y EC0301. Trabaja como docente en el Instituto Tecnológico Superior de Martínez de la Torre, impartiendo asignaturas de licenciatura como administración de redes, redes de computadoras, fundamentos de telecomunicaciones, administración de servidores, arquitectura de computadores, sistemas operativos, administración de bases de datos, taller de bases de datos, entre otras. Actualmente es docente investigadora en el ITS de Martínez de la Torre colaborando en distintos proyectos, es miembro del comité de investigación, innovación, emprendimiento y vinculación del ITSMT, presidenta de la academia de Ing. en Sistemas Computacionales, miembro activo de la unión internacional por los derechos de todos y de la sociedad mexicana de agricultura sostenible A.C. (SOMAS A.C).");

  // TARJETA 3 VIERNES

  (tipoTaller3 = "Taller"),
    (nombreTallerista3 = "MSC. Fernando Alberto<br>Hernández"),
    (empresaTallerista3 = "ITS de Misantla"),
    (gruposAsignados3 = "107, 307 & 507"),
    (tituloTaller3 = '"DETECCIÓN DE INTRUSIÓN CON PFSENSE"'),
    (horasTaller3 = "16:00 - 19:00"),
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
btn1.addEventListener("click", mostrarLu, true);
btn2.addEventListener("click", mostrarMa, true);
btn3.addEventListener("click", mostrarMi, true);
btn4.addEventListener("click", mostrarJu, true);
btn5.addEventListener("click", mostrarVi, true);
mostrarLu();

function mostrarLu() {
  if (cont1 == 0) {
    cont1 = 1;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionLunes();
      btnLunesON();
      // verifyStateCards();
    }, 400);
    setTimeout(function () {
      verifyStateCards();
      console.log("cont LUNES: " + cont1 + " Estado de lunes: " + stateActLu1);
    }, 1200);
    // console.log("Lunes seleccionado");
    // console.log("cont LUNES: " + cont1 + " Estado de lunes: " + stateActLu1);
  } else {
    // btnOFF();
    // console.log("LUNES DESELECCIONADO");
    // // document.getElementById("TSem1").style.display = "none";
    cont1 = 0;
  }
}
function mostrarMa() {
  if (cont2 == 0) {
    cont2 = 1;
    cont1 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionMartes();
      btnMartesON();
      verifyStateCards();
    }, 400);
  } else {
    // btnOFF();
    cont2 = 0;
  }
}
function mostrarMi() {
  if (cont3 == 0) {
    cont3 = 1;
    cont1 = 0;
    cont2 = 0;
    cont4 = 0;
    cont5 = 0;
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionMiercoles();
      btnMiercolesON();
      verifyStateCards();
    }, 400);
  } else {
    // btnOFF();
    cont3 = 0;
  }
}
function mostrarJu() {
  if (cont4 == 0) {
    cont4 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont5 = 0;
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionJueves();
      btnJuevesON();
      verifyStateCards();
    }, 400);
  } else {
    // btnOFF();
    cont4 = 0;
  }
}

function mostrarVi() {
  if (cont5 == 0) {
    cont5 = 1;
    cont1 = 0;
    cont3 = 0;
    cont2 = 0;
    cont4 = 0;
    tallerSection.style.opacity = 0;
    setTimeout(function () {
      tallerSection.style.opacity = 1;
      informacionViernes();
      btnViernesON();
      verifyStateCards();
    }, 400);
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

  ////BOTONES DE ACCESO LUNES TARJETA 1
  if (!!document.getElementById("btnAccionLu1")) {
    document.getElementById("btnAccionLu1").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMa1")) {
    document.getElementById("btnAccionMa1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi1")) {
    document.getElementById("btnAccionMi1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu1")) {
    document.getElementById("btnAccionJu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi1")) {
    document.getElementById("btnAccionVi1").style.display = "none";
  }

  ////BOTONES DE ACCESO LUNES TARJETA 2
  if (!!document.getElementById("btnAccionLu2")) {
    document.getElementById("btnAccionLu2").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMa2")) {
    document.getElementById("btnAccionMa2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi2")) {
    document.getElementById("btnAccionMi2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu2")) {
    document.getElementById("btnAccionJu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi2")) {
    document.getElementById("btnAccionVi2").style.display = "none";
  }

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
  document.getElementById(
    "imagenBio1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio1"
  ).innerHTML = `<h3>${nombreTallerista1}</h3>
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
  document.getElementById(
    "imagenBio2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio2"
  ).innerHTML = `<h3>${nombreTallerista2}</h3>
  <h4>${empresaTallerista2}</h4>`;
  document.getElementById("trayectoriaBio2").innerText = `${bioTallerista2}`;

  // Martes 16
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // document.getElementById("btnStateMa1").style.display = "none";
  // document.getElementById("btnStateMa2").style.display = "none";
  // document.getElementById("btnStateMa3").style.display = "none";
  // document.getElementById("btnStateMa4").style.display = "none";
  // Miercoles 17
  // document.getElementById("btnStateMi1").style.display = "none";
  // document.getElementById("btnStateMi2").style.display = "none";
  // document.getElementById("btnStateMi3").style.display = "none";
  // document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  // document.getElementById("btnStateJu1").style.display = "none";
  // document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // document.getElementById("btnStateJu1").style.display = "none";
  // Viernes 19
  // document.getElementById("btnStateVi1").style.display = "none";
  // document.getElementById("btnStateVi2").style.display = "none";
  // // document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
  // document.getElementById("btnStateVi1").style.display = "none";
}

function btnMartesON() {
  ////BOTONES DE ACCESO MARTES TARJETA 1
  if (!!document.getElementById("btnAccionLu1")) {
    document.getElementById("btnAccionLu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa1")) {
    document.getElementById("btnAccionMa1").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMi1")) {
    document.getElementById("btnAccionMi1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu1")) {
    document.getElementById("btnAccionJu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi1")) {
    document.getElementById("btnAccionVi1").style.display = "none";
  }

  ////BOTONES DE ACCESO MARTES TARJETA 2
  if (!!document.getElementById("btnAccionLu2")) {
    document.getElementById("btnAccionLu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa2")) {
    document.getElementById("btnAccionMa2").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMi2")) {
    document.getElementById("btnAccionMi2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu2")) {
    document.getElementById("btnAccionJu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi2")) {
    document.getElementById("btnAccionVi2").style.display = "none";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 3
  if (!!document.getElementById("btnAccionLu3")) {
    document.getElementById("btnAccionLu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa3")) {
    document.getElementById("btnAccionMa3").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMi3")) {
    document.getElementById("btnAccionMi3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu3")) {
    document.getElementById("btnAccionJu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi3")) {
    document.getElementById("btnAccionVi3").style.display = "none";
  }

  ////BOTONES DE ACCESO MARTES TARJETA 4
  if (!!document.getElementById("btnAccionLu4")) {
    document.getElementById("btnAccionLu4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa4")) {
    document.getElementById("btnAccionMa4").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionMi4")) {
    document.getElementById("btnAccionMi4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu4")) {
    document.getElementById("btnAccionJu4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi4")) {
    document.getElementById("btnAccionVi4").style.display = "none";
  }

  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // document.getElementById("btnStateLu1").style.display = "none";
  // document.getElementById("btnStateLu2").style.display = "none";
  // document.getElementById("btnStateLu3").style.display = "none";
  // document.getElementById("btnStateLu4").style.display = "none";
  // Martes 16
  // document.getElementById("btnStateMa1").style.display = "block";
  // document.getElementById("btnStateMa2").style.display = "block";
  // document.getElementById("btnStateMa3").style.display = "block";
  // document.getElementById("btnStateMa4").style.display = "block";
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
  document.getElementById(
    "imagenBio1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio1"
  ).innerHTML = `<h3>${nombreTallerista1}</h3>
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
  document.getElementById(
    "imagenBio2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio2"
  ).innerHTML = `<h3>${nombreTallerista2}</h3>
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
  document.getElementById(
    "imagenBio3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio3"
  ).innerHTML = `<h3>${nombreTallerista3}</h3>
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
  document.getElementById(
    "imagenBio4"
  ).innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio4"
  ).innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;

  // Miercoles 17
  // document.getElementById("btnStateMi1").style.display = "none";
  // document.getElementById("btnStateMi2").style.display = "none";
  // document.getElementById("btnStateMi3").style.display = "none";
  // document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  // document.getElementById("btnStateJu1").style.display = "none";
  // document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  // document.getElementById("btnStateVi1").style.display = "none";
  // document.getElementById("btnStateVi2").style.display = "none";
  // document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnMiercolesON() {
  if (!!document.getElementById("btnAccionLu1")) {
    document.getElementById("btnAccionLu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa1")) {
    document.getElementById("btnAccionMa1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi1")) {
    document.getElementById("btnAccionMi1").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionJu1")) {
    document.getElementById("btnAccionJu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi1")) {
    document.getElementById("btnAccionVi1").style.display = "none";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 2
  if (!!document.getElementById("btnAccionLu2")) {
    document.getElementById("btnAccionLu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa2")) {
    document.getElementById("btnAccionMa2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi2")) {
    document.getElementById("btnAccionMi2").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionJu2")) {
    document.getElementById("btnAccionJu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi2")) {
    document.getElementById("btnAccionVi2").style.display = "none";
  }

  ////BOTONES DE ACCESO MARTES TARJETA 3
  if (!!document.getElementById("btnAccionLu3")) {
    document.getElementById("btnAccionLu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa3")) {
    document.getElementById("btnAccionMa3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi3")) {
    document.getElementById("btnAccionMi3").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionJu3")) {
    document.getElementById("btnAccionJu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi3")) {
    document.getElementById("btnAccionVi3").style.display = "none";
  }

  ////BOTONES DE ACCESO MARTES TARJETA 4
  if (!!document.getElementById("btnAccionLu4")) {
    document.getElementById("btnAccionLu4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa4")) {
    document.getElementById("btnAccionMa4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi4")) {
    document.getElementById("btnAccionMi4").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionJu4")) {
    document.getElementById("btnAccionJu4").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi4")) {
    document.getElementById("btnAccionVi4").style.display = "none";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 5
  if (!!document.getElementById("btnAccionLu5")) {
    document.getElementById("btnAccionLu5").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa5")) {
    document.getElementById("btnAccionMa5").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi5")) {
    document.getElementById("btnAccionMi5").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionJu5")) {
    document.getElementById("btnAccionJu5").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi5")) {
    document.getElementById("btnAccionVi5").style.display = "none";
  }

  // Lunes 15
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // document.getElementById("btnStateLu1").style.display = "none";
  // document.getElementById("btnStateLu2").style.display = "none";
  // document.getElementById("btnStateLu3").style.display = "none";
  // document.getElementById("btnStateLu4").style.display = "none";
  // Martes 16
  // document.getElementById("btnStateMa1").style.display = "none";
  // document.getElementById("btnStateMa2").style.display = "none";
  // document.getElementById("btnStateMa3").style.display = "none";
  // document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  // document.getElementById("btnStateMi1").style.display = "block";
  // document.getElementById("btnStateMi2").style.display = "block";
  // document.getElementById("btnStateMi3").style.display = "block";
  // document.getElementById("btnStateMi4").style.display = "block";
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
  document.getElementById(
    "imagenBio1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio1"
  ).innerHTML = `<h3>${nombreTallerista1}</h3>
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
  document.getElementById(
    "imagenBio2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio2"
  ).innerHTML = `<h3>${nombreTallerista2}</h3>
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
  document.getElementById(
    "imagenBio3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio3"
  ).innerHTML = `<h3>${nombreTallerista3}</h3>
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
  document.getElementById(
    "imagenBio4"
  ).innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio4"
  ).innerHTML = `<h3>${nombreTallerista4}</h3>
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
  document.getElementById(
    "imagenBio5"
  ).innerHTML = `<img src="${imagenTaller5}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio5"
  ).innerHTML = `<h3>${nombreTallerista5}</h3>
  <h4>${empresaTallerista5}</h4>`;
  document.getElementById("trayectoriaBio5").innerText = `${bioTallerista5}`;
  // Jueves 18
  // document.getElementById("btnStateJu1").style.display = "none";
  // document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  // document.getElementById("btnStateVi1").style.display = "none";
  // document.getElementById("btnStateVi2").style.display = "none";
  // document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}

function btnJuevesON() {
  if (!!document.getElementById("btnAccionLu1")) {
    document.getElementById("btnAccionLu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa1")) {
    document.getElementById("btnAccionMa1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi1")) {
    document.getElementById("btnAccionMi1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu1")) {
    document.getElementById("btnAccionJu1").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionVi1")) {
    document.getElementById("btnAccionVi1").style.display = "none";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 2
  if (!!document.getElementById("btnAccionLu2")) {
    document.getElementById("btnAccionLu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa2")) {
    document.getElementById("btnAccionMa2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi2")) {
    document.getElementById("btnAccionMi2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu2")) {
    document.getElementById("btnAccionJu2").style.display = "flex";
  }
  if (!!document.getElementById("btnAccionVi2")) {
    document.getElementById("btnAccionVi2").style.display = "none";
  }
  // Lunes 15
  // document.getElementById("btnStateLu1").style.display = "none";
  // document.getElementById("btnStateLu2").style.display = "none";
  // document.getElementById("btnStateLu3").style.display = "none";
  // document.getElementById("btnStateLu4").style.display = "none";
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  // document.getElementById("btnStateMa1").style.display = "none";
  // document.getElementById("btnStateMa2").style.display = "none";
  // document.getElementById("btnStateMa3").style.display = "none";
  // document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  // document.getElementById("btnStateMi1").style.display = "none";
  // document.getElementById("btnStateMi2").style.display = "none";
  // document.getElementById("btnStateMi3").style.display = "none";
  // document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  // document.getElementById("btnStateJu1").style.display = "block";
  // document.getElementById("btnStateJu2").style.display = "block";
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
  document.getElementById(
    "imagenBio1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio1"
  ).innerHTML = `<h3>${nombreTallerista1}</h3>
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
  document.getElementById(
    "imagenBio2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio2"
  ).innerHTML = `<h3>${nombreTallerista2}</h3>
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
  document.getElementById(
    "imagenBio3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio3"
  ).innerHTML = `<h3>${nombreTallerista3}</h3>
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
  document.getElementById(
    "imagenBio4"
  ).innerHTML = `<img src="${imagenTaller4}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio4"
  ).innerHTML = `<h3>${nombreTallerista4}</h3>
  <h4>${empresaTallerista4}</h4>`;
  document.getElementById("trayectoriaBio4").innerText = `${bioTallerista4}`;
  // Viernes 19
  // document.getElementById("btnStateVi1").style.display = "none";
  // document.getElementById("btnStateVi2").style.display = "none";
  // document.getElementById("btnStateVi3").style.display = "none";
  document.getElementById("Sbtn5").style.backgroundColor = "#fff";
  document.getElementById("Sbtn5").style.color = "#3D3A6C";
  document.getElementById("Sbtn5").style.borderColor = "#fff";
}
function btnViernesON() {
  if (!!document.getElementById("btnAccionLu1")) {
    document.getElementById("btnAccionLu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa1")) {
    document.getElementById("btnAccionMa1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi1")) {
    document.getElementById("btnAccionMi1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu1")) {
    document.getElementById("btnAccionJu1").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi1")) {
    document.getElementById("btnAccionVi1").style.display = "flex";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 2
  if (!!document.getElementById("btnAccionLu2")) {
    document.getElementById("btnAccionLu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa2")) {
    document.getElementById("btnAccionMa2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi2")) {
    document.getElementById("btnAccionMi2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu2")) {
    document.getElementById("btnAccionJu2").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi2")) {
    document.getElementById("btnAccionVi2").style.display = "flex";
  }
  ////BOTONES DE ACCESO MARTES TARJETA 3
  if (!!document.getElementById("btnAccionLu3")) {
    document.getElementById("btnAccionLu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMa3")) {
    document.getElementById("btnAccionMa3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionMi3")) {
    document.getElementById("btnAccionMi3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionJu3")) {
    document.getElementById("btnAccionJu3").style.display = "none";
  }
  if (!!document.getElementById("btnAccionVi3")) {
    document.getElementById("btnAccionVi3").style.display = "flex";
  }
  // Lunes 15
  // document.getElementById("btnStateLu1").style.display = "none";
  // document.getElementById("btnStateLu2").style.display = "none";
  // document.getElementById("btnStateLu3").style.display = "none";
  // document.getElementById("btnStateLu4").style.display = "none";
  document.getElementById("Sbtn1").style.backgroundColor = "#fff";
  document.getElementById("Sbtn1").style.color = "#3D3A6C";
  document.getElementById("Sbtn1").style.borderColor = "#fff";
  // Martes 16
  // document.getElementById("btnStateMa1").style.display = "none";
  // document.getElementById("btnStateMa2").style.display = "none";
  // document.getElementById("btnStateMa3").style.display = "none";
  // document.getElementById("btnStateMa4").style.display = "none";
  document.getElementById("Sbtn2").style.backgroundColor = "#fff";
  document.getElementById("Sbtn2").style.color = "#3D3A6C";
  document.getElementById("Sbtn2").style.borderColor = "#fff";
  // Miercoles 17
  // document.getElementById("btnStateMi1").style.display = "none";
  // document.getElementById("btnStateMi2").style.display = "none";
  // document.getElementById("btnStateMi3").style.display = "none";
  // document.getElementById("btnStateMi4").style.display = "none";
  document.getElementById("Sbtn3").style.backgroundColor = "#fff";
  document.getElementById("Sbtn3").style.color = "#3D3A6C";
  document.getElementById("Sbtn3").style.borderColor = "#fff";
  // Jueves 18
  // document.getElementById("btnStateJu1").style.display = "none";
  // document.getElementById("btnStateJu2").style.display = "none";
  document.getElementById("Sbtn4").style.backgroundColor = "#fff";
  document.getElementById("Sbtn4").style.color = "#3D3A6C";
  document.getElementById("Sbtn4").style.borderColor = "#fff";
  // Viernes 19
  // document.getElementById("btnStateVi1").style.display = "block";
  // document.getElementById("btnStateVi2").style.display = "block";
  // document.getElementById("btnStateVi3").style.display = "block";
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
  document.getElementById(
    "imagenBio1"
  ).innerHTML = `<img src="${imagenTaller1}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio1"
  ).innerHTML = `<h3>${nombreTallerista1}</h3>
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
  document.getElementById(
    "imagenBio2"
  ).innerHTML = `<img src="${imagenTaller2}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio2"
  ).innerHTML = `<h3>${nombreTallerista2}</h3>
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
  document.getElementById(
    "imagenBio3"
  ).innerHTML = `<img src="${imagenTaller3}" alt="" class="img-persona2">`;
  document.getElementById(
    "nombreBio3"
  ).innerHTML = `<h3>${nombreTallerista3}</h3>
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
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};
const stop = () => {
  clearInterval(intervalo);
};
carrusel.addEventListener("mouseover", () => {
  stop();
});
carrusel.addEventListener("mouseout", () => {
  start();
});

start();
