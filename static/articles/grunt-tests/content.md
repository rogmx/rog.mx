En los últimos meses he estado trabajando en un adaptador entre Leveldb y Backbonejs que pueden encontrar aquí. Gran parte del énfasis de este proyecto ha sido tener las herramientas correctas para generar una librería de Node.js.

Hacer una librería implica muchas cosas, una de ellas es generar las pruebas necesarias para saber que la librería funciona. Estoy utilizando Mocha y Chai para escribir las pruebas y estoy utilizando Grunt con algunas tareas como grunt-contrib-watch y grunt-mocha-test para correr las pruebas de manera automatizada.

Escribir pruebas generalmente es una actividad que causa flojera y muchas veces esa flojera es lo que causa que no se mantengan al día o que no se pruebe todo lo que se debería de probar. Entonces decidí tomar un tiempo para buscar una manera de escribir pruebas que fuera ameno y me motivara a hacerlo.

Últimamente he estado fascinado con Grunt y decidí intentar una combinación entre grunt watch y grunt mocha test para que cada vez que se salvara un archivo de mi librería, las pruebas se corrieran.

Lo primero que es necesario es instalar grunt-cli de manera global:

```
npm install -g grunt-cli
npm install -g mocha
```

Después es necesario agregar grunt, grunt-contrib-watch y grunt-mocha-test a nuestro proyecto, con:

```
npm install grunt —save-dev
npm install grunt-contrib-watch —save-dev
npm install grunt-mocha-test —save-dev
```

Una vez que tenemos todas las librerías podemos correr en la terminal grunt y ver que está instalado de manera correcta.

El siguiente paso implica crear un archivo donde configuraremos nuestras tareas, este archivo tiene que llamarse Gruntfile.js y debe de verse de la siguiente manera para empezar:

```js
module.exports = function(grunt) {
    grunt.initConfig({});
    grunt.registerTask('default');
};
```

A este archivo tendremos que cargar los modulos que acabamos de instalar. Esto se hace agregando las siguientes líneas:

```js
grunt.loadNpmTasks('grunt-mocha-test');
grunt.loadNpmTasks('grunt-contrib-watch');
```

Con esto tendremos ahora una tarea grunt mochaTest y grunt watch. Estas tareas necesitamos configurarlas al modificar el objeto que le pasamos a grunt.initConfig.

Para empezar a correr las pruebas necesitamos crear el folder test y despues el archivo test.js con el siguiente contenido:

```js
var assert = require('assert');
	describe('Array', function(){
		describe('#indexOf()', function(){
		it('should return -1 when the value is not present',function({
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});
```

Este es el hello world de las pruebas de mocha. Si corremos el comando mocha en terminal, debería decir que corrió una prueba y que todo está bien.

Para hacer que la misma tarea sea usada desde grunt, hay que agregar la siguiente configuración al grunt.initConfig

```js
mochaTest: {
	test: {
		options: {
			reporter: 'spec'
		},
		src: ['test/*.js']
	}
}
```

Donde mostramos que tipo de reporte queremos una vez terminadas nuestras pruebas y también tenemos que indicar dónde están nuestros archivos con las pruebas. Para más información de cómo configurar las pruebas de mocha, checa este link. https://github.com/pghalliday/grunt-mocha-test

Una vez que grunt puede correr las pruebas por nosotros con el comando grunt mochaTest, podemos decirle que corra tareas cada vez que salvamos con grunt-watch. Para esto necesitamos configurar que archivos escuchar y que tareas correr, con la siguiente configuración:

```js
watch: {
	test: {
		files: ['test/*.js', 'lib/*.js'],
		tasks: ['mochaTest'],
		options: {
			spawn: true
		}
	}
}
```

De esta manera podemos correr grunt watch:test en terminal y esperar a que corran nuestras pruebas cuando modificamos nuestros archivos de la librería o de las pruebas.

Para más información sobre como configurar grunt watch checa https://github.com/gruntjs/grunt-contrib-watch

El archivo de Gruntfile.js terminado está en este link https://gist.github.com/Siedrix/7574405