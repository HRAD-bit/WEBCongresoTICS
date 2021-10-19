var btn1 = document.getElementById('Sbtn1'),
    btn2 = document.getElementById('Sbtn2'),
    btn3 = document.getElementById('Sbtn3'),
    btn4 = document.getElementById('Sbtn4'),
    cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0;

document.getElementById('TSem1').style.display = "none";
document.getElementById('TSem3').style.display = "none";
document.getElementById('TSem5').style.display = "none";
document.getElementById('TSem7').style.display = "none";

btn1.addEventListener('click', mostrarS1, true);
btn2.addEventListener('click', mostrarS3, true);
btn3.addEventListener('click', mostrarS5, true);
btn4.addEventListener('click', mostrarS7, true);

function mostrarS1() {
    if (cont1 == 0) {
        document.getElementById('TSem1').style.display = "block";
        document.getElementById('TSem3').style.display = "none";
        document.getElementById('TSem5').style.display = "none";
        document.getElementById('TSem7').style.display = "none";
        cont1 = 1;
    } else {
        document.getElementById('TSem1').style.display = "none";
        cont1 = 0;
    }

}
function mostrarS3() {
    if (cont2 == 0) {
        document.getElementById('TSem3').style.display = "block";
        document.getElementById('TSem1').style.display = "none";
        document.getElementById('TSem5').style.display = "none";
        document.getElementById('TSem7').style.display = "none";
        cont2 = 1;
    } else {
        document.getElementById('TSem3').style.display = "none";
        cont2 = 0;
    }
}
function mostrarS5() {
    if (cont3 == 0) {
        document.getElementById('TSem5').style.display = "block";
        document.getElementById('TSem3').style.display = "none";
        document.getElementById('TSem1').style.display = "none";
        document.getElementById('TSem7').style.display = "none";
        cont3 = 1;
    } else {
        document.getElementById('TSem5').style.display = "none";
        cont3 = 0;
    }

}
function mostrarS7() {
    if (cont4 == 0) {
        document.getElementById('TSem7').style.display = "block";
        document.getElementById('TSem3').style.display = "none";
        document.getElementById('TSem1').style.display = "none";
        document.getElementById('TSem5').style.display = "none";
        cont4 = 1;
    } else {
        document.getElementById('TSem7').style.display = "none";
        cont4 = 0;
    }
}