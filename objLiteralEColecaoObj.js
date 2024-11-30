var listaCharadas = [
  { resposta: "Relógio", pista1: "Sou mais rápido do que você imagina, mas nunca corro.", pista2: "Se me quebrar, posso te enganar.", pista3: "Posso estar parado, mas sempre estou em movimento.", pista4: "Sou essencial para quem quer se organizar.", },
  { resposta: "Vidro", pista1: "Sou transparente, mas posso ser opaco.", pista2: "Sou sólido, mas posso me partir facilmente.", pista3: "Permito que você veja o mundo sem interferência.", pista4: "Quando me quebra, é impossível me consertar perfeitamente.", },
  { resposta: "Chave", pista1: "Sou usado todos os dias, mas raramente lembrado.", pista2: "Protejo algo valioso sem pedir nada em troca.", pista3: "Sou pequeno, mas sem mim, tudo seria uma bagunça.", pista4: "Minha função é simples, mas indispensável.", },
  { resposta: "Ar", pista1: "Sou invisível, mas todos sabem quando chego.", pista2: "Não tenho massa, mas posso pesar no ambiente.", pista3: "Às vezes sou leve como uma brisa, outras pesado como um fardo.", pista4: "Posso ser quente, frio ou simplesmente neutro.", },
  { resposta: "Palavra", pista1: "Sou mais valioso do que pareço, mas não tenho valor em dinheiro.", pista2: "Você pode me ouvir, mas não pode me ver.", pista3: "Sou um reflexo que não está no espelho.", pista4: "Quanto mais atenção você dá, mais me entende.", },
  { resposta: "Pálpebra", pista1: "Não tenho olhos, mas posso abrir e fechar.", pista2: "Sou leve, mas nem sempre me mexo.", pista3: "Posso estar em qualquer lugar, mas sempre conectado.", pista4: "Protejo sua visão, mas não sou visível.", },
  { resposta: "Biblioteca", pista1: "Tenho muitos quartos, mas ninguém dorme em mim.", pista2: "Posso ser velho ou novo, mas sempre guardo algo.", pista3: "Minha presença é silenciosa, mas meu conteúdo pode ser barulhento.", pista4: "Sem mim, o conhecimento se perderia.", },
  { resposta: "História", pista1: "Sou feito para enganar, mas todos me acreditam.", pista2: "Posso parecer complexo, mas sou uma construção simples.", pista3: "Sou mais forte quando sou bem contado.", pista4: "Vivo na mente de quem me escuta.", },
  { resposta: "Cabelo", pista1: "Sou uma linha, mas nunca sou reta.", pista2: "Nunca paro de crescer, mas posso ser cortada.", pista3: "Sou um retrato do tempo que passa.", pista4: "Sou natural, mas as pessoas gostam de me alterar.", },
  { resposta: "Terra", pista1: "Sou imenso, mas nunca saio do meu lugar.", pista2: "Posso ser coberto, mas nunca escondido.", pista3: "Tenho vales e picos, mas não sou corpo.", pista4: "Sou o berço da vida, mas também posso destruí-la.", },
];

var tamanhoDaLista = listaCharadas.length;
var numeroSorteado = Math.floor(Math.random() * tamanhoDaLista)
var charadaEscolhida = listaCharadas[numeroSorteado];




console.log("O QUE É, O QUE É?")
console.log("1ª Pista: " + charadaEscolhida.pista1)
console.log("2ª Pista: " + charadaEscolhida.pista2)
console.log("3ª Pista: " + charadaEscolhida.pista3)
console.log("4ª Pista: " + charadaEscolhida.pista4)
console.log("\n\n\n\n\n\n\n\n\n\n Resposta: " + charadaEscolhida.resposta);
