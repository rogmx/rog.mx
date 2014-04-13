**¡Node is Sexy!**(Trademark de [@prigazzi](https://twitter.com/prigazzi))

Principalmente la facilidad de hacer cosas increibles con pocas lineas de codigo es lo que tengo ganas de mostrarles hoy. 

Tambien tener la habilidad de hacer cosas desde low level pensando en streams al estilo de unix hasta aplicaciones muy complejas, pero eso sera covierto en otro post.

Cada día pertenecer a esta comunidad de gente programando en javascript me anima a aprender más y, aún más importante, a pensar que no sé nada,  y que tengo que aprender mucho.

Hace unos meses estuve en Guatemala y Medellín en conferencias aprendiendo mucho y lo que me faltaba era un fin de semana para sentarme a jugar con lo aprendido. Hoy estoy haciendo el sitio de Chela.js, utilizando LevelDb. Su poder es increíble, para ser algo instalado por npm.

Estaba trabajando y pensé que debería de poder correr comandos como lo hacía [@julian_duque](https://twitter.com/julian_duque) en su plática de arduino con [Johnny Five](https://github.com/rwaldron/johnny-five), donde abrió una consola con todos los comandos para manipular un arduino. Este poder está basado en un módulo del core de nodejs llamado [Repl](http://nodejs.org/api/repl.html#repl_repl_features), decidí probarlo.

Después de escribir las siguientes líneas de código en el archivo console.js

```js
var repl = require("repl");

var context = repl.start({
  prompt: "ChelaJs > ",
  input: process.stdin,
  output: process.stdout
}).context;

context.db = require('./lib/db');
context.users = require('./app/collections/users');
```

Y correrlo con 

	node console.js

Pueden checar el archivo terminado en este [link](https://github.com/Siedrix/chelajs/blob/master/console.js)

Tenemos una consola que cuando inicia se conecta a la base de datos, por que está en **lib/db.js** y tiene todas las funciones de la conexión de usuarios.

No digo que tener este tipo de interfaz  sea algo novedoso, por que RoR y Django las tienen y son bastante robustas, pero poder crearlas a tu gusto, con unas cuantas líneas de código, es genial.