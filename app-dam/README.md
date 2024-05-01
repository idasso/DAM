# Entrega TP

## Datos de la entrega

Materia: Desarrollo de Aplicaciones Multiplataforma

Docente: Pedro Rosito

Alumno: Ignacio Dasso

Cursada: 1er bimestre 2024

Fecha de entrega: 28/04/2023

## Desarrollo del TP

### Consigna y objetivos

Consigna disponible en PDF en "app-dam/Trabajo Práctico Desarrollo de Aplicaciones Multiplataforma.pdf"

### Detalle de la implementación completada

El proyecto está desarrollado sobre el branch "9Co" del proyecto DAM (https://github.com/idasso/DAM), forkeado de https://github.com/PedroRosito/DAM.

La operación de la página web requiere comenzar con la inicialización del docker desde la carpeta principal del proyecto. La vista de la aplicación se logra accediendo a http://localhost:8100/

Las credenciales de acceso son las mismas que las que se implementaron durande el desarrollo de las clases: 
- user: test
- pass: 1234

Al completar el login se accede a la lista de dispositivos. Allí se puede seleccionar observar características adicionales de los dispositivos.

Luego, accediendo a través del botón "Ir a mediciones", se acederá a las mediciones disponibles en la BD del dispositivo seleccionado. Dentro de cada vista de mediciones es posible además abrir o cerrar la electroválvula asociada, para lo cuál se verifica el ID del dispositivo con el de la electroválvula. Adicionalemnte, es posible acceder al log de aperturas y cierres de la electroválvula.


### Aspectos no completados

- Implementar el gráfico "gauge" para la vista de la medición. Se intentó de diversas formas, sin embargo persiste la falla durante la compilación asociada a "highcharts".