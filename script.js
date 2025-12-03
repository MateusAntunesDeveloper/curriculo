document.getElementById("btn-verificar").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensagem");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        msg.textContent = "E-mail válido ✔️";
        msg.style.color = "green";
    } else {
        msg.textContent = "E-mail inválido ❌";
        msg.style.color = "red";
    }
});
