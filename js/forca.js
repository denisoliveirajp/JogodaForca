let jogarnovamente = true;
let tentativas = 6;
let listaDinamica= [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"PAÍSES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"PAÍSES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"PAÍSES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"PAÍSES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"PAÍSES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"PAÍSES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"PAÍSES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria:"PAÍSES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"PAÍSES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria:"PAÍSES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria:"TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria:"TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria:"TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria:"TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria:"TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria:"TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria:"TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria:"TV E CINEMA"
    },
    palavra059 = {
        nome: "BOB ESPONJA",
        categoria:"TV E CINEMA"
    },
    palavra060 = {
        nome: "PANICO NA TV",
        categoria:"TV E CINEMA"
    }
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada=palavras[indexPalavra].nome;
    palavraSecretaCategoria=palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        } else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-"+letra).disabled=true;
    if (tentativas>0){
        mudarStyleLetra("tecla-"+letra,false);
        comparalistas(letra);
        montarPalavraNaTela()
    }
}

function mudarStyleLetra(tecla, condicao){
    if (condicao==false){
        document.getElementById(tecla).style.background = "#C71585"
        document.getElementById(tecla).style.color = "#ffffff"
    }
    else {
        document.getElementById(tecla).style.background = "#008000"
        document.getElementById(tecla).style.color = "#ffffff"
    }
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();
        if (tentativas == 0) {
            abreModal("OPS!", "NÃO FOI DESSA VEZ....A PALAVRA SECRETA ERA <br>" + palavraSecretaSorteada);
            piscarBotaoJogaNovamente();
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] === letra) {
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] !== listaDinamica[i]) {
            vitoria = false;
        }
    }
    if (vitoria == true) {
        abreModal("PARABÉNS!", "VOCÊ VENCEU...");
        tentativas = 0;
        piscarBotaoJogaNovamente();
    }
}

async function piscarBotaoJogaNovamente() {
    while (jogarnovamente === true) {
        document.getElementById("btn-reiniciar").style.background = "red";
        document.getElementById("btn-reiniciar").style.scale = 1.6;
        await atraso(500)
        document.getElementById("btn-reiniciar").style.background = "yellow";
        document.getElementById("btn-reiniciar").style.scale = 1.3;
        await atraso(500)
    }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x,tempo))
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo,mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText=titulo;
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML=mensagem;

    $("#myModal").modal({
        show:true
    });
}

let bntReiniciar = document.querySelector("#btn-reiniciar")
bntReiniciar.addEventListener("click",function (){
    jogarnovamente = false;
    location.reload();
});