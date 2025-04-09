document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach((icon, index) => {
        icon.style.opacity = 0;
        icon.style.transform = "translateY(20px)";
        setTimeout(() => {
            icon.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            icon.style.opacity = 1;
            icon.style.transform = "translateY(0)";
        }, 200 * index); // efeito em cascata
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressos = document.querySelectorAll(".progresso");
    progressos.forEach((barra) => {
        barra.style.width = getComputedStyle(barra).width;
        barra.style.width = "0";
        setTimeout(() => {
            const larguraFinal = barra.classList.contains("html")
                ? "85%"
                : barra.classList.contains("css")
                ? "70%"
                : "55%";
            barra.style.width = larguraFinal;
        }, 300);
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (const element of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
}


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Também ativa na primeira carga

// Botão Voltar ao Topo
const topBtn = document.getElementById('topBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Rolagem suave ao clicar nos links da navbar
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function jogar(jogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const icones = {
        pedra: '🪨',
        papel: '📄',
        tesoura: '✂️'
    };

    const computador = opcoes[Math.floor(Math.random() * 3)];

    // Atualiza ícones visuais
    document.getElementById('escolha-jogador').textContent = icones[jogador];
    document.getElementById('escolha-computador').textContent = icones[computador];

    let resultado = '';

    if (jogador === computador) {
        resultado = 'Empate!';
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        resultado = `Você venceu!`;
    } else {
        resultado = `Você perdeu!`;
    }

    document.getElementById('resultado-jogo').textContent = resultado;
}


const temaBtn = document.getElementById('temaBtn');
const body = document.body;

temaBtn.addEventListener('click', () => {
    body.classList.toggle('claro');

    // Muda o ícone do botão
    if (body.classList.contains('claro')) {
        temaBtn.textContent = '🌞';
        localStorage.setItem('tema', 'claro');
    } else {
        temaBtn.textContent = '🌙';
        localStorage.setItem('tema', 'escuro');
    }
});

// Mantém o tema salvo
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'claro') {
        body.classList.add('claro');
        temaBtn.textContent = '🌞';
    }
});
