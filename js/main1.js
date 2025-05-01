
console.log('\nEjercicio a:')

var cantidadDeGatos = 10

for(var gato = 1; gato <= cantidadDeGatos; gato ++) {
    var icono = ''
    if(gato %3 == 0) {
        icono = '😹'
    }else if((gato +1)%3 == 0) {
        icono = '😸'
    }else {
        icono = '😺'
    }
    
    console.log('Gato #' + gato + ':' + ' '+ icono)
}