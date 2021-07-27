# Martilleando

Es un paquete para el uso de fechas, dar formato, entre otras opciones mas.

## Instalación:

```bash
> npm install martilleando
```

## Uso:

Una vez instalado, es necesario requerir el módulo de la siguiente manera:

```js
var martilleando = require('martilleando');

var date = martilleando.getCurrentDay('24/07/2021');
```

### Dar formato:

Tenemos los siguientes usos con formato:

```js
// with format by default is DDMMYYYY
var date = martilleando.getCurrentDay('25/04/1950');
// result 25/04/1950

var date = martilleando.getCurrentDay('25/04/1950', 'DDMMYYYY');
// result 25/04/1950

var date = martilleando.getCurrentDay('14/06/1943', 'YYYYMMDD');
// result 1943/06/14
```

### Obtener la fecha de hoy:

El siguiente uso es para poder obtener la fecha del día de hoy.

```js
// with format by default is DDMMYYYY
var date = martilleando.getNow();
// result 25/07/2021

// with format DDMMYYYY | DMY | dmy
var date = martilleando.getNow('DDMMYYYY');
// result 25/07/2021

// with format YYYYMMDD | YMD | ymd
var date = martilleando.getNow('YYYYMMDD');
// result 2021/07/2021
```

### Obtener la fecha en un objeto:

El siguiente uso es para poder obtener la fecha dada en un objeto.

```js
// with order asc by default
var date = martilleando.getDateInObject('17/09/1990'); 
// result: {day: '17', month: '09', year: '1990'}

var date = martilleando.getDateInObject('17/09/1990', 'asc');
// result: {day: '17', month: '09', year: '1990'}

var date = martilleando.getDateInObject('17/09/1990', 'dsc');
// result: {year: '1990', month: '09', day: '17'}
```

## Licencia

MIT