## Jogo da Palavra - MECRO

Este projeto consiste em um jogo de adivinhação de palavras desenvolvido utilizando HTML, CSS e JavaScript.

O jogador precisa descobrir qual é a palavra secreta antes que o número de tentativas acabe.

Esse projeto foi feito como forma de praticar lógica de programação e manipulação do DOM com JavaScript, além de aplicar conhecimentos básicos de desenvolvimento web.

## Objetivo do projeto

O objetivo desse projeto foi criar um jogo simples de adivinhação de palavras para praticar JavaScript, lógica de programação e interação com elementos da página.

## Regras do jogo

O jogador precisa descobrir uma palavra secreta.

A palavra aparece na tela com _ representando cada letra.

O jogador deve digitar uma letra por vez.

Se a letra estiver presente na palavra:

ela aparece na posição correta.

Se a letra não estiver presente:

o jogador perde uma tentativa.

O jogo termina quando:

o jogador descobre todas as letras da palavra, ou

as tentativas acabam.

## Modos de jogo

### Personalizada
Nesse modo, um jogador digita a palavra que deverá ser descoberta.
O número de tentativas será igual ao tamanho da palavra.

### Palavra do Dia
Nesse modo, o jogo escolhe automaticamente uma palavra de uma lista.
A palavra muda de acordo com o dia, fazendo com que todos joguem a mesma palavra naquele dia.

## Dificuldades

O jogo possui três níveis de dificuldade:

- Fácil – 12 tentativas

- Médio – 7 tentativas

- Difícil – 4 tentativas

## Variáveis principais

| Variável | Função |
|--------|--------|
| palavra | Guarda a palavra secreta |
| palavraMostrada | Array que representa a palavra com letras descobertas |
| tentativas | Número de tentativas restantes |
| letrasUsadas | Guarda as letras que o jogador já tentou |
| palavrasDoDia | Lista de palavras usadas no modo "Palavra do Dia" |
| tentativaIN | Campo onde o jogador digita a letra |
| palavraDiv | Elemento que mostra a palavra na tela |
| mensagemFinal | Mostra a mensagem final de vitória ou derrota |
| menu | Área do menu inicial |
| jogo | Área onde o jogo acontece |

## Fluxo do jogo

O jogador escolhe o modo de jogo.

Depois escolhe a dificuldade.

Ao clicar em Começar, o jogo define qual será a palavra:

digitada pelo jogador, ou

escolhida automaticamente da lista.

A palavra aparece na tela representada por traços, por exemplo: _ _ _ _.

O jogador começa a digitar letras.

O jogo verifica se a letra existe na palavra.

Se existir, ela aparece na posição correta.

Se não existir, o jogador perde uma tentativa.

O jogo continua até que:

todas as letras sejam descobertas (vitória), ou

as tentativas acabem (derrota).

## Pseudocódigo

```
INÍCIO

quando o jogador clicar em "Começar":

    verificar qual modo de jogo foi escolhido

    SE modo for "Palavra do Dia"
        escolher uma palavra da lista baseada na data
    SENÃO
        usar a palavra digitada pelo jogador

    definir número de tentativas de acordo com a dificuldade

    criar um array com "_" para cada letra da palavra

ENQUANTO tentativas > 0

    jogador digita uma letra

    SE a letra existir na palavra
        revelar a letra na posição correta
    SENÃO
        diminuir o número de tentativas

    SE não existir mais "_" na palavra
        mostrar mensagem de vitória
        encerrar o jogo

SE tentativas == 0
    mostrar mensagem de derrota

FIM
```

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Autores 

Projeto feito por:

Andrey

Thiago

Caio Seroy
