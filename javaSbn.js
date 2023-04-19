var parte1 = 3;
var parte2 = 4;
var parte3 = 5;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var Afundado = false;


while (Afundado == false) {

   jogada = prompt("Digite - Escolhe um numero entre 1 e 7:");

   if (jogada < 1 || jogada > 7) {

      alert("opss, essa não valeu. Tente novamente!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acetou novamente");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            Afundado = true;

            alert("Navio afundou!");

         }

      } else {

         alert("Opps, Não foi dessa vez...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);