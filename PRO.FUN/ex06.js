function AvaliadorTipo(Number) {
    if (typeof Number === 'number') {
        console.log (`A entrada ${Number} é do tipo Number`)
    } else if (typeof Number === 'string') {
        console.log (`A entrada ${Number} é do tipo String`)
    } else if (typeof Number === 'boolean') {
        console.log (`A entrada ${Number} é do tipo booleano`)
    }
}

AvaliadorTipo('true')
AvaliadorTipo(true)
AvaliadorTipo(25)