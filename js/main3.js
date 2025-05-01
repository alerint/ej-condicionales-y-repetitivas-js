
console.log('\nEjercicio c:')

var cantidadDeGatos = 10
var cantidadDePasos = 4
var icono2 = ''

for(var paso = 1; paso <= cantidadDePasos; paso++) {
    icono2 += '🐾'
}

for(var gato = 1; gato <= cantidadDeGatos; gato++) {
    var icono1 = (gato %2 === 0 ? '🐈 ⬛ ': '🐈')   
    console.log('Gato #' + gato + ':' + ' ' + icono1 + icono2)
}