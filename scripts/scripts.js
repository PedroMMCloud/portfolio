const formulario = document.querySelector("#contato-form");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

const mensagemStatus = document.querySelector("#mensagem-status");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    if (
        nomeValor === "" ||
        emailValor === "" ||
        mensagemValor === ""
    ) {
        mensagemStatus.textContent = "Preencha todos os campos.";
        return;
    }

    mensagemStatus.textContent = "Isso funcionaria se eu entendesse como utilizar APis, mas valeu a tentativa. Meus contatos estão logo abaixo.";

    console.log("Nome:", nomeValor);
    console.log("E-mail:", emailValor);
    console.log("Mensagem:", mensagemValor);
});