const qntdJogadores = prompt('Jogadores: ');
let imagem = document.getElementById('imagem');
let total = qntdJogadores;
let resultado = document.querySelector('p');
let botao = document.getElementById('sortear');
let funcGemeos = false;
let funcNeutro = '';
let funcNeutro2 = '';
let escolhaNumeros = 0;
let escolhaFuncao = 0;

let fixos = ['Killer', 'Anjo', 'Detetive'];
let mafiaResto = ['Chantageador', 'Zelador', 'Framer', 'Godfather', 'Consigliere', 'Máscara', 'Poisoner'];
let cidadeResto = ['Sedutor', 'Vigilante', 'Cidadão', 'Observador', 'Prefeito', 'Vingador', 'Enforcador', 'Fofoqueiro', 'Doutor', 'Princesa', 'Tauros', 'Misterioso', 'Cheater', 'Anfitrião', 'Veterano', 'Motorista de ônibus', 'Mago'];
let neutros = ['Joker', 'Executador', 'SerialKiller', 'Sobrevivente', 'Bruxa', 'Lambisome', 'Cultista', 'Corrupto', 'Gêmeos', 'Caçador de recompensa', 'Vampiro', 'Shaman', 'Manipulador', 'Pacifista'];
let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];

escolhaFuncao = parseInt(Math.random() * neutros.length);
console.log(neutros[escolhaFuncao]);
if (neutros[escolhaFuncao] == 'Gêmeos') {
    funcGemeos = true;
    neutros = ['Gêmeos', 'Gêmeos'];
} else {
    funcNeutro = neutros[escolhaFuncao];
    neutros.splice(escolhaFuncao, 1);
    if (funcNeutro == 'Vampiro') {
        fixos = ['Killer', 'Anjo', 'Detetive', 'Caçador de vampiros'];
    } 
}

if (qntdJogadores >= 11 && funcGemeos == false) {
    escolhaFuncao = parseInt(Math.random() * neutros.length);
    console.log(neutros[escolhaFuncao]);
    funcNeutro2 = neutros[escolhaFuncao];
    neutros.splice(escolhaFuncao, 1);
    if (funcNeutro2 == 'Vampiro') {
        fixos = ['Killer', 'Anjo', 'Detetive', 'CaçadorVampiro'];
    }
} else {
    if (qntdJogadores >= 11 && funcGemeos == true) {
        neutros = ['Joker', 'Executador', 'SerialKiller', 'Sobrevivente', 'Bruxa', 'Lambisome', 'Cultista', 'Corrupto',  'Caçador de recompensa', 'Vampiro', 'Shaman', 'Manipulador', 'Pacifista'];
        escolhaFuncao = parseInt(Math.random() * neutros.length);
        console.log(neutros[escolhaFuncao]);
        funcNeutro2 = neutros[escolhaFuncao];
        neutros.splice(escolhaFuncao, 1);
        if (funcNeutro2 == 'Vampiro') {
            fixos = ['Killer', 'Anjo', 'Detetive', 'Caçador de vampiros'];
        }
    }
}

    
function sortear() {
    escolhaNumeros = parseInt(Math.random() * numeros.length);
    let escolhaLista = parseInt(Math.random() * 4 + 1);
    console.log(escolhaLista)
    if (qntdJogadores <= 9) {
        if (funcGemeos == true || funcNeutro == 'Vampiro') {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 12 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        } else {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 11 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        }
    } else if (qntdJogadores == 10) {
        if (funcGemeos == true || funcNeutro == 'Vampiro') {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 11 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        } else {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 10 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        }
    } else if (qntdJogadores == 11) {
        if (funcGemeos == true || funcNeutro == 'Vampiro') {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 11 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        } else {
            while (escolhaLista == 1 && fixos.length == 0 || escolhaLista == 2 && mafiaResto.length == 6 || escolhaLista == 3 && cidadeResto.length == 10 || escolhaLista == 4 && neutros.length == 0) {
                escolhaLista = parseInt(Math.random() * 4 + 1);
                console.log(escolhaLista);
            }
        }
    }
    switch (escolhaLista) {
        case 1:
            escolhaFuncao = parseInt(Math.random() * fixos.length);
            console.log(fixos[escolhaFuncao]);
            resultado.innerHTML = `${fixos[escolhaFuncao]} // ${numeros[escolhaNumeros]}`;
            alteraImagem(`assets/${fixos[escolhaFuncao]}.jpeg`);
            fixos.splice(escolhaFuncao, 1);
            total--
            break
        case 2:
            escolhaFuncao = parseInt(Math.random() * mafiaResto.length);
            console.log(mafiaResto[escolhaFuncao]);
            resultado.innerHTML = `${mafiaResto[escolhaFuncao]} // ${numeros[escolhaNumeros]}`;
            alteraImagem(`assets/${mafiaResto[escolhaFuncao]}.jpeg`);
            mafiaResto.splice(escolhaFuncao, 1);
            total--
            break
        case 3:
            escolhaFuncao = parseInt(Math.random() * cidadeResto.length);
            console.log(cidadeResto[escolhaFuncao]);
            resultado.innerHTML = `${cidadeResto[escolhaFuncao]} // ${numeros[escolhaNumeros]}`;
            alteraImagem(`assets/${cidadeResto[escolhaFuncao]}.jpeg`);
            cidadeResto.splice(escolhaFuncao, 1);
            total--
            break
        case 4:
            if (qntdJogadores < 11) {
                if (funcGemeos == true) {
                    escolhaFuncao = parseInt(Math.random() * neutros.length);
                    console.log(neutros[escolhaFuncao]);
                    resultado.innerHTML = `${neutros[escolhaFuncao]} // ${numeros[escolhaNumeros]}`;
                    alteraImagem(`assets/${neutros[escolhaFuncao]}.jpeg`);
                    neutros.splice(escolhaFuncao, 1);
                } else {
                    console.log(funcNeutro);
                    resultado.innerHTML = `${funcNeutro} // ${numeros[escolhaNumeros]}`;
                    alteraImagem(`assets/${funcNeutro}.jpeg`);
                    neutros.length = 0;
                }
            } else {
                if (qntdJogadores >= 11) {
                    if (funcGemeos == true) {
                        escolhaFuncao = parseInt(Math.random() * neutros.length);
                        console.log(neutros[escolhaFuncao]);
                        resultado.innerHTML = `${neutros[escolhaFuncao]} // ${numeros[escolhaNumeros]}`;
                        alteraImagem(`assets/${neutros[escolhaFuncao]}.jpeg`)
                        neutros.splice(escolhaFuncao, 1);
                        if (neutros.length == 0) {
                            funcGemeos = false;
                        }
                    } else {
                        console.log(funcNeutro);
                        resultado.innerHTML = `${funcNeutro} // ${numeros[escolhaNumeros]}`;
                        alteraImagem(`assets/${funcNeutro}.jpeg`)
                        if (funcNeutro == funcNeutro2) {
                            neutros.length = 0;
                        }
                        funcNeutro = funcNeutro2;
                    }
                }
            }

            total--
            break
            
    }
    terminaJogo();
    numeros.splice(escolhaNumeros, 1);
}

function alteraImagem(caminhoNovaImagem) {
    imagem.src = caminhoNovaImagem;
}

function terminaJogo() {
    if (total == 0) {
        botao.setAttribute('disabled', true);
    }
}

