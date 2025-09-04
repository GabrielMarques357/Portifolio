 let player;

    // Essa função é chamada automaticamente quando a API do YouTube carrega
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '0', // Invisível
        width: '0',
        videoId: 'NjXweFUgY78', // <-- SEU VÍDEO
        playerVars: {
          autoplay: 0
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    }

    function onPlayerReady(event) {
      const selectElement = document.getElementById("select");
      const mensagemDiv = document.getElementById("mensagem");

      selectElement.addEventListener("change", function () {
        const selectedValue = this.value;

        if (selectedValue === "Escolha") {
          mensagemDiv.textContent = "";
          return;
        }

        // Mostra "Carregando..."
        mensagemDiv.textContent = "Carregando...";

        // Começa o vídeo do início e toca
        player.seekTo(0);
        player.playVideo();

        // Depois de 2 segundos, mostra a mensagem de erro
        setTimeout(() => {
          mensagemDiv.textContent = "Desculpe, outro usuário já possui esse sintoma.";
          player.pauseVideo(); // Opcional: pausa o vídeo após a mensagem
        }, 2000);
      });
    }