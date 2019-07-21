const descripcion = {
			demand: true,
			alias: 'd',
			desc: 'Descripcion de la tarea por hacer'
}

const completado = {
		default: true,
		alias: 'c',
		desc: 'Marca como completado o pendiente la tarea'
}
/*
{
		descripcion: {
			demand: true
			alias: 'd'
		},
		completado: {
			default: true,
			alias: 'c'
		}
	})
*/

const argv = require('yargs')
	.command('crear', 'Crea un tarea', {
		descripcion
	})
	.command('actualizar', 'Actualiza una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'Borra una tarea', {
		descripcion
	})
	.help()
	.argv;

module.exports = {
	argv
}