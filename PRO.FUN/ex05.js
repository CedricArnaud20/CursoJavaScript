function Habilitacao(Idade) {
    if (Idade >= 18) {
        console.log('Voce pode começar suas aulas de auto escola')
    }else if (Idade < 18) {
        console.log('Voce Não pode realizar as aulas de auto escola')
    }else {
        console.log('Entra uma idade valida')
    }
}

Habilitacao(25)
