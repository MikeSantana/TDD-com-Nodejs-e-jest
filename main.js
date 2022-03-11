
function isAgeValid(idade, IdadeMinimaParaEntrarNaFesta) {
    
     if (idade >= IdadeMinimaParaEntrarNaFesta) {return true;}
     else throw new Error('Não pode entrar na festa');

}

function isPartyOpen(aberta) {
    
     if (aberta) {return true;}
     else throw new Error('Entrada não liberada');

}

function isPartyValid(valido) {
     
     if (valido) {return true}
     else throw new Error('Festa válida')
}

function isPartyDateValid(data) {
     if(data == "24/02/2022") return true;
     else throw new Error('A data do convite não é válida para a festa de hoje.');
}

function PodeEntrarNaFesta(ticket_usado){
     if (!ticket_usado){
          return true; }
     else throw new Error('O seu convite já foi utilizado anteriormente');     
     
}

function isPartyFull(lotacaoMaxima, lotacaoAtual) {
     if (lotacaoMaxima >= lotacaoAtual) {
          return true;
     }
     else throw new Error('Não há lugar na festa');
}


module.exports = { isAgeValid, isPartyValid, isPartyOpen, isPartyDateValid, PodeEntrarNaFesta, isPartyFull }