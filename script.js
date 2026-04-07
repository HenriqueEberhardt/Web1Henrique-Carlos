// Tela de Login
const form = document.getElementById("loginForm");

window.onload = () => {
    if (localStorage.getItem("lembrar") === "true") {
        document.getElementById("usuario").value = localStorage.getItem("usuario");
        document.getElementById("lembrar").checked = true;
    }
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (user === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Precisa colocar um if caso o login senha invalido

    sessionStorage.setItem("usuarioLogado", user.split(".")[0].toUpperCase() + " " +
        user.split(".")[1].toUpperCase());

    if (document.getElementById("lembrar").checked) {
        localStorage.setItem("lembrar", true);
        localStorage.setItem("usuario", user);
    } else {
        localStorage.setItem("lembrar", false);
    }

    window.location.href = "index.html";
});

function recuperarSenha() {
    alert("Teste troca de senha");
}

function cadastrarUsuario() {
    alert("Teste cadastro de usuário");
}

function goHome() {
    location.reload()
}