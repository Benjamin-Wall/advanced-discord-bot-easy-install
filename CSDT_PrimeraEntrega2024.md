# CSDT Primera Entrega Bitacora
El objetivo de este archivo es consolidar los diferentes análisis y entregas que se han hecho hasta la fecha sobre el estado de calidad del proyecto y agregar nuevos aportes, análisis y conclusiones de este. 

## Aportes Previos
- [Refactoring + Code Smells](/markdown-files/CSDT-2024.md#refactoring--code-smells)
- [Clean Code + XP Practices](/markdown-files/CSDT-2024.md#clean-code--xp-practices)
- [Testing Debt](/markdown-files/TestingDebt.md)

## Tabla de contenidos
- [SonarCloud](#sonarcloud)
- [Badges](#badges)

## Sonarcloud
Se realizó un primer análisis del código actual del proyecto usando la herramienta SonarCloud y arrojo los siguientes resultados:

![sonarcloud-first-analysis](/img/sonarcloud-first-analysis.png)

### Reliability
Se obtuvo una calificación de C en esta métrica. Lo que quiere decir que la aplicación cuenta con al menos un bug mayor.

![Reliability bug](/img/self-role-reliability-bug.png)

Después de revisar el reporte se encontró que el bug que reporta se encuentra en el archivo [selfrole.js](cmd/selfrole.js) en el ciclo de la función RoleChecker que valida los roles. 

```javascript
for(var currentStatIndex = 0; currentStatIndex < notAllowed.length; currentStatIndex++) {
    if(SELF_ROLE == notAllowed[currentStatIndex]){
    return msg.reply("You are not allowed to self assign the role: " + role.name)
    }else{
    return target.addRole(role.id).then(() => {
        msg.channel.send(`You have been given the: "${role.name}" role!`)
    })
    }
}
```

El problema reportado es que este es un ciclo que realiza solo una iteración. Y revisando el código podemos observar que la validación que hace sobre los roles esta siendo realizada de manera incorrecta. Cómo esta estructurado el código solo validara que el rol que se desea agregar no sea igual al primero en la lista, falta hacer la validación con los demás roles. Otro problema es que el código no es lo suficientemente claro para que cualquiera pueda entenderlo. 

Esta es una propuesta de mejora para esta parte del código:

```javascript
let isRoleAddAllowed = !notAllowed.includes(SELF_ROLE);
if (!isRoleAddAllowed) {
    msg.reply("You are not allowed to self assign the role: " + role.name);
    return;
} 
target.addRole(role.id).then(() => {
    msg.channel.send(`You have been given the: "${role.name}" role!`);
});
```

### Security
Se obtuvo una calificación de A en esta métrica. Lo que quiere decir que no cuenta con vulnerabilidades

### Security Review
La herramienta encontro 9 security hotspots y obtuvo una calificación de E en esta métrica. Lo que quiere decir que el porcentaje de revisión de los security hotspots es menor al 30%. Los security hotspots son posibles problemas de seguridad que requieren una revisión manual para determinar si esas alertas corresponden a una amenaza o no.

### Maintainability
La herramienta encontró un total de 89 malos olores y obtuvo una calificación de A en esta métrica. Lo que quiere decir que el coeficiente de deuda técnica del código del proyecto es menor al 5 %. Por lo que se interpreta que el esfuerzo requerido para limpiar el código es de un día o menos.

La herramienta también clasifico los malos olores en 3 niveles de severidad.

![code-smells-severity](/img/code-smells-severity.png)

### Coverage
La herramienta encontró un 0% de cobertura (líneas cubiertas por pruebas) en el código del proyecto. Esto se debe a que el proyecto no cuenta con pruebas.

El análisis sobre las posibles pruebas y recomendaciones para agregar pruebas al proyecto se encuentran en [Testing Debt](/markdown-files/TestingDebt.md).

### Duplications
La herramienta encontró un 3% de duplicaciones de código. Después de revisar el reporte, este resultado se debe a que en los archivos [vote.js](cmd/vote.js) y [votekick.js](cmd/votekick.js) se repite el siguiente bloque de código: 


```javascript
  let VOTE_TEXT = await msg.channel.send("Vote now! (10 Seconds)");
  await VOTE_TEXT.react(agree);
  await VOTE_TEXT.react(disagree);

  const reactions = await VOTE_TEXT.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  VOTE_TEXT.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
```
Para solucionar esto la propuesta es crear una clase con las funciones para ejecutar el proceso de votación y que la usen los comandos [vote.js](cmd/vote.js) y [votekick.js](cmd/votekick.js).


[Voting Handler Class](src/classes/voting-handler.js)

Usando esta clase el código que implementarian los comandos sería:

- [vote.js](cmd/vote.js)

    ```Javascript
    const options = [
        { name: "Yes", emoji: agree },
        { name: "No", emoji: disagree},
    ];

    let votingHandler = new VotingHandler(
        "Vote now! (10 Seconds)",
        options,
        10000,
        msg.channel
    );
    votingHandler.performVotingProcess();
    ```


- [votekick.js](cmd/votekick.js)

    ```Javascript
    const options = [
        { name: "Yes", emoji: agree },
        { name: "No", emoji: disagree},
    ];

    const voteText = `Do you want to kick ${kickmember.user.username}? Vote now! (10 Seconds)`;
    let votingHandler = new VotingHandler(
        voteText,
        options,
        10000,
        msg.channel
    );

    const reactions = await votingHandler.performVotingProcess();
    const YES_Count = reactions.get(agree).count ?? 0;
    const NO_Count = reactions.get(disagree).count ?? 0;
    ```
Con esta solución no solo se evita el código duplicado, sino que queda abierta la funcionalidad para manejar diferentes tipos de votación o para poder desde la invocación del comando configurar el mensaje y los tiempos de respuesta.



## Badges

[![Build](https://github.com/CSDT-ECI/Ricardo-Martinez-advanced-discord-bot-easy-install/actions/workflows/build.yml/badge.svg)](https://github.com/CSDT-ECI/Ricardo-Martinez-advanced-discord-bot-easy-install/actions/workflows/build.yml)