let musicas = [
    { titulo: 'ultraviolence', artista: 'Lana Del Rey', src: 'musica/Lana Del Rey - Ultraviolence (Audio).mp3', img: 'img/lana.jpg' },
    { titulo: 'Runaway', artista: 'Lil Peep', src: 'musica/Lil Peep - Runaway (Official Video).mp3', img: 'img/peep.jpg' },

];



// cria uma variavel onde pega o elemnto 'audio'
let musica = document.querySelector('audio');


let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica)

//  eventos onde pega o elemento 'botao-player'e 'botao-pause' e adiciona um evento de click nele
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica)
// evento para confirmar se a musica esta sendo tocada
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});
function renderizarMusica(index) {
    // troca o valor do atributo 'src'
    
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
musica.play()
    });

}
// funcao onde da um proposito a variavel 'musica' e troca os elementos pause e play
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

};
// funcao onde pausa a musica e troca os elementos pause e play
function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
};
function atualizarBarra() {

    let barra = document.querySelector('progress');
    // pega a % de quanto a musica ja foi tocada e adiciona um movimmento no ponto
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoMusica = document.querySelector('.inicio');
    // converte a classe '.fim' para os minutos de duracao da musica
    tempoMusica.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
};
// funcao para exibir a formatacao 0:00 no contador de segundos
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos

}
