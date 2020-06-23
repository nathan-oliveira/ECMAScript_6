// sets

// WeakSet não é iterável

// Programfy
var musica_1 = {titulo: 'Sem você meu coração é null', autor: 'Oracle'};
var musica_2 = {titulo: 'Meu coração componentizado', autor: 'React'};
var musica_3 = {titulo: 'Tudo isso é tão dinâmigo', autor: 'Javascript'};
var musica_4 = {titulo: 'Não me chame depois...', autor: 'Node'};
var musica_5 = {titulo: 'No amor não existe rollback', autor: 'SQL'};

var playlist = new Set();
var playlist2 = new Set([musica_1]);

/** Features **/
// adicionar música
playlist.add(musica_2);
playlist.add(musica_3);

// remover uma música
playlist.delete(musica_2);

// remover todos as músicas
playlist.clear();

// adicionar uma música que já está na playlist
playlist.add(musica_2); // a musica não vai ser adicionada!!!

// ver quantas música estão na playlist
console.log(playlist.size);



for(var musica of playlist) {
  console.log(musica);
}