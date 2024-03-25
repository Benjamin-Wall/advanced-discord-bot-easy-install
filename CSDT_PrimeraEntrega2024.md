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
Se obtuvo una calificación de E en esta métrica. Lo que quiere decir que el porcentaje de revisión de los security hotspots es menor al 30%. Los security hotspots son posibles problemas de seguridad que requieren una revisión manual para determinar si esas alertas corresponden a una amenaza o no.

## Badges

[![Build](https://github.com/CSDT-ECI/Ricardo-Martinez-advanced-discord-bot-easy-install/actions/workflows/build.yml/badge.svg)](https://github.com/CSDT-ECI/Ricardo-Martinez-advanced-discord-bot-easy-install/actions/workflows/build.yml)