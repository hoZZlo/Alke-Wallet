//
if (!localStorage.getItem("saldo")) {
  localStorage.setItem("saldo", "86000");
  localStorage.setItem("movimientos", JSON.stringify([]));
}

const USER = "admin";
const PASS = "1234";


const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const u = user.value;
    const p = pass.value;

    if (u === USER && p === PASS) {
      localStorage.setItem("logged", "true");
      loginMsg.textContent = "Acceso correcto";
      loginMsg.style.color = "lime";
      setTimeout(() => location.href = "menu.html", 1000);
    } else {
      loginMsg.textContent = "Credenciales incorrectas";
      loginMsg.style.color = "red";
    }
  });
}

const saldoSpan = document.getElementById("saldo");
if (saldoSpan) {
  saldoSpan.textContent = localStorage.getItem("saldo");
}

function redirigir(url, nombre) {
  document.getElementById("msg").textContent =
  setTimeout(() => location.href = url, 1000);
}
