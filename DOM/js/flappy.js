function criarElemento (tagName, className)
{
    const elemento = document.createElement(tagName);
    elemento.className = className;
    return elemento
};

function Cano(reversa = false)
{
    this.elemento = criarElemento('div', 'cano');
    this.elemento.classList.add((reversa ? "cima" : "baixo"));
    const ponta = criarElemento('div', 'cano-ponta');
    const corpo = criarElemento('div', 'cano-corpo');
    this.elemento.appendChild(ponta);
    this.elemento.appendChild(corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
    
}

function ParDeCanos (alturaDispositivo, passagem, eixoX)
{
    this.elemento = criarElemento('div', 'par-de-canos');

    this.superior = new Cano(true);
    this.inferior = new Cano(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.gerarPassagem = () =>
    {
        const alturaMaxima = alturaDispositivo - (passagem + 37.5 + 30);
        const alturSuperior = Math.random() * alturaMaxima;
        const alturaInferior = alturaDispositivo - alturSuperior - passagem;

        this.superior.setAltura(alturSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.setX(eixoX)
    this.gerarPassagem();
}

function GeradorCanos(alturaDispositivo, larguraDispositivo, passagem, distanciamento, deslocamento, incrementarPonto) 
{
    this.pares = 
    [
        new ParDeCanos (alturaDispositivo, passagem, larguraDispositivo),
        new ParDeCanos (alturaDispositivo, passagem, larguraDispositivo + distanciamento),
        new ParDeCanos (alturaDispositivo, passagem, larguraDispositivo + distanciamento * 2),
        new ParDeCanos (alturaDispositivo, passagem, larguraDispositivo + distanciamento * 3)
    ]

    this.movimentoCanos = () => 
    {
        this.pares.forEach(par => 
        {
            par.setX(par.getX() - deslocamento)

            if (par.getX() < -par.getLargura()) 
            {
                par.setX(par.getX() + distanciamento * this.pares.length)
                par.gerarPassagem();
            }

            const meio = larguraDispositivo / 3
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) incrementarPonto()
        })
    }
}

function Passaro(alturaDispositivo)
{
    let voando = false

    this.elemento = criarElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => 
    {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaDispositivo - this.elemento.clientHeight

        if (novoY <= 0) 
        {
            this.setY(0)
        } 
        else if (novoY >= alturaMaxima) 
        {
            this.setY(alturaMaxima)
        } 
        else 
        {
            this.setY(novoY)
        }
    }

    this.setY(alturaDispositivo / 2)
}

function Pontuador() 
{
    this.elemento = criarElemento('span', 'progresso')
    this.atualizarPontos = pontos => 
    {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function verificarSobreposicao(elementoA, elementoB) 
{
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, canos) 
{
    let colidiu = false
    canos.pares.forEach(parDeCanos => 
    {
        if (!colidiu) 
        {
            const superior = parDeCanos.superior.elemento
            const inferior = parDeCanos.inferior.elemento
            colidiu = verificarSobreposicao(passaro.elemento, superior)
                || verificarSobreposicao(passaro.elemento, inferior)
        }
    })
    return colidiu
}



function iniciarJogo ()
{
    const jogoTela = document.querySelector('[jogo-flappy]');
    const alturaDispositivo = jogoTela.clientHeight;
    const larguraDispositivo = jogoTela.clientWidth;
    const passagem = 200;
    const distanciamento = 400;
    const deslocamento = 3;
    let pontos = 0;

    const pontuador = new Pontuador();
    const passaro = new Passaro(alturaDispositivo);
    const canos = new GeradorCanos(alturaDispositivo, larguraDispositivo, passagem, distanciamento, deslocamento, () => pontuador.atualizarPontos(++pontos));

    canos.pares.forEach(par => jogoTela.appendChild(par.elemento));
    jogoTela.appendChild(passaro.elemento);
    jogoTela.appendChild(pontuador.elemento);

    const temporizador = setInterval( () =>
    {
        canos.movimentoCanos();
        passaro.animar();

        if (colidiu(passaro, canos)) 
        {
            clearInterval(temporizador)
        }
    }, 20);
}

iniciarJogo()


