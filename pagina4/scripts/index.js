const selectElement = document.getElementById("select");
const mensagemDiv = document.getElementById("mensagem");

selectElement.addEventListener("change", function () {
    const selectedValue = this.value;

   
    if (selectedValue === "Escolha") {
        mensagemDiv.textContent = "";
        return;
    }

    
    mensagemDiv.textContent = "Carregando...";

    
    setTimeout(() => {
        mensagemDiv.textContent = "Desculpe, outro usuário já possui esse sintoma.";
    }, 2000); 
});