# Testing Debt
El proyecto no cuenta con prácticas de testing debt

## Propuestas de pruebas unitarias

### [8ball](cmd/8ball.js)

- Probar que al enviar una pregunta al run, me devuelva una respuesta.
- Probar que al no enviar preguntas, me envié el mensaje "Please Enter A Question You Would Like Answered".

### [avatar](cmd/avatar.js)
- Probar que en el objeto msg se devuelva la información del avatar de discord de un usuario.

### [coin](cmd/coin.js)
- Probar que en el mensaje se devuelva una de las opciones (Heads o Tails).

### [csgo](cmd/csgo.js)
- Revisar que en el mensaje se devuelva la información de un usuario de csgo.
- Revisar que retorne algún mensaje cuando no encuentra el  usuario.

### [dadjokes](cmd/dadjokes.js)
- Revisar que en el mensaje retorne alguna broma.
- Revisar que el tipo del mensaje que envía sea un RichEmbed.

### [dev](cmd/dev.js)
- Revisar que envía el mensaje "I am ALIVE!!".

### [float](cmd/float.js)
- Verificar la creación correcta de un objeto flotante de chat de discord.
- Revisar que en la función addField los valores se formatean de manera correcta.
- Verificar las condiciones de colocar un color al objecto.
- Verificar el mensaje al no enviar una url.

### [froulette](cmd/froulette.js)
- Revisar que en el mensaje devuelva una ubicación aleatoria.
- Revisar que las ubicaciones que devuelve están actualizadas con la plataforma de juegos.

### [highlight](cmd/highlight.js)
- Revisar que en el mensaje envié un mensaje resaltado.
- Revisar que borre el mensaje donde ejecuto el comando.

### [images](cmd/images.js)
- Revisar que en el mensaje envié la url de alguna imagen.
- Verificar que al no enviar parámetros devuelva el mensaje de error.

### [invite](cmd/invite.js)
- Revisar que en el mensaje envié un link de invitación.

### [kick](cmd/kick.js)
- Probar que expulse un usuario. 
- Probar cuando el bot no tiene permiso de expulsar usuarios, devuelva mensaje.
- Probar cuando no se indican usuarios, devuelva mensaje.
- Probar cuando el usuario no esta en el gremio, devuelva mensaje.

### [love](cmd/love.js)
- Probar que devuelva el mensaje de error cuando no se envían parámetros.
- Probar que envié un mensaje con la respuesta.

### [memes](cmd/memes.js)
- Probar que envié una url de imagen en el mensaje.

### [notice](cmd/notice.js)
- Probar que envié un mensaje que diga el nombre del author y " I Have Noticed You, Feel Proud!".

### [number](cmd/number.js)
- Probar que envié un mensaje de error cuando solo se envía un número.
- Probar que envié un mensaje de error cuando no envía números.
- Probar que sin importar el orden de los número envié un número entre el rango de números enviados.

### [ping](cmd/ping.js)
- Probar que envié un mensaje que diga el nombre del author y " Pong!".

### [rename](cmd/rename.js)
- Probar que envié un mensaje de error cuando no se indica el nuevo apodo.
- Probar que cambie el alias de un usuario en el servidor y que envié el mensaje de que pudo cambiar el alias.

### [roles](cmd/roles.js)
- Probar que liste todos los roles que existen en un servidor.

### [rules](cmd/rules.js)
- Probar que envié dos mensajes con las reglas.

### [speak](cmd/speak.js)
- Probar que el bot envié un mensaje con el texto indicado.
- Probar que al no enviar texto cómo parámetro el bot envié un mensaje de error.

### [timer](cmd/timer.js)

- Probar que el bot envié un mensaje de que termino el timer después de X tiempo.
- Probar que al no enviar el tiempo cómo parámetro el bot envié un mensaje de error.
- Probar que al enviar un tiempo con un formato no valido el bot envié un mensaje de error.

### [userinfo](cmd/userinfo.js)
- Revisar que al no mencionar un usuario envié la información de usuario del autor.
- Revisar que al mencionar un usuario envié la información de ese usuario.
- Revisar que el tipo del mensaje que envía sea un RichEmbed.

## Recomendaciones
- El comando [prefix](cmd/prefix.js) modifica un archivo de configuraciones directamente en el código, sería mejor cargar la configuración del prefijo desde una clase, sería más fácil probar el cambio del prefijo, se revisa que el prefijo cambie en la clase en vez de estar sobrescribiendo archivos.
- Algunos comandos no se pusieron en los escenarios de pruebas porque el código dentro de ellos está bastante quemado y afectan directamente usuarios en discord, habría de mirar alguna forma de probarlos con un MOCK.
- Para los comandos colocados habría que hacer un mock de canal de mensajes, usuario y/o servidor.
- Para el archivo de reglas también se recomienda tener el listado de reglas en una clase y tener la opción de quitar reglas o agregarlas para que el bot sea más usable.
- Sugiero crear clases para consultar las APIs externas y también hacer unas pruebas de consulta a las APIS, para verificar que estas siguen funcionando.