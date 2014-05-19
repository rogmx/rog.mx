En las últimas semanas he leido un par de veces el artículo llamado "[Programming is not a craft](http://dannorth.net/2011/01/11/programming-is-not-a-craft/)" en donde se escribe de muchos de los temas centrales de un debate que ha dado vueltas a internet en los últimos meses. El debate se centra en tratar de definir si programar implica una profesión, ser un artesano o una habilidad que todos deberíamos tener.

Uno de los párrafos que mas relevantes del artículo es el siguiente.

> It seems to me the most succesful programmers I’ve encountered don’t craft software; they write software in order to move information around, in order to get something done. Information is the real deal – the software just defines the space that it moves around in. For those programmers, success is about getting information from point A where it’s currently languishing to point B where it’s going to actually be useful, as quickly and effectively as they can. Success in a UI is about rendering or capturing exactly the information that will be useful – no less and certainly no more – in a succinct, obvious way. The software is incidental, a detail, hidden away in the wings, and it is ultimately entirely disposable.

Me ha puesto a pensar mucho sobre el tema de como mover la información del punto A al B y no de construir aplicaciones, el valor que le entregamos a nuestros usuarios se centra en cómo le recibir y presentar esta información y cómo hacer de la manera más eficiente posible.

El plantear el problema de crear software para mover informacion, tambien implica replantear que tipo de programas hacemos, que piezas de nuestras aplicaciones son realmente útiles y cuales son realmente decorativas. Para entender qué partes son decorativas tenemos muchos ejemplos de los grandes startups con problemas interesantes que estan desarrollando y pensando en apps todo el tiempo.

Si tomamos como ejemplo el cambio que está intentando hacer Foursquare lanzando Swarm, está haciendo que el input de datos para foursquare pase de ser un boton de check-in en nuestro telefono al telefono mismo y esta es una tendencia que empezaremos a ver cada vez mas con mas dispositivos que controlamos mandando información a distintos servicios, como se plantea en el [internet de las cosas](http://en.wikipedia.org/wiki/Internet_of_Things).

Al poder cortar la parte el UI de una aplicación podremos usar cada vez más tiempo en preocuparnos como almacenar, procesar y presentar información de manera consumible y encontrable a nuestros usuarios. Al lograr cortar UI donde el usuario tiene que agregar datos a nuestra aplicación, estamos cortando la parte de la aplicacion que toma mas tiempo desarrollar y la parte de la aplicacion que suele ser más tediosa para el usuario.

En el caso de escribir un blog post hay 2 enfoques completamente distintos, el de Wordpress y el de Medium.

Por un lado tenemos Wordpress que nos ofrece una versión hosteada para crear blogs y sitios, donde tenemos que elegir temas, tenemos la opción de customizarlos, agregar plugins, necesitamos elegir un subdominio, validar un correo y todo esto antes de sabar que queremos publicar.

Si tuviéramos Wordpress en nuestro server para un sitio con mucho tráfico, tendrá un plugin como SuperCache para hacerlo eficiente, este plug in tomara lo que tenemos en la base de datos y nos entregará archivos estáticos que es muy facil y eficiente de transferir por web. Lo cual implica que hacer un sitio eficiente en wordpress implicó montar un servidor, una base de datos, un wysiwyg, un sistema de permisos de usuarios, un web server y un sistema de templates para poder compilar archivos estáticos.

Wordpress es mucho más flexible, puede soportar los blogpost mas sencillos hasta los sitios más complejos, esto viene con un costo muy alto en las horas de programación y educación que se requiere para hacer que el usuario tenga buenos resultado. 

Por otro lado vemos Medium que tiene una manera sencilla, con un solo template y una imagen que es opcional, para que el usuario cuando entra por primera vez al sitio logre transferir información de su cabeza a la base de datos en Medium y una vez en esta base de datos presentarsela al resto del mundo. No sabes de qué escribir, no hay problema, lee post recomendados de otros usuarios en lo que se to ocurre que quieres escribir.

La simplicidad al momento de escribir de Medium viene con el costo de perder flexibilidad y no podemos sacar tus contenidos de el.

Ahora que he regresado a escribir por un reto que me puse con mi hermano [@dfect](https://medium.com/@dfect) de escribir una vez por semana. He empezado a buscar una manera de transferir una idea de mi cabeza a sus cabeza de la manera mas sencilla posible sin perder suficiente flexibilidad; esto me a llevado a empezar una herramienta llamada Paperpress, El blog que ustedes estan leyendo usa Paperpress y en el ultimo mes de publicar un blogpost por muy buen resultado.

Estoy tratando de remover todos los aspectos posibles para enfocarme en escribir, no requiere un editor, el mejor del mercado hoy es Hackpad, no tengo por que rehacer uno. Un proyecto como este no requiere una base de datos, por lo cual todo esta guardado en github. La única parte que no se puede sustituir es el server que les entrega el contenido a ustedes, por suerte existe express, entonces solo requiero programar un plugin para él. 

Ademas de esto le puse un poco de yeoman para hacer los procesos relevantes y decidí agregarle un poco estilo usando markdown, que Paperpress cambia a por html. Estas son las únicas pieza que todavía no me convence como parte del proyecto y probablemente todavia me agregan mas overheader del que me reducen. Por tener que pasar los datos de Hackpad a github al server, pronto espero que el server se actualize cada vez que hago push a github.

Espero ir en el camino correcto de como crear una plataforma donde pueda escribir los artículos de que haga sentido para mi y para otros programadores que deseen tener un blog personal o que sus proyectos de express tengan un blog para comunicarse con sus usuarios, el proyecto todavía va en una etapa temprana, pero ha ido madurando relativamente bien. Poco a poco espero crear esta librería y poner juntas las pocas cosas que me ayuden a publicar más y mejor contenido con el menor overhead posible.
