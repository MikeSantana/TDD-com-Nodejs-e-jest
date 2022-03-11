const recepcionista = require('../main');

describe('Cenários do recepcionista', () => {

    test('deveTerIdadeMinimaDezoitoParaFestaDePeao', () => {
        const resultado = recepcionista.isAgeValid(18, 18);
        expect(resultado).toBe(true);

    }
    )

    test('naoDeveTerIdadeMinimaDezoitoParaFestaDePeao', () => {

        expect(() => {
            recepcionista.isAgeValid(17, 18)
        }).toThrow("Não pode entrar na festa");
    }
    )

    test('conviteDeveSerParaFestadePeao', () => {
        const resultado = recepcionista.isPartyValid(true);
        expect(resultado).toBe(true);
    }
    )

    test('conviteNaoDeveSerParaFestaDePeao', () =>{
        expect(()=>{
            recepcionista.isPartyValid(false)
        }).toThrow("Festa inválida");
    }
    )
    

    test('festaDePeaoAbertaParaEntrada', () => {
        const resultado = recepcionista.isPartyOpen(true);
        expect(resultado).toBe(true);
        
    }
    )

    test('festaDePeaoFechadaParaEntrada', () => {
        expect(() => {
            recepcionista.isPartyOpen(false)
        }).toThrow("Não pode entrar na festa");
        
    }
    )

    
    test('NaoConsegueEntrarSeConviteJaFoiUtilizado', () =>{
        expect(() => {
            recepcionista.PodeEntrarNaFesta(true)
        }).toThrow();
    })

    test('ConsegueEntrarSeConviteNaoUtilizado', () =>{
        expect(() => {
            recepcionista.PodeEntrarNaFesta(false)
        }).toBe(true);
    })


    test('deveTerVagasNaFestaDePeao', () => {
        const temVagas = recepcionista.isPartyFull(5000, 3000);
        //lotacaoMaxima = 5000;
        //lotacaoAtual = 3000;    
        expect(temVagas).toBe(true);
    }
    )

    test('naoDeveTerVagasNaFestaDePeao', () => {
        const temVagas = recepcionista.isPartyFull(5000, 5001);
        //lotacaoMaxima = 5000;
        //lotacaoAtual = 5001;    
        expect(temVagas).toBe(false);
    }
    )


    test('conviteComDataCorretaParaFestaDePeaoHoje', () => {
        const resultado = recepcionista.isPartyDateValid("24/02/2022");
        expect(resultado).toBe(true);
    }
    )

    test('conviteSemDataCorretaParaFestaDePeaoHoje(', () => {
        expect(() => { 
            recepcionista.isPartyDateValid("31/12/2022") 
        }).toThrow('A data do convite não é válida para a festa de hoje.');
    })

})



/*


}*/