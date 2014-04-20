Yo empecé a programar por ahi del 2009, después del conocimiento que me dio una carrera truncada de matemáticas aplicadas, unos cuantos cursos de visual basic 6 que tomé cuando tenia 15 años y PHP con un grupo de programadores llamado el [SHDHMC](http://shdhmexicocity.org/). La meta en esos días era fácil, programa cuantas horas puedas y entrega un commit a github, súbelo a un server por FTP y muéstralos a los demás asistentes del grupo.

Por un tiempo programé código espagueti y entregué unos cuantos proyectos. Después de varios trabajos y un poco más de experiencia, fui contratado por [Freshout](http://freshout.us/) hace 2.5 años y me tocó un periodo largo de maduración, en el cual me dí cuenta que programar implica mucho más que hacer lineas de código, implica trabajo en equipo, organización, planeación y muchas otras cosas.

Este es el último gran reto que he tenido como programador y hoy me he tomado un rato para reflexionar de ese camino.

Hoy al empezar un proyecto, no lo ataco escribiendo líneas de código primero y haciendo preguntas después. Generalmente me tomo un momento y me hago una serie de preguntas para entender qué voy a programar. Es muy importante hacer esto, en especial cuando haces librerías.

### Acotando el proyecto

He encontrado que el primer paso tiene que ser acotar el problema y entender qué es lo que estoy tratando de resolver y cortar todo aquello que no sea relevante para el proyecto.

Es muy fácil pensar en programar el siguiente google reader o el siguiente facebook, pero solo se puede programar una cosa a la vez, entonces limita a que tu librería o aplicación haga una cosa bien.

Definiendo la solución
Una vez que sabes qué problema vas a resolver, identifica qué piezas debes tener para resolverlo. En Freshout usábamos mucho el término [caja negra](http://en.wikipedia.org/wiki/Black_box) para describir estas piezas relevantes de la aplicación. Una caja negra es una clase/función que le puedes pasar X parámetros de un lado y regresará Y resultados del otro lado de manera consistente.

Estas cajas negras no son algo que hayamos inventado en Freshout, es algo que se encuentra en el core de la [filosofía de UNIX](http://en.wikipedia.org/wiki/Unix_philosophy) que existe desde los 70's por Ken Thompson y Dennis Ritchie.

Primero descrito como:

> Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.

Y después explicado mejor en una de las 17 reglas de UNIX:

> Rule of Modularity: Developers should build a program out of simple parts connected by well defined interfaces, so problems are local, and parts of the program can be replaced in future versions to support new features. This rule aims to save time on debugging code that is complex, long, and unreadable.

Una vez que salí de Freshout me pregunté porqué la mayoría de las cajas negras no tienen bugs pero la aplicación si, y descubrí que es por el otro layer que debe tener la aplicación, que es el pegamento que úne a 2 cajas negras. Hoy en día trato de definir todo en un sentido de caja negra y pegamento, a veces, hasta hago diagramas.

Esto es algo que aprendí de [@azendal](http://twitter.com/azendal) y lo predicaba lo suficiente como para que lo aprendiera a la octava o catorceava vez que lo dijo.

Una gran ventaja de pensar de esta manera es que acabas con piezas que pueden ser reúsables entre proyectos, son más fáciles de testear y te generan una unidad básica de herramientas que tienes a tu disposición cuando programas. Estos serán tema de otro blogpost.

### Investiga
Muy probablemente el problema que quieras resolver ya tiene una solución o tal vez una muy cercana, entonces hay que leer por qué se desarrolló de esa manera y porqué esta librería tiene un API de cierta manera.

En programación han existido miles de horas hombre resolviendo problemas, a veces el mismo problema se resuelve cientos de veces cada año, entonces busca una librería que haga lo que necesitas antes de empezar a escribir la tuya (a menos que sea una meta personal para entender qué hacen librerías más grandes).

**Como corolario de este paso**: Cuando quieres aprender a programar necesitas hacer mucha investigación para lograr avanzar más rápido en todas las cosas ya antes resueltas por los grandes programadores de la historia. El mejor libro que he leído de arquitectura orientada a eventos estaba escrito para delphi y fue escrito en los 90's. Una de las [mejores pláticas](https://www.youtube.com/watch?v=YX3iRjKj7C0) que he escuchado es de Uncle Bob, exprogramador de Smalltalk y miembro importante de la comunidad de ruby, que no participa en la comunidad de javascript, [ésta es bastante buena también](https://www.youtube.com/watch?v=mslMLp5bQD0).

Un caso similar me pasa con [Zed Shaw](http://vimeo.com/53494258) y [Mike Lee](http://www.infoq.com/presentations/Making-Apps-That-Dont-Suck) quienes están mal de la cabeza pero con una visión única del mundo.

Es igual de importante leer sobre algoritmos que sobre historia de la programación, sobre lo bueno de otros lenguajes y sobre qué cosas novedosas están pasando en otros lugares para suplir nuestra deuda de vivir en un país sin carreras en computer science.

### Ejecutando la solución
Esta extrañamente es la parte que sorprende más a la gente. Una vez que sabes qué es lo que tienes que hacer no hay otra receta que trabajo duro para que esta suceda. Y esto lo digo por que la gente asume que me siento en mi computadora con audífonos por unas horas viendo gatitos en reddit y eventualmente hay una librería o un sitio web, pero el proceso no es así.

Realmente el proceso es distinto. Escribir unas líneas de código, checar que esas líneas de código hagan lo que deberían de hacer (y en la mayoría de los casos, debuggear por qué esas líneas no hacen lo que uno quería) y repetir el proceso. Pasar de sublime a chrome a la terminal y encontrar que esta pasando es un proceso tedioso hasta que poco a poco vas creando un pequeño compilador en tu cabeza que hacer mas facil el proceso.

Una vez que haces esto con las herramientas correctas y con la paciencia suficiente sueles acabar con algo, cerca de lo que esperabas. 

En este paso puedes reducir el tiempo y la frustración si tienes las herramientas correctas y un poco de experiencia con el lenguaje/framework que estas usando, pero esto no debería de preocuparte mucho, en este tiempo programando he entrado a proyectos con muy poca idea del codebase y eso solo implica una curva más grande de aprendizaje.

Se paciente y programa muchas horas todos los día. 

### Desarrollando a futuro
Una vez que terminas de trabajar es relevante que el proyecto sea mantenible y expandible, sobretodo en los proyectos exitosos. Entonces programa pensando que tendrás que leer este código en 6 meses y no deseas odiarte. 

También programa pensando que necesitarás agregar cosas en un futuro y no deseas escribir un código tan complicado que no puedas cambiarle nada. 

Esto todavía es algo en lo que sigo trabajando. Un ejemplo claro es el proyecto de marble block que empecé en Chile hace 6 meses y regresando a México cuando tenía un poco de tiempo libre decidí continuarlo y fue imposible. Tuve que empezarlo de nuevo, esta vez sobre yeoman, lo cual lo hace un poco mejor. Espero que esta vez continúe.

### Escribir documentación
Este paso es uno de los más importantes y donde creo que como comunidad en México fracasamos más. Necesitamos que nuestros proyectos y librerías puedan ser tomados por otros medios de la comunidad y continuarlos, agrandarlos y después compartir de regreso. Sin documentación esto es imposible.

He empezado a trabajar en esto como pueden checar en el repo de leveldb-backbone-adapter, aunque la documentación empieza a quedar desactualizada todavía funciona muy bien, espero poder tener un buen README.md para todas mis librerias relevantes y que ustedes en un futuro puedan usarlas como piezas en sus proyectos. 

### Nota de despedida
A los que están empezando a programar, les quisiera dejar como consejo que no se aprende a programar más que programando, inténtenlo hacer muchas horas al dia.

A los programdores que estan en un estado similar al mío, espero que estos pasos a los que he llegado les ayuden a mejorar como programadores.

A los que están en un estado más avanzado de su carrera, les agradezco cualquier consejo que me quieran dar, sobretodo si es sobre café o una chela. 

Si han escrito algún contenido como este, por favor háganmelo llegar a [@siedrix](http://twitter.com/siedrix).


