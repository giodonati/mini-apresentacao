//JS: Quando clicarmos na aba temos que mostrar o conteúdo na aba que foi clicada pelo usuário e esconder o conteúdo da anterior//
//pegar os elementos que representam as abas no HTML//
const abas = document.querySelectorAll(".aba")
//identificar o clique no elemento da aba//
abas.forEach(aba => {
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return
        }
        selecionarAba(aba)
        //esconder o conteudo anterior//
        const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")
        //mostrar o conteudo da aba selecionada//
        const idElementoInformacoesAba = `informacao-${aba.id}`

        const informacaoSerMostrada = document.getElementById(idElementoInformacoesAba)
        informacaoSerMostrada.classList.add("selecionado")
    })
})

function selecionarAba(aba) {
    // quando clicar, desmarcar a aba selecionada//
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")
    //marcar a aba clicada como selecionado//
    aba.classList.add("selecionado")
}