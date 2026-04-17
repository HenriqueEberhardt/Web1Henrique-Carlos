// Tela de Login
const formLogin = document.getElementById("loginForm");
const form = document.getElementById("form");
const tabela = document.getElementById("tabela");

let dados = JSON.parse(localStorage.getItem("dados")) || [];

window.onload = () => {
    if (localStorage.getItem("lembrar") === "true") {
        document.getElementById("usuario").value = localStorage.getItem("usuario");
        document.getElementById("lembrar").checked = true;
    }
    renderizar();
};

if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        let user = document.getElementById("usuario").value;
        let senha = document.getElementById("senha").value;

        if (user === "" || senha === "") {
            alert("Preencha todos os campos!");
            return;
        }

        // Precisa colocar um if caso o login seja invalido ( Diferente de graducao/posto.nomeDeGuerra)

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
}

function recuperarSenha() {
    alert("Teste troca de senha");
}

function cadastrarUsuario() {
    alert("Teste cadastro de usuário");
}

function goHome() {
    window.location.reload();
}

function menuBar(){
    const menuBar = document.getElementById("menu")

    menuBar.classList.toggle("hidden")
}

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let numero = document.getElementById("numero").value;
        let nome = document.getElementById("nome").value;
        let companhia = document.getElementById("companhia").value;
        let data = document.getElementById("data").value;
        let index = document.getElementById("indexEdit").value;

        if (numero == "" ||
            nome == "" ||
            companhia == "" ||
            data == "") {
                alert("Preencha todos os campos");
                return;
            }

        let item = {numero, nome, companhia, data};

        if (index === "") {
            dados.push(item)
        } else {
            dados[index] = item;
        }

        localStorage.setItem("dados", JSON.stringify(dados));

        limpar();
        renderizar();
    })  
}

function limpar() {
    form.reset();
    document.getElementById("indexEdit").value = "";
}

function renderizar() {
    tabela.innerHTML = "";

    dados.forEach((d, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${d.numero}</td>
            <td>${d.nome}</td>
            <td>${d.companhia}</td>
            <td>${d.data}</td>
            <td>
                <button onclick="editar(${i})">Editar</button>
                <button onclick="excluir(${i})">Excluir</button>
            </td>
        </tr>`;
     
    });
}

function editar(i) {
    let d = dados[i];

    document.getElementById("numero").value = d.numero;
    document.getElementById("nome").value = d.nome;
    document.getElementById("companhia").value = d.companhia;
    document.getElementById("data").value = d.data;
    document.getElementById("indexEdit").value = i;

}

function excluir(i) {
    if(confirm("Deseja excluir?")) {
        dados.splice(i, 1);
        localStorage.setItem("dados", JSON.stringify("dados"));
        renderizar();
    }
}
