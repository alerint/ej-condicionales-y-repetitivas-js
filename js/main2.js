
console.log('\nEjercicio b:')

var cantidadDeGatos = 5
var cantidadDePasos = 3

for(var gato = 1; gato <= cantidadDeGatos; gato++) {
    var icono1 = '🐈'
    var icono2 = ''
    for(var paso = 1; paso <= cantidadDePasos; paso++) {
        icono2 += '🐾'
    }
    console.log('Gato #' + gato + ':' + ' ' + icono1 + icono2)
}