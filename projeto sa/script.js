const botaoComecar = document.querySelector(".comecar")
const botoesModo = document.querySelectorAll("#modo .opcao") 
const botoesDificuldade = document.querySelectorAll("#dificuldade .opcao") 
const areaDificuldade = document.getElementById("dificuldade")
const areaPersonalizada = document.getElementById("palavraSelecionada")
const inputpalavra = document.getElementById("palavraInput")
const textDificul = document.getElementById("textodificul")
const menu = document.getElementById("menu")
const jogo = document.getElementById("jogo")
const voltarmenu = document.getElementById("voltarMenu")

botoesModo.forEach(botao =>{
    botao.addEventListener("click", () =>{
        botoesModo.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")

        if(botao.innerText.trim() === "Personalizada"){
            areaDificuldade.style.display = "none"
            areaPersonalizada.style.display = ""
            textDificul.style.display = "none"
        }else{
            areaDificuldade.style.display = ""
            areaPersonalizada.style.display = "none"
            textDificul.style.display = ""
        }
    })
})

botoesDificuldade.forEach(botao =>{
    botao.addEventListener("click", () =>{
        botoesDificuldade.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")
    })
})
voltarmenu.addEventListener('click', () =>{
    menu.style.display = "block"
    jogo.style.display = "none"
})

botaoComecar.addEventListener('click', ()=>{
    menu.style.display = "none"
    jogo.style.display = "block"

})




